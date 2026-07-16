'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ContactFormData } from '@/lib/types';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    userType: 'professional',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        userType: 'professional',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Editorial Header */}
      <section className="space-y-4 max-w-2xl">
        <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">Inquiries &amp; Applications</span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-text font-normal leading-tight">
          Join our independent circle.
        </h1>
        <p className="text-sm font-dmSans text-sage-accent uppercase tracking-widest font-medium">
          Apply as a service provider or ask us questions.
        </p>
      </section>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left column: Contact / Application Form */}
        <div className="lg:col-span-7 bg-white border border-charcoal-text/10 p-6 md:p-8 rounded-3xl shadow-xs">
          {isSubmitted ? (
            <motion.div
              className="py-12 px-4 text-center space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex p-3 bg-sage-accent/15 rounded-full text-sage-accent">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-charcoal-text">Application Transmitted</h3>
                <p className="text-sm text-charcoal-text/75 max-w-md mx-auto leading-relaxed font-sans font-light">
                  Thank you for applying to the Sheree circle. Our curation team reviews portfolios manually once every Monday to verify styling consistency, license credentials, and reviews. We will reply to your inbox within 5 business days.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="border border-charcoal-text/20 hover:border-rose-dusty hover:text-rose-dusty font-dmSans text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-serif text-xl text-charcoal-text border-b border-charcoal-text/10 pb-4">
                Atelier Inquiry Portal
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-dmSans uppercase tracking-widest text-charcoal-text/70 block">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs font-sans rounded-xl focus:outline-hidden focus:border-rose-dusty focus:bg-white transition-all duration-200"
                    placeholder="E.g., Catherine Moore"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-dmSans uppercase tracking-widest text-charcoal-text/70 block">
                    Your Email coordinates *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs font-sans rounded-xl focus:outline-hidden focus:border-rose-dusty focus:bg-white transition-all duration-200"
                    placeholder="E.g., catherine@studio.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="userType" className="text-[10px] font-dmSans uppercase tracking-widest text-charcoal-text/70 block">
                    Who are you?
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs font-dmSans rounded-xl focus:outline-hidden focus:border-rose-dusty focus:bg-white transition-all duration-200 cursor-pointer"
                  >
                    <option value="professional">Service Professional / Artist</option>
                    <option value="customer">App Customer / Client</option>
                    <option value="partner">Corporate Partner / Press</option>
                    <option value="other">General Curious Observer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-dmSans uppercase tracking-widest text-charcoal-text/70 block">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs font-sans rounded-xl focus:outline-hidden focus:border-rose-dusty focus:bg-white transition-all duration-200"
                    placeholder="E.g., Onboarding Application"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-dmSans uppercase tracking-widest text-charcoal-text/70 block">
                  Your Message or Application Link *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-ivory-warm border border-charcoal-text/15 px-4 py-3 text-xs font-sans rounded-xl focus:outline-hidden focus:border-rose-dusty focus:bg-white transition-all duration-200 resize-none"
                  placeholder="Tell us about your services, link your Instagram or web portfolio, or share your booking requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-charcoal-text hover:bg-rose-dusty disabled:bg-charcoal-text/40 text-white font-dmSans text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-3 transition-colors duration-250 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin rounded-full block" />
                    Transmitting Application...
                  </>
                ) : (
                  <>
                    Send Message / Join Circle
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right column: Info details */}
        <div className="lg:col-span-5 space-y-8">

          <div className="border border-charcoal-text/10 p-6 md:p-8 bg-blush-soft/20 rounded-3xl space-y-6">
            <h3 className="font-serif text-xl text-charcoal-text">The Sheree Atelier</h3>

            <div className="space-y-4 text-sm text-charcoal-text/80 font-light">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-rose-dusty shrink-0" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Global Base</h4>
                  <p className="text-xs">Paseo de Gracia, 42, Eixample, Barcelona, Spain</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-sage-accent shrink-0" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Digital Correspondences</h4>
                  <p className="text-xs">support@sheree-app.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-rose-dusty shrink-0" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Curation Assessment Hours</h4>
                  <p className="text-xs">Monday to Friday &mdash; 09:00 to 17:00 CEST</p>
                  <p className="text-[10px] text-charcoal-text/50 font-dmSans">Customer support queue active 24/7 inside the Super App</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-sage-accent/25 p-6 md:p-8 bg-ivory-warm rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-sage-accent font-semibold text-sm font-dmSans">
              <ShieldAlert className="w-4 h-4" />
              <span>Curation Guidelines</span>
            </div>
            <p className="text-xs text-charcoal-text/75 leading-relaxed font-light">
              Unlike raw public lists that allow any profile to list services automatically, Sheree maintains an independent quality rating filter.
            </p>
            <p className="text-xs text-charcoal-text/75 leading-relaxed font-light">
              We verify that our professionals operate under safe sanitary conditions, possess valid practicing certifications, have a portfolio of genuine visual references, and agree to maintain honest, upfront price lists. This guarantees absolute client confidence.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
