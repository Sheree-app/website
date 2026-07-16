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
          {/* <div className="inline-flex items-center gap-2 border border-sage-accent/40 bg-sage-accent/10 px-4 py-1.5 rounded-full text-xs text-charcoal-text font-dmSans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-rose-dusty animate-pulse" />
            Social-First Booking Marketplace
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-text font-normal leading-[1.1] tracking-tight">
            Discover, book and pay <br />
            <span className="text-rose-dusty italic font-normal">trusted professionals</span> instantly.
          </h1>

          <p className="text-base md:text-lg text-charcoal-text/80 font-sans font-light leading-relaxed max-w-2xl">
            {SHEREE_BRAND.subheadline}
          </p>

          {/* Action buttons */}
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push('/download');
              }}
              className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-2xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg border border-white/10 hover:scale-[1.02]"
              aria-label="Download on the App Store"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-63.3-64.4-63.3-64.4zm-66.7-175.7c15.8-19.2 26.5-45.7 23.6-72.2-22.9 1.1-50.6 15.3-66.7 34.7-14.5 16.7-27.1 43.4-23.7 69.4 25.9 2 51-14.1 66.8-31.9z"/>
              </svg>
              <div className="text-left select-none">
                <p className="text-[8px] font-dmSans uppercase tracking-wider text-zinc-400 font-semibold leading-none mb-0.5">Download on the</p>
                <p className="text-sm font-dmSans font-bold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push('/download');
              }}
              className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-2xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg border border-white/10 hover:scale-[1.02]"
              aria-label="Get it on Google Play"
            >
              <svg className="w-6 h-6" viewBox="0 0 466 511.98" xmlns="http://www.w3.org/2000/svg">
                <g fillRule="nonzero">
                  <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"/>
                  <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"/>
                  <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"/>
                  <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"/>
                </g>
              </svg>
              <div className="text-left select-none">
                <p className="text-[8px] font-dmSans uppercase tracking-wider text-zinc-400 font-semibold leading-none mb-0.5">Get it on</p>
                <p className="text-sm font-dmSans font-bold leading-tight">Google Play</p>
              </div>
            </a>
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
                <p className="text-[10px] font-dmSans uppercase tracking-wider text-rose-dusty">Instant Booking Confirmed</p>
                <p className="text-xs font-semibold text-charcoal-text">Sienna Thorne — Spatial Shoot</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM VS THE SOLUTION */}
      <section className="border-t border-charcoal-text/10 pt-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">Frustration vs Flow</span>
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
                <p className="text-xs text-charcoal-text/60 font-dmSans uppercase tracking-widest">Discover &amp; Book in peace</p>
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
                <p className="text-xs text-charcoal-text/60 font-dmSans uppercase tracking-widest">Scale your independent craft</p>
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
      

      {/* 4. SOCIAL RESONANCE & TRUST CARDS */}
      <section className="bg-blush-soft/20 border border-charcoal-text/5 p-8 md:p-12 rounded-[32px] space-y-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block text-center">Verified Resonance</span>
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
                    <p className="text-[10px] font-dmSans text-charcoal-text/55">
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
                    <p className="text-[9px] font-dmSans text-sage-accent uppercase tracking-widest">{selectedPro.specialty}</p>
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
                      Your appointment slot <span className="font-dmSans font-medium text-rose-dusty">{selectedSlot}</span> has been locked with secure digital escrow.
                    </p>
                  </div>
                  <div className="bg-ivory-warm p-4 rounded-xl border border-charcoal-text/5 text-left text-[11px] space-y-2 font-dmSans text-charcoal-text/70">
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
                    <label className="text-[10px] font-dmSans uppercase tracking-widest text-charcoal-text/70 block">
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
                            className={`p-3 rounded-2xl border text-xs font-dmSans transition-all duration-200 cursor-pointer text-center ${
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
                    <label className="text-[10px] font-dmSans uppercase tracking-widest text-charcoal-text/70 block">
                      2. Personal Coordinates *
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name (e.g. Elena)"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs rounded-2xl focus:outline-hidden focus:border-rose-dusty transition-all"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Phone (for instant reminders)"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs rounded-2xl focus:outline-hidden focus:border-rose-dusty transition-all"
                      />
                    </div>
                  </div>

                  {/* Dynamic escrow notice */}
                  <div className="bg-blush-soft/20 border border-charcoal-text/5 p-4 rounded-2xl space-y-1">
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
                    className="w-full bg-charcoal-text hover:bg-rose-dusty disabled:bg-charcoal-text/30 text-white font-dmSans text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-250 cursor-pointer"
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
