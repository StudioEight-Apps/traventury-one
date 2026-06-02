/**
 * AI Concierge endpoint.
 *
 * Receives a POST request from the iOS app with a natural-language query
 * from an operator ("my client wants a Huracán in Miami this weekend") and
 * returns Claude's response to help them find or source inventory.
 *
 * The Anthropic API key is held server-side as an env var —
 * `ANTHROPIC_API_KEY` — and never exposed to the client. If the key isn't
 * configured the endpoint returns a friendly placeholder message so the
 * feature degrades gracefully.
 *
 * Request body:
 *   {
 *     "query": "need a yacht in miami for 8 guests this weekend",
 *     "context": {
 *       "operatorName": "Jane Doe",
 *       "operatorCompany": "Elite Auto Group",
 *       "categories": ["Cars", "Yachts"],
 *       "markets": ["Miami", "Los Angeles"]
 *     }
 *   }
 *
 * Response body:
 *   { "reply": "Here are three verified operators in Miami with..." }
 */

interface ConciergeRequest {
  query: string;
  context?: {
    operatorName?: string;
    operatorCompany?: string;
    categories?: string[];
    markets?: string[];
  };
}

const SYSTEM_PROMPT = `You are the Traventury United AI concierge, a helpful assistant for luxury rental operators in a private peer-to-peer marketplace.

Traventury is a closed network where verified operators (people who run Instagram, TikTok, or web rental businesses for exotic cars, yachts, villas, jets, and chauffeur services) source inventory from each other when their own fleet can't cover a client request.

When an operator asks you a question:
- Help them articulate what they're looking for clearly
- Suggest search terms they can use in the Discover tab
- Recommend they post an ISO (In Search Of) if they can't find it immediately
- Remind them to verify dates, deposits, and insurance before booking
- Be concise (2-3 paragraphs max), confident, and use industry language
- Never invent listings, operators, or prices — you do not have live inventory access
- Never discuss platform fees, markups, or internal pricing with the user
- If the query is off-topic, redirect politely to rental sourcing

Keep responses professional and operator-to-operator. You're their back-office AI, not a consumer chatbot.`;

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Basic CORS so the iOS app can hit this from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const body = req.body as ConciergeRequest;
    if (!body?.query || typeof body.query !== "string") {
      return res.status(400).json({ error: "Missing query" });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    // Graceful degradation when the key isn't configured yet. The iOS app
    // will show this as the assistant response so the feature looks alive
    // even before an admin wires up the key.
    if (!apiKey) {
      return res.status(200).json({
        reply:
          "The AI concierge isn't fully configured yet. In the meantime, try searching the Discover tab directly or posting an ISO (In Search Of) to let the network know what you need.",
      });
    }

    // Build the context block for the user message
    const contextLines: string[] = [];
    if (body.context?.operatorName) {
      contextLines.push(`Operator name: ${body.context.operatorName}`);
    }
    if (body.context?.operatorCompany) {
      contextLines.push(`Company: ${body.context.operatorCompany}`);
    }
    if (body.context?.categories?.length) {
      contextLines.push(`Usually operates in: ${body.context.categories.join(", ")}`);
    }
    if (body.context?.markets?.length) {
      contextLines.push(`Usually serves: ${body.context.markets.join(", ")}`);
    }

    const userMessage = contextLines.length
      ? `[Operator context]\n${contextLines.join("\n")}\n\n[Query]\n${body.query}`
      : body.query;

    // Call Anthropic API directly (no SDK — keeps the serverless bundle small)
    const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],
      }),
    });

    if (!anthropicResponse.ok) {
      const errText = await anthropicResponse.text();
      console.error("Anthropic API error:", errText);
      return res.status(502).json({
        error: "AI concierge is temporarily unavailable. Please try again.",
      });
    }

    const data = await anthropicResponse.json();

    // Extract the assistant's reply from the messages response
    const textBlock = data?.content?.find((block: any) => block.type === "text");
    const reply: string = textBlock?.text || "No response generated.";

    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error("AI concierge error:", err?.message || err);
    return res.status(500).json({ error: "Internal error" });
  }
}
