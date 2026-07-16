import type { Metadata } from 'next';
import HomeSection from '@/components/HomeSection';

export const metadata: Metadata = {
  title: 'Sheree — Super App Home',
  description: 'Discover, book, and pay trusted service professionals instantly. Social-first marketplace with verified portfolios, instant slots, and digital escrow.',
};

export default function HomePage() {
  return <HomeSection />;
}
