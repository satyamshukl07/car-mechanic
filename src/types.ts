export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  image: string;
  heroImage: string;
  commonProblems: string[];
  included: string[];
  benefits: string[];
  whyChooseUs: string[];
  estimatedTime: string;
  startingPrice: string;
  popular?: boolean;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image: string;
  badge?: string;
}

export interface Brand {
  name: string;
  origin: string;
  logo: string;
  description: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date?: string;
  time?: string;
  vehicleMakeModel?: string;
  vehicleRego?: string;
  message: string;
}

export interface BookingSubmission extends BookingFormData {
  id: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Review';
}
