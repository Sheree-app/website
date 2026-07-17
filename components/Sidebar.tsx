"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { PageLink } from "@/lib/types";

const MENU_ITEMS: PageLink[] = [
  { id: "home", label: "Home", href: "/home" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-charcoal-text/10 bg-ivory-warm sticky top-0 z-30">
      <div className="relative z-30 bg-ivory-warm flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <Link
            href="/home"
            className="font-playfair text-2xl md:text-3xl  tracking-[0.2em] text-charcoal-text hover:text-rose-dusty transition-colors duration-250 cursor-pointer focus:outline-hidden block"
          >
            SHEREE
          </Link>
          <p className="text-[10px] font-dmSans uppercase tracking-[0.15em] text-charcoal-text/60 mt-0.5 pl-0.5">
            booking super app
          </p>
        </div>

        {/* Desktop Horizontal Navigation */}
        <nav className="hidden lg:flex items-center gap-6ch">
          {MENU_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (pathname === "/" && item.href === "/home");
            return (
              <Link
                key={item.id}
                id={`nav-${item.id}`}
                href={item.href}
                className={`font-dmSans text-[11px] uppercase tracking-widest px-3 py-2  transition-all duration-200 rounded-2xl flex items-center gap-1 cursor-pointer group ${
                  isActive
                    ? "bg-rose-dusty text-white font-medium shadow-xs"
                    : "text-charcoal-text/75 hover:text-charcoal-text hover:bg-blush-soft/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Download App CTA */}
        <Link
          href="/download"
          id="nav-download-app"
          className="hidden lg:inline-flex items-center gap-2 font-dmSans h-12 text-[11px] uppercase tracking-widest px-4 py-2 rounded-4xl bg-rose-dusty text-white font-medium shadow-sm hover:bg-rose-dusty/90 transition-all duration-200 cursor-pointer"
        >
          Download App
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 border border-charcoal-text/15 hover:border-rose-dusty hover:text-rose-dusty transition-colors duration-200 cursor-pointer rounded-xl bg-white"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-charcoal-text/10 backdrop-blur-sm z-20 pointer-events-auto"
            />

            {/* Dropdown Panel */}
            <motion.div
              className="lg:hidden absolute top-[calc(100%+12px)] left-6 right-6 mx-auto max-w-sm bg-white/95 backdrop-blur-md border border-charcoal-text/10 rounded-2xl shadow-lg z-30"
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="p-3 space-y-2">
                <ul className="grid grid-cols-1 gap-1.5">
                  {MENU_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`w-full text-left font-dmSans text-xs uppercase tracking-widest p-3 transition-all duration-150 cursor-pointer rounded-xl block ${
                            isActive
                              ? "bg-rose-dusty text-white font-medium shadow-xs"
                              : "text-charcoal-text/80 bg-white "
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                  {/* Download link - Mobile only */}
                  <li>
                    <Link
                      href="/download"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`w-full text-left font-dmSans text-xs uppercase tracking-widest p-3 transition-all duration-150 cursor-pointer rounded-xl block ${
                        pathname === "/download"
                          ? "bg-rose-dusty text-white font-medium shadow-xs"
                          : "text-charcoal-text/80 bg-white hover:text-rose-dusty"
                      }`}
                    >
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
