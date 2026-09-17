import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, Eye, FileText, CheckCircle2, UserCheck, Phone } from 'lucide-react';
import { ARTIST_INFO } from '../data/mockData';

export const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#140F1D] border border-amber-500/30 rounded-3xl shadow-[0_0_50px_rgba(217,119,6,0.3)] text-white overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Decorative Header Gradient */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#D97706]/90 via-[#9D174D]/90 to-[#BE185D]/90 border-b border-white/20 flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-200">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Client Trust & Data Governance</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Privacy Policy & Terms
              </h2>
              <p className="text-xs text-white/90">
                Stylist Makeup Artist & Academy • Last Updated: September 2026
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors border border-white/20"
              title="Close Privacy Policy"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-200 leading-relaxed font-sans custom-scrollbar">
            
            {/* Section 1 */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-semibold text-amber-300 flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" /> 1. Commitment to Client Confidentiality
              </h3>
              <p className="text-xs text-slate-300">
                At Stylist Makeup Artist & Academy by Anya Sharma, we treat your personal information, skin concerns, and wedding dates with the highest level of privacy and luxury standards. We do not sell, trade, or rent your personal details to any third-party marketing companies.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-semibold text-amber-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" /> 2. Information We Collect
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li><strong className="text-white">Contact & Event Details:</strong> Name, phone number, email address, venue location, and event dates for bridal booking scheduling.</li>
                <li><strong className="text-white">Skin Profile & Requirements:</strong> Undertone details, skin sensitivity notes, and inspirational makeover references submitted via our digital consultation form.</li>
                <li><strong className="text-white">Academy Registration:</strong> Identification data required for issuing ISO-certified diplomas and course completion certificates.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-semibold text-amber-300 flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-400" /> 3. Media & Makeover Portfolio Rights
              </h3>
              <p className="text-xs text-slate-300">
                Before uploading high-definition bridal or makeover photos to our website or Instagram page, we obtain verbal or written consent from our clients. If you prefer your makeover photos to remain strictly private or excluded from social media, please inform us during your trial or consultation.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-semibold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> 4. Booking Deposits & Academy Terms
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Bridal and event date slots are confirmed upon receipt of advance booking deposit.</li>
                <li>In case of date changes due to unforeseen circumstances, dates may be rescheduled subject to artist calendar availability.</li>
                <li>Academy course seats and vanity brush kit allocations are guaranteed upon enrollment confirmation.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-semibold text-amber-300 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-400" /> 5. Data Access & Eradication Requests
              </h3>
              <p className="text-xs text-slate-300">
                You have the right to request access to the personal data we store or ask for complete deletion of your records from our consultation database. Contact our privacy coordinator at <a href={`mailto:${ARTIST_INFO.email}`} className="text-amber-300 underline">{ARTIST_INFO.email}</a> or via phone at <a href={`tel:${ARTIST_INFO.phone}`} className="text-amber-300 underline">{ARTIST_INFO.phone}</a>.
              </p>
            </div>
          </div>

          {/* Modal Footer Bar */}
          <div className="p-4 sm:p-5 bg-black/40 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Questions? Call +91 98765 43210</span>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-600 to-rose-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md"
            >
              I Understand & Agree
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
