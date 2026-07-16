import { FAQItem, AppDownloadItem, Testimonial, ServiceProfessional } from './types';

export const SHEREE_BRAND = {
  headline: "The Super App for Booking Service Professionals",
  subheadline: "A social-first marketplace where people discover, book, and pay for trusted service professionals—all in one place. Instant slots, verified portfolios, secure digital escrow, and absolute peace of mind.",
  mission: "Eliminating the friction of endless WhatsApp threads, hidden pricing, and manual deposits to make service booking fluid and professional."
};

export const PROBLEMS = [
  {
    target: "For Customers",
    points: [
      {
        title: "Chaotic Discovery",
        description: "Forced to search Instagram tags or TikTok videos to find local service providers, guessing their skill level."
      },
      {
        title: "Invisible Pricing & Availability",
        description: "Must direct-message or WhatsApp to ask for price sheets and open calendar slots, waiting hours for replies."
      },
      {
        title: "Manual Escrow Risk",
        description: "Sending insecure mobile money deposits or cash up front, with no booking insurance or cancellation guarantee."
      },
      {
        title: "Scattered Booking History",
        description: "No central portal to manage, reschedule, review, or access previous bookings and receipts."
      }
    ]
  },
  {
    target: "For Professionals",
    points: [
      {
        title: "Administrative Fatigue",
        description: "Wasting hours daily manually replying to booking enquiries, sending bank details, and coordinating calendars."
      },
      {
        title: "Double Bookings & No-Shows",
        description: "Paper diaries or basic calendar apps leading to overlapping slots and costly last-minute client cancellations."
      },
      {
        title: "Fragmented Tech Stack",
        description: "Struggling to manage marketing on Instagram, chatting on WhatsApp, storing client notes on standard apps, and recording accounts manually."
      },
      {
        title: "Constrained Business Growth",
        description: "No data insights, professional client dashboards, or secure payment gateways to instantly capture and scale deposits."
      }
    ]
  }
];

export const SOLUTIONS = [
  {
    target: "For Customers",
    points: [
      {
        title: "One-Click Instant Booking",
        description: "Select from real-time calendar slots and instantly claim your appointment, validated by automatic reminders."
      },
      {
        title: "Verified Creative Portfolios",
        description: "Explore high-fidelity portfolios and real, unedited reviews from verified customers in your area."
      },
      {
        title: "Secure Integrated Payments",
        description: "Pay deposits or full amounts via cards, digital wallets, or local money options safely through our escrow engine."
      }
    ]
  },
  {
    target: "For Professionals",
    points: [
      {
        title: "All-In-One Digital Storefront",
        description: "An elegant, customizable web profile acting as your booking calendar, portfolio hub, and storefront."
      },
      {
        title: "Automatic Smart Scheduling",
        description: "Synchronize your calendar, lock dynamic time buffers, collect automated deposits, and let Sheree auto-fill gaps."
      },
      {
        title: "Deep Client CRM & Insights",
        description: "Track previous appointments, view clients' personalized preference logs, and analyze seasonal revenue analytics."
      }
    ]
  }
];

