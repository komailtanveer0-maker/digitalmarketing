import React from 'react';
import { HelpCircle, Home, Layers } from 'lucide-react';
import { PageRoute } from '../types';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[65vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-zinc-100">
      <div className="max-w-md w-full bg-zinc-900/90 rounded-2xl p-8 sm:p-10 border border-zinc-800 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-sky-950/80 text-sky-400 border border-sky-500/30 flex items-center justify-center mx-auto shadow-2xs">
          <HelpCircle size={36} />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-white block">404</span>
          <h1 className="text-2xl font-bold text-white">We Couldn't Find That Page</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            The page you are looking for may have moved or no longer exists.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="btn-3d-primary w-full sm:w-auto px-5 py-2.5 text-sm font-extrabold gap-2"
          >
            <Home size={15} />
            <span>Return Home</span>
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="btn-3d-white w-full sm:w-auto px-5 py-2.5 text-sm font-bold gap-2"
          >
            <Layers size={15} />
            <span>View Our Services</span>
          </button>
        </div>
      </div>
    </div>
  );
};
