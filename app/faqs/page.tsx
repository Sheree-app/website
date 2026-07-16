import type { Metadata } from 'next';
import FaqsSection from '@/components/FaqsSection';

export const metadata: Metadata = {
  title: 'Sheree — FAQs & Support',
  description: 'Find answers to common questions about Sheree bookings, payments, digital escrow, and how the platform works for professionals.',
};

export default function FaqsPage() {
  return <FaqsSection />;
}
