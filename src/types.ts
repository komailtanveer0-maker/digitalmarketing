export type PageRoute =
  | 'home'
  | 'services'
  | 'seo-services'
  | 'off-page-seo'
  | 'local-seo'
  | 'social-media-marketing'
  | 'about'
  | 'reviews'
  | 'blog'
  | 'contact'
  | 'thank-you'
  | 'privacy'
  | 'terms'
  | '404';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  route?: PageRoute;
  ctaText: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  originalText?: string;
  locationNote?: string;
  verifiedSource: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'SEO' | 'Off-Page SEO' | 'Local SEO' | 'Social Media Marketing' | 'Website Optimization' | 'Digital Marketing Strategy';
  summary: string;
  content: string[];
  readTime: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  websiteUrl: string;
  service: string;
  message: string;
}
