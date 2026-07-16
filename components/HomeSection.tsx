'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { SHEREE_BRAND, SERVICE_PROFESSIONALS, TESTIMONIALS } from '@/lib/data';
import { ServiceProfessional } from '@/lib/types';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Star,
  ShieldCheck,
  Smartphone,
  Smile,
  X,
  Check,
  TrendingUp,
} from 'lucide-react';

export default function HomeSection() {
  const router = useRouter();
  const [selectedPro, setSelectedPro] = useState<ServiceProfessional | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'beauty' | 'wellness' | 'creative' | 'home'>('all');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Filtering professionals
  const filteredPros = activeCategory === 'all'
    ? SERVICE_PROFESSIONALS
    : SERVICE_PROFESSIONALS.filter(pro => pro.category === activeCategory);

  const handleInstantBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !clientName) return;

    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedPro(null);
      setSelectedSlot(null);
      setClientName('');
      setClientPhone('');
    }, 4500);
  };

  return (
    <div className="space-y-24 md:space-y-32">

      {/* 1. HERO BLOCK */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        {/* Left: Persuasive Messaging */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 border border-sage-accent/40 bg-sage-accent/10 px-4 py-1.5 rounded-full text-xs text-charcoal-text font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-rose-dusty animate-pulse" />
            Social-First Booking Marketplace
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-text font-normal leading-[1.1] tracking-tight">
            Discover, book, &amp; pay <br />
            <span className="text-rose-dusty italic font-normal">trusted professionals</span> instantly.
          </h1>

          <p className="text-base md:text-lg text-charcoal-text/80 font-sans font-light leading-relaxed max-w-2xl">
            {SHEREE_BRAND.subheadline}
          </p>

          {/* Action buttons */}
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('marketplace-discovery');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-rose-dusty hover:bg-rose-dusty/90 text-white font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-full flex items-center gap-3 transition-colors duration-250 cursor-pointer shadow-md hover:shadow-lg"
            >
              Discover Providers
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => router.push('/download')}
              className="border border-charcoal-text/15 hover:border-charcoal-text hover:bg-charcoal-text hover:text-white text-charcoal-text bg-white font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-250 cursor-pointer"
            >
              Download Super App
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right: Phone-inspired App Mockup View */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="absolute inset-4 -m-4 border border-rose-dusty/25 rounded-[32px] pointer-events-none z-0" />
          <div className="relative overflow-hidden border border-charcoal-text/10 bg-white aspect-[9/12] max-w-sm mx-auto rounded-[24px] shadow-2xl">
            <img
              src="/sheree_app_mockup_1784129943477.jpg"
              alt="Sheree Mobile App Interface"
              className="w-full h-full object-cover"
            />
            {/* Real-time floating overlay cards */}
            <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-charcoal-text/5 shadow-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sage-accent flex items-center justify-center text-white">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-rose-dusty">Instant Booking Confirmed</p>
                <p className="text-xs font-semibold text-charcoal-text">Sienna Thorne — Spatial Shoot</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM VS THE SOLUTION */}
      <section className="border-t border-charcoal-text/10 pt-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-rose-dusty uppercase tracking-widest font-semibold block">Frustration vs Flow</span>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal-text leading-tight">
            Stop swimming in WhatsApp chats. Start booking.
          </h2>
          <p className="text-sm text-charcoal-text/75 font-sans font-light">
            Most service providers run businesses across five separate apps. Sheree unifies this chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customers Frame */}
          <div className="bg-rose-dusty/5 border border-rose-dusty/15 p-8 rounded-[24px] space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-dusty/10 flex items-center justify-center text-rose-dusty">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal-text">For Customers</h3>
                <p className="text-xs text-charcoal-text/60 font-mono uppercase tracking-widest">Discover &amp; Book in peace</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 border-l border-rose-dusty/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">Instagram Discovery is Dead</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">Instead of scrolling hashtags and guessing quality, search trusted professionals filtered by location, rating, and specialties.</p>
              </div>
              <div className="space-y-2 border-l border-rose-dusty/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">No More &ldquo;DM for Pricing&rdquo;</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">View precise price tags and actual open timeslots instantly. Book your desired slot in two clicks.</p>
              </div>
              <div className="space-y-2 border-l border-rose-dusty/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">Automatic Deposits</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">Never manually calculate mobile deposits. Sheree collects and secures reservation fees in escrow, ready for instant payout.</p>
              </div>
              <div className="space-y-2 border-l border-rose-dusty/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">Central Schedule</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">Review, reschedule, and manage all of your appointments under a single sleek user panel with custom reminders.</p>
              </div>
            </div>
          </div>

          {/* Professionals Frame */}
          <div className="bg-sage-accent/5 border border-sage-accent/15 p-8 rounded-[24px] space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage-accent/10 flex items-center justify-center text-sage-accent">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal-text">For Service Providers</h3>
                <p className="text-xs text-charcoal-text/60 font-mono uppercase tracking-widest">Scale your independent craft</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 border-l border-sage-accent/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">Custom Digital Storefront</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">Own a professional link-in-bio storefront showcasing verified photos, portfolio arrays, real client ratings, and live hours.</p>
              </div>
              <div className="space-y-2 border-l border-sage-accent/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">No-Show Protection</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">Configure custom deposit rules and automatic cancel buffers. Sheree bills cancellation fees directly so your time is protected.</p>
              </div>
              <div className="space-y-2 border-l border-sage-accent/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">Unified Tech Workspace</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">Say goodbye to notes folders, spreadsheets, paper diaries, and manual messages. Sheree holds your clients, calendar, and billing.</p>
              </div>
              <div className="space-y-2 border-l border-sage-accent/30 pl-4">
                <h4 className="font-sans font-semibold text-sm text-charcoal-text/95">Dynamic Growth Insights</h4>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-light">Observe peak booking hours, seasonal client retention metrics, and automatic invoice summaries ready for tax seasons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DISCOVERY MARKETPLACE DEMO */}
      <section id="marketplace-discovery" className="scroll-mt-10 border-t border-charcoal-text/10 pt-16 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-sage-accent uppercase tracking-widest font-semibold block">Live Directory</span>
            <h2 className="text-3xl font-serif text-charcoal-text">Meet the Sheree Curators</h2>
          </div>
          <p className="text-sm text-charcoal-text/60 max-w-sm font-sans font-light">
            Filter our network, explore verified ratings, and click &ldquo;Book Instantly&rdquo; to experience our fluid scheduling app interface.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {(['all', 'beauty', 'wellness', 'creative', 'home'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-250 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-rose-dusty text-white shadow-md'
                  : 'bg-white text-charcoal-text/75 border border-charcoal-text/10 hover:border-charcoal-text/40'
              }`}
            >
              {cat === 'all' ? 'All Curators' : cat}
            </button>
          ))}
        </div>

        {/* Interactive Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPros.map((pro, idx) => (
            <motion.div
              key={pro.id}
              className="group bg-white border border-charcoal-text/10 hover:border-rose-dusty rounded-2xl flex flex-col justify-between transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-ivory-warm">
                <img
                  src={pro.imageUrl}
                  alt={pro.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Rating overlay badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-charcoal-text/10 text-[10px] font-mono text-charcoal-text flex items-center gap-1">
                  <Star className="w-3 h-3 text-rose-dusty fill-rose-dusty" />
                  <span>{pro.rating} ({pro.reviewCount})</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white px-2.5 py-1 rounded-full border border-charcoal-text/10 text-[9px] font-mono uppercase tracking-widest text-charcoal-text">
                  {pro.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-charcoal-text group-hover:text-rose-dusty transition-colors duration-250">
                    {pro.name}
                  </h3>
                  <p className="text-xs text-sage-accent uppercase font-mono tracking-widest">
                    {pro.specialty}
                  </p>
                  <p className="text-xs text-charcoal-text/75 line-clamp-2 font-sans font-light pt-1 leading-relaxed">
                    {pro.bio}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-charcoal-text/5">
                  <span className="text-xs font-mono text-charcoal-text/90 font-medium">{pro.pricingText}</span>
                  <button
                    onClick={() => setSelectedPro(pro)}
                    className="bg-rose-dusty hover:bg-rose-dusty/90 text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    Book Instantly
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SOCIAL RESONANCE & TRUST CARDS */}
      <section className="bg-blush-soft/20 border border-charcoal-text/5 p-8 md:p-12 rounded-[32px] space-y-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] font-mono text-rose-dusty uppercase tracking-widest font-semibold block text-center">Verified Resonance</span>
          <h3 className="text-2xl md:text-3xl font-serif text-charcoal-text text-center font-normal">
            Loved by providers &amp; clients alike.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl border border-charcoal-text/5 flex flex-col justify-between space-y-4">
                <p className="font-serif italic text-charcoal-text/85 leading-relaxed text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-charcoal-text">{testimonial.author}</h4>
                    <p className="text-[10px] font-mono text-charcoal-text/55">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BOOKING POPUP */}
      <AnimatePresence>
        {selectedPro && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-text/45 backdrop-blur-xs p-4">
            {/* Backdrop click */}
            <div className="absolute inset-0" onClick={() => { if (!bookingConfirmed) setSelectedPro(null); }} />

            <motion.div
              className="relative w-full max-w-md bg-white border border-charcoal-text/10 rounded-3xl p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl z-10 space-y-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPro.imageUrl}
                    alt={selectedPro.name}
                    className="w-12 h-12 rounded-full object-cover border border-rose-dusty/35"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-serif text-lg text-charcoal-text">Book {selectedPro.name}</h3>
                    <p className="text-[9px] font-mono text-sage-accent uppercase tracking-widest">{selectedPro.specialty}</p>
                  </div>
                </div>
                {!bookingConfirmed && (
                  <button
                    onClick={() => { setSelectedPro(null); setSelectedSlot(null); }}
                    className="p-1.5 rounded-full border border-charcoal-text/10 hover:border-rose-dusty hover:text-rose-dusty text-charcoal-text transition-colors duration-200 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {bookingConfirmed ? (
                <motion.div
                  className="py-6 text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-sage-accent/15 text-sage-accent mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl text-charcoal-text">Booking Lock Registered!</h4>
                    <p className="text-xs text-charcoal-text/75">
                      Your appointment slot <span className="font-mono font-medium text-rose-dusty">{selectedSlot}</span> has been locked with secure digital escrow.
                    </p>
                  </div>
                  <div className="bg-ivory-warm p-4 rounded-xl border border-charcoal-text/5 text-left text-[11px] space-y-2 font-mono text-charcoal-text/70">
                    <div>CLIENT: {clientName}</div>
                    <div>PROVIDER: {selectedPro.name}</div>
                    <div>RATE: {selectedPro.pricingText}</div>
                    <div className="text-[10px] text-sage-accent font-semibold uppercase">⚡ Automatic SMS Reminders set!</div>
                  </div>
                  <p className="text-[10px] text-charcoal-text/50">Returning to catalog shortly...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleInstantBooking} className="space-y-5">

                  {/* Select Slot */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-text/70 block">
                      1. Select Available Slot *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedPro.availabilitySlots.map((slot) => {
                        const isThis = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-3 rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer text-center ${
                              isThis
                                ? 'bg-rose-dusty text-white border-rose-dusty shadow-sm'
                                : 'bg-ivory-warm text-charcoal-text/80 border-charcoal-text/10 hover:border-charcoal-text/30'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-text/70 block">
                      2. Personal Coordinates *
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name (e.g. Elena)"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs rounded-xl focus:outline-hidden focus:border-rose-dusty transition-all"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Phone (for instant reminders)"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs rounded-xl focus:outline-hidden focus:border-rose-dusty transition-all"
                      />
                    </div>
                  </div>

                  {/* Dynamic escrow notice */}
                  <div className="bg-blush-soft/20 border border-charcoal-text/5 p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-xs text-rose-dusty font-semibold">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Sheree Escrow Protection Active</span>
                    </div>
                    <p className="text-[10px] text-charcoal-text/70 leading-normal">
                      We protect both parties. A minor cancellation deposit is securely held in digital escrow and only released when service is completed.
                    </p>
                  </div>

                  {/* Submission */}
                  <button
                    type="submit"
                    disabled={!selectedSlot || !clientName}
                    className="w-full bg-charcoal-text hover:bg-rose-dusty disabled:bg-charcoal-text/30 text-white font-mono text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-250 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Lock Instant Slot
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
