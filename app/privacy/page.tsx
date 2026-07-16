import type { Metadata } from 'next';
import PrivacySection from '@/components/PrivacySection';

export const metadata: Metadata = {
  title: 'Sheree — Privacy Policy',
  description: 'Read Sheree\'s privacy commitment. No ads, client anonymity, secure payment ledgers, and full GDPR compliance.',
};

export default function PrivacyPage() {
  return <PrivacySection />;
}
