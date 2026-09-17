import React from 'react';
import {
  Link2,
  FileCheck,
  Building2,
  Globe,
  Send,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface OffPageSeoPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const OffPageSeoPage: React.FC<OffPageSeoPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="w-full bg-[#09090b] text-zinc-100">
      {/* Breadcrumbs */}
      <div className="bg-black border-b border-zinc-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-medium text-zinc-400 space-x-2">
            <button onClick={() => onNavigate('home')} className="hover:text-sky-300 transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight size={13} className="text-zinc-600" />
            <button onClick={() => onNavigate('services')} className="hover:text-sky-300 transition-colors cursor-pointer">
              Services
            </button>
            <ChevronRight size={13} className="text-zinc-600" />
            <span className="text-white font-bold">Off-Page SEO</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            External Signals & Trust
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Off-Page SEO That Builds Online Authority
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A website's reputation is influenced by more than what appears on its own pages.
            Off-page SEO focuses on external signals that can help search engines and users
            recognize a business as relevant, credible, and established.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-7 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Build Your Website Authority</span>
              <ArrowRight size={18} />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-3d-white w-full sm:w-auto px-6 py-3.5 text-base font-bold gap-2"
            >
              <Phone size={16} className="text-sky-400" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* What Is Off-Page SEO & Why Website Authority Matters */}
      <section className="py-14 sm:py-16 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">What Is Off-Page SEO?</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Off-page SEO includes all promotional and authority-building activities that occur
                outside the boundaries of your own website. While on-page SEO optimizes what you say
                about yourself, off-page SEO influences what other reputable third parties say about
                your business through links, citations, reviews, and verified listings.
              </p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">Why Website Authority Matters</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Search engines aim to deliver the most trustworthy answers to their users. If two
                competing websites have similar on-page content, the site with stronger verified
                authority, higher-quality editorial backlinks, and consistent business citations
                will consistently outperform the other in search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Off-Page SEO Services */}
      <section className="py-16 md:py-20 bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Authority Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Off-Page SEO Services
            </h2>
            <p className="text-base text-zinc-400">
              Ethical, white-hat approaches focused on long-term digital standing across external
              platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Link2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Link Building</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Building contextual, editorial links from reputable websites within your business or
                industry niche.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <FileCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Guest Posting</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Developing insightful, relevant articles published on external platforms that
                position your brand as a helpful knowledge source.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Globe size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Brand Mentions</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Earning unlinked and linked brand mentions across digital media outlets and industry
                blogs to increase algorithmic trust.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Local & Business Citations</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Submitting verified business records with exact name, address, and phone across
                prominent regional directories.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Send size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Outreach</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Professional communication with editors, journalists, and webmasters to build
                genuine business relationships.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Competitor Backlink Research</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Evaluating where your competitors earn their external authority and finding legitimate
                opportunities for your domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Over Quantity */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Ethical SEO Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Quality Links Matter More Than Large Numbers
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Effective link building must focus on relevance, credibility, quality, context, and
              natural placement rather than generating large numbers of low-quality links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What GrowthEdge Prioritizes */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <ShieldCheck size={22} className="text-sky-400" />
                <span>What GrowthEdge Prioritizes</span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>Topic-relevant publications with genuine human readership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>Contextual editorial links integrated naturally within useful text</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>Legitimate local business directory listings in Pakistan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>Sustainable, risk-free link profile growth over time</span>
                </li>
              </ul>
            </div>

            {/* What GrowthEdge Strictly Avoids */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <ShieldAlert size={22} className="text-zinc-400" />
                <span>Tactics We Strictly Avoid</span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0"></span>
                  <span>Link farms and private blog networks (PBNs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0"></span>
                  <span>Automated spam generators and mass comment software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0"></span>
                  <span>Irrelevant directory submissions that trigger search penalties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0"></span>
                  <span>Unverifiable "Guaranteed #1 Ranking" gimmicks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Build Long-Term Authority for Your Domain
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Strengthen your search standing with legitimate outreach and sustainable authority
            development.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-8 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Build Your Website Authority</span>
              <ArrowRight size={18} />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-3d-white w-full sm:w-auto px-6 py-3.5 text-base font-bold gap-2"
            >
              <Phone size={16} className="text-sky-400" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
