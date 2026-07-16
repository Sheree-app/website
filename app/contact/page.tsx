import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Sheree — Join the Curation Circle',
  description: 'Apply as a service professional or reach out to the Sheree team. Join our curated independent booking marketplace.',
};

export default function ContactPage() {
  return <ContactSection />;
}
