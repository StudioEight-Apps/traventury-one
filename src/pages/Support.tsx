import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

/**
 * Support page for Traventury.
 *
 * Serves as the App Store "Support URL". Apple requires a live, reachable
 * page where users can get help and find a way to contact the developer,
 * learn how to delete their account, and (for apps with user-generated
 * content) report objectionable content and abusive users.
 */
export default function Support() {
  usePageMeta(
    "Support · Traventury",
    "Get help with your Traventury operator account, bookings, payouts, and disputes."
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
          Support
        </h1>
        <p className="text-sm text-white/50 mb-10">
          Last updated: May 30, 2026
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Get help
            </h2>
            <p>
              Traventury is a private, invite-only marketplace for verified
              luxury rental operators. If you have a question about your
              account, a booking, a payout, or anything else, our team is here
              to help.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:traventury@gmail.com"
                  className="text-white underline"
                >
                  traventury@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-white">Phone / text:</strong>{" "}
                <a href="tel:+12013701556" className="text-white underline">
                  (201) 370-1556
                </a>
              </li>
              <li>
                <strong className="text-white">Hours:</strong> Monday–Friday,
                9:00 AM – 6:00 PM ET
              </li>
              <li>
                <strong className="text-white">Response time:</strong> We aim
                to reply within one business day.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              What to include
            </h2>
            <p>
              To help us resolve your issue as quickly as possible, please
              include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The email address and company name on your account</li>
              <li>The booking ID, if your question is about a specific reservation</li>
              <li>A short description of what happened and what you expected</li>
              <li>Screenshots, if relevant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Common topics
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Account &amp; access:</strong>{" "}
                Application status, sign-in trouble, phone verification, and
                profile changes.
              </li>
              <li>
                <strong className="text-white">Listings &amp; inventory:</strong>{" "}
                Adding or editing assets, photos, rates, availability, and
                calendar sync.
              </li>
              <li>
                <strong className="text-white">Bookings:</strong> Sending or
                accepting booking requests, trip details, and coordinating
                handoffs with other operators.
              </li>
              <li>
                <strong className="text-white">Payments &amp; payouts:</strong>{" "}
                Card charges, Stripe payout setup, payout timing, and security
                deposits.
              </li>
              <li>
                <strong className="text-white">Disputes:</strong> Reporting an
                issue with a trip, filing or responding to a deposit claim, and
                review windows.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Reporting &amp; safety
            </h2>
            <p>
              Traventury has zero tolerance for objectionable content or abusive
              behavior. Listings, photos, profiles, and operator-to-operator
              messages are all subject to our{" "}
              <Link to="/terms" className="text-white underline">
                Terms of Service
              </Link>
              .
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Report content or an operator:</strong>{" "}
                Use the "Report" option on any listing, profile, or message in
                the app, or email{" "}
                <a href="mailto:traventury@gmail.com" className="text-white underline">
                  traventury@gmail.com
                </a>{" "}
                with details and screenshots.
              </li>
              <li>
                <strong className="text-white">Block an operator:</strong> You
                can block another operator from the app to stop further contact.
              </li>
              <li>
                <strong className="text-white">What we do:</strong> We review
                every report, remove content that violates our Terms, and
                suspend or permanently remove operators who abuse the platform.
                We aim to act on reports of objectionable content within 24
                hours.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Deleting your account
            </h2>
            <p>
              You can delete your Traventury account and associated personal
              data at any time. In the iOS app, go to{" "}
              <strong className="text-white">
                Profile → Settings → Delete Account
              </strong>
              , or follow the steps on our{" "}
              <Link to="/delete-account" className="text-white underline">
                account deletion page
              </Link>
              . Certain records (for example, completed transaction history) may
              be retained where required for tax, accounting, or legal
              compliance, as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              Policies
            </h2>
            <p>
              For details on how we handle your data and the rules of the
              marketplace, see our{" "}
              <Link to="/privacy" className="text-white underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms" className="text-white underline">
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6">
          <Link
            to="/privacy"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Privacy Policy →
          </Link>
          <Link
            to="/terms"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Terms of Service →
          </Link>
          <Link
            to="/delete-account"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Delete Account →
          </Link>
        </div>
      </div>
    </div>
  );
}
