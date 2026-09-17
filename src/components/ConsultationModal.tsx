import React, { useState } from 'react';
import { X, Send, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageRoute } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessRedirect?: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSuccessRedirect,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    websiteUrl: '',
    service: 'SEO',
    message: '',
    honeypot: '', // anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number.';
    } else if (formData.phone.replace(/[^0-9+]/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid telephone number.';
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
    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessRedirect) {
        setTimeout(() => {
          onClose();
          onSuccessRedirect();
        }, 1200);
      }
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      id="consultation-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-zinc-950 px-6 py-5 text-white flex items-center justify-between shrink-0 border-b border-zinc-800">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-0.5">
              Direct Agency Consultation
            </span>
            <h2 id="modal-title" className="text-xl font-extrabold text-white">
              Get a Free Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="btn-3d-white w-9 h-9 text-zinc-300 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/40">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-zinc-300 max-w-md mx-auto text-base">
                Your enquiry has been received. A member of the GrowthEdge team will contact you shortly.
              </p>
              <div className="pt-2 text-sm text-zinc-400">
                Prefer to talk now? Call{' '}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-bold text-sky-400 hover:underline"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="btn-3d-white px-6 py-2.5 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Anti-spam hidden honeypot */}
              <input
                type="text"
                name="website_url_honey"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="modal-full-name"
                    className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="modal-full-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Tariq Khan"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                      errors.fullName ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-900/90'
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
                    htmlFor="modal-business-name"
                    className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                  >
                    Business Name
                  </label>
                  <input
                    id="modal-business-name"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Islamabad Retail Co."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-900/90 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="modal-phone"
                    className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                  >
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+92 3XX XXXXXXX"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                      errors.phone ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-900/90'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@business.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                      errors.email ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-900/90'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Website URL */}
                <div>
                  <label
                    htmlFor="modal-website"
                    className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                  >
                    Website URL (If Any)
                  </label>
                  <input
                    id="modal-website"
                    type="text"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-900/90 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors"
                  />
                </div>

                {/* Service Interested In */}
                <div>
                  <label
                    htmlFor="modal-service"
                    className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="modal-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-900/90 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors"
                  >
                    <option value="SEO">SEO (Search Engine Optimization)</option>
                    <option value="Off-Page SEO">Off-Page SEO & Authority</option>
                    <option value="Local SEO">Local SEO (Rawalpindi & Islamabad)</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Website SEO">Website SEO Optimization</option>
                    <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                    <option value="Not Sure / Need Advice">Not Sure / Need Advice</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="modal-message"
                  className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Tell GrowthEdge about your business and marketing goals..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-colors ${
                    errors.message ? 'border-red-500 bg-red-950/20' : 'border-zinc-700 bg-zinc-900/90'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-3d-primary w-full py-3.5 px-6 text-base gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Sending Request...</span>
                  ) : (
                    <>
                      <span>Request Consultation</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>

              {/* Trust Footer */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-zinc-400">
                <span>Direct phone support:</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-semibold text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <Phone size={12} />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
