import React from 'react';
import {
  Share2,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Target,
  BarChart2,
  Calendar,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface SocialMediaPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({
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
            <span className="text-white font-bold">Social Media Marketing</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            Brand Communication & Reach
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Build a Stronger Social Media Presence
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            GrowthEdge helps businesses develop a professional presence across relevant social media
            channels and reach audiences with clear, consistent communication.
          </p>
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

      {/* How Professional Social Media Helps Businesses */}
      <section className="py-14 sm:py-16 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Value Proposition
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              How Social Media Supports Business Goals
            </h2>
            <p className="text-zinc-400 text-base">
              Social media is not just about posting randomly. When executed strategically, it
              reinforces trust and credibility across every customer touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Communicate with customers',
                desc: 'Maintain an active channel for direct customer inquiries, feedback, and helpful conversations.',
              },
              {
                title: 'Build brand visibility',
                desc: 'Keep your business top-of-mind so when prospects require your service, your name is remembered.',
              },
              {
                title: 'Share useful information',
                desc: 'Educate your audience with industry advice, product updates, and business insights that establish authority.',
              },
              {
                title: 'Maintain brand consistency',
                desc: 'Ensure your tone, imagery, and positioning align seamlessly with your website and brand standards.',
              },
              {
                title: 'Promote products or services',
                desc: 'Introduce new offerings or highlight core capabilities with structured, compelling messaging.',
              },
              {
                title: 'Support customer trust',
                desc: 'A verified, professional social presence provides social proof that reassures prospective buyers.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 space-y-2 hover:border-sky-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center mb-3">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Services Offered */}
      <section className="py-16 md:py-20 bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Service Modules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Social Media Capabilities
            </h2>
            <p className="text-base text-zinc-400">
              Clear, practical support designed around your existing organizational workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Target size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Social Strategy</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Defining target personas, tone of voice, content themes, and key messaging
                priorities tailored to your audience.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Calendar size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Content Planning</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Creating forward-looking editorial calendars so publishing remains disciplined,
                predictable, and organized.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Content Creation Support</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Writing engaging post copy, drafting professional announcements, and preparing
                structured visual layouts.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <BarChart2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Campaign Planning</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Structuring promotional initiatives around product launches, seasonal campaigns, or
                specific business milestones.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Audience Engagement</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Establishing guidelines for polite, professional community responses and customer
                service interactions.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 shadow-xs space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shadow-2xs flex items-center justify-center">
                <Share2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Performance Monitoring</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Reviewing engagement trends and follower interactions to refine ongoing content
                directions pragmatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Clarification Notice */}
      <section className="py-14 bg-black border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Platform Focus</h3>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Depending on your specific business goals, platforms such as <strong className="text-white">Facebook</strong>,{' '}
            <strong className="text-white">Instagram</strong>, and <strong className="text-white">LinkedIn</strong> offer distinct audience
            demographics. Rather than spreading efforts thin across every available network,
            GrowthEdge helps identify and support the specific channels most meaningful for your
            business.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Strengthen Your Social Media Strategy
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Reach target audiences with consistent messaging that builds trust and supports your
            overall business growth.
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
