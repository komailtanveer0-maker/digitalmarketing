import React from 'react';
import { TrendingUp, Search, Globe, CheckCircle, BarChart3, ArrowUpRight } from 'lucide-react';

export const MarketingDashboardIllustration: React.FC = () => {
  return (
    <div
      id="hero-marketing-dashboard"
      className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none"
    >
      {/* Soft Ambient Light Blue Glow (30% accent) */}
      <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-sky-400/15 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Container - 70% Black Base */}
      <div className="bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
        {/* Top App Bar */}
        <div className="bg-black/80 px-5 py-3.5 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
            </div>
            <div className="ml-3 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs flex items-center gap-1.5 font-mono shadow-2xs">
              <Search size={11} className="text-sky-400" />
              <span>growth-analytics.local/twin-cities</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="text-[11px] font-semibold text-sky-300">Live Signals</span>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-5 space-y-4">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-3 shadow-2xs">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Search Impressions
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-white mt-1 flex items-center gap-1">
                <span>+142%</span>
                <ArrowUpRight size={16} className="text-sky-400" />
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5">Organic reach</div>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-3 shadow-2xs">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Local Visibility
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-sky-400 mt-1 flex items-center gap-1">
                <span>Strong</span>
                <CheckCircle size={15} className="text-sky-400" />
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5">Rwp & Islamabad</div>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-3 shadow-2xs">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Authority Score
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-white mt-1 flex items-center gap-1">
                <span>Upward</span>
                <TrendingUp size={16} className="text-sky-400" />
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5">Quality backlink signals</div>
            </div>
          </div>

          {/* Organic Growth SVG Chart */}
          <div className="bg-black/60 border border-zinc-800/80 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} className="text-sky-400" />
                <span className="text-xs font-bold text-white">
                  Organic Traffic & Discovery Trend
                </span>
              </div>
              <span className="text-[11px] text-sky-300 font-semibold bg-sky-950/70 px-2 py-0.5 rounded-md border border-sky-500/30 shadow-2xs">
                Steady Growth
              </span>
            </div>

            {/* Custom Dynamic SVG Curve */}
            <div className="h-32 w-full">
              <svg
                viewBox="0 0 400 120"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7DD3FC" />
                    <stop offset="50%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="#27272A" strokeDasharray="3 3" />
                <line x1="0" y1="65" x2="400" y2="65" stroke="#27272A" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#27272A" strokeDasharray="3 3" />

                {/* Area Fill */}
                <path
                  d="M0,105 Q60,95 120,80 T240,55 T320,35 T400,18 L400,115 L0,115 Z"
                  fill="url(#chartGradient)"
                />

                {/* Growth Curve Line */}
                <path
                  d="M0,105 Q60,95 120,80 T240,55 T320,35 T400,18"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Interactive Points */}
                <circle cx="120" cy="80" r="4" fill="#38BDF8" stroke="#09090B" strokeWidth="2" />
                <circle cx="240" cy="55" r="4" fill="#38BDF8" stroke="#09090B" strokeWidth="2" />
                <circle cx="320" cy="35" r="4" fill="#7DD3FC" stroke="#09090B" strokeWidth="2" />
                <circle cx="400" cy="18" r="5" fill="#BAE6FD" stroke="#09090B" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between text-[10px] text-zinc-400 mt-2 font-medium">
              <span>Strategy & Audit</span>
              <span>On-Page & Structure</span>
              <span>Off-Page Authority</span>
              <span className="font-semibold text-sky-400">Sustainable Growth</span>
            </div>
          </div>

          {/* Local Market Targeting Signal */}
          <div className="flex items-center justify-between p-3 bg-sky-950/50 border border-sky-500/30 rounded-xl text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-900/60 text-sky-400 border border-sky-500/40 shadow-2xs flex items-center justify-center font-bold">
                <Globe size={14} />
              </div>
              <div>
                <div className="font-bold text-white">Target Region Visibility</div>
                <div className="text-zinc-400 text-[11px]">Rawalpindi & Islamabad Core Coverage</div>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-sky-900/60 font-semibold text-sky-300 rounded-md border border-sky-500/40 text-[11px] shadow-2xs">
              Active Signals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
