# /.well-known/

Apple Pay (and other RFC 8615 .well-known) verification files live here.

## Apple Pay domain verification

To enable Apple Pay on **traventury.com** (web flows, Stripe Checkout, etc.):

1. In Stripe Dashboard → **Settings → Payment methods → Apple Pay** → "Add a new domain" → enter `traventury.com`.
2. Stripe gives you a file named exactly `apple-developer-merchantid-domain-association` (no extension, ~30 lines of base64).
3. Drop that file into THIS directory: `traventury-one/public/.well-known/apple-developer-merchantid-domain-association`.
4. Commit + push. Vercel auto-deploys.
5. Verify the URL serves the file as plain text:
   ```bash
   curl -i https://traventury.com/.well-known/apple-developer-merchantid-domain-association
   ```
   Should return `200 OK`, `Content-Type: text/plain`, and the file body — not the React HTML.
6. Back in Stripe → click "Verify" next to `traventury.com`. Flips to "Verified" within a minute.

## Why the vercel.json gymnastics

The SPA catch-all rewrite (`/(.*)` → `/index.html`) eats every URL by default and would serve Apple's verifier the React app instead of the verification file.

`vercel.json` uses a negative lookahead `(?!\.well-known/|api/)` so files in this directory are served as static assets, and an explicit `Content-Type: text/plain` header so Apple's parser doesn't choke.

Note: native iOS in-app Apple Pay (via Stripe's `PaymentSheet`) does NOT need this file. It's only required if you want Apple Pay on the **web** (Stripe Checkout hosted pages, billing portals, etc.).
