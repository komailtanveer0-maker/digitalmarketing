import React from 'react';
import {
  Search,
  Link2,
  Share2,
  MapPin,
  Globe,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { PageRoute } from '../types';

interface ServicesOverviewPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'seo':
        return <Search size={24} />;
      case 'off-page-seo':
        return <Link2 size={24} />;
      case 'social-media-marketing':
        return <Share2 size={24} />;
      case 'local-seo':
        return <MapPin size={24} />;
      case 'website-seo':
        return <Globe size={24} />;
      case 'digital-strategy':
        return <Sliders size={24} />;
      default:
        return <Search size={24} />;
    }
  };

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
            <span className="text-white font-bold">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            Agency Capabilities
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Digital Marketing Services
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            GrowthEdge provides essential digital marketing services to help businesses attract
            attention, strengthen online authority, and connect with potential customers.
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

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-zinc-900/80 rounded-2xl p-8 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 shadow-2xs flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.fullDescription}</p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                      Key Focus Areas
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800">
                  {service.route && service.route !== 'services' ? (
                    <button
                      onClick={() => onNavigate(service.route!)}
                      className="btn-3d-white w-full py-3 px-4 text-sm font-bold gap-2"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenConsultation}
                      className="btn-3d-primary w-full py-3 px-4 text-sm font-bold gap-2"
                    >
                      <span>Consult With Our Team</span>
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Not Sure Which Service Fits Your Goals?
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Tell GrowthEdge about your current marketing challenges. We will help identify the most
            practical starting point for your business.
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
