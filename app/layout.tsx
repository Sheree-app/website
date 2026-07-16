import type { Metadata } from 'next';
import './globals.css';
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
    <html lang="en">
      <body className="min-h-screen bg-ivory-warm text-charcoal-text font-sans antialiased relative selection:bg-blush-soft">
        {/* Custom Mouse Pointer */}
        <CustomCursor />

        {/* Decorative Outer Editorial Border Frame */}
        <div className="hidden xl:block fixed inset-4 border border-rose-dusty/15 pointer-events-none z-40 rounded-[20px]" />

        {/* Main Structural Layout */}
        <div className="max-w-7xl mx-auto xl:px-4">
          <div className="flex flex-col min-h-screen relative">

            {/* TOP HEADER: Navigation */}
            <Sidebar />

            {/* PAGE CONTENT */}
            <main className="flex-1 p-6 md:p-12 xl:p-16 bg-ivory-warm">
              <PageTransition>
                {/* Active Section Content */}
                <div className="pb-16">
                  {children}
                </div>
              </PageTransition>
            </main>
          </div>
        </div>

        {/* Full-width Footer — outside constrained wrapper */}
        <Footer />
      </body>
    </html>
  );
}
