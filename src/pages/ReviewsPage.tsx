import React from 'react';
import { Star, ArrowRight, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, VERIFIED_REVIEWS } from '../data/content';
import { PageRoute } from '../types';

interface ReviewsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, onOpenConsultation }) => {
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
            <span className="text-white font-bold">Client Reviews</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            <Star size={13} className="fill-sky-400 text-sky-400" />
            <span>Verified Customer Feedback</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            GrowthEdge Client Reviews
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Authentic client feedback published on Google from businesses in Rawalpindi and
            Islamabad who have partnered with GrowthEdge.
          </p>

          {/* Rating Summary Card */}
          <div className="pt-2 flex justify-center">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 shadow-xl flex items-center gap-6">
              <div className="text-center border-r border-zinc-800 pr-6">
                <div className="text-4xl font-extrabold text-white">5.0</div>
                <div className="flex text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <div className="text-base font-bold text-white">Google Rating</div>
                <div className="text-xs text-zinc-400 font-medium">
                  Based on {BUSINESS_INFO.reviewCount} verified reviews
                </div>
                <div className="text-[11px] text-sky-400 font-semibold mt-0.5 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  <span>100% Authentic Google Feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 gap-6">
            {VERIFIED_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-zinc-900/80 rounded-2xl p-8 border border-zinc-800 shadow-xs space-y-4 hover:border-sky-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 font-bold flex items-center justify-center text-lg shadow-2xs">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{review.author}</h3>
                      <div className="text-xs text-zinc-400 flex items-center gap-2">
                        <span>{review.verifiedSource}</span>
                        <span>•</span>
                        <span className="text-sky-400 font-medium">Verified Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-zinc-200 text-base sm:text-lg leading-relaxed italic bg-black/50 p-5 rounded-xl border border-zinc-800">
                  "{review.text}"
                </p>

                {review.originalText && (
                  <div className="text-xs text-zinc-400 pl-2">
                    <span className="font-semibold text-zinc-300">Original Google submission:</span> "
                    {review.originalText}"
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-sky-950/40 border border-sky-500/30 text-center space-y-2">
            <h4 className="text-sm font-bold text-sky-300">Review Integrity Notice</h4>
            <p className="text-xs text-zinc-400 max-w-2xl mx-auto">
              GrowthEdge publishes only genuine, verifiable customer feedback. We do not invent
              fictional customer names, stock-photo testimonials, or fabricated ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Work With GrowthEdge</h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Experience dedicated, professional digital marketing and SEO support focused on
            measurable business growth.
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
