import { BlogPost, ReviewItem, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'GrowthEdge',
  fullDisplayName: 'GrowthEdge | Digital Marketing Agency',
  category: 'Digital Marketing Agency / Marketing Agency',
  phoneDisplay: '+92 321 5516045',
  phoneRaw: '+923215516045',
  primaryMarket: 'Rawalpindi and Islamabad, Pakistan',
  googleRating: 5.0,
  reviewCount: 3,
  serviceArea: 'Rawalpindi & Islamabad, Pakistan',
  year: new Date().getFullYear(),
};

// Strictly verified Google reviews - no fabricated testimonials
export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Yasmeen Noor',
    rating: 5.0,
    text: 'GrowthEdge is one of the top-performing digital marketing agencies in Pakistan. Their team is highly professional and delivered excellent results for my business through SEO and social media marketing. Highly recommended for anyone looking to grow their online presence in Rawalpindi and Islamabad.',
    verifiedSource: 'Google Review',
  },
  {
    id: 'rev-2',
    author: 'Abdul Ahad',
    rating: 5.0,
    text: 'Best digital marketing and SEO agency in Rawalpindi. Strongly recommended.',
    originalText: 'Best Digital Marketing & SEO Agnecy in Rawalpindi strongly recommended GrowthEdge',
    verifiedSource: 'Google Review',
  },
  {
    id: 'rev-3',
    author: 'Abdullah Basharat',
    rating: 5.0,
    text: 'One of the best digital marketing agencies for business growth',
    verifiedSource: 'Google Review',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    shortDescription:
      'Help businesses improve organic search visibility through structured SEO strategies focused on relevance, authority, and website performance.',
    fullDescription:
      'Search engines connect ready buyers with businesses that demonstrate relevance, technical excellence, and authority. Our SEO approach aligns on-page optimization, technical stability, off-page authority, and local discovery into a coherent, sustainable growth strategy.',
    route: 'seo-services',
    ctaText: 'Explore SEO Services',
    features: [
      'Comprehensive keyword & search intent analysis',
      'Technical crawlability & mobile performance audits',
      'On-page content and metadata optimization',
      'Clean internal architecture & structured data',
      'Search-engine friendly URL hierarchy',
      'Sustainable organic ranking support',
    ],
  },
  {
    id: 'off-page-seo',
    title: 'Off-Page SEO',
    shortDescription:
      'Strengthen website authority and online credibility through carefully planned off-page SEO activities.',
    fullDescription:
      'A website cannot rely exclusively on internal content to achieve authority. Off-page SEO establishes genuine trust across external digital platforms, building legitimate link equity, trusted citations, and authentic industry recognition.',
    route: 'off-page-seo',
    ctaText: 'Explore Off-Page SEO',
    features: [
      'High-quality backlink development',
      'Editorial guest posting on relevant industry sites',
      'Relevant business citations & local directories',
      'Brand mentions & digital PR exposure',
      'Outreach to reputable publishers',
      'Competitor link profile analysis',
      'Authority building without spam shortcuts',
    ],
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription:
      'Help businesses develop a professional presence across relevant social media channels and reach audiences with clear, consistent communication.',
    fullDescription:
      'Professional social media builds familiarity and trust before a prospect even visits your website. We help companies design consistent messaging, engage target audiences, and reinforce brand authority across key digital channels.',
    route: 'social-media-marketing',
    ctaText: 'Explore Social Media',
    features: [
      'Strategic content calendar & theme planning',
      'Consistent brand voice and messaging',
      'Audience engagement & community interaction',
      'Targeted campaign planning (Meta, LinkedIn, etc.)',
      'Visual asset guidance and copy development',
      'Performance tracking & audience insights',
    ],
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    shortDescription:
      'Help businesses improve their visibility for location-based searches, particularly businesses serving customers in Rawalpindi and Islamabad.',
    fullDescription:
      'When nearby customers search for your services in Rawalpindi or Islamabad, your business must appear prominently on map packs and localized search results with complete, accurate, and compelling information.',
    route: 'local-seo',
    ctaText: 'Explore Local SEO',
    features: [
      'Google Business Profile setup and optimization',
      'Location-based keyword targeting for twin cities',
      'Consistent NAP (Name, Address, Phone) citations',
      'Localized content & landing page refinement',
      'Review visibility & customer sentiment management',
      'Geo-relevant business directory submissions',
    ],
  },
  {
    id: 'website-seo',
    title: 'Website SEO',
    shortDescription:
      'Improve the search-readiness of business websites through solid technical foundations and clear content structure.',
    fullDescription:
      'Before driving traffic, your website must be technically sound, quick to load, effortless to crawl, and simple for search engines to index. We audit and improve fundamental site architecture.',
    route: 'services',
    ctaText: 'Explore Website SEO',
    features: [
      'Logical page hierarchy and navigation flow',
      'Optimized meta titles and descriptive tags',
      'Strategic internal linking architecture',
      'Search-friendly URL formatting',
      'Image optimization guidance & ALT text',
      'Core technical accessibility checks',
    ],
  },
  {
    id: 'digital-strategy',
    title: 'Digital Marketing Strategy',
    shortDescription:
      'Help businesses identify the digital marketing channels and priorities most relevant to their goals.',
    fullDescription:
      'Avoid wasting marketing budget on scattered, disconnected tactics. We develop clear, actionable roadmaps that align your online presence directly with your business growth objectives.',
    route: 'services',
    ctaText: 'Explore Digital Strategy',
    features: [
      'Market & competitor landscape evaluation',
      'Target customer search journey mapping',
      'Channel prioritization for maximum return',
      'Actionable milestone-driven roadmaps',
      'Clear KPIs and measurement frameworks',
      'Direct, jargon-free consultation',
    ],
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Clear Strategy',
    description:
      'Marketing recommendations should connect directly to business goals rather than following trends without purpose. We explain the "why" behind every action.',
  },
  {
    title: 'Focus on Sustainable Growth',
    description:
      'We prioritize long-term digital improvement and ethical white-hat practices instead of dangerous shortcuts or risky tactics that risk penalties.',
  },
  {
    title: 'Search Visibility',
    description:
      'Help businesses become easier to discover when potential customers actively search for relevant products or services in your market.',
  },
  {
    title: 'Professional Communication',
    description:
      'We explain recommendations, strategies, and progress in plain, transparent language without drowning you in unverified jargon.',
  },
  {
    title: 'Local Understanding',
    description:
      'Deep familiarity with the regional market dynamics and consumer search behaviors across Rawalpindi, Islamabad, and broader Pakistani commerce.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    description:
      'Learn about the business, customers, competitors, website, current online presence, and specific marketing objectives.',
  },
  {
    step: '02',
    title: 'Assess',
    description:
      'Identify important opportunities and weaknesses across search visibility, website SEO, off-page authority, local presence, and social media.',
  },
  {
    step: '03',
    title: 'Plan',
    description:
      'Build a focused digital marketing strategy based on business priorities, resource allocation, and realistic growth timelines.',
  },
  {
    step: '04',
    title: 'Improve',
    description:
      'Implement, monitor, refine, and strengthen the digital presence over time through disciplined execution and transparent communication.',
  },
];

