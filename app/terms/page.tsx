import type { Metadata } from 'next';
import TermsSection from '@/components/TermsSection';

export const metadata: Metadata = {
  title: 'Sheree — Terms & Conditions',
  description: 'Sheree\'s usage framework, curation agreement, cancellation policy, escrow rules, and professional integrity standards.',
};

export default function TermsPage() {
  return <TermsSection />;
}
