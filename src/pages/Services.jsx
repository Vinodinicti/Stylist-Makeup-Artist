import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, CheckCircle2, X, Maximize2, Sparkles, Star } from 'lucide-react';
import { Card3D } from '../components/3DCard';
import { GlitterBackground } from '../components/GlitterBackground';
import { SERVICES_DATA } from '../data/mockData';

export const Services = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Bridal', 'Engagement', 'Party', 'HD Glam', 'Natural', 'Photoshoot'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()) || (selectedCategory === 'HD Glam' && s.category === 'HD Glam'));

  return (
    <div className="pt-16 sm:pt-20 pb-16 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBCFE8] via-[#FEF08A] via-[#FED7AA] to-[#F9A8D4] text-[#1A1615] rounded-3xl overflow-hidden relative border-2 border-[#BE185D]/30 shadow-2xl">
      
      {/* Luxury Glitter Vanity Brushes Background Image with Opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/images/services_hero_bg.jpg"
          alt="Bridal Services Vanity Brushes Background"
          className="w-full h-full object-cover object-center opacity-45 mix-blend-multiply pointer-events-none"
        />
      </div>

      {/* 3D SPARKLING GLITTER PARTICLES & MOTION LAYER */}
      <GlitterBackground count={45} />

      {/* LUXURY MEDIUM PINK, YELLOW & ROSE GLOWING ORBS */}
      <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-gradient-to-r from-[#F472B6]/60 to-[#FBBF24]/50 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[580px] h-[580px] bg-gradient-to-r from-[#F59E0B]/50 to-[#FB7185]/60 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#E11D48]/30 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-3 relative z-10 pt-2"
      >
        <span className="text-xs font-extrabold text-[#BE185D] uppercase tracking-widest px-5 py-2 rounded-full bg-white/90 border border-[#BE185D]/30 shadow-md inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#BE185D] animate-pulse" />
          Makeover Catalogue & Pricing
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif italic text-[#1A1615] leading-tight">
          Bridal Services & <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] font-black">Packages</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#1A1615] leading-relaxed font-bold max-w-2xl mx-auto">
          From TEMPTU 4K HD Airbrush bridal looks to high-fashion sagan glam, discover our luxury customized makeover packages. Click any card image to view in full resolution.
        </p>
      </motion.div>

      {/* CATEGORY FILTER PILLS */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 relative z-10">
        <span className="text-xs font-serif italic text-[#1A1615] font-bold mr-1">Filter by:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 text-xs font-extrabold tracking-wider uppercase rounded-full transition-all duration-300 border shadow-sm ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white border-transparent scale-105 shadow-md'
                : 'bg-white text-[#1A1615] font-bold border-[#BE185D]/30 hover:border-[#BE185D] hover:bg-[#FFF0F5] hover:text-[#BE185D]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {filteredServices.map((service) => (
          <Card3D key={service.id} glowColor="rgba(190, 24, 93, 0.35)">
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col justify-between h-full bg-gradient-to-br from-[#FFF0F5] via-[#FCE7F3] to-white rounded-3xl border-2 border-[#BE185D]/30 shadow-xl text-[#1A1615] relative overflow-hidden group hover:border-[#BE185D] hover:scale-[1.02] hover:shadow-2xl transition-all">
              <div className="space-y-3 sm:space-y-4">
                {/* Image with Click Lightbox Trigger */}
                <div
                  onClick={() => setLightboxImage(service)}
                  className="relative h-44 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-[#FFF0F5] border-2 border-[#BE185D]/20 group-hover:border-[#BE185D] transition-all shadow-md"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Tag */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest rounded-md shadow-md">
                    {service.category.toUpperCase()}
                  </div>

                  {/* Hover Click to Expand Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 text-[#1A1615] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#BE185D]" /> View Full Image
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-black text-[#BE185D] text-xl sm:text-2xl">{service.price}</span>
                    <span className="line-through text-gray-500 font-bold text-[11px] sm:text-xs">{service.originalPrice}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#BE185D] transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#1A1615] font-semibold mt-1 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Inclusions */}
                <div className="pt-2 sm:pt-3 border-t border-[#BE185D]/20 space-y-1.5">
                  <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#BE185D] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#BE185D]" /> Package Highlights:
                  </h4>
                  <ul className="space-y-1 text-[11px] sm:text-xs text-[#1A1615] font-extrabold">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BE185D] flex-shrink-0 mt-0.5" />
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 sm:pt-3 border-t border-[#BE185D]/15">
                <button
                  onClick={() => onOpenBooking('Appointment', service.title)}
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book This Service</span>
                </button>
              </div>
            </div>
          </Card3D>
        ))}
      </div>

      {/* FULLSCREEN IMAGE LIGHTBOX POPUP MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white border-2 border-[#BE185D]/30 rounded-3xl overflow-hidden shadow-2xl text-[#1A1615]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FFF0F5] text-[#1A1615] hover:bg-[#BE185D] hover:text-white transition-colors shadow-xl border border-[#BE185D]/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image Container */}
              <div className="relative h-[65vh] w-full bg-gray-950 flex items-center justify-center p-2">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Modal Info Footer */}
              <div className="p-6 bg-[#FFF0F5]/80 border-t border-[#BE185D]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-[10px] font-extrabold uppercase tracking-widest">
                      {lightboxImage.category}
                    </span>
                    <span className="text-base font-extrabold text-[#BE185D]">{lightboxImage.price}</span>
                  </div>
                  <h3 className="text-2xl font-serif italic font-bold text-[#1A1615]">{lightboxImage.title}</h3>
                  <p className="text-xs text-[#4A3E3D] font-normal max-w-xl">{lightboxImage.description}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const target = lightboxImage.title;
                      setLightboxImage(null);
                      onOpenBooking('Appointment', target);
                    }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


