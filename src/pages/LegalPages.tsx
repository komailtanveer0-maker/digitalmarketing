import React from 'react';
import { ChevronRight, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

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
            <span className="text-white font-bold">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </span>
          </nav>
        </div>
      </div>

      <section className="py-14 sm:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-zinc-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3 border border-sky-500/30 shadow-xs">
              {isPrivacy ? <Shield size={13} className="text-sky-400" /> : <FileText size={13} className="text-sky-400" />}
              <span>Legal Notice & Transparency</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
            </h1>
            <p className="text-xs text-zinc-400 mt-2">
              Last updated: {new Date().getFullYear()} • [Draft framework ready for final business review]
            </p>
          </div>

          {isPrivacy ? (
            <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
                <p>
                  GrowthEdge collects only the information necessary to provide digital marketing
                  consultation and services. When you submit a consultation request or contact our
                  team, you may voluntarily provide your name, business name, phone number, email
                  address, website URL, and project notes.
                </p>
              </section>

              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">2. How Information Is Used</h2>
                <p>
                  Information submitted through this website is used solely to respond to your
                  inquiry, evaluate your marketing objectives, and prepare recommendations for our
                  discussions. We do not sell, rent, or distribute personal information to third-party
                  data brokers.
                </p>
              </section>

              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">3. Communications & Privacy</h2>
                <p>
                  We communicate with clients and prospects using verified business channels. You
                  may request the removal or update of your submitted contact details at any time by
                  contacting GrowthEdge at {BUSINESS_INFO.phoneDisplay}.
                </p>
              </section>

              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">4. Cookies & Analytics</h2>
                <p>
                  This website may utilize standard, non-invasive analytical tools to measure
                  aggregated site performance and usability. No sensitive personal credentials are
                  stored.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">1. General Services Terms</h2>
                <p>
                  GrowthEdge provides professional digital marketing, search engine optimization,
                  off-page SEO, social media marketing, and strategic digital consulting for
                  businesses primarily in Rawalpindi, Islamabad, and surrounding areas.
                </p>
              </section>

              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">2. Nature of SEO Services</h2>
                <p>
                  Search engines operate via proprietary, continuously evolving algorithms.
                  GrowthEdge uses industry-standard, ethical, white-hat methodologies to improve
                  organic search visibility and website authority. In alignment with professional
                  standards and search guidelines, GrowthEdge does not make artificial or absolute
                  ranking guarantees.
                </p>
              </section>

              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">3. Client Responsibilities</h2>
                <p>
                  Successful digital marketing execution requires mutual collaboration, including
                  timely access to necessary website assets, accurate business details, and prompt
                  feedback on strategy proposals.
                </p>
              </section>

              <section className="space-y-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold text-white">4. Contact Inquiries</h2>
                <p>
                  For formal inquiries regarding our service agreements, please contact the agency
                  directly at {BUSINESS_INFO.phoneDisplay}.
                </p>
              </section>
            </div>
          )}

          <div className="pt-8 border-t border-zinc-800">
            <button
              onClick={() => onNavigate('home')}
              className="btn-3d-white px-6 py-2.5 text-sm font-bold"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
