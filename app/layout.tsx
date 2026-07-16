import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
  display: 'swap',
});
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Sheree — Booking Super App',
  description: 'A social-first marketplace where people discover, book, and pay for trusted service professionals. Instant slots, verified portfolios, secure digital escrow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen w-full overflow-x-hidden bg-ivory-warm text-charcoal-text font-sans antialiased relative selection:bg-blush-soft">
        {/* Custom Mouse Pointer */}
        <CustomCursor />


        {/* Main Structural Layout */}
        <div className="flex flex-col min-h-screen relative">

          {/* TOP HEADER: Navigation */}
          <Sidebar />

          {/* PAGE CONTENT — max-width constrained, horizontally centred */}
          <main className="flex-1 bg-ivory-warm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-16 py-10 md:py-16">
              <PageTransition>
                {/* Active Section Content */}
                <div className="pb-16">
                  {children}
                </div>
              </PageTransition>
            </div>
          </main>
        </div>

        {/* Full-width Footer — outside constrained wrapper */}
        <Footer />
      </body>
    </html>
  );
}
