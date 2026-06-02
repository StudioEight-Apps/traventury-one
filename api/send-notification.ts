import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let db: Firestore | null = null;

function initFirebase() {
  if (db) return db;
  try {
    if (!getApps().length) {
      const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "{}");
      if (!sa.project_id) {
        console.error("FIREBASE_SERVICE_ACCOUNT not set or invalid");
        return null;
      }
      initializeApp({ credential: cert(sa) });
    }
    db = getFirestore();
    return db;
  } catch (e: any) {
    console.error("Firebase init error:", e?.message || e);
    return null;
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const lead = req.body;

    if (!lead.full_name || !lead.email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // 1. Store lead in Firestore (non-blocking — don't let DB failure kill the whole request)
    const firestore = initFirebase();
    if (firestore) {
      try {
        await firestore.collection("leads").add({
          full_name: lead.full_name,
          email: lead.email,
          phone: lead.phone || "",
          company: lead.company || "",
          city: lead.city || "",
          categories: lead.categories || [],
          fleet_size: lead.fleet_size || "",
          source: "waitlist",
          created_at: new Date().toISOString(),
        });
        console.log("Firestore write SUCCESS for:", lead.email);
      } catch (dbErr: any) {
        console.error("Firestore write error:", dbErr?.message || dbErr);
      }
    } else {
      console.warn("Firestore not initialized — skipping DB write");
    }

    // 2. Send email notification via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const html = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f9fafb; border-radius: 12px;">
          <h2 style="margin: 0 0 24px; font-size: 20px; color: #111827;">New Waitlist Lead</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${lead.full_name || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${lead.email || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${lead.phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Company</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${lead.company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">City</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${lead.city || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Categories</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${lead.categories?.length ? lead.categories.join(", ") : "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Fleet Size</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${lead.fleet_size || "—"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="margin: 0; font-size: 12px; color: #9ca3af;">Submitted via traventury.com waitlist</p>
        </div>
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Traventury <onboarding@resend.dev>",
          to: "traventury@gmail.com",
          subject: `New Waitlist Lead: ${lead.full_name}`,
          html,
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        console.error("Resend error:", err);
      }
    } else {
      console.warn("RESEND_API_KEY not set — skipping email notification");
    }

    // 3. Send to GHL webhook (unchanged)
    const ghlUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlUrl) {
      try {
        await fetch(ghlUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: lead.full_name,
            first_name: lead.full_name?.split(" ")[0] || "",
            last_name: lead.full_name?.split(" ").slice(1).join(" ") || "",
            email: lead.email,
            phone: lead.phone || "",
            companyName: lead.company || "",
            city: lead.city || "",
            categories: lead.categories?.join(", ") || "",
            fleet_size: lead.fleet_size || "",
            source: "Traventury Waitlist",
            date_submitted: new Date().toISOString(),
          }),
        });
      } catch (e) {
        console.error("GHL webhook error:", e);
      }
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
