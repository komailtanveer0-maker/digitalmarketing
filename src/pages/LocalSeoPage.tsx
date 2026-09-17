import React from 'react';
import {
  MapPin,
  Building2,
  Star,
  Compass,
  ArrowRight,
  Phone,
  ChevronRight,
  Search,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface LocalSeoPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const LocalSeoPage: React.FC<LocalSeoPageProps> = ({
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
            <span className="text-white font-bold">Local SEO</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            <MapPin size={13} className="text-sky-400" />
            <span>Twin Cities Geographic Focus</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Local SEO for Rawalpindi & Islamabad Businesses
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            When customers search for a nearby service, your business needs a strong and consistent
            local presence. GrowthEdge helps businesses improve the digital signals that support
            visibility in location-based searches.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-7 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Improve Your Local Visibility</span>
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

      {/* What is Local SEO & Why Local Search Matters */}
      <section className="py-14 sm:py-16 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">What Is Local SEO?</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Local SEO is the specialized process of optimizing your online presence so that your
                business appears prominently when potential customers search for local products,
                services, or storefronts in Rawalpindi, Islamabad, or nearby regions. It connects
                ready buyers with businesses directly within map packs and regional search results.
              </p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">Why Local Search Matters</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether a customer needs a retail supplier, a dental clinic, a legal consultant, or a
                digital marketing agency in Rawalpindi, their initial action is almost always an
                immediate smartphone search. High local visibility ensures that your verified
                phone number, physical service area, and positive customer reviews appear first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Local SEO Pillars */}
      <section className="py-16 md:py-20 bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Complete Local Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Essential Local Search Activities
            </h2>
            <p className="text-base text-zinc-400">
              As a dedicated SEO agency in Rawalpindi serving the twin cities, GrowthEdge covers all
              facets of geographic search prominence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Compass size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Google Business Profile Optimization</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Complete profile configuration, category selections, photo additions, operating
                hours verification, and direct calling setup.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Local Citations</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Registering your business on recognized Pakistani business directories, yellow pages,
                and regional portals with consistent data.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Business Information Consistency</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Harmonizing your Name, Address, and Phone (NAP) details everywhere so search engines
                confidently trust your identity.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Search size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Local Keyword Research</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Identifying terms your potential clients use, such as local SEO services Rawalpindi
                or digital marketing services in Islamabad.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Globe size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Local Website Optimization</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Embedding geographic schema, localized contact details, and location-relevant page
                copy naturally for human readers.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Star size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Customer Reviews & Reputation</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Encouraging authentic client feedback on Google and presenting authentic ratings to
                build genuine local social proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus: Rawalpindi & Islamabad */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Regional Commercial Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Serving the Twin Cities Market
            </h2>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
              Whether you are an established enterprise or a growing local business, GrowthEdge
              provides practical marketing tailored to the economic landscape of Rawalpindi and
              Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin size={18} className="text-sky-400" />
                <span>Rawalpindi Business Market</span>
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                If your target customers operate in Saddar, Bahria Town, Chaklala, or commercial
                sectors across Rawalpindi, an established SEO company Rawalpindi partner helps you
                capture search demand right as buying intent happens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin size={18} className="text-sky-400" />
                <span>Islamabad Business Market</span>
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Businesses seeking SEO services in Islamabad benefit from targeted visibility
                covering Blue Area, executive commercial sectors, and tech corridors where decision
                makers evaluate competitive suppliers online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Make Your Business Discoverable Locally
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Ensure your local presence communicates credibility, exact contact details, and verified
            service competence.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-8 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Improve Your Local Visibility</span>
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
