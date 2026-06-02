import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

/**
 * Privacy Policy for Traventury United.
 *
 * This is a plain-language V1 policy drafted by the development team.
 * IMPORTANT: This is NOT a substitute for attorney review. Before real-world
 * commercial use, have a qualified privacy attorney confirm compliance with
 * applicable laws (GDPR, CCPA, state biometric laws, Apple App Store
 * privacy requirements, etc.).
 */
export default function Privacy() {
  usePageMeta(
    "Privacy Policy · Traventury",
    "How Traventury collects, uses, shares, and protects operator information."
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
          Privacy Policy
        </h1>
        <p className="text-sm text-white/50 mb-10">
          Last updated: April 10, 2026
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              1. What This Policy Covers
            </h2>
            <p>
              This Privacy Policy describes how Traventury United
              ("Traventury," "we," "us") collects, uses, and shares information
              about you when you use our website at traventury.com or our iOS
              application ("the Services"). It applies to applicants, approved
              operators, and anyone who submits information through the
              waitlist form on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              2. Information We Collect
            </h2>
            <p>We collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">From the waitlist form:</strong>{" "}
                Full name, email address, phone number, company name, city,
                operating categories, and fleet size.
              </li>
              <li>
                <strong className="text-white">From the apply flow:</strong>{" "}
                Full name, company, operating categories, markets served,
                optional invite code, and a verified phone number.
              </li>
              <li>
                <strong className="text-white">From your profile:</strong>{" "}
                Profile photo, bio, website, social media handles, and
                self-provided business information.
              </li>
              <li>
                <strong className="text-white">From listings:</strong>{" "}
                Asset photos, descriptions, rates, location, specifications,
                and availability data.
              </li>
              <li>
                <strong className="text-white">From bookings:</strong>{" "}
                Transaction history, booking dates, chat messages between
                operators, and dispute information.
              </li>
              <li>
                <strong className="text-white">From Stripe Connect:</strong>{" "}
                When you set up supplier payouts, Stripe collects
                identification, banking, and tax information required for
                Know-Your-Customer compliance. That data is held by Stripe
                under Stripe's privacy policy. Traventury receives only a
                confirmation that your account is active plus aggregate
                payout data.
              </li>
              <li>
                <strong className="text-white">Automatically:</strong>{" "}
                Device type, operating system version, IP address, and
                in-app usage data via Firebase Analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To verify your identity and review your application</li>
              <li>To provide, maintain, and improve the Services</li>
              <li>To process bookings and payments between operators</li>
              <li>To facilitate in-app messaging between operators</li>
              <li>To resolve disputes, enforce our Terms, and prevent fraud</li>
              <li>To send transactional emails and push notifications about your bookings</li>
              <li>To comply with legal obligations and respond to lawful requests</li>
              <li>To understand how the platform is used and improve product decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              4. Information You Share With Other Operators
            </h2>
            <p>
              Traventury is a peer-to-peer operator marketplace. When you are
              approved, your profile information (name, company, avatar, bio,
              social links, operating categories, markets served, and
              listings) becomes visible to other approved operators in the
              network. Your phone number may also be visible to other approved
              operators, because direct contact is sometimes necessary to
              coordinate a rental. Your email address, payment details, and
              any personal identification you submitted during Stripe
              onboarding are not shared with other operators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              5. How We Share Your Information
            </h2>
            <p>We share information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">With other approved operators</strong>{" "}
                as described in Section 4.
              </li>
              <li>
                <strong className="text-white">With service providers</strong>{" "}
                that help us run the platform, including Firebase (Google),
                Stripe, Resend, and analytics vendors. These providers are
                contractually bound to use your information only to provide
                services to us.
              </li>
              <li>
                <strong className="text-white">When required by law</strong>{" "}
                in response to a subpoena, court order, or other legal
                process, or to protect our rights or the safety of others.
              </li>
              <li>
                <strong className="text-white">In connection with a business transaction</strong>{" "}
                such as a merger, acquisition, financing, or sale of assets,
                subject to standard confidentiality obligations.
              </li>
            </ul>
            <p>
              We do not sell your personal information to advertisers or data
              brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              6. How We Store and Protect Information
            </h2>
            <p>
              Traventury data is stored in Google Firebase (Firestore and
              Cloud Storage), encrypted at rest and in transit. Access to
              production systems is restricted to authorized Traventury
              administrators. Payment data is handled by Stripe and never
              touches our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              7. Your Choices and Rights
            </h2>
            <p>
              Depending on where you live, you may have the right to: access
              the personal information we hold about you; request correction
              of inaccurate information; request deletion of your information;
              object to or restrict certain processing; or export your data.
              To exercise any of these rights, email us at the address below.
              We will respond within the timeframe required by applicable
              law.
            </p>
            <p>
              You can also delete your account at any time from the Settings
              screen in the iOS app or by emailing us. Certain information
              may be retained after deletion to comply with legal obligations
              (for example, transaction records for tax and audit purposes).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              8. Children's Privacy
            </h2>
            <p>
              Traventury is a business-only platform and is not intended for
              anyone under the age of 18. We do not knowingly collect
              personal information from children. If we learn that we have
              collected information from a minor, we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              9. Notifications and Email
            </h2>
            <p>
              By creating an account, you consent to receive transactional
              messages from Traventury including: booking request
              confirmations, status updates, dispute notices, and important
              account or policy changes. You may opt out of marketing emails
              at any time using the unsubscribe link in those messages.
              Transactional messages required for the service cannot be
              opted out of without closing your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              10. California, EU, and Other Jurisdictions
            </h2>
            <p>
              If you are a California resident, the California Consumer
              Privacy Act gives you specific rights regarding your personal
              information. If you are in the European Economic Area, the
              United Kingdom, or another jurisdiction with comprehensive
              privacy laws, you may have rights under those laws. Contact us
              at the address below and we will work with you to honor any
              rights that apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be announced in-app or via email at least 30 days
              before taking effect. Continued use of the Services after the
              effective date constitutes acceptance of the updated Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              12. Contact
            </h2>
            <p>
              Questions about this Privacy Policy, or requests to exercise
              your privacy rights, can be directed to:{" "}
              <a
                href="mailto:traventury@gmail.com"
                className="text-white underline"
              >
                traventury@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/terms"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
