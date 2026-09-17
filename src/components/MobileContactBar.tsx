import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface MobileContactBarProps {
  onOpenConsultation: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenConsultation }) => {
  return (
    <div
      id="mobile-sticky-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-zinc-800 py-2.5 px-4 shadow-2xl flex items-center gap-3"
    >
      {/* Click to Call */}
      <a
        id="mobile-bar-call-btn"
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="btn-3d-white flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-semibold"
      >
        <Phone size={16} className="text-sky-400 shrink-0" />
        <span className="truncate">Call Agency</span>
      </a>

      {/* Consultation Trigger */}
      <button
        id="mobile-bar-consult-btn"
        onClick={onOpenConsultation}
        className="btn-3d-primary flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-bold"
      >
        <CalendarCheck size={16} className="shrink-0 text-slate-950" />
        <span className="truncate">Consultation</span>
      </button>
    </div>
  );
};
