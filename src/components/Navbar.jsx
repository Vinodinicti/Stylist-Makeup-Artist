import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Calendar, MessageCircle } from 'lucide-react';
import { ARTIST_INFO } from '../data/mockData';

export const Navbar = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Artist' },
    { id: 'services', label: 'Bridal Services' },
    { id: 'academy', label: 'Makeup Academy', badge: 'PRO' },
    { id: 'gallery', label: 'Transformations' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappDirect = `https://wa.me/${ARTIST_INFO.whatsappPhone}?text=${encodeURIComponent('Hello Anya! I would like to inquire about bridal makeup bookings & academy courses.')}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* COMPACT MEDIUM-DARK YELLOW & PINK GRADIENT COMBO HEADER */}
      <div
        className={`transition-all duration-300 bg-gradient-to-r from-[#D97706] via-[#9D174D] to-[#BE185D] text-white border-b border-white/20 shadow-xl ${
          scrolled ? 'py-1.5 shadow-2xl backdrop-blur-md' : 'py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO WITH COMPACT SIZE & MEDIUM DARK CONTRAST */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left group"
            >
              <img
                src="/logo.png"
                alt="Stylist Makeup"
                className="w-11 h-11 sm:w-14 sm:h-14 object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)] transform group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="block font-serif italic text-base sm:text-lg font-extrabold tracking-tight text-white drop-shadow-xs">
                  Stylist <span className="not-italic text-amber-200 font-black">Makeup</span>
                </span>
              </div>
            </button>

            {/* COMPACT DESKTOP NAVIGATION PILLS WITH MEDIUM-DARK CONTRAST */}
            <nav className="hidden lg:flex items-center gap-1 bg-black/25 p-1 rounded-full border border-white/30 backdrop-blur-sm shadow-inner">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all duration-200 flex items-center gap-1 ${
                      isActive
                        ? 'bg-white text-[#9D174D] shadow-md scale-105'
                        : 'text-white/95 hover:text-amber-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`px-1 py-0.2 rounded-full text-[8px] font-black uppercase ${
                        isActive ? 'bg-[#9D174D] text-white' : 'bg-amber-300 text-[#1A1615]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* COMPACT ACTION CTAS */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white hover:text-emerald-600 transition-all border border-white/40 flex items-center justify-center shadow-xs hover:scale-105"
                title="Direct WhatsApp Inquiry"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </a>

              <button
                onClick={() => onOpenBooking('Appointment')}
                className="px-4 py-1.5 rounded-full bg-white text-[#9D174D] hover:bg-amber-100 font-extrabold text-[11px] uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-1.5 transform active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-[#9D174D]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* MOBILE MENU TRIGGER */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-xl bg-white/20 border border-white/40 text-white shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-b from-[#9D174D] to-[#BE185D] border-t border-white/20 px-4 pt-3 pb-5 mt-2 space-y-2 shadow-xl text-white"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-between ${
                    activeTab === item.id
                      ? 'bg-white text-[#9D174D] shadow-md'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-amber-300 text-[#1A1615]">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('Appointment');
                  }}
                  className="w-full py-2.5 rounded-xl bg-white text-[#9D174D] font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#9D174D]" />
                  <span>Book Appointment Now</span>
                </button>
                <a
                  href={whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
