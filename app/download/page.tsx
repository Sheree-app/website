import type { Metadata } from 'next';
import DownloadSection from '@/components/DownloadSection';

export const metadata: Metadata = {
  title: 'Sheree — Download the Suite',
  description: 'Download Sheree for iOS and Android. Available for customers and service professionals.',
};

export default function DownloadPage() {
  return <DownloadSection />;
}
