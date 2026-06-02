import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

/**
 * Account deletion page for Traventury.
 *
 * Apple App Store Guideline 5.1.1(v) requires apps that support account
 * creation to also let users initiate account deletion. This page documents
 * the in-app path and an email fallback, and is suitable to list as the
 * "Account Deletion" URL in App Store Connect / App Review notes.
 */
export default function DeleteAccount() {
  usePageMeta(
    "Delete Your Account · Traventury",
    "How to delete your Traventury operator account and the personal data associated with it."
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition mb-10"
        >
          <span>←</span>
          <span>Back to Traventury</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          Delete Your Account
        </h1>
        <p className="text-sm text-white/50 mb-10">
          Last updated: May 30, 2026
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/80 leading-relaxed">
          <section>
            <p>
              You can delete your Traventury account at any time. Deleting your
              account removes your operator profile and personal data from the
              app, subject to the limited legal retention described below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Delete from the app
            </h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Open the Traventury app and go to the <strong className="text-white">Profile</strong> tab.</li>
              <li>Tap <strong className="text-white">Settings</strong>.</li>
              <li>Tap <strong className="text-white">Delete Account</strong>.</li>
              <li>Confirm when prompted. Your account is scheduled for deletion immediately.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Delete by email
            </h2>
            <p>
              If you can't access the app, email{" "}
              <a href="mailto:traventury@gmail.com" className="text-white underline">
                traventury@gmail.com
              </a>{" "}
              from the email address on your account with the subject
              "Delete my account." We will verify your identity and process the
              deletion within 7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              What gets deleted
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your operator profile (name, photo, bio, contact details, social links)</li>
              <li>Your listings and uploaded photos</li>
              <li>Your saved searches and preferences</li>
              <li>Your in-app messages, to the extent they are not needed for another operator's dispute record</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              What we may retain
            </h2>
            <p>
              We may retain certain records after deletion where required for
              legal, tax, accounting, fraud-prevention, or dispute-resolution
              purposes — for example, completed transaction history and payout
              records held through Stripe. Retained records are kept only as
              long as required by law and are not used to re-create your
              profile. See our{" "}
              <Link to="/privacy" className="text-white underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Questions
            </h2>
            <p>
              Need help?{" "}
              <Link to="/support" className="text-white underline">
                Contact support
              </Link>{" "}
              or email{" "}
              <a href="mailto:traventury@gmail.com" className="text-white underline">
                traventury@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex gap-6">
          <Link to="/support" className="text-sm text-white/60 hover:text-white transition">
            Support →
          </Link>
          <Link to="/privacy" className="text-sm text-white/60 hover:text-white transition">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
