import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { SEO_METADATA_MAP } from './data/content';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { MobileContactBar } from './components/MobileContactBar';

// Pages
import { HomePage } from './pages/HomePage';
import { SeoServicesPage } from './pages/SeoServicesPage';
import { OffPageSeoPage } from './pages/OffPageSeoPage';
import { LocalSeoPage } from './pages/LocalSeoPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LegalPage } from './pages/LegalPages';

export default function App() {
  // Initialize route from current window path or hash
  const getInitialRoute = (): PageRoute => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const hash = window.location.hash.replace(/^#\/?/, '');
    const target = path || hash;

    if (!target) return 'home';
    if (target === 'services') return 'services';
    if (target === 'seo-services') return 'seo-services';
    if (target === 'off-page-seo') return 'off-page-seo';
    if (target === 'local-seo') return 'local-seo';
    if (target === 'social-media-marketing') return 'social-media-marketing';
    if (target === 'about') return 'about';
    if (target === 'reviews') return 'reviews';
    if (target === 'blog') return 'blog';
    if (target === 'contact') return 'contact';
    if (target === 'thank-you') return 'thank-you';
    if (target === 'privacy') return 'privacy';
    if (target === 'terms') return 'terms';

    return '404';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Synchronize route with browser history and document title/meta
  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    const newPath = route === 'home' ? '/' : `/${route}`;

    try {
      window.history.pushState({ route }, '', newPath);
    } catch {
      // Fallback for sandboxed frames if history.pushState is restricted
      window.location.hash = route === 'home' ? '' : `#${route}`;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic SEO title & meta description per route
  useEffect(() => {
    const meta = SEO_METADATA_MAP[currentRoute] || SEO_METADATA_MAP.home;
    document.title = meta.title;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', meta.description);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', meta.title);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute('content', meta.description);
    }
  }, [currentRoute]);

  // Render active page component
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'seo-services':
        return (
          <SeoServicesPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'off-page-seo':
        return (
          <OffPageSeoPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'local-seo':
        return (
          <LocalSeoPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'social-media-marketing':
        return (
          <SocialMediaPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesOverviewPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'reviews':
        return (
          <ReviewsPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'thank-you':
        return <ThankYouPage onNavigate={navigateTo} />;
      case 'privacy':
        return <LegalPage type="privacy" onNavigate={navigateTo} />;
      case 'terms':
        return <LegalPage type="terms" onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-zinc-100 pb-16 lg:pb-0 selection:bg-sky-400 selection:text-black">
      {/* Sticky Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1" id="main-content">
        {renderPage()}
      </main>

      {/* Verified Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Mobile Fixed Contact Bar */}
      <MobileContactBar onOpenConsultation={() => setIsConsultationModalOpen(true)} />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        onSuccessRedirect={() => navigateTo('thank-you')}
      />
    </div>
  );
}