export const SEO_PILLARS = [
  {
    title: 'Technical SEO',
    description:
      "Improve the website's technical foundation so search engines can easily access, crawl, and understand important pages.",
    points: ['Crawlability & indexing', 'Site speed & performance', 'Mobile usability & clean structure'],
  },
  {
    title: 'On-Page SEO',
    description:
      'Improve page content, headings, metadata, structure, keywords, internal links, and topical relevance.',
    points: ['Meta titles & descriptions', 'Clear heading hierarchy', 'Content search intent alignment'],
  },
  {
    title: 'Off-Page SEO',
    description:
      'Build external signals that strengthen online authority, trust, reputation, and credibility across the web.',
    points: ['Quality backlink building', 'Editorial guest posts', 'Legitimate directory citations'],
  },
  {
    title: 'Local SEO',
    description:
      'Improve visibility for searches connected with a city, area, or local service in Rawalpindi & Islamabad.',
    points: ['Google Business Profile', 'Consistent local citations', 'Geographic relevance signals'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'how-off-page-seo-helps-build-website-authority',
    title: 'How Off-Page SEO Helps Build Website Authority',
    category: 'Off-Page SEO',
    summary:
      'Discover why external signals, brand mentions, and relevant backlinks are critical for establishing search engine trust.',
    readTime: '5 min read',
    content: [
      'Search engines like Google do not evaluate websites solely in isolation. While on-page content explains what your business offers, off-page signals help search engines evaluate whether other trusted sources agree that your business is reputable and reliable.',
      'Off-page SEO includes all activities conducted outside of your website to improve its authority. This involves earning backlinks from credible websites, publishing authoritative guest articles, maintaining accurate business directory listings, and cultivating positive brand mentions across digital channels.',
      'A natural, high-relevance backlink profile acts as a digital vote of confidence. When reputable industry publishers link back to your resource, search engines interpret that as verification of your credibility.',
      'For businesses in Pakistan seeking sustainable digital growth, focusing on quality outreach and authentic relationships always outperforms automated link-building schemes that carry severe search penalty risks.',
    ],
  },
  {
    id: 'what-makes-a-backlink-valuable',
    title: 'What Makes a Backlink Valuable?',
    category: 'Off-Page SEO',
    summary:
      'Understanding the difference between high-impact editorial backlinks and worthless mass-generated links.',
    readTime: '6 min read',
    content: [
      'In digital marketing, there is a persistent misconception that link building is a pure numbers game. In reality, a single contextual link from an established, topic-relevant publication provides far more value than dozens of spam directory submissions.',
      'A valuable backlink has three core traits: Topical Relevance (the referring site operates within or closely adjacent to your industry), Domain Credibility (the site has genuine search traffic and an authentic editorial process), and Natural Placement (the link appears within useful editorial text rather than footer or sidebar widgets).',
      'Search algorithms continuously penalize artificial link networks. Investing in legitimate digital PR, well-researched guest contributions, and relationship-driven outreach ensures durable link equity that protects your website from algorithmic swings.',
    ],
  },
  {
    id: 'local-seo-how-businesses-can-improve-their-visibility',
    title: 'Local SEO: How Businesses Can Improve Their Visibility',
    category: 'Local SEO',
    summary:
      'Actionable steps for businesses in Rawalpindi and Islamabad to stand out in localized search results and map packs.',
    readTime: '5 min read',
    content: [
      'Whenever customers search for services on their smartphones—whether searching for marketing agencies, consultants, retail stores, or medical clinics—search engines prioritize localized search results.',
      'Improving your local search presence begins with three foundational pillars: optimizing your Google Business Profile with complete operational details, maintaining consistent Name, Address, and Phone (NAP) details across directories, and acquiring authentic reviews from satisfied customers.',
      'Targeting location-specific keywords naturally within your website headers and copy helps search engines recognize your geographic footprint across the twin cities without resorting to spammy keyword repetition.',
    ],
  },
  {
    id: 'on-page-seo-vs-off-page-seo-whats-the-difference',
    title: "On-Page SEO vs Off-Page SEO: What's the Difference?",
    category: 'SEO',
    summary:
      'A clear, jargon-free comparison of on-page optimizations you control directly versus off-page authority signals.',
    readTime: '4 min read',
    content: [
      'On-Page SEO encompasses everything directly on your website that you have complete technical and creative control over: title tags, meta descriptions, heading structure (H1, H2), image ALT tags, body content quality, internal linking, and URL structures.',
      'Off-Page SEO, on the other hand, deals with the external perception of your website across the broader internet: links pointing back to your domain, brand citations on external industry portals, and business directory profiles.',
      'Think of on-page SEO as building a clean, well-organized, welcoming physical store, and off-page SEO as positive word-of-mouth recommendations from reputable people in your city. Both are indispensable for sustainable business growth.',
    ],
  },
  {
    id: 'why-google-business-profile-matters-for-local-businesses',
    title: 'Why Google Business Profile Matters for Local Businesses',
    category: 'Local SEO',
    summary:
      'Why keeping an active, verified, and complete business profile is the single most important local marketing asset.',
    readTime: '5 min read',
    content: [
      'For service-based businesses in Rawalpindi and Islamabad, the Google Business Profile (formerly Google My Business) is often the very first interaction a prospect has with your brand.',
      'A well-managed profile displays accurate opening hours, your direct contact number (+92 321 5516045), genuine customer reviews, service offerings, and high-quality photographs that immediately reassure prospects of your legitimacy.',
      'Regular updates, prompt responses to customer inquiries, and maintaining verified business details signal to search engines that your company is active, responsive, and trustworthy.',
    ],
  },
  {
    id: 'seo-mistakes-small-businesses-should-avoid',
    title: 'SEO Mistakes Small Businesses Should Avoid',
    category: 'SEO',
    summary:
      'Common pitfalls that hurt organic search growth, from keyword stuffing to neglecting mobile usability.',
    readTime: '5 min read',
    content: [
      'Many growing companies struggle with SEO simply because they rely on outdated tactics or fall for unrealistic guarantees from unreliable sources.',
      'The most frequent mistakes include: keyword stuffing (awkwardly cramming target keywords into every sentence), neglecting mobile usability (slow mobile load times frustrate users and penalize rankings), buying cheap mass-link packages that trigger algorithmic penalties, and treating SEO as a one-time task rather than an ongoing strategic discipline.',
      'Sustainable SEO requires patience, clear content tailored to human search intent, and consistent technical hygiene.',
    ],
  },
];

export const SEO_METADATA_MAP: Record<string, { title: string; description: string; canonical: string }> = {
  home: {
    title: 'GrowthEdge | Digital Marketing & SEO Agency Rawalpindi',
    description:
      'GrowthEdge provides SEO, off-page SEO, local SEO and digital marketing services for businesses in Rawalpindi and Islamabad. Contact us to discuss your online growth.',
    canonical: '/',
  },
  services: {
    title: 'Digital Marketing Services | GrowthEdge Agency',
    description:
      'Explore GrowthEdge digital marketing services: SEO, off-page SEO, local SEO, social media marketing, and strategic growth for businesses in Pakistan.',
    canonical: '/services',
  },
  'seo-services': {
    title: 'SEO Services in Rawalpindi & Islamabad | GrowthEdge',
    description:
      'Improve your search visibility with GrowthEdge SEO services, including on-page, off-page, technical and local SEO for businesses in Rawalpindi and Islamabad.',
    canonical: '/seo-services',
  },
  'off-page-seo': {
    title: 'Off-Page SEO & Link Building Services | GrowthEdge',
    description:
      'Build stronger website authority with GrowthEdge off-page SEO services, including quality backlinks, guest posting, citations, outreach and brand mentions.',
    canonical: '/off-page-seo',
  },
  'local-seo': {
    title: 'Local SEO Services Rawalpindi & Islamabad | GrowthEdge',
    description:
      'Improve your local search presence with GrowthEdge local SEO services for businesses targeting customers in Rawalpindi and Islamabad.',
    canonical: '/local-seo',
  },
  'social-media-marketing': {
    title: 'Social Media Marketing Services | GrowthEdge',
    description:
      'Build a professional social media presence, engage target audiences, and reinforce brand credibility with GrowthEdge marketing support.',
    canonical: '/social-media-marketing',
  },
  about: {
    title: 'About GrowthEdge | Digital Marketing & SEO Agency',
    description:
      'Learn about GrowthEdge, a dedicated digital marketing agency helping businesses in Rawalpindi and Islamabad achieve sustainable digital visibility.',
    canonical: '/about',
  },
  reviews: {
    title: 'GrowthEdge Client Reviews | 5.0 Star Google Rating',
    description:
      'Read verified Google client reviews for GrowthEdge digital marketing agency in Rawalpindi and Islamabad. 5.0 star rating based on authentic feedback.',
    canonical: '/reviews',
  },
  blog: {
    title: 'Digital Marketing Insights & SEO Guides | GrowthEdge',
    description:
      'Practical articles and guides about SEO, off-page authority, local search optimization, and business growth from GrowthEdge specialists.',
    canonical: '/blog',
  },
  contact: {
    title: 'Contact GrowthEdge | Request a Free Consultation',
    description:
      'Get in touch with GrowthEdge to discuss your digital marketing and SEO goals in Rawalpindi & Islamabad. Call +92 321 5516045 or request a consultation.',
    canonical: '/contact',
  },
  'thank-you': {
    title: 'Thank You | GrowthEdge Digital Marketing Agency',
    description:
      'Thank you for contacting GrowthEdge. Your consultation request has been received.',
    canonical: '/thank-you',
  },
  privacy: {
    title: 'Privacy Policy | GrowthEdge',
    description: 'Privacy policy for GrowthEdge digital marketing agency.',
    canonical: '/privacy',
  },
  terms: {
    title: 'Terms & Conditions | GrowthEdge',
    description: 'Terms and conditions for GrowthEdge digital marketing services.',
    canonical: '/terms',
  },
};
