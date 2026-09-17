import React from 'react';
import {
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  TrendingUp,
  Search,
  Link2,
  Share2,
  MapPin,
  Globe,
  Sliders,
  FileCheck,
  Building2,
  Send,
  Users,
  Compass,
  Check,
} from 'lucide-react';
import { BUSINESS_INFO, VERIFIED_REVIEWS } from '../data/content';
import { PageRoute } from '../types';
import { MarketingDashboardIllustration } from '../components/MarketingDashboardIllustration';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#09090b] text-zinc-100">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section
        id="hero-section"
        className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-black via-[#09090b] to-zinc-950 border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-bold tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>DIGITAL MARKETING AGENCY IN RAWALPINDI & ISLAMABAD</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.15]">
                Grow Your Business With Smarter Digital Marketing
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                GrowthEdge helps businesses strengthen their online presence through SEO, off-page
                SEO, social media marketing, and practical digital strategies designed to improve
                visibility, authority, traffic, and business growth.
              </p>

              {/* CTAs with 3D Animated Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenConsultation}
                  className="btn-3d-primary px-7 py-3.5 text-base font-extrabold gap-2"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  id="hero-secondary-cta"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="btn-3d-white px-6 py-3.5 text-base font-bold gap-2"
                >
                  <Phone size={17} className="text-sky-400" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Line */}
              <div className="pt-2 flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  ★ 5.0 Google Rating{' '}
                  <span className="font-normal text-zinc-400">
                    (based on {BUSINESS_INFO.reviewCount} Google reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <MarketingDashboardIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST STRIP */}
      {/* ========================================================================= */}
      <section
        id="trust-strip"
        className="bg-black py-6 border-b border-zinc-800"
        aria-label="Core Agency Pillars"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-sky-500/30 shadow-2xs flex items-center justify-center text-sky-400 shrink-0">
                <Search size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">SEO-Focused</h4>
                <p className="text-xs text-zinc-400">Structured strategies</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-sky-500/30 shadow-2xs flex items-center justify-center text-sky-400 shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Business Growth</h4>
                <p className="text-xs text-zinc-400">Practical milestones</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-sky-500/30 shadow-2xs flex items-center justify-center text-sky-400 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Local Expertise</h4>
                <p className="text-xs text-zinc-400">Twin cities market</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-sky-500/30 shadow-2xs flex items-center justify-center text-sky-400 shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Verified Reviews</h4>
                <p className="text-xs text-zinc-400">5.0 Star rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE AGENCY SERVICES OVERVIEW */}
      {/* ========================================================================= */}
      <section id="services-summary-section" className="py-16 md:py-24 bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Agency Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Digital Marketing Services
            </h2>
            <p className="text-base text-zinc-400">
              From search engine visibility to active audience engagement, GrowthEdge provides
              grounded, high-impact marketing services for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. SEO Services */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-xs flex items-center justify-center">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">SEO Services</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Help your website earn relevant organic visibility in search results through
                  structured keyword analysis, technical foundations, and content alignment.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Keyword & search intent analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>On-page structure & technical health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Long-term search visibility strategy</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('seo-services')}
                  className="btn-3d-white w-full py-2.5 px-4 text-sm font-bold gap-2"
                >
                  <span>Explore SEO Services</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* 2. Off-Page SEO */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-xs flex items-center justify-center">
                  <Link2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Off-Page SEO</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Strengthen website authority and online credibility through carefully planned
                  off-page SEO activities without promising artificial rankings.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Quality backlink development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Editorial guest posting & outreach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Business directory submissions & citations</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('off-page-seo')}
                  className="btn-3d-white w-full py-2.5 px-4 text-sm font-bold gap-2"
                >
                  <span>Explore Off-Page SEO</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* 3. Social Media Marketing */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-xs flex items-center justify-center">
                  <Share2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Social Media Marketing</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Help businesses develop a professional presence across relevant social media
                  channels and reach audiences with clear, consistent communication.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Content calendar & theme planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Audience engagement & brand voice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Targeted campaign support</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('social-media-marketing')}
                  className="btn-3d-white w-full py-2.5 px-4 text-sm font-bold gap-2"
                >
                  <span>Explore Social Media</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* 4. Local SEO */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-xs flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Local SEO</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Help businesses improve their visibility for location-based searches, particularly
                  businesses serving customers in Rawalpindi and Islamabad.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Google Business Profile support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Local citation consistency (NAP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Location relevance & map discovery</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('local-seo')}
                  className="btn-3d-white w-full py-2.5 px-4 text-sm font-bold gap-2"
                >
                  <span>Explore Local SEO</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* 5. Website SEO */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-xs flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Website SEO</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Improve the search-readiness of business websites through page structure, meta
                  information, internal links, and content organization.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Page structure & heading hierarchy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Search-friendly URL organization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Technical SEO basics & meta data</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('services')}
                  className="btn-3d-white w-full py-2.5 px-4 text-sm font-bold gap-2"
                >
                  <span>Learn About Website SEO</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* 6. Digital Marketing Strategy */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-xs flex items-center justify-center">
                  <Sliders size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Digital Marketing Strategy</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Help businesses identify the digital marketing channels and priorities most
                  relevant to their goals without wasting marketing resources.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Target audience & competitor research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Channel prioritization for twin cities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-sky-400" />
                    <span>Measurable growth milestones</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={onOpenConsultation}
                  className="btn-3d-white w-full py-2.5 px-4 text-sm font-bold gap-2"
                >
                  <span>Request Strategy Session</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED OFF-PAGE SEO SECTION */}
      {/* ========================================================================= */}
      <section
        id="featured-off-page-seo"
        className="py-16 md:py-24 bg-black text-white border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Authority & Reputation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build Authority Beyond Your Website
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Strong website content is important, but search engines also look at signals beyond
              your website. Off-page SEO helps strengthen your brand's authority, trust, reputation,
              and visibility across the web.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-sky-400">
              GrowthEdge Off-Page SEO Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Link2 size={20} />
              </div>
              <h4 className="text-lg font-bold text-white">High-Quality Backlink Building</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Build relevant links that strengthen the authority and credibility of important
                website pages.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <FileCheck size={20} />
              </div>
              <h4 className="text-lg font-bold text-white">Guest Posting</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Develop opportunities to publish useful content on relevant external websites.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <h4 className="text-lg font-bold text-white">Business Directory Submissions</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Improve the consistency and visibility of business information across appropriate
                online directories.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Globe size={20} />
              </div>
              <h4 className="text-lg font-bold text-white">Brand Mentions & Citations</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Strengthen the presence of the business across relevant websites and online
                platforms.
              </p>
            </div>

            {/* Item 5 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Send size={20} />
              </div>
              <h4 className="text-lg font-bold text-white">Outreach</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Identify relevant websites, publishers, and online opportunities for brand exposure
                and relationship building.
              </p>
            </div>

            {/* Item 6 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Users size={20} />
              </div>
              <h4 className="text-lg font-bold text-white">Community & Industry Engagement</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Participate appropriately in relevant online discussions and communities where
                genuine contribution can strengthen brand visibility.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('off-page-seo')}
              className="btn-3d-primary px-8 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Talk to an SEO Specialist</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY CHOOSE GROWTHEDGE */}
      {/* ========================================================================= */}
      <section id="why-choose-section" className="py-16 md:py-24 bg-zinc-950/70 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Agency Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Businesses Choose GrowthEdge
            </h2>
            <p className="text-base text-zinc-400">
              Straightforward digital marketing designed to support credible, sustainable business
              outcomes without exaggerated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-white">Clear Strategy</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Marketing recommendations should connect directly to business goals rather than
                following trends without purpose.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-white">Focus on Sustainable Growth</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Prioritize long-term digital improvement instead of shortcuts or risky tactics.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Search Visibility</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Help businesses become easier to discover when potential customers search for
                relevant products or services.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-xl font-bold text-white">Professional Communication</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Explain recommendations and marketing activity in clear language.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 space-y-3 shadow-xs md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h3 className="text-xl font-bold text-white">Local Understanding</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Provide digital marketing support relevant to businesses targeting customers in
                Rawalpindi, Islamabad, and surrounding markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOW THE PROCESS WORKS */}
      {/* ========================================================================= */}
      <section id="process-section" className="py-16 md:py-24 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Simple Approach to Digital Growth
            </h2>
            <p className="text-base text-zinc-400">
              A structured four-step path designed to guide your business from evaluation to
              sustainable digital improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs relative hover:border-sky-500/40 transition-colors">
              <div className="text-3xl font-extrabold text-sky-400/40 mb-2">01</div>
              <h3 className="text-lg font-bold text-white mb-2">1. Understand</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Learn about the business, customers, competitors, website, current online presence,
                and marketing objectives.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs relative hover:border-sky-500/40 transition-colors">
              <div className="text-3xl font-extrabold text-sky-400/40 mb-2">02</div>
              <h3 className="text-lg font-bold text-white mb-2">2. Assess</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Identify important opportunities and weaknesses in areas such as search visibility,
                website SEO, off-page authority, local presence, and social media.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs relative hover:border-sky-500/40 transition-colors">
              <div className="text-3xl font-extrabold text-sky-400/40 mb-2">03</div>
              <h3 className="text-lg font-bold text-white mb-2">3. Plan</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Build a focused digital marketing strategy based on business priorities.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs relative hover:border-sky-500/40 transition-colors">
              <div className="text-3xl font-extrabold text-sky-400/40 mb-2">04</div>
              <h3 className="text-lg font-bold text-white mb-2">4. Improve</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Implement, monitor, refine, and strengthen the digital presence over time.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary px-8 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Discuss Your Business</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FOUR AREAS OF SEO */}
      {/* ========================================================================= */}
      <section id="seo-explanation-section" className="py-16 md:py-24 bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Demystifying SEO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              SEO Is More Than Adding Keywords
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Effective SEO requires several parts of a website's digital presence to work together.
              Search engines consider website relevance, content quality, technical accessibility,
              user experience, authority, links, and other signals when deciding how pages appear in
              search results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Sliders size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Technical SEO</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Improve the website's technical foundation so search engines can access and
                understand important pages.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <FileCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">On-Page SEO</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Improve page content, headings, metadata, structure, keywords, internal links, and
                relevance.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Link2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Off-Page SEO</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Build external signals that strengthen online authority and credibility.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Local SEO</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Improve visibility for searches connected with a city, area, or local service.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('seo-services')}
              className="btn-3d-white px-7 py-3 text-sm font-bold gap-2"
            >
              <span>Explore SEO Services</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. LOCAL SEO SECTION (RAWALPINDI & ISLAMABAD) */}
      {/* ========================================================================= */}
      <section
        id="local-seo-section"
        className="py-16 md:py-24 bg-black border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <MapPin size={13} className="text-sky-400" />
                <span>Rawalpindi & Islamabad Core Market</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Digital Marketing for Businesses in Rawalpindi & Islamabad
              </h2>

              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Customers increasingly search online before contacting a business. A strong local
                digital presence can help companies become more visible when people in Rawalpindi,
                Islamabad, and surrounding areas search for relevant services.
              </p>

              <p className="text-base text-zinc-400 leading-relaxed">
                GrowthEdge helps businesses improve the digital signals that support local
                discovery, credibility, and customer action.
              </p>

              {/* Local SEO Activities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Website location optimization',
                  'Google Business Profile support',
                  'Local citations',
                  'Business information consistency',
                  'Local keyword research',
                  'Location-relevant content',
                  'Review visibility',
                  'Local backlink opportunities',
                ].map((act) => (
                  <div key={act} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('local-seo')}
                  className="btn-3d-primary px-7 py-3.5 text-base font-extrabold gap-2"
                >
                  <span>Improve Your Local Visibility</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Card: Twin Cities Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 shadow-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">Local Search Footprint</h3>
                    <p className="text-xs text-zinc-400">Twin Cities Regional Target Area</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sky-950/80 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold">
                    <Compass size={20} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                      Rawalpindi Focus
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Optimizing for high-intent customer searches across commercial hubs, Saddar,
                      Bahria Town, and major business sectors.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                      Islamabad Focus
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Strengthening map rankings and organic relevance across Blue Area, F-sectors,
                      I-sectors, and executive business circles.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-xs font-medium text-zinc-400">
                    Need immediate assistance? Call{' '}
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-bold text-sky-400 hover:text-sky-300 hover:underline"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. GOOGLE REVIEWS SECTION */}
      {/* ========================================================================= */}
      <section id="reviews-section" className="py-16 md:py-24 bg-zinc-950/80 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Verified Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Clients Say About GrowthEdge
            </h2>

            {/* Rating Display */}
            <div className="inline-flex items-center gap-2 pt-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-zinc-200">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">5.0 ★ Google Rating</span>
              <span className="text-xs text-zinc-400">
                (Based on {BUSINESS_INFO.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* The 3 Strictly Verified Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERIFIED_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-zinc-900/90 rounded-2xl p-7 border border-zinc-800 shadow-xs flex flex-col justify-between hover:border-sky-500/30 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-sm sm:text-base">
                      {review.author}
                    </div>
                    <div className="text-xs text-zinc-400">{review.verifiedSource}</div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-sky-950/80 rounded-md border border-sky-500/30 text-sky-300">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('reviews')}
              className="btn-3d-white px-6 py-2.5 text-sm font-bold gap-2"
            >
              <span>View Review Details</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CALL-TO-ACTION SECTION */}
      {/* ========================================================================= */}
      <section
        id="final-cta-section"
        className="py-16 md:py-24 bg-gradient-to-b from-black via-[#09090b] to-black text-white relative overflow-hidden border-t border-zinc-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Let's Talk Business Growth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Ready to Strengthen Your Online Presence?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Tell GrowthEdge about your business, your current marketing challenges, and what you
            want to achieve. The team can help identify practical opportunities for improving your
            digital presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="final-cta-primary-btn"
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-8 py-4 text-base font-extrabold gap-2"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={18} />
            </button>

            <a
              id="final-cta-phone-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-3d-white w-full sm:w-auto px-7 py-4 text-base font-bold gap-2"
            >
              <Phone size={18} className="text-sky-400" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-zinc-500 font-medium">
            Serving businesses in Rawalpindi, Islamabad, and nationwide
          </div>
        </div>
      </section>
    </div>
  );
};
