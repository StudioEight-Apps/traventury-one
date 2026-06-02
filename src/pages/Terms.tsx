import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

/**
 * Terms of Service for Traventury United.
 *
 * This is a plain-language V1 set of terms drafted by the development team.
 * IMPORTANT: This is NOT a substitute for attorney review. Before real-world
 * commercial use, have a qualified startup lawyer review and amend as needed,
 * particularly regarding:
 *   - State-specific peer-to-peer rental marketplace laws (CA AB 2216, NY etc.)
 *   - Marketplace facilitator sales tax obligations
 *   - Insurance and liability allocation
 *   - Dispute resolution / arbitration clauses
 */
export default function Terms() {
  usePageMeta(
    "Terms of Service · Traventury",
    "The rules of the Traventury operator-to-operator marketplace."
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
          Terms of Service
        </h1>
        <p className="text-sm text-white/50 mb-10">
          Last updated: April 10, 2026
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              1. What Traventury United Is
            </h2>
            <p>
              Traventury United ("Traventury," "we," "us") operates a private,
              invite-only marketplace that connects verified luxury rental
              operators with each other. Operators list inventory (cars, yachts,
              villas, jets, chauffeur services) at wholesale rates and source
              inventory from other operators when their own fleet can't meet a
              client request. Traventury is not a rental company. Traventury
              does not own, operate, insure, or physically deliver any of the
              inventory listed on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              2. Who Can Use Traventury
            </h2>
            <p>
              Traventury is available only to vetted business operators who
              have been individually approved by Traventury's admin team.
              Individual consumers are not eligible. To use the platform you
              must:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be at least 18 years of age</li>
              <li>Operate a legitimate rental or hospitality business</li>
              <li>Have the legal authority to rent the assets you list</li>
              <li>Maintain commercial liability and rental insurance appropriate for your category</li>
              <li>Provide accurate business and identity information</li>
              <li>Pass Traventury's approval review</li>
            </ul>
            <p>
              Traventury reserves the right to approve, reject, suspend, or
              permanently remove any operator at its sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              3. The Marketplace Transaction
            </h2>
            <p>
              When operator A books inventory from operator B through the
              platform, the transaction is between those two operators. Buyer
              (Operator A) pays the displayed marketplace price. Traventury
              collects that payment via Stripe, keeps a marketplace fee (baked
              into the displayed price), and remits the balance to the supplier
              (Operator B) after the trip begins. Payout timing is described
              below.
            </p>
            <p>
              Traventury is not a party to the rental contract itself. The
              physical delivery, condition, and return of the asset, along with
              any interaction with the buyer's end client, is solely the
              responsibility of the two operators involved.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              4. Marketplace Fees
            </h2>
            <p>
              Traventury charges a marketplace fee that is built into the
              displayed price shown to buyers. Suppliers receive the rate they
              set at listing time. Suppliers do not owe any additional fee to
              Traventury beyond what is automatically deducted from the buyer's
              payment. Fees are subject to change on 30 days' written notice
              via email or in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              5. Payments, Payouts, and Deposits
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-white">Authorization:</strong> A
                buyer's card is authorized when the supplier accepts the
                booking request. The charge is captured when the trip begins.
              </li>
              <li>
                <strong className="text-white">Supplier payout:</strong> Paid
                via Stripe Connect 24 hours after the trip start time. This
                24-hour window gives the buyer a chance to report any
                no-show, not-as-described, or condition issues.
              </li>
              <li>
                <strong className="text-white">Security deposits:</strong> Held
                for 72 hours after the trip ends. If no damage claim is filed
                within that window, the deposit is automatically released. If
                a claim is filed, admin reviews evidence from both sides and
                decides.
              </li>
              <li>
                <strong className="text-white">Refunds and cancellations:</strong>{" "}
                Governed by Traventury's cancellation policy, which is
                presented to both parties at booking time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              6. Insurance
            </h2>
            <p>
              <strong className="text-white">
                Traventury does not provide insurance coverage for any rental
                transacted through the platform.
              </strong>{" "}
              Each operator is solely responsible for maintaining adequate
              commercial liability, property, and any category-specific
              insurance required by applicable law. Personal-use policies
              (personal auto, homeowners, etc.) typically do not cover
              peer-to-peer commercial rentals. Operators are required to verify
              that their coverage applies to the transactions they facilitate.
              By using the platform, you represent and warrant that you carry
              insurance appropriate for your rental activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              7. Disputes
            </h2>
            <p>
              Either party can file a dispute through the platform by
              submitting evidence (photos, messages, timestamps) within the
              applicable review windows described in Section 5. Traventury's
              admin team reviews the evidence and makes a good-faith decision.
              Admin decisions regarding deposit capture and refund are final
              for purposes of payment flow. Nothing in this section limits
              either party's right to pursue claims outside the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              8. No-Rent List
            </h2>
            <p>
              Operators may flag renters (their own end clients) who have
              caused damage, failed to pay, or otherwise abused a rental.
              Flagged names may be shared with other operators in the network
              to help prevent repeat incidents. Traventury does not verify
              these flags and provides no warranty about their accuracy.
              Operators use the no-rent list at their own discretion and
              accept responsibility for their own rental decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              9. Conduct and Content
            </h2>
            <p>
              You agree not to: post false or misleading listings; misrepresent
              your business, identity, or insurance; solicit payment outside
              the platform to avoid marketplace fees; harass other operators;
              post illegal content; upload photos you do not have rights to
              use; or reverse-engineer the platform. Violations may result in
              suspension or permanent removal without notice or refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              10. Off-Platform Transactions
            </h2>
            <p>
              Once two operators are introduced via Traventury, they are
              expected to continue transacting through the platform for
              payment processing, dispute protection, and record keeping. Any
              off-platform transaction between operators who first connected
              via Traventury is at the operators' own risk. Traventury provides
              no escrow, dispute resolution, or payment protection for
              off-platform deals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Traventury's total
              liability to any operator for any claim arising out of or
              relating to the platform is limited to the marketplace fees
              actually paid by that operator to Traventury in the 12 months
              preceding the event giving rise to the claim. Traventury is not
              liable for indirect, incidental, consequential, special, or
              punitive damages, lost profits, or lost business. Nothing in
              this section limits liability for gross negligence, willful
              misconduct, or any liability that cannot be excluded under
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              12. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold Traventury harmless from any
              claims, damages, liabilities, costs, or expenses (including
              reasonable attorneys' fees) arising out of or related to: your
              listings; your conduct on the platform; your rental transactions;
              your interactions with end clients; your failure to maintain
              adequate insurance; or your breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              13. Termination
            </h2>
            <p>
              Either party may terminate this agreement at any time. Traventury
              may suspend or terminate your account immediately and without
              notice if you violate these Terms, if required by law, or if
              Traventury determines in good faith that continued use poses a
              risk to the platform or other operators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              14. Changes to These Terms
            </h2>
            <p>
              Traventury may update these Terms from time to time. Material
              changes will be announced in-app or via email at least 30 days
              before taking effect. Continued use of the platform after the
              effective date constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              15. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the State in which
              Traventury LLC is registered, without regard to conflict of laws
              principles. Any dispute that cannot be resolved through the
              platform's dispute mechanism shall be resolved in the state or
              federal courts located in that State.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">
              16. Contact
            </h2>
            <p>
              Questions about these Terms can be directed to:{" "}
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
            to="/privacy"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
