import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-black text-zinc-400 pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          {/* Column 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-hidden"
              aria-label="GrowthEdge Home"
            >
              <Logo variant="dark" size="md" />
            </button>
            <p className="text-zinc-400 text-[15px] leading-relaxed max-w-sm">
              GrowthEdge is a digital marketing agency helping businesses improve their online visibility,
              search presence, authority, and digital growth.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-950/60 border border-sky-500/30 text-xs font-medium text-sky-300 shadow-2xs">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>Serving businesses in Rawalpindi & Islamabad</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('seo-services')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Search Engine Optimization (SEO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('off-page-seo')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Off-Page SEO & Authority
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('local-seo')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Local SEO (Twin Cities)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('social-media-marketing')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Website SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Digital Marketing Strategy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  About GrowthEdge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('reviews')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Client Reviews</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-950/60 text-amber-300 border border-amber-500/30 rounded-sm">
                    ★ 5.0
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('blog')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Blog & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="text-zinc-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact GrowthEdge</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-medium">Direct Phone</div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-medium">Primary Service Market</div>
                  <span className="text-zinc-200 font-medium">{BUSINESS_INFO.serviceArea}</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="btn-3d-primary inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Compliance & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} GrowthEdge. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => handleLinkClick('privacy')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLinkClick('terms')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
