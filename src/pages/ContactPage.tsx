import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    websiteUrl: '',
    service: 'SEO',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number.';
    } else if (formData.phone.replace(/[^0-9+]/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam caught

    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
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
            <span className="text-white font-bold">Contact GrowthEdge</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-black via-[#09090b] to-zinc-950 py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30 shadow-xs">
            Consultation Request
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Discuss Your Digital Marketing Goals
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Tell us about your business, your current digital marketing challenges, and what you
            want to improve. GrowthEdge can help you identify the areas that deserve attention.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Contact Info */}
      <section className="py-16 md:py-20 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white">Direct Contact Details</h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Connect directly with our team to inquire about SEO audits, off-page strategies,
                  or localized digital marketing support.
                </p>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0 shadow-2xs">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                        Phone (Direct & Inquiries)
                      </div>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-lg font-bold text-white hover:text-sky-300 transition-colors block mt-0.5"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                      <div className="text-xs text-zinc-500 mt-0.5">Click to call directly</div>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0 shadow-2xs">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                        Primary Service Market
                      </div>
                      <div className="text-base font-bold text-white mt-0.5">
                        {BUSINESS_INFO.serviceArea}
                      </div>
                      <div className="text-xs text-zinc-500 mt-0.5">
                        Serving twin cities & clients nationwide
                      </div>
                    </div>
                  </div>

                  {/* Online Inquiries */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0 shadow-2xs">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                        Consultation Inquiries
                      </div>
                      <div className="text-sm font-semibold text-zinc-300 mt-0.5">
                        Handled via consultation form & direct phone
                      </div>
                      <div className="text-xs text-zinc-500 mt-0.5">
                        Direct email will be provided during discovery
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Area Reassurance */}
              <div className="bg-sky-950/40 border border-sky-500/30 rounded-2xl p-6 space-y-2">
                <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                  <ShieldCheck size={18} className="text-sky-400" />
                  <span>Transparent & Ethical Engagement</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We never solicit unsolicited communications or share your project details with
                  unaffiliated third parties. All inquiries are reviewed directly by the GrowthEdge
                  team.
                </p>
              </div>
            </div>

            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-xs">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-5" id="contact-success-message">
                    <div className="w-16 h-16 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/30">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Thank You for Contacting GrowthEdge
                    </h2>
                    <p className="text-zinc-400 text-base max-w-md mx-auto leading-relaxed">
                      Thank you. Your enquiry has been received. A member of the GrowthEdge team will
                      contact you shortly using the details you provided.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => onNavigate('home')}
                        className="btn-3d-primary px-6 py-3 text-sm font-extrabold"
                      >
                        Return Home
                      </button>
                      <button
                        onClick={() => onNavigate('services')}
                        className="btn-3d-white px-6 py-3 text-sm font-bold"
                      >
                        Explore Our Services
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate id="contact-page-form">
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        Request a Strategy Consultation
                      </h2>
                      <p className="text-sm text-zinc-400 mt-1">
                        Fill out the details below. Required fields are marked with an asterisk (*).
                      </p>
                    </div>

                    {/* Spam protection honeypot */}
                    <input
                      type="text"
                      name="site_honey_input"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="contact-full-name"
                          className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                        >
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-full-name"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: '' });
                          }}
                          placeholder="e.g. Tariq Khan"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                            errors.fullName ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-950'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Business Name */}
                      <div>
                        <label
                          htmlFor="contact-business-name"
                          className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                        >
                          Business Name
                        </label>
                        <input
                          id="contact-business-name"
                          type="text"
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({ ...formData, businessName: e.target.value })
                          }
                          placeholder="e.g. Islamabad Logistics"
                          className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-950 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                        >
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="+92 3XX XXXXXXX"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                            errors.phone ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-950'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                        >
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="name@business.com"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                            errors.email ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-950'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Website URL */}
                      <div>
                        <label
                          htmlFor="contact-website"
                          className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                        >
                          Website URL
                        </label>
                        <input
                          id="contact-website"
                          type="text"
                          value={formData.websiteUrl}
                          onChange={(e) =>
                            setFormData({ ...formData, websiteUrl: e.target.value })
                          }
                          placeholder="https://example.com"
                          className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-950 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors"
                        />
                      </div>

                      {/* Service Interested In */}
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="contact-service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-950 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors"
                        >
                          <option value="SEO">SEO</option>
                          <option value="Off-Page SEO">Off-Page SEO</option>
                          <option value="Local SEO">Local SEO</option>
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Website SEO">Website SEO</option>
                          <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                          <option value="Not Sure / Need Advice">Not Sure / Need Advice</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                      >
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Please tell us about your current digital marketing challenges, website goals, and questions..."
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                          errors.message ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-950'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="contact-form-submit-btn"
                        className="btn-3d-primary w-full sm:w-auto px-8 py-4 text-base font-extrabold gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            <span>Request Consultation</span>
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
