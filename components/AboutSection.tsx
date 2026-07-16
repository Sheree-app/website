'use client';

import { motion } from 'motion/react';
import { Compass, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';
import { PROBLEMS, SOLUTIONS } from '@/lib/data';

export default function AboutSection() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. EDITORIAL HEADER */}
      <motion.section
        className="space-y-4 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">
          Platform Vision
        </span> */}
        <h1 className="text-5xl md:text-5xl font-serif text-charcoal-text font-bold leading-tight text-center">
          Unifying independence with seamless digital flow.
        </h1>
        {/* <p className="text-sm font-dmSans text-sage-accent uppercase tracking-widest font-medium">
          The booking super app built for modern service professionals.
        </p> */}
      </motion.section>

      {/* 2. CORE NARRATIVE SPLIT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Narrative with high-end typography */}
        <div className="lg:col-span-7 space-y-8">
          {/* <h2 className="text-2xl md:text-3xl font-serif text-charcoal-text font-light italic leading-snug">
            &ldquo;Independent business is not a second-rate path. It is the
            premier choice of modern artisans. We build software that treats it
            with respect.&rdquo;
          </h2> */}

          {/* Three distinct parts: Story, Mission, Vision */}
          <div className="grid grid-cols-1 gap-6">
            <div className="border-l-2 border-rose-dusty/30 pl-5 space-y-2">
              <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">
                {" "}
                Our Story
              </span>
              <h3 className="font-serif text-lg text-charcoal-text font-normal">
                Resolving the digital imbalance.
              </h3>
              <p className="text-xs md:text-sm text-charcoal-text/75 leading-relaxed font-light">
                Sheree was founded in 2026 to resolve a striking digital
                imbalance. While mass marketplaces emerged for rideshares, food
                delivery, and hotel stays, the independent creative and beauty
                sector remained trapped in pre-industrial administrative chaos.
              </p>
            </div>

            <div className="border-l-2 border-rose-dusty/30 pl-5 space-y-2">
              <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">
                {" "}
                Our Mission
              </span>
              <h3 className="font-serif text-lg text-charcoal-text font-normal">
                A beautiful digital sanctuary.
              </h3>
              <p className="text-xs md:text-sm text-charcoal-text/75 leading-relaxed font-light">
                We watched brilliant hair sculptors, physical therapists,
                photographers, and interior artists spend half their waking
                hours answering Instagram direct messages, hunting down mobile
                deposits, and correcting double bookings. We believed their
                craft deserved a beautiful digital sanctuary.
              </p>
            </div>

            <div className="border-l-2 border-rose-dusty/30 pl-5 space-y-2">
              <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">
                {" "}
                Our Vision
              </span>
              <h3 className="font-serif text-lg text-charcoal-text font-normal">
                Focusing entirely on true expertise.
              </h3>
              <p className="text-xs md:text-sm text-charcoal-text/75 leading-relaxed font-light">
                By unifying social discovery, unedited reviews, instant calendar
                matching, and smart digital card escrows into a single gorgeous
                super app, Sheree allows professionals to run a modern shopfront
                while focusing entirely on their true expertise.
              </p>
            </div>
          </div>

          {/* Sourcing credentials */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-charcoal-text/10">
            <div className="border border-charcoal-text/10 p-5 rounded-2xl bg-white space-y-2">
              <Compass className="w-5 h-5 text-rose-dusty" />
              <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Social-First Discovery</h4>
              <p className="text-[11px] text-charcoal-text/65 leading-normal">
                No dry catalogs. Sheree is styled like a modern magazine feed, encouraging rich client visual appreciation first.
              </p>
            </div>
            <div className="border border-charcoal-text/10 p-5 rounded-2xl bg-white space-y-2">
              <ShieldCheck className="w-5 h-5 text-sage-accent" />
              <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Financial Escrow Safety</h4>
              <p className="text-[11px] text-charcoal-text/65 leading-normal">
                Built-in digital cards keep funds secured until services are completed, defending both client trust and provider hours.
              </p>
            </div>
          </div> */}
        </div>

        {/* Right column: Image */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-4 -m-4 border border-sage-accent/35 rounded-[32px] pointer-events-none z-0" />
          <div className="relative overflow-hidden border border-charcoal-text/10 aspect-[3/4] rounded-[24px] shadow-lg bg-blush-soft/20">
            <img
              src="/sheree_professionals_collab_1784129966312.jpg"
              alt="Sheree Creative Professionals Group"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 object-center"
            />
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PROBLEM VS SOLUTION GRID */}
      {/* <section className="border-t border-charcoal-text/10 pt-16 space-y-12">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">Detailed Structural View</span>
          <h2 className="text-3xl font-serif text-charcoal-text">The Anatomy of decel-booking</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-dusty/10 px-3 py-1 rounded-full text-xs text-rose-dusty font-dmSans font-semibold">
              The Scattered Status Quo
            </div>

            <div className="space-y-4">
              {PROBLEMS.map((probGroup, gIdx) => (
                <div key={gIdx} className="bg-white border border-charcoal-text/10 p-5 rounded-2xl space-y-3">
                  <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-charcoal-text border-b border-charcoal-text/5 pb-2">
                    {probGroup.target}
                  </h3>
                  <div className="space-y-2">
                    {probGroup.points.slice(0, 2).map((pt, pIdx) => (
                      <div key={pIdx} className="text-xs space-y-0.5">
                        <span className="font-semibold text-rose-dusty font-sans block">✕ {pt.title}</span>
                        <p className="text-charcoal-text/70 leading-relaxed font-sans font-light">{pt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-sage-accent/10 px-3 py-1 rounded-full text-xs text-sage-accent font-dmSans font-semibold">
              The Sheree Integration Flow
            </div>

            <div className="space-y-4">
              {SOLUTIONS.map((solGroup, gIdx) => (
                <div key={gIdx} className="bg-white border border-rose-dusty/15 p-5 rounded-2xl space-y-3 shadow-xs">
                  <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-charcoal-text border-b border-rose-dusty/10 pb-2">
                    {solGroup.target}
                  </h3>
                  <div className="space-y-2">
                    {solGroup.points.map((pt, pIdx) => (
                      <div key={pIdx} className="text-xs space-y-0.5">
                        <span className="font-semibold text-sage-accent font-sans flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sage-accent" />
                          {pt.title}
                        </span>
                        <p className="text-charcoal-text/70 leading-relaxed font-sans font-light pl-4">{pt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section> */}

      {/* 4. PERSUASIVE COMMITMENT BADGE */}
      <section className="bg-rose-dusty/10 border border-rose-dusty/25 p-8 md:p-12 text-center space-y-4 rounded-3xl">
        <div className="inline-flex p-2.5 bg-white border border-rose-dusty/25 rounded-full shadow-xs">
          <Heart className="w-5 h-5 text-rose-dusty fill-rose-dusty" />
        </div>
        <h3 className="text-2xl font-serif text-charcoal-text">
          The Sheree Platform Pledge
        </h3>
        <p className="text-sm text-charcoal-text/80 max-w-xl mx-auto leading-relaxed font-light">
          We will never capture user records to trade with advertisement
          networks, force restrictive dynamic booking premiums, or hide
          independent fees. We exist solely to assist artists, beauticians,
          therapists, and designers in reclaiming their time and focus.
        </p>
      </section>
    </div>
  );
}
