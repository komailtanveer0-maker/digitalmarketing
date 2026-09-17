import React from 'react';
import {
  Sliders,
  FileCheck,
  Link2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  BarChart,
  ChevronRight,
  Cpu,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface SeoServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const SeoServicesPage: React.FC<SeoServicesPageProps> = ({
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
            <span className="text-white font-bold">SEO Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            Organic Search Specialization
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            SEO Services That Help Businesses Get Found
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            GrowthEdge helps businesses improve their organic search presence through a balanced SEO
            approach covering website optimization, content relevance, authority building, and local
            visibility.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-7 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Discuss Your SEO Goals</span>
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

      {/* What SEO Does */}
      <section className="py-14 sm:py-16 bg-black border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 sm:p-10 space-y-4">
            <h2 className="text-2xl font-bold text-white">What SEO Does</h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              SEO helps search engines understand a website and helps potential customers discover
              relevant businesses when searching online. Rather than relying solely on paid ads that
              stop delivering when budgets pause, organic search provides an enduring channel of
              qualified prospect discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Our SEO Approach (4 Pillars) */}
      <section className="py-16 bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Balanced Framework
            </span>
            <h2 className="text-3xl font-extrabold text-white">Our SEO Approach</h2>
            <p className="text-zinc-400 text-base">
              A four-pillar foundation ensuring every critical dimension of search engine
              recognition is methodically optimized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 shadow-xs space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Sliders size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Technical SEO</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ensuring search engine crawlers can access, render, and index your critical pages
                without roadblocks.
              </p>
            </div>

            <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 shadow-xs space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <FileCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">On-Page SEO</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Refining page titles, semantic structure, content relevance, and internal linking.
              </p>
            </div>

            <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 shadow-xs space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <Link2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Off-Page SEO</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Building external brand mentions, editorial links, and industry credibility.
              </p>
            </div>

            <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 shadow-xs space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Local SEO</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Optimizing location signals and local search map packs across Rawalpindi and
                Islamabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Research & Deep Modules */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Module 1: SEO Research */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-bold rounded-md">
                <BarChart size={13} className="text-sky-400" />
                <span>Foundation First</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">SEO Research</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Understanding what your actual customers are searching for before modifying code or
                writing content prevents wasted effort.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Keyword research', desc: 'Identify high-relevance search terms used by prospective buyers.' },
                { title: 'Competitor research', desc: 'Analyze competitive search positioning across your market.' },
                { title: 'Search intent analysis', desc: 'Map keywords to informational, commercial, or local intent.' },
                { title: 'Page opportunity identification', desc: 'Spot existing pages capable of quick ranking improvements.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Module 2: On-Page SEO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-10 border-t border-zinc-800">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-bold rounded-md">
                <FileCheck size={13} className="text-sky-400" />
                <span>Content & Relevance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">On-Page SEO</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Optimizing individual page components so search algorithms understand topic
                relevance and visitors experience intuitive clarity.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Page titles aligned with search queries',
                'Engaging, click-focused meta descriptions',
                'Logical heading structure (H1, H2, H3)',
                'Structured content organization & readability',
                'Strategic internal linking between related pages',
                'Image optimization guidance & ALT text',
                'Search-friendly URL structure',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-zinc-300 p-2">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Module 3: Technical SEO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-10 border-t border-zinc-800">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-bold rounded-md">
                <Cpu size={13} className="text-sky-400" />
                <span>Under the Hood</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical SEO</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Addressing underlying infrastructure so technical barriers do not hinder indexing
                or degrade mobile user experience.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Crawlability & XML sitemap efficiency',
                'Indexing checks & robots.txt directives',
                'Website hierarchy & logical structure',
                'Mobile usability & viewport standards',
                'Core technical issues resolution',
                'Page performance considerations',
                'Broken links & 404 monitoring',
                'Redirect issues & canonicalization',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-zinc-300 p-2">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Module 4: Off-Page SEO & Local SEO Integration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-zinc-800">
            {/* Off-Page Card */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Off-Page SEO Integration</h3>
                <Link2 size={20} className="text-sky-400" />
              </div>
              <p className="text-sm text-zinc-400">
                Building external signals that establish site authority across the web.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Relevant backlink development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Guest posting & publisher outreach</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Business directories & verified citations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Brand mentions & digital authority</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('off-page-seo')}
                  className="btn-3d-white px-4 py-2 text-xs font-bold gap-1.5"
                >
                  <span>Learn more about Off-Page SEO</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Local SEO Card */}
            <div className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Local SEO Integration</h3>
                <MapPin size={20} className="text-sky-400" />
              </div>
              <p className="text-sm text-zinc-400">
                Tailoring visibility specifically for Rawalpindi & Islamabad customers.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Local keyword targeting for twin cities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Location signals & map visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Google Business Profile support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Business information consistency</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('local-seo')}
                  className="btn-3d-white px-4 py-2 text-xs font-bold gap-1.5"
                >
                  <span>Learn more about Local SEO</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Improve Your Organic Search Visibility?
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Let's evaluate your current search presence and outline practical steps for sustainable
            growth in Rawalpindi, Islamabad, or beyond.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary w-full sm:w-auto px-8 py-3.5 text-base font-extrabold gap-2"
            >
              <span>Discuss Your SEO Goals</span>
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
