import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: 'Sheree — Curation Philosophy',
  description: 'Learn about Sheree\'s mission to unify independent service professionals with seamless digital booking flow.',
};

export default function AboutPage() {
  return <AboutSection />;
}
