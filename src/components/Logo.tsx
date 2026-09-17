import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds, 'dark' is for dark navy backgrounds
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDarkBg = variant === 'dark';

  // Dimension scaling
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 52 : 42;
  const brandTextSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`} id="growthedge-brand-logo">
      {/* Precision Vector SVG of GrowthEdge Official Logo Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients matching the black, white, and light-blue theme */}
          <linearGradient id="bar1Grad" x1="38" y1="42" x2="48" y2="78" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="bar2Grad" x1="48" y1="28" x2="58" y2="78" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="bar3Grad" x1="58" y1="22" x2="68" y2="78" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="arrowGrad" x1="26" y1="65" x2="78" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
          <linearGradient id="swooshGrad" x1="22" y1="72" x2="80" y2="82" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>

        {/* 3 Rising Bar Chart Columns */}
        {/* Column 1 (Left - Light Blue) */}
        <path
          d="M38 52 C38 48 44 48 44 52 L44 74 C44 76 38 76 38 74 Z"
          fill="url(#bar1Grad)"
        />
        {/* Top cylinder cap 1 */}
        <ellipse cx="41" cy="51" rx="3" ry="1.5" fill="#BAE6FD" />

        {/* Column 2 (Center - Sky Blue) */}
        <path
          d="M48 38 C48 34 54 34 54 38 L54 75 C54 77 48 77 48 75 Z"
          fill="url(#bar2Grad)"
        />
        {/* Top cylinder cap 2 */}
        <ellipse cx="51" cy="37" rx="3" ry="1.5" fill="#7DD3FC" />

        {/* Column 3 (Right - Pale Sky) */}
        <path
          d="M58 28 C58 24 64 24 64 28 L64 74 C64 76 58 76 58 74 Z"
          fill="url(#bar3Grad)"
        />
        {/* Top cylinder cap 3 */}
        <ellipse cx="61" cy="27" rx="3" ry="1.5" fill="#E0F2FE" />

        {/* Dynamic Curved Arrow swooping across and ascending */}
        <path
          d="M26 63 C36 54 50 42 66 28 L63 24 L76 22 L72 35 L68 31 C52 45 40 58 29 65 Z"
          fill="url(#arrowGrad)"
        />

        {/* Base Crescent Swoosh */}
        <path
          d="M24 66 C22 75 32 82 50 83 C66 84 76 78 80 72 C74 76 64 79 50 78 C35 77 27 72 24 66 Z"
          fill="url(#swooshGrad)"
        />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight ${brandTextSize} ${
            isDarkBg ? 'text-white' : 'text-black'
          }`}
        >
          Growth<span className="text-sky-500">edge</span>
        </span>
        {showSubtitle && (
          <span
            className={`font-bold tracking-[0.24em] uppercase ${subtitleSize} mt-0.5 ${
              isDarkBg ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Digital Agency
          </span>
        )}
      </div>
    </div>
  );
};
