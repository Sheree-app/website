'use client';

import { motion } from 'motion/react';
import { ShieldCheck, EyeOff, Lock, Landmark } from 'lucide-react';

export default function PrivacySection() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. EDITORIAL HEADER */}
      <motion.section
        className="space-y-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[10px] font-mono text-rose-dusty uppercase tracking-widest font-semibold block">Regulatory Compliance</span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-text font-normal leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm font-mono text-sage-accent uppercase tracking-widest font-medium">
          Effective July 2026 &mdash; Built on absolute user integrity.
        </p>
      </motion.section>

      {/* 2. CORE CONCEPTS PILLS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-charcoal-text/10 p-5 rounded-2xl space-y-2">
          <EyeOff className="w-5 h-5 text-rose-dusty" />
          <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">No Ads, Ever</h4>
          <p className="text-[11px] text-charcoal-text/70 leading-relaxed font-light">
            We will never sell your personal styling queries, appointment history, or preference folders to marketing conglomerates.
          </p>
        </div>
        <div className="bg-white border border-charcoal-text/10 p-5 rounded-2xl space-y-2">
          <ShieldCheck className="w-5 h-5 text-sage-accent" />
          <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Client Anonymity</h4>
          <p className="text-[11px] text-charcoal-text/70 leading-relaxed font-light">
            Your personal phone coordinates are protected inside the Sheree workspace, concealed by modern digital alias wrappers.
          </p>
        </div>
        <div className="bg-white border border-charcoal-text/10 p-5 rounded-2xl space-y-2">
          <Lock className="w-5 h-5 text-rose-dusty" />
          <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Secure Ledger</h4>
          <p className="text-[11px] text-charcoal-text/70 leading-relaxed font-light">
            Card profiles are stored exclusively on fully PCI-DSS-compliant financial servers, locked by cryptographic vaults.
          </p>
        </div>
        <div className="bg-white border border-charcoal-text/10 p-5 rounded-2xl space-y-2">
          <Landmark className="w-5 h-5 text-sage-accent" />
          <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">GDPR Native</h4>
          <p className="text-[11px] text-charcoal-text/70 leading-relaxed font-light">
            At any millisecond, you may request complete removal of your storefront, history, and uploaded image portfolios from our storage.
          </p>
        </div>
      </section>

      {/* 3. DETAILED ARTICLES */}
      <section className="max-w-4xl mx-auto space-y-10 font-sans text-xs md:text-sm text-charcoal-text/80 leading-relaxed font-light">
        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">1. Data Capture Principles</h3>
          <p>
            When utilizing Sheree, we gather specific data points to enable fluid, verified bookings: your name, contact coordinates (email &amp; mobile phone), profile styling images, digital billing references, calendar schedules, and communication threads inside the application. This information is processed exclusively to coordinate slot registrations and payments.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">2. Escrow &amp; Credit Information Processing</h3>
          <p>
            Sheree does not store complete card pinouts or secure codes on our central database. All payment registrations are routed to our secure, certified transaction gateways. Deposit amounts are locked securely inside escrow vaults and are only dispersed to providers upon verified execution of the scheduled appointment or in accordance with custom cancellation terms.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">3. Image Portfolios &amp; Curation</h3>
          <p>
            For independent professionals who join our network, the high-resolution portfolios you publish to your digital storefront belong entirely to you. Sheree claims no copyright ownership over your artistic works. We only preserve and distribute these pictures to local customers seeking service inspiration in accordance with our system configurations.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl text-charcoal-text font-normal">4. Cookie Manifest</h3>
          <p>
            We utilize subtle, minimal local cookies purely to preserve your active login state, save dashboard preferences, and support fast applet rendering in your browser frame. We do not use cross-site tracker nodes to trace your activities across the general web.
          </p>
        </div>
      </section>
    </div>
  );
}
