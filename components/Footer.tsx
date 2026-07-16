'use client';

import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Download', href: '/download' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'X (Twitter)', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F3F0] text-charcoal-text/80 font-dmSans">

      {/* Main 4-column grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div className="space-y-4 pr-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-dusty flex items-center justify-center shrink-0">
              <span className="font-serif text-white text-sm font-bold">S</span>
            </div>
            <span className="font-serif text-charcoal-text text-xl tracking-[0.15em]">SHEREE</span>
          </div>
          <p className="text-[12px] leading-relaxed text-charcoal-text/60">
            A social-first booking marketplace for discovering, booking, and paying trusted service professionals. Verified portfolios. Secure escrow.
          </p>
        </div>

        {/* Column 2 & 3 — Navigate & Social wrapper for mobile side-by-side grid */}
        <div className="grid grid-cols-2 gap-10 sm:contents">
          {/* Column 2 — Navigate */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-text/40 font-semibold">Navigate</p>
            <ul className="space-y-3 text-[12px]">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-charcoal-text/70 hover:text-rose-dusty transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-text/40 font-semibold">Social</p>
            <ul className="space-y-3 text-[12px]">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal-text/70 hover:text-rose-dusty transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 4 — Newsletter */}
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-text/40 font-semibold">Newsletter</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white border border-charcoal-text/10 rounded-2xl px-4 py-3 text-[12px] text-charcoal-text placeholder:text-charcoal-text/40 focus:outline-none focus:border-rose-dusty transition-colors duration-200"
            />
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="submit"
                className="bg-rose-dusty hover:bg-rose-dusty/80 text-white text-[12px] font-semibold px-5 py-2.5 rounded-2xl transition-colors duration-200 cursor-pointer"
              >
                Join list
              </button>
              
            </div>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-text/10 mx-8 md:mx-12">
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-charcoal-text/40">
          <span>Copyright 2026 Sheree S.L. All rights reserved.</span>
          <span>No payments. No reservations. No contracts. Just connection.</span>
        </div>
      </div>

    </footer>
  );
}
