import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Clock,
  Tag,
  X,
} from 'lucide-react';
import { BLOG_POSTS, BUSINESS_INFO } from '../data/content';
import { BlogPost, PageRoute } from '../types';

interface BlogPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'SEO',
    'Off-Page SEO',
    'Local SEO',
    'Social Media Marketing',
    'Website Optimization',
    'Digital Marketing Strategy',
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

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
            <span className="text-white font-bold">Blog & Insights</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            Educational Guides & Industry Knowledge
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Digital Marketing Insights
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Practical articles about SEO, online visibility, digital marketing, website authority,
            local search, and business growth.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="bg-black/90 border-b border-zinc-800 py-4 sticky top-18 z-20 shadow-2xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'btn-3d-primary text-sky-950 font-extrabold scale-[1.02]'
                    : 'btn-3d-pill text-zinc-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-zinc-900/80 rounded-2xl p-7 border border-zinc-800 shadow-xs hover:border-sky-500/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-950/80 text-sky-300 text-xs font-bold border border-sky-500/30">
                      <Tag size={12} />
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white leading-snug hover:text-sky-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-zinc-400 text-sm leading-relaxed">{post.summary}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800">
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="btn-3d-white px-4 py-2.5 text-xs font-bold gap-2 w-full justify-center"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} className="text-sky-400" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-zinc-500">
            <span>
              Articles curated by GrowthEdge digital marketing specialists for business owners in
              Rawalpindi, Islamabad, and nationwide.
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Article Reading Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-zinc-950 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-zinc-800 text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {activeArticle.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{activeArticle.title}</h3>
                <span className="text-xs text-zinc-400 mt-1 inline-block">
                  {activeArticle.readTime}
                </span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="btn-3d-pill w-8 h-8 rounded-lg p-0 flex items-center justify-center shrink-0 text-zinc-300"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              {activeArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400">Need specific advice for your business?</div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenConsultation();
                  }}
                  className="btn-3d-primary px-4 py-2.5 text-xs font-extrabold"
                >
                  Consult an SEO Specialist
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="btn-3d-white px-4 py-2.5 text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Put These Insights Into Action</h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Let's evaluate your online presence and build a digital strategy designed for lasting
            growth.
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
