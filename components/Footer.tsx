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
    <footer className="w-full bg-[#111111] text-white/70 font-mono">

      {/* Main 4-column grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div className="space-y-4 pr-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-dusty flex items-center justify-center shrink-0">
              <span className="font-serif text-white text-sm font-bold">S</span>
            </div>
            <span className="font-serif text-white text-xl tracking-[0.15em]">SHEREE</span>
          </div>
          <p className="text-[12px] leading-relaxed text-white/50">
            A social-first booking marketplace for discovering, booking, and paying trusted service professionals. Verified portfolios. Secure escrow.
          </p>
        </div>

        {/* Column 2 — Navigate */}
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">Navigate</p>
          <ul className="space-y-3 text-[12px]">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/60 hover:text-rose-dusty transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Social */}
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">Social</p>
          <ul className="space-y-3 text-[12px]">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-rose-dusty transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Newsletter */}
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">Newsletter</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-rose-dusty transition-colors duration-200"
            />
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="submit"
                className="bg-rose-dusty hover:bg-rose-dusty/80 text-white text-[12px] font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Join list
              </button>
              <a
                href="#"
                className="flex items-center gap-1.5 border border-white/15 hover:border-white/30 rounded-xl px-3 py-2 text-[10px] text-white/60 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 mx-8 md:mx-12">
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-white/30">
          <span>Copyright 2026 Sheree S.L. All rights reserved.</span>
          <span>No payments. No reservations. No contracts. Just connection.</span>
        </div>
      </div>

    </footer>
  );
}
