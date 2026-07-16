'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '@/lib/data';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

export default function FaqsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'booking' | 'payments' | 'professionals' | 'general'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'booking', label: 'Booking Slots' },
    { id: 'payments', label: 'Digital Escrow & Payments' },
    { id: 'professionals', label: 'For Professionals' },
    { id: 'general', label: 'General & Support' }
  ];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="space-y-4 max-w-2xl">
        <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">Knowledge Base</span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-text font-normal leading-tight">
          Help, clarified.
        </h1>
        <p className="text-sm font-dmSans text-sage-accent uppercase tracking-widest font-medium">
          Understand how Sheree elevates client &amp; provider trust.
        </p>
      </section>

      {/* 2. INTERACTIVE SEARCH & CATEGORIES BAR */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Box */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-text/40" />
            <input
              type="text"
              placeholder="Search questions (e.g. deposit, calendar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-charcoal-text/15 pl-11 pr-4 py-3.5 text-xs font-sans rounded-2xl focus:outline-hidden focus:border-rose-dusty transition-all duration-200 shadow-xs"
            />
          </div>

          {/* Categories select pills */}
          <div className="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as 'all' | 'booking' | 'payments' | 'professionals' | 'general');
                  setExpandedId(null);
                }}
                className={`px-4 py-2 rounded-full text-[10px] font-dmSans uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-rose-dusty text-white shadow-xs'
                    : 'bg-white text-charcoal-text/75 border border-charcoal-text/10 hover:border-charcoal-text/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACCORDION FAQ BLOCK */}
      <section className="max-w-4xl mx-auto space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isExpanded ? 'border-rose-dusty shadow-xs' : 'border-charcoal-text/10'
                }`}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-ivory-warm/30 transition-colors duration-200 cursor-pointer"
                >
                  <span className="font-serif text-base md:text-lg text-charcoal-text font-normal leading-snug">
                    {faq.question}
                  </span>

                  <div className={`p-2 rounded-full border transition-all duration-200 ${
                    isExpanded ? 'bg-rose-dusty text-white border-rose-dusty' : 'border-charcoal-text/10 text-charcoal-text'
                  }`}>
                    {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-charcoal-text/5 text-xs md:text-sm text-charcoal-text/75 leading-relaxed font-sans font-light space-y-4 bg-blush-soft/5">
                        <p>{faq.answer}</p>
                        <div className="flex justify-between items-center pt-2 text-[10px] font-dmSans text-charcoal-text/50">
                          <span>CATEGORY: {faq.category.toUpperCase()}</span>
                          <span className="text-sage-accent">Verified support article</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 bg-white border border-charcoal-text/10 rounded-2xl space-y-4">
            <HelpCircle className="w-10 h-10 text-rose-dusty/40 mx-auto" />
            <div className="space-y-1">
              <p className="font-serif text-lg text-charcoal-text">No articles found</p>
              <p className="text-xs text-charcoal-text/60 max-w-sm mx-auto">
                No articles matched &ldquo;{searchQuery}&rdquo;. Try selecting &ldquo;All FAQs&rdquo; or search for generic terms like &ldquo;escrow&rdquo; or &ldquo;deposit&rdquo;.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 4. FAQS COMPANION CALLOUT */}
      <section className="bg-sage-accent/15 border border-sage-accent/20 p-8 rounded-3xl text-center space-y-3">
        <h3 className="font-serif text-xl text-charcoal-text">Still seeking clarity?</h3>
        <p className="text-xs text-charcoal-text/85 max-w-lg mx-auto leading-relaxed font-light">
          We maintain live human curators active in Barcelona and digitally worldwide. Message us through our contact form or launch a secure instant chat inside the Sheree Super App.
        </p>
      </section>
    </div>
  );
}
