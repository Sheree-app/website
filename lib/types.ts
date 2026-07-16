export type PageId = 'home' | 'about' | 'contact' | 'download' | 'privacy' | 'faqs' | 'terms';

export interface PageLink {
  id: PageId;
  label: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'payments' | 'professionals' | 'general';
}

export interface AppDownloadItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
  type: 'ios_customer' | 'android_customer' | 'ios_pro' | 'android_pro';
  releaseDate: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  userType: 'customer' | 'professional' | 'partner' | 'other';
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

export interface ServiceProfessional {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  pricingText: string;
  bio: string;
  category: 'beauty' | 'wellness' | 'creative' | 'home';
  availabilitySlots: string[];
  portfolioImages: string[];
}
