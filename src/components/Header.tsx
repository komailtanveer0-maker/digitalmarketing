import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; route: PageRoute; isServicesMenu?: boolean }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services', isServicesMenu: true },
    { label: 'SEO Services', route: 'seo-services' },
    { label: 'About', route: 'about' },
    { label: 'Reviews', route: 'reviews' },
    { label: 'Blog', route: 'blog' },
    { label: 'Contact', route: 'contact' },
  ];

  const serviceSubItems: { label: string; route: PageRoute; desc: string }[] = [
    { label: 'SEO Services', route: 'seo-services', desc: 'Holistic organic search visibility' },
    { label: 'Off-Page SEO', route: 'off-page-seo', desc: 'Authority & backlink development' },
    { label: 'Local SEO', route: 'local-seo', desc: 'Rawalpindi & Islamabad local search' },
    { label: 'Social Media Marketing', route: 'social-media-marketing', desc: 'Strategic audience engagement' },
    { label: 'All Services Overview', route: 'services', desc: 'Full digital capability suite' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg border-b border-zinc-800 py-3'
          : 'bg-black/90 backdrop-blur-xs border-b border-zinc-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            aria-label="GrowthEdge Home"
          >
            <Logo size="md" variant="dark" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;

              if (item.isServicesMenu) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      id="nav-services-dropdown-toggle"
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                        isActive ||
                        currentRoute === 'seo-services' ||
                        currentRoute === 'off-page-seo' ||
                        currentRoute === 'local-seo' ||
                        currentRoute === 'social-media-marketing'
                          ? 'text-sky-400 font-semibold bg-sky-950/50 border border-sky-500/30'
                          : 'text-zinc-300 hover:text-sky-300 hover:bg-zinc-900/70'
                      }`}
                      aria-expanded={isServicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div
                        id="nav-services-dropdown-menu"
                        className="absolute left-0 top-full pt-1.5 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      >
                        <div className="bg-zinc-900/98 rounded-xl shadow-2xl border border-zinc-800 py-2.5 px-2">
                          {serviceSubItems.map((sub) => (
                            <button
                              key={sub.route}
                              onClick={() => handleNavClick(sub.route)}
                              className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex flex-col ${
                                currentRoute === sub.route
                                  ? 'bg-sky-950/70 text-sky-300 border border-sky-500/30'
                                  : 'hover:bg-zinc-800/80 text-zinc-300 hover:text-sky-200'
                              }`}
                            >
                              <span className="text-sm font-semibold">{sub.label}</span>
                              <span className="text-xs text-zinc-400 font-normal">{sub.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  id={`nav-link-${item.route}`}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-sky-400 font-semibold bg-sky-950/50 border border-sky-500/30'
                      : 'text-zinc-300 hover:text-sky-300 hover:bg-zinc-900/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Area: Phone + Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="header-phone-link-desktop"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-3d-white inline-flex items-center gap-2 text-sm font-semibold py-2 px-3.5"
              title="Call GrowthEdge Directly"
            >
              <div className="w-6 h-6 rounded-full bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Phone size={13} />
              </div>
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              id="header-cta-btn-desktop"
              onClick={onOpenConsultation}
              className="btn-3d-primary px-5 py-2.5 text-[15px]"
            >
              Get a Free Consultation
            </button>
          </div>

          {/* Mobile Right Controls: Call Icon + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="header-phone-btn-mobile"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-3d-white w-10 h-10 text-sky-400"
              aria-label={`Call ${BUSINESS_INFO.phoneDisplay}`}
            >
              <Phone size={18} />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-3d-white w-10 h-10 text-zinc-100"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden mt-3 pt-3 pb-5 border-t border-zinc-800 animate-in fade-in duration-200"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    currentRoute === item.route
                      ? 'bg-sky-950/70 text-sky-300 border border-sky-500/30 font-semibold'
                      : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} className="text-zinc-500" />
                </button>
              ))}

              {/* Sub-services on mobile */}
              <div className="pt-2 pb-1 px-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Featured Services
                </span>
                <div className="mt-2 pl-2 space-y-1 border-l-2 border-sky-500">
                  <button
                    onClick={() => handleNavClick('seo-services')}
                    className="block w-full text-left py-1.5 text-sm text-zinc-300 hover:text-sky-300"
                  >
                    SEO Services
                  </button>
                  <button
                    onClick={() => handleNavClick('off-page-seo')}
                    className="block w-full text-left py-1.5 text-sm text-zinc-300 hover:text-sky-300"
                  >
                    Off-Page SEO & Backlinks
                  </button>
                  <button
                    onClick={() => handleNavClick('local-seo')}
                    className="block w-full text-left py-1.5 text-sm text-zinc-300 hover:text-sky-300"
                  >
                    Local SEO (Rawalpindi & Islamabad)
                  </button>
                  <button
                    onClick={() => handleNavClick('social-media-marketing')}
                    className="block w-full text-left py-1.5 text-sm text-zinc-300 hover:text-sky-300"
                  >
                    Social Media Marketing
                  </button>
                </div>
              </div>

              {/* Mobile CTA Area */}
              <div className="pt-4 px-2 space-y-2.5">
                <button
                  id="mobile-menu-cta-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="btn-3d-primary w-full py-3 px-4 text-center font-bold text-base"
                >
                  Get a Free Consultation
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="btn-3d-white flex items-center justify-center gap-2 w-full py-2.5 px-4 text-center font-semibold text-sm"
                >
                  <Phone size={15} className="text-sky-400" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
