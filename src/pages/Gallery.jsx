import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, X, Maximize2, Sparkles, Eye, Camera, Star, Wand2 } from 'lucide-react';
import { Card3D } from '../components/3DCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GlitterBackground } from '../components/GlitterBackground';
import { GALLERY_ITEMS } from '../data/mockData';

export const Gallery = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Bridal', 'Engagement', 'Party Glam', 'Editorial', 'Natural', 'Academy Work'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="pt-16 sm:pt-20 pb-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF0] via-[#FFF3EA] to-[#FFEFEF] rounded-3xl overflow-hidden relative border-2 border-[#FDE68A]/50 shadow-xl">
      
      {/* Luxury Glam Portrait Transformations Background Image with Opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/images/gallery_hero_bg.jpg"
          alt="Transformations Studio Background"
          className="w-full h-full object-cover object-center opacity-45 mix-blend-multiply pointer-events-none"
        />
      </div>

      {/* --- 3D SPARKLING GLITTER PARTICLES & MOTION LAYER --- */}
      <GlitterBackground count={42} />

      {/* --- MULTI-MOVEMENT ANIMATED PASTEL GRADIENT BACKGROUND ORBS --- */}
      {/* 1. Top Left: Sinuous Floating Sunshine Yellow Orb */}
      <motion.div
        animate={{
          y: [0, -35, 15, 0],
          x: [0, 25, -20, 0],
          scale: [1, 1.18, 0.95, 1],
          opacity: [0.4, 0.65, 0.4]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 left-5 w-96 h-96 bg-gradient-to-tr from-[#FDE68A] to-[#FEF08A] rounded-full blur-[120px] pointer-events-none"
      />

      {/* 2. Top Right: Breathing Pulsing Soft Rose Pink Orb */}
      <motion.div
        animate={{
          scale: [1, 1.28, 0.92, 1],
          rotate: [0, 45, -30, 0],
          opacity: [0.35, 0.6, 0.35]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-5 w-[450px] h-[450px] bg-gradient-to-br from-[#FBCFE8] via-[#F472B6]/40 to-[#FCE7F3] rounded-full blur-[140px] pointer-events-none"
      />

      {/* 3. Middle Left: Diagonal Wave Warm Peach Orange Orb */}
      <motion.div
        animate={{
          x: [0, -45, 30, 0],
          y: [0, 40, -25, 0],
          scale: [0.9, 1.2, 0.95, 0.9],
          opacity: [0.3, 0.55, 0.3]
        }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-16 w-[420px] h-[420px] bg-gradient-to-r from-[#FFEDD5] via-[#FED7AA] to-[#FDBA74]/50 rounded-full blur-[130px] pointer-events-none"
      />

      {/* 4. Bottom Right: Figure-Eight Floating Gold & Lavender Prism Orb */}
      <motion.div
        animate={{
          x: [0, 40, -25, 0],
          y: [0, -30, 35, 0],
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.35, 0.6, 0.35]
        }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-10 w-[480px] h-[480px] bg-gradient-to-bl from-[#FEF08A] via-[#E9D5FF]/50 to-[#FBCFE8] rounded-full blur-[150px] pointer-events-none"
      />

      {/* 5. Bottom Center: Slow Orbit Apricot Coral Orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 0.88, 1],
          y: [0, -20, 20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 left-1/3 w-[400px] h-[400px] bg-gradient-to-t from-[#FFEDD5] to-[#FBCFE8] rounded-full blur-[130px] pointer-events-none"
      />

      {/* Ambient Radial Shimmer Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(253,230,138,0.15),transparent_60%)] pointer-events-none" />

      {/* HEADER HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto space-y-4 relative z-10"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-xs font-extrabold text-[#BE185D] uppercase tracking-widest px-5 py-2 rounded-full bg-gradient-to-r from-[#FFF0F5] via-[#FEF9C3] via-[#FFEDD5] to-[#FCE7F3] border-2 border-[#FDE68A] shadow-md inline-flex items-center gap-2 cursor-default"
        >
          <Sparkles className="w-4 h-4 text-[#D97706] animate-pulse" />
          Interactive Transformation Studio
        </motion.span>

        <h1 className="text-4xl sm:text-6xl font-serif italic text-[#1A1615]">
          Makeover <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] via-[#E11D48] to-[#BE185D] font-black">Transformations</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#1A1615] font-bold max-w-2xl mx-auto leading-relaxed">
          Explore AI-inspired makeup artistry styles on real Indian model faces with 3D digital makeup consultation.
        </p>

        {/* RICH COLORFUL & BIGGER FEATURE CARDS GRID UNDER HERO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
          {/* Card 1: Rose Magenta */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFF0F5] via-[#FCE7F3] to-white border-2 border-[#BE185D]/40 shadow-xl space-y-3 hover:border-[#BE185D] hover:scale-[1.02] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#BE185D] to-[#E11D48] text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-base font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#BE185D] transition-colors">
              AI-Guided Match
            </h4>
            <p className="text-xs text-[#1A1615] font-semibold leading-relaxed">
              Intelligent color harmony matching customized for Indian skin tones & undertones.
            </p>
          </div>

          {/* Card 2: Amber Gold */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7] to-white border-2 border-[#F59E0B]/50 shadow-xl space-y-3 hover:border-[#F59E0B] hover:scale-[1.02] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F59E0B] to-[#D97706] text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-base font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#D97706] transition-colors">
              AI Virtual Studio
            </h4>
            <p className="text-xs text-[#1A1615] font-semibold leading-relaxed">
              Real-time 3D mannequin digital consultation to test eyeshadows, lipsticks, skin tones & blush.
            </p>
          </div>

          {/* Card 3: Royal Violet */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-white border-2 border-[#8B5CF6]/45 shadow-xl space-y-3 hover:border-[#8B5CF6] hover:scale-[1.02] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B5CF6] to-[#EC4899] text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-base font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#7C3AED] transition-colors">
              Studio 4K HD Finish
            </h4>
            <p className="text-xs text-[#1A1615] font-semibold leading-relaxed">
              Long-stay TEMPTU airbrushing engineered for camera, studio lighting & 18-hour events.
            </p>
          </div>
        </div>
      </motion.div>

      {/* INTERACTIVE TRANSFORMATION STUDIO SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <BeforeAfterSlider onOpenBooking={onOpenBooking} />
      </motion.div>

      {/* GALLERY PORTFOLIO SHOWCASE */}
      <div className="space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <span className="text-xs font-extrabold text-[#BE185D] uppercase tracking-widest">
            Portfolio Filter
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#1A1615]">
            Category <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#BE185D] font-black">Showcase</span>
          </h2>
          <p className="text-xs text-[#2C221E]/75 font-normal">Select a category pill to filter makeovers and click any card for full resolution lightbox view.</p>
        </motion.div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-extrabold tracking-wider uppercase rounded-full transition-all duration-300 border shadow-sm ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white border-transparent scale-105 shadow-md'
                  : 'bg-white text-[#2C221E]/80 border-[#BE185D]/30 hover:border-[#BE185D] hover:bg-[#FFFDF9] hover:text-[#BE185D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card3D glowColor="rgba(190, 24, 93, 0.35)">
                  <div
                    onClick={() => setLightboxImage(item)}
                    className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#F5EBE1] border-2 border-[#BE185D]/20 hover:border-[#BE185D] transition-all shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#F59E0B] to-[#BE185D] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-md shadow-md">
                      {item.category.toUpperCase()}
                    </div>

                    {/* Bottom Overlay Info */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#BE185D]/20 flex items-center justify-between shadow-md">
                      <div>
                        <h4 className="text-xs font-serif italic font-bold text-[#1A1615] group-hover:text-[#BE185D] transition-colors">{item.title}</h4>
                        <p className="text-[10px] text-[#BE185D] font-extrabold">{item.artist}</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#BE185D] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* AFTER GALLERY CONTENT SECTION - VIP MAKEOVER EXPERIENCE BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FFFDF9] via-[#FCE7F3] to-[#FFF5F7] border-2 border-[#BE185D]/30 shadow-xl text-center space-y-5 relative z-10 overflow-hidden"
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-extrabold text-[#BE185D] uppercase tracking-widest px-4 py-1.5 rounded-full bg-white border border-[#BE185D]/30 shadow-sm inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
            LUXURY MAKEOVER EXPERIENCE
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif italic font-bold text-[#1A1615]">
            Ready to Experience Your <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] font-black">Dream Makeover?</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#2C221E]/80 leading-relaxed font-medium">
            Every makeover is tailor-crafted by Anya Sharma to accentuate your unique features using premium TEMPTU 4K Airbrush technology and international luxury cosmetics.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold pt-1">
          <span className="px-4 py-2 rounded-full bg-white text-[#BE185D] border border-[#BE185D]/20 shadow-sm flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-[#F59E0B]" /> 100% Customized HD Glam
          </span>
          <span className="px-4 py-2 rounded-full bg-white text-[#D97706] border border-[#F59E0B]/30 shadow-sm flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#D97706]" /> Camera & Studio Ready
          </span>
          <span className="px-4 py-2 rounded-full bg-white text-[#7C3AED] border border-[#8B5CF6]/20 shadow-sm flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#7C3AED]" /> 18-Hour Waterproof Hold
          </span>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onOpenBooking('Appointment')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span>Book Your Transformation Appointment</span>
          </button>
        </div>
      </motion.div>

      {/* LIGHTBOX MODAL WITH FULL RES VIEW */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1615]/85 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 30 }}
            className="relative max-w-4xl w-full bg-white border-2 border-[#BE185D]/30 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white text-[#1A1615] hover:bg-[#BE185D] hover:text-white transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative h-[65vh] w-full bg-[#1A1615] flex items-center justify-center">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-6 bg-white border-t border-[#BE185D]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#BE185D] text-white text-[10px] font-extrabold uppercase tracking-widest">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl font-serif italic font-bold text-[#1A1615] mt-1">{lightboxImage.title}</h3>
                <p className="text-xs text-[#2C221E]/75 font-medium">Artistry by: <strong className="text-[#BE185D]">{lightboxImage.artist}</strong></p>
              </div>

              <button
                onClick={() => setLightboxImage(null)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
              >
                Close Fullscreen
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
