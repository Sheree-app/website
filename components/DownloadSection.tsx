'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOWNLOAD_ITEMS } from '@/lib/data';
import { AppDownloadItem } from '@/lib/types';
import {
  Download,
  Smartphone,
  Check,
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';

export default function DownloadSection() {
  const [downloadingItem, setDownloadingItem] = useState<AppDownloadItem | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadCompleted, setDownloadCompleted] = useState(false);

  const startSimulatedDownload = (item: AppDownloadItem) => {
    setDownloadingItem(item);
    setDownloadProgress(0);
    setDownloadCompleted(false);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadCompleted(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);
  };

  const closeProgressModal = () => {
    setDownloadingItem(null);
    setDownloadProgress(0);
    setDownloadCompleted(false);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="space-y-4 max-w-2xl">
        <span className="text-[10px] font-dmSans text-rose-dusty uppercase tracking-widest font-semibold block">Companion Apps</span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-text font-normal leading-tight">
          Sleek software, <br />always at your fingertips.
        </h1>
        <p className="text-sm font-dmSans text-sage-accent uppercase tracking-widest font-medium">
          Secure the Sheree suite for iOS and Android.
        </p>
      </section>

      {/* 2. DYNAMIC DOWNLOAD GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOWNLOAD_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-charcoal-text/10 p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-rose-dusty transition-colors duration-250 shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-dusty/10 text-rose-dusty flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-dmSans text-charcoal-text/50 uppercase tracking-widest">
                  {item.releaseDate}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg text-charcoal-text font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-text/70 leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-charcoal-text/5">
              <div className="flex justify-between text-[11px] font-dmSans text-charcoal-text/60">
                <span>FILE SIZE: {item.fileSize}</span>
                <span className="text-sage-accent uppercase">Verified safe</span>
              </div>

              <button
                onClick={() => startSimulatedDownload(item)}
                className="w-full bg-rose-dusty hover:bg-rose-dusty/90 text-white font-dmSans text-xs uppercase tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors duration-250 cursor-pointer shadow-sm hover:shadow-md"
              >
                <Download className="w-4 h-4" />
                Simulate Download
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 3. APP CAPABILITY SPECIFICATIONS */}
      <section className="bg-blush-soft/20 border border-charcoal-text/5 p-8 md:p-12 rounded-[32px] space-y-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2 text-center">
            <span className="text-[10px] font-dmSans text-sage-accent uppercase tracking-widest font-semibold block">Under the Hood</span>
            <h3 className="text-2xl md:text-3xl font-serif text-charcoal-text">Instant features, zero bloat.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-5 rounded-2xl border border-charcoal-text/5 space-y-2">
              <Sparkles className="w-5 h-5 text-rose-dusty" />
              <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Decentralized Pushes</h4>
              <p className="text-[11px] text-charcoal-text/75 leading-normal font-light">
                Receive notifications of appointment validations, customer payment confirmations, and stylist notes in real-time, built right into the app&apos;s push service.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-charcoal-text/5 space-y-2">
              <ShieldCheck className="w-5 h-5 text-sage-accent" />
              <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">End-to-End Reminders</h4>
              <p className="text-[11px] text-charcoal-text/75 leading-normal font-light">
                Integrated calendar layers sync directly with Apple and Google Calendar, emitting gentle, non-obtrusive SMS warnings to stop manual no-shows.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-charcoal-text/5 space-y-2">
              <Info className="w-5 h-5 text-rose-dusty" />
              <h4 className="font-sans font-semibold text-xs text-charcoal-text uppercase tracking-widest">Offline Workspace</h4>
              <p className="text-[11px] text-charcoal-text/75 leading-normal font-light">
                Providers can check their schedules, edit client files, and log raw income data even when working in remote wellness clinics with no mobile signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC PROGRESS MODAL */}
      <AnimatePresence>
        {downloadingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-text/50 backdrop-blur-xs p-4">
            <motion.div
              className="relative w-full max-w-sm bg-white border border-charcoal-text/10 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-center space-y-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="space-y-2">
                <Smartphone className="w-10 h-10 text-rose-dusty mx-auto" />
                <h3 className="font-serif text-lg text-charcoal-text">{downloadingItem.title}</h3>
                <p className="text-xs text-charcoal-text/55 font-dmSans">{downloadingItem.fileSize}</p>
              </div>

              {downloadCompleted ? (
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-sage-accent/15 text-sage-accent mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base text-charcoal-text">Simulated Download Ready!</h4>
                    <p className="text-xs text-charcoal-text/70 leading-relaxed max-w-xs mx-auto">
                      In the actual production build, this would start downloading the compiled native app bundle (<span className="font-dmSans">.ipa</span> / <span className="font-dmSans">.apk</span>) or route to the App Store.
                    </p>
                  </div>
                  <button
                    onClick={closeProgressModal}
                    className="w-full bg-charcoal-text hover:bg-rose-dusty text-white font-dmSans text-xs uppercase tracking-widest py-3 rounded-full transition-colors duration-250 cursor-pointer"
                  >
                    Return to Suite
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="h-2 w-full bg-ivory-warm rounded-full overflow-hidden border border-charcoal-text/5">
                    <motion.div
                      className="h-full bg-rose-dusty rounded-full"
                      style={{ width: `${downloadProgress}%` }}
                      transition={{ ease: 'easeInOut' }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs font-dmSans text-charcoal-text/70">
                    <span>TRANSMITTING BUNDLE...</span>
                    <span>{downloadProgress}%</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
