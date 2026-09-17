import React from 'react';
import { CheckCircle2, Home, Layers, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface ThankYouPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-zinc-100">
      <div className="max-w-xl w-full bg-zinc-900/90 rounded-2xl p-8 sm:p-12 border border-zinc-800 shadow-2xl text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-sky-950/80 text-sky-400 border border-sky-500/30 flex items-center justify-center mx-auto shadow-2xs">
          <CheckCircle2 size={44} />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Enquiry Confirmed
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Thank You for Contacting GrowthEdge
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            Your enquiry has been received. A member of the GrowthEdge team will review your message
            and contact you using the details you provided.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 text-xs text-zinc-300">
          Need immediate assistance? Call GrowthEdge directly at{' '}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
          >
            <Phone size={12} />
            {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="btn-3d-primary w-full sm:w-auto px-6 py-3 text-sm font-extrabold gap-2"
          >
            <Home size={16} />
            <span>Return Home</span>
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="btn-3d-white w-full sm:w-auto px-6 py-3 text-sm font-bold gap-2"
          >
            <Layers size={16} />
            <span>Explore Our Services</span>
          </button>
        </div>
      </div>
    </div>
  );
};