export const SERVICE_PROFESSIONALS: ServiceProfessional[] = [
  {
    id: 'pro-1',
    name: 'Aria Sterling',
    specialty: 'Bespoke Hair Sculptor & Colorist',
    rating: 4.9,
    reviewCount: 142,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    pricingText: 'From $120 / session',
    bio: 'Specializing in customized organic highlights, sculptural cuts, and botanical scalp nourishment. Blending modern French style with slow, intuitive crafting.',
    category: 'beauty',
    availabilitySlots: ['10:00 AM', '12:30 PM', '3:00 PM', '5:30 PM'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1605497746444-ac9dbd50d996?auto=format&fit=crop&w=300&q=80'
    ]
  },
  {
    id: 'pro-2',
    name: 'Marcus Kaelen',
    specialty: 'Wellness Therapist & Sound Healer',
    rating: 5.0,
    reviewCount: 88,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    pricingText: 'From $95 / hour',
    bio: 'Guiding deeply restorative myofascial releases, hot basalt stone curations, and therapeutic sound bath sequences to ground the nervous system.',
    category: 'wellness',
    availabilitySlots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:30 PM'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=300&q=80'
    ]
  },
  {
    id: 'pro-3',
    name: 'Sienna Thorne',
    specialty: 'Editorial & Spatial Photographer',
    rating: 4.8,
    reviewCount: 116,
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    pricingText: 'From $250 / shoot',
    bio: 'Capturing minimalist architectural layouts, brand editorials, and tactile lifestyle details using soft, raw ambient natural light.',
    category: 'creative',
    availabilitySlots: ['8:30 AM', '1:00 PM', '4:00 PM'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80'
    ]
  },
  {
    id: 'pro-4',
    name: 'Oliver Croft',
    specialty: 'Minimalist Interior & Plant Curator',
    rating: 4.9,
    reviewCount: 75,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    pricingText: 'From $150 / consultation',
    bio: 'Restructuring physical environments to emphasize light, natural materials, and custom-curated low-maintenance botanicals.',
    category: 'home',
    availabilitySlots: ['10:30 AM', '1:30 PM', '3:30 PM'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: "Sheree completely changed how I run my boutique hair salon. I went from spending 3 hours a day replying to booking requests on WhatsApp and cross-checking bank slips, to having an automated storefront that fills my calendar while I sleep.",
    author: "Elena Moore",
    role: "Senior Hair Stylist & Studio Owner",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 't-2',
    quote: "As a customer, I hated having to DM stylists just to find out their prices. Sheree is a breath of fresh air. I can search, filter by rating, check pricing, view real client pictures, and book a verified slot in 30 seconds. Seamless.",
    author: "Julian Thorne",
    role: "Design Lead at Spatial",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

export const DOWNLOAD_ITEMS: AppDownloadItem[] = [
  {
    id: 'dl-1',
    title: 'Sheree Mobile App (for Customers)',
    description: 'Discover curated local professionals, compare rates, check instant slots, chat via encrypted workspace, and manage your payments.',
    fileSize: '42.6 MB',
    downloadUrl: '#',
    type: 'ios_customer',
    releaseDate: 'July 2026'
  },
  {
    id: 'dl-2',
    title: 'Sheree Pro Dashboard (for Service Providers)',
    description: 'Your complete digital storefront, automated calendar scheduler, smart escrow ledger, client records system, and analytics terminal.',
    fileSize: '48.1 MB',
    downloadUrl: '#',
    type: 'ios_pro',
    releaseDate: 'June 2026'
  },
  {
    id: 'dl-3',
    title: 'Sheree Client Connector (Android Edition)',
    description: 'Fully optimized companion app for Android, with instant push-notifications, secure digital card payments, and live chat sync.',
    fileSize: '38.2 MB',
    downloadUrl: '#',
    type: 'android_customer',
    releaseDate: 'July 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: "How does Sheree help prevent last-minute no-shows?",
    answer: "Sheree has a built-in customizable cancellation and deposit policy. Service providers can set a required booking deposit percentage (e.g., 20% or 50%) that clients pay instantly on booking. If a client cancels outside of your permitted grace period, the deposit is automatically forwarded to you to compensate for your time.",
    category: 'payments'
  },
  {
    id: 'faq-2',
    question: "Can I import my existing calendar or client list?",
    answer: "Absolutely. When you register a professional profile, our onboarding wizard allows you to import Google Calendar, Apple Calendar, or CSV client records with a single click. Sheree automatically resolves any previous overlaps and invites your existing roster to book through your new elegant portal.",
    category: 'professionals'
  },
  {
    id: 'faq-3',
    question: "How does the digital escrow/payment process work?",
    answer: "When a customer books, the payment/deposit is securely captured in Sheree's integrated digital escrow vault. Once the service is successfully rendered, the funds are automatically dispersed into the professional's designated bank account or mobile money wallet instantly. No manual matching of receipts needed.",
    category: 'payments'
  },
  {
    id: 'faq-4',
    question: "What are the fees to use Sheree as an independent professional?",
    answer: "Sheree is committed to a transparent growth model. Setting up your digital storefront and managing up to 15 bookings per month is completely free. For unlimited active bookings and advanced analytics, our pro membership starts at $15/month with a small 2.5% card processing transaction fee.",
    category: 'general'
  },
  {
    id: 'faq-5',
    question: "Is there an instant chat feature for custom instructions?",
    answer: "Yes. Once an appointment is requested or scheduled, a dedicated Sheree Chat room is launched between the customer and provider. This room permits instant exchange of styling boards, location specifics, or skin allergies while protecting personal phone coordinates.",
    category: 'booking'
  }
];
