import React from 'react';
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Phone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const values = [
    {
      name: 'Clarity',
      desc: 'We explain search strategies, technical audits, and performance indicators in direct, unambiguous language without hiding behind buzzwords.',
    },
    {
      name: 'Professionalism',
      desc: 'We communicate honestly about realistic timelines, avoid dangerous black-hat shortcuts, and respect your brand standards in all marketing materials.',
    },
    {
      name: 'Relevance',
      desc: 'Marketing activity must tie directly to what your prospective customers are actually seeking, ensuring every effort contributes to business value.',
    },
    {
      name: 'Quality',
      desc: 'Whether building backlinks, creating content, or refining page architecture, quality and editorial merit matter more than inflated numbers.',
    },
    {
      name: 'Consistency',
      desc: 'Sustainable digital presence requires regular monitoring, reliable communication, and steady execution rather than sporadic bursts of effort.',
    },
    {
      name: 'Long-Term Thinking',
      desc: 'We focus on sustainable growth and ethical optimizations that protect your domain against sudden algorithm shifts.',
    },
  ];

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
            <span className="text-white font-bold">About GrowthEdge</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            About Our Agency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            About GrowthEdge
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>
              GrowthEdge is a digital marketing agency focused on helping businesses strengthen
              their presence online.
            </p>
            <p>
              The agency works across areas such as search engine optimization, off-page SEO, social
              media marketing, local visibility, and digital strategy.
            </p>
            <p>
              The approach is simple: understand what a business wants to achieve, identify the
              digital opportunities that matter most, and develop practical marketing strategies
              around those priorities.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-7 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Get a Free Consultation</span>
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

      {/* Our Approach & Our Focus */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Our Approach */}
            <div className="bg-zinc-900/80 rounded-2xl p-8 sm:p-10 border border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Compass size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Approach</h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                We believe digital marketing should always be grounded in business realities. Instead
                of treating SEO or social media as isolated vanity exercises, we view them as
                measurable tools to help potential customers discover, evaluate, and choose your
                business.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                By focusing on verified technical fundamentals, authentic link equity, and clear
                messaging, we build digital assets that produce lasting business value.
              </p>
            </div>

            {/* Our Focus */}
            <div className="bg-zinc-900/80 rounded-2xl p-8 sm:p-10 border border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Focus</h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Our primary market focus is helping businesses across Rawalpindi and Islamabad
                establish regional prominence while supporting national and international visibility
                where appropriate.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                Whether strengthening your local Google Business Profile presence, improving on-page
                relevance, or conducting legitimate outreach, our focus remains on ethical, durable
                online growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Value */}
      <section className="py-16 md:py-20 bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What We Value
            </h2>
            <p className="text-base text-zinc-400">
              The core principles that govern our client recommendations, execution standards, and
              working relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.name}
                className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-2 hover:border-sky-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400 flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{v.name}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Business Information */}
      <section className="py-14 bg-black border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3 text-center">
            <h3 className="text-base font-bold text-white">
              Verified Business Information & Team Profiles
            </h3>
            <p className="text-xs text-zinc-400 max-w-xl mx-auto">
              GrowthEdge adheres strictly to truthful representation. Direct all client inquiries to
              our verified business contact at{' '}
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sky-400 font-semibold hover:underline">
                {BUSINESS_INFO.phoneDisplay}
              </a>
              .
            </p>
            <div className="pt-2 text-[11px] text-zinc-500 italic">
              [Verified leadership biographies and physical studio appointments will be scheduled directly via consultation]
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Discuss Your Business Growth?
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Contact GrowthEdge to explore practical digital marketing opportunities for your
            business.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-8 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Get a Free Consultation</span>
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
