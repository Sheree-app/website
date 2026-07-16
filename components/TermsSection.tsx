// TermsSection has no hooks or browser APIs — Server Component by default
export default function TermsSection() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="space-y-4 max-w-2xl">
        <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">Usage Framework</span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-text font-normal leading-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm font-dmSans text-sage-accent uppercase tracking-widest font-medium">
          Effective July 2026 &mdash; Fostering mutual respect.
        </p>
      </section>

      {/* 2. TERMS DETAILS */}
      <section className="max-w-4xl mx-auto space-y-10 font-sans text-xs md:text-sm text-charcoal-text/80 leading-relaxed font-light">
        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">1. The Sheree Curation Agreement</h3>
          <p>
            Sheree serves as a social-first digital marketplace connecting independent service professionals (referred to as &ldquo;Providers&rdquo;) with booking clients (referred to as &ldquo;Customers&rdquo;). We act solely as a technology facilitator and escrow platform. Sheree does not directly employ Providers, manage physical salons, or guarantee individual appointment performance.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">2. Cancellation, Deposit Rules, &amp; Escrow Locks</h3>
          <p>
            To prevent severe calendar disruptions and costly no-shows, Sheree permits Providers to set strict cancellation policies:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>Deposits paid through Sheree are locked in digital escrow.</li>
            <li>If a Customer cancels an appointment within the Provider&apos;s designated cancellation grace window (typically 24 to 48 hours before the start slot), the deposit will be forwarded to the Provider to compensate for the lost business time.</li>
            <li>If a Provider cancels an appointment, the locked deposit is refunded in full to the Customer&apos;s designated payment card instantly.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">3. Verified Professional Integrity</h3>
          <p>
            By listing services on our directory, Providers swear and guarantee that they possess active legal practicing permits, maintain hygienic workspaces, display honest upfront rates, and represent their skill levels truthfully using authentic, non-misleading visual portfolios. Portfolios containing plagiarized images from other stylists are subject to immediate expulsion.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">4. Escrow Fees &amp; Memberships</h3>
          <p>
            While creating a basic profile is completely free, Sheree levies a minimal fee on digital credit operations (such as processing cards and mobile payments) to cover secure ledger maintenance. Providers opting for unlimited slot schedules and detailed business analytics subscribe to our flat-rate monthly memberships.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">5. Curation Resolution Support</h3>
          <p>
            Should a conflict arise regarding styling outcomes or cancellation timelines, both Customers and Providers agree to first contact Sheree Curation Resolution Support. Our team acts as an impartial escrow mediator to assess communication records, logs, and evidence before disbursing locked funds.
          </p>
        </div>
      </section>
    </div>
  );
}
