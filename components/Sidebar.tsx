'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { PageLink } from '@/lib/types';

const MENU_ITEMS: PageLink[] = [
  { id: 'home', label: 'Home', href: '/home' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'download', label: 'Download', href: '/download' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-charcoal-text/10 bg-ivory-warm sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <Link
            href="/home"
            className="font-serif text-2xl md:text-3xl font-normal tracking-[0.2em] text-charcoal-text hover:text-rose-dusty transition-colors duration-250 cursor-pointer focus:outline-hidden block"
          >
            SHEREE
          </Link>
          <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-charcoal-text/60 mt-0.5 pl-0.5">
            booking super app
          </p>
        </div>

        {/* Desktop Horizontal Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/home');
            return (
              <Link
                key={item.id}
                id={`nav-${item.id}`}
                href={item.href}
                className={`font-mono text-[11px] uppercase tracking-widest px-3 py-2 transition-all duration-200 rounded-xl flex items-center gap-1 cursor-pointer group ${
                  isActive
                    ? 'bg-rose-dusty text-white font-medium shadow-xs'
                    : 'text-charcoal-text/75 hover:text-charcoal-text hover:bg-blush-soft/40'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Footer Badge (moved inline) */}
        <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono text-rose-dusty font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-sage-accent" />
          <span>Verified &amp; Escrow</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 border border-charcoal-text/15 hover:border-rose-dusty hover:text-rose-dusty transition-colors duration-200 cursor-pointer rounded-lg bg-white"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-charcoal-text/10 bg-ivory-warm overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-4 space-y-2">
              <span className="text-[9px] font-mono text-rose-dusty uppercase tracking-widest font-semibold block mb-2 px-2">
                Navigation
              </span>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {MENU_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`w-full text-left font-mono text-xs uppercase tracking-widest p-3 transition-all duration-150 cursor-pointer rounded-xl block ${
                          isActive
                            ? 'bg-rose-dusty text-white font-medium shadow-xs'
                            : 'text-charcoal-text/80 bg-white border border-charcoal-text/5 hover:border-rose-dusty'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
