'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-full flex flex-col justify-between"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
