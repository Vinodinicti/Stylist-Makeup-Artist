import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, Instagram, MessageCircle, Heart, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { ARTIST_INFO } from '../data/mockData';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

export const Footer = ({ setActiveTab, onOpenBooking }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${ARTIST_INFO.whatsappPhone}?text=${encodeURIComponent('Hello Anya! I would like to make a glam booking enquiry.')}`;

  return (
    <footer className="relative bg-gradient-to-r from-[#D97706] via-[#9D174D] to-[#BE185D] text-white border-t border-white/20 overflow-hidden shadow-2xl">
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-white/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-black/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          
          {/* BRAND INFO & SOCIALS */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Stylist Makeup"
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
              />
              <div>
                <span className="font-serif italic text-base sm:text-lg font-extrabold tracking-tight text-white drop-shadow-xs">
                  Stylist <span className="not-italic text-amber-200">Makeup</span>
                </span>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed font-normal">
              Premium 4K HD Airbrush Indian bridal makeovers, celebrity glam, and ISO certified academy by Anya Sharma.
            </p>

            <div className="flex items-center gap-2 pt-0.5">
              <a
                href={`tel:+${ARTIST_INFO.whatsappPhone}`}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 text-white border border-white/40 flex items-center justify-center hover:bg-white hover:text-amber-300 transition-all shadow-xs transform hover:scale-105"
                title="Call Directly"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 text-white border border-white/40 flex items-center justify-center hover:bg-white hover:text-emerald-600 transition-all shadow-xs transform hover:scale-105"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href={`https://instagram.com/${ARTIST_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 text-white border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#9D174D] transition-all shadow-xs transform hover:scale-105"
                title="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* QUICK NAVIGATION */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-serif italic font-bold text-amber-200 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span> Quick Links
            </h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs text-white/95 font-semibold">
              <li>
                <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-200 transition-colors flex items-center gap-1">
                  <span className="text-amber-200">›</span> Home
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-200 transition-colors flex items-center gap-1">
                  <span className="text-amber-200">›</span> About Artist
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-200 transition-colors flex items-center gap-1">
                  <span className="text-amber-200">›</span> Bridal Services
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-200 transition-colors flex items-center gap-1">
                  <span className="text-amber-200">›</span> Makeup Academy
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-200 transition-colors flex items-center gap-1">
                  <span className="text-amber-200">›</span> Transformations
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-200 transition-colors flex items-center gap-1">
                  <span className="text-amber-200">›</span> Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* STUDIO CONTACT */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-serif italic font-bold text-amber-200 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Contact
            </h4>
            <div className="space-y-1.5 text-[11px] sm:text-xs text-white font-medium">
              <div className="flex items-start gap-1.5 p-1.5 sm:p-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>DLF Phase 5, Golf Course Rd, Gurugram</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xs">
                <Phone className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xs">
                <Mail className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                <span className="truncate">contact@stylistmakeupartist.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT, PRIVACY POLICY & ADMIN PORTAL BAR */}
        <div className="pt-3.5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-white/90 gap-2 font-medium">
          <p>© {new Date().getFullYear()} Stylist Makeup Artist & Academy.</p>
          
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#9D174D] font-bold text-[10px] sm:text-xs transition-all shadow-xs underline decoration-amber-300 hover:no-underline"
            >
              <ShieldCheck className="w-3 h-3 text-amber-300" />
              <span>Privacy Policy & Terms</span>
            </button>

            <button
              onClick={() => { setActiveTab('admin'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-[#1A1615] hover:bg-amber-300 font-extrabold text-[10px] sm:text-xs transition-all shadow-md transform hover:scale-105"
            >
              <ShieldCheck className="w-3 h-3 text-[#9D174D]" />
              <span>Studio</span>
            </button>

            <p className="hidden md:flex items-center gap-1 font-semibold text-white">
              Crafted with <Heart className="w-3 h-3 text-amber-200 fill-current animate-pulse" /> for Indian Glamour
            </p>
          </div>
        </div>
      </div>

      {/* PRIVACY POLICY POPUP MODAL */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </footer>
  );
};
