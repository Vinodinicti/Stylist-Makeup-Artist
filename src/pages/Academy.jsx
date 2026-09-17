import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Sparkles, BookOpen, Layers, Users, Camera, Gift, ShieldCheck, Clock, Calendar, ArrowRight, Star, Eye, X, Zap, Check, Play } from 'lucide-react';
import { Card3D } from '../components/3DCard';
import { GlitterBackground } from '../components/GlitterBackground';
import { COURSES_DATA } from '../data/mockData';

const PACKAGE_THEMES = [
  {
    // Course 1: Flagship Bridal & HD Airbrush (Vibrant Magenta & Gold)
    name: "Magenta Luxury",
    topBarGradient: "bg-gradient-to-r from-[#BE185D] via-[#E11D48] to-[#F59E0B]",
    badgeBg: "bg-gradient-to-r from-[#BE185D] to-[#E11D48]",
    cardBg: "bg-gradient-to-br from-[#FFF0F5] via-[#FCE7F3]/60 to-white",
    cardBorder: "border-2 border-[#BE185D]/40 hover:border-[#BE185D]",
    glowColor: "rgba(190, 24, 93, 0.45)",
    priceGradient: "bg-clip-text text-transparent bg-gradient-to-r from-[#BE185D] via-[#E11D48] to-[#F59E0B]",
    moduleBg: "bg-[#FFF0F5] border-[#BE185D]/25",
    checkIconColor: "text-[#BE185D]",
    perksBg: "bg-white/90 border-2 border-[#BE185D]/20",
    btnGradient: "bg-gradient-to-r from-[#BE185D] via-[#E11D48] to-[#F59E0B]",
    btnShadow: "shadow-[0_10px_25px_-5px_rgba(190,24,93,0.4)]",
    animation: {
      initial: { opacity: 0, scale: 0.85, y: 35 },
      whileInView: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.7, type: "spring", stiffness: 70 }
    }
  },
  {
    // Course 2: Self-Makeup & Vanity Bootcamp (Vibrant Sunburst Amber & Gold)
    name: "Sunburst Gold",
    topBarGradient: "bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#E11D48]",
    badgeBg: "bg-gradient-to-r from-[#F59E0B] to-[#D97706]",
    cardBg: "bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7]/60 to-white",
    cardBorder: "border-2 border-[#F59E0B]/50 hover:border-[#F59E0B]",
    glowColor: "rgba(245, 158, 11, 0.45)",
    priceGradient: "bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#E11D48]",
    moduleBg: "bg-[#FFFBEB] border-[#F59E0B]/30",
    checkIconColor: "text-[#D97706]",
    perksBg: "bg-white/90 border-2 border-[#F59E0B]/25",
    btnGradient: "bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#E11D48]",
    btnShadow: "shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)]",
    animation: {
      initial: { opacity: 0, x: -80, y: 20 },
      whileInView: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.75, delay: 0.1, type: "spring", stiffness: 65 }
    }
  },
  {
    // Course 3: Hair Styling & Draping (Vibrant Royal Violet & Pink)
    name: "Royal Violet",
    topBarGradient: "bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#BE185D]",
    badgeBg: "bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]",
    cardBg: "bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE]/60 to-white",
    cardBorder: "border-2 border-[#8B5CF6]/45 hover:border-[#8B5CF6]",
    glowColor: "rgba(139, 92, 246, 0.45)",
    priceGradient: "bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#BE185D]",
    moduleBg: "bg-[#F5F3FF] border-[#8B5CF6]/30",
    checkIconColor: "text-[#7C3AED]",
    perksBg: "bg-white/90 border-2 border-[#8B5CF6]/25",
    btnGradient: "bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#BE185D]",
    btnShadow: "shadow-[0_10px_25px_-5px_rgba(139,92,246,0.4)]",
    animation: {
      initial: { opacity: 0, x: 80, y: 20 },
      whileInView: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.75, delay: 0.15, type: "spring", stiffness: 65 }
    }
  },
  {
    // Course 4: Editorial & Fashion Specialization (Vibrant Emerald & Teal)
    name: "Emerald Fashion",
    topBarGradient: "bg-gradient-to-r from-[#059669] via-[#0D9488] to-[#F59E0B]",
    badgeBg: "bg-gradient-to-r from-[#059669] to-[#0D9488]",
    cardBg: "bg-gradient-to-br from-[#ECFDF5] via-[#D1FAE5]/60 to-white",
    cardBorder: "border-2 border-[#059669]/45 hover:border-[#059669]",
    glowColor: "rgba(5, 150, 105, 0.45)",
    priceGradient: "bg-clip-text text-transparent bg-gradient-to-r from-[#059669] via-[#0D9488] to-[#F59E0B]",
    moduleBg: "bg-[#ECFDF5] border-[#059669]/30",
    checkIconColor: "text-[#047857]",
    perksBg: "bg-white/90 border-2 border-[#059669]/25",
    btnGradient: "bg-gradient-to-r from-[#059669] via-[#0D9488] to-[#F59E0B]",
    btnShadow: "shadow-[0_10px_25px_-5px_rgba(5,150,105,0.4)]",
    animation: {
      initial: { opacity: 0, rotateY: 25, y: 40 },
      whileInView: { opacity: 1, rotateY: 0, y: 0 },
      transition: { duration: 0.8, delay: 0.2, type: "spring", stiffness: 60 }
    }
  }
];

export const Academy = ({ onOpenBooking }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] via-[#FFF8E7] to-white text-[#1A1615] pb-16 relative overflow-hidden">
      {/* Dynamic 3D Sparkling Glitter Particles & Motion Layer */}
      <GlitterBackground count={45} />

      {/* Background Animated Gentle Gradient Orbs (Rose Pink & Gold Champagne) */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-gradient-to-r from-[#F472B6]/40 to-[#FBBF24]/30 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-10 w-[580px] h-[580px] bg-gradient-to-r from-[#FDE68A]/40 to-[#FCE7F3]/40 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-2/3 right-1/4 w-[650px] h-[650px] bg-gradient-to-r from-[#FB7185]/30 to-[#F472B6]/30 rounded-full blur-[160px] pointer-events-none animate-pulse" />

      {/* 100% FULL WIDTH HERO BANNER WITH BALANCED VERTICAL CENTERING */}
      <section className="relative z-10 w-full pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[#FFFDF9] via-[#F5EBE1] to-[#FFF5F7] border-b border-[#BE185D]/20 shadow-lg overflow-hidden">
        {/* Luxury Eyeshadow Palette Academy Background with Opacity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/academy_hero_bg.jpg"
            alt="Makeup Academy Background"
            className="w-full h-full object-cover object-center opacity-45 mix-blend-multiply pointer-events-none"
          />
        </div>

        <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-[#F59E0B] via-[#E11D48] via-[#BE185D] via-[#8B5CF6] to-[#059669]" />

        <div className="max-w-7xl mx-auto w-full grid items-center gap-6 lg:gap-10 md:grid-cols-12">
          {/* Left Text Content - Vertically Centered */}
          <div className="md:col-span-7 lg:col-span-7 space-y-4 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#BE185D] via-[#E11D48] to-[#F59E0B] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md">
              <GraduationCap className="h-4 w-4 text-amber-200" />
              ISO 9001:2015 CERTIFIED INTERNATIONAL ACADEMY
            </span>

            <h1 className="text-4xl font-serif italic leading-tight text-[#1A1615] sm:text-5xl lg:text-6xl">
              Master Artistry <span className="not-italic bg-gradient-to-r from-[#F59E0B] via-[#E11D48] via-[#BE185D] to-[#8B5CF6] bg-clip-text font-black text-transparent">Diploma Courses</span>
            </h1>

            <p className="mx-auto max-w-xl text-xs font-bold leading-relaxed text-[#1A1615] sm:text-sm md:mx-0">
              Transform your passion into a lucrative career. Master 4K HD Airbrushing, Royal Indian Bridal Styling, and Hair Architecture under Celebrity Artist Anya Sharma.
            </p>

            {/* Quick Highlights Pill Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-extrabold md:justify-start">
              <span className="flex items-center gap-2 rounded-full border-2 border-[#BE185D]/30 bg-white px-4 py-2 text-[#BE185D] shadow-md transition-transform hover:scale-105">
                <Users className="h-4 w-4 text-[#BE185D]" /> 420+ Certified Alumni
              </span>
              <span className="flex items-center gap-2 rounded-full border-2 border-[#F59E0B]/40 bg-white px-4 py-2 text-[#D97706] shadow-md transition-transform hover:scale-105">
                <ShieldCheck className="h-4 w-4 text-[#F59E0B]" /> 100% Daily Live Models
              </span>
              <span className="flex items-center gap-2 rounded-full border-2 border-[#8B5CF6]/30 bg-white px-4 py-2 text-[#7C3AED] shadow-md transition-transform hover:scale-105">
                <Gift className="h-4 w-4 text-[#8B5CF6]" /> Free Pro Vanity Brush Kit
              </span>
            </div>
          </div>

          {/* Right Video Container (Fills 100% of its Frame & Fully Visible Below Header) */}
          <div className="md:col-span-5 lg:col-span-5 relative w-full mt-2 sm:mt-0">
            <div className="overflow-hidden rounded-[28px] border-2 border-[#BE185D]/30 bg-white/90 p-2 shadow-[0_20px_50px_rgba(190,24,93,0.22)]">
              <div className="relative overflow-hidden rounded-[22px] bg-[#1F0F15] w-full">
                <video
                  src="/videos/hero-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#1A1615]/85 via-[#1A1615]/35 to-transparent px-4 py-3.5 text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-200">Live Demo</p>
                    <p className="text-sm font-semibold">Master Makeup Techniques</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/30">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY BODY CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 relative z-10">
        {/* DISTINCT COLORFUL HIGHLIGHT CARDS FOR ACADEMY PERKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {/* Box 1: Magenta */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <Card3D glowColor="rgba(190, 24, 93, 0.4)">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFF0F5] via-[#FCE7F3] to-white border-2 border-[#BE185D]/40 text-center space-y-3 shadow-xl hover:border-[#BE185D] transition-all h-full flex flex-col items-center justify-center group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#BE185D] via-[#E11D48] to-[#F59E0B] text-white flex items-center justify-center shadow-lg border-2 border-white/60 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Award className="w-7 h-7 text-white animate-pulse" />
              </div>
              <h4 className="text-base font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#BE185D] transition-colors">
                ISO Certified Diploma
              </h4>
              <p className="text-xs text-[#1A1615] font-semibold leading-relaxed">
                Government & internationally recognized certification valid across global salons & studios.
              </p>
            </div>
          </Card3D>
        </motion.div>

        {/* Box 2: Amber Gold */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Card3D glowColor="rgba(245, 158, 11, 0.4)">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7] to-white border-2 border-[#F59E0B]/50 text-center space-y-3 shadow-xl hover:border-[#F59E0B] transition-all h-full flex flex-col items-center justify-center group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#D97706] to-[#E11D48] text-white flex items-center justify-center shadow-lg border-2 border-white/60 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="w-7 h-7 text-white animate-pulse" />
              </div>
              <h4 className="text-base font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#D97706] transition-colors">
                Daily Live Models
              </h4>
              <p className="text-xs text-[#1A1615] font-semibold leading-relaxed">
                100% hands-on practical training with real human models provided for every single class session.
              </p>
            </div>
          </Card3D>
        </motion.div>

        {/* Box 3: Royal Violet */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Card3D glowColor="rgba(139, 92, 246, 0.4)">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-white border-2 border-[#8B5CF6]/40 text-center space-y-3 shadow-xl hover:border-[#8B5CF6] transition-all h-full flex flex-col items-center justify-center group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8B5CF6] via-[#EC4899] to-[#BE185D] text-white flex items-center justify-center shadow-lg border-2 border-white/60 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Gift className="w-7 h-7 text-white animate-pulse" />
              </div>
              <h4 className="text-base font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#7C3AED] transition-colors">
                Free Pro Vanity Kit
              </h4>
              <p className="text-xs text-[#1A1615] font-semibold leading-relaxed">
                Receive an official professional brush & cosmetic vanity kit upon enrollment.
              </p>
            </div>
          </Card3D>
        </motion.div>

        {/* Box 4: Emerald Green */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Card3D glowColor="rgba(5, 150, 105, 0.4)">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#ECFDF5] via-[#D1FAE5] to-white border-2 border-[#059669]/40 text-center space-y-3 shadow-xl hover:border-[#059669] transition-all h-full flex flex-col items-center justify-center group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#059669] via-[#0D9488] to-[#F59E0B] text-white flex items-center justify-center shadow-lg border-2 border-white/60 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Camera className="w-7 h-7 text-white animate-pulse" />
              </div>
              <h4 className="text-base font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#047857] transition-colors">
                Portfolio Shoot
              </h4>
              <p className="text-xs text-[#1A1615] font-semibold leading-relaxed">
                High-resolution studio photography shoot with professional models to kickstart your career.
              </p>
            </div>
          </Card3D>
        </motion.div>
      </div>

      {/* VIBRANT MULTI-COLOR BATCH SEAT BANNER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#BE185D] via-[#E11D48] via-[#F59E0B] to-[#8B5CF6] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 group overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
        
        <div className="flex items-center gap-5 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white text-[#BE185D] flex items-center justify-center flex-shrink-0 shadow-xl">
            <Calendar className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-200 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md inline-flex items-center gap-1.5 mb-1">
              <Zap className="w-3.5 h-3.5 text-amber-300 animate-pulse" /> Limited Seat Batches
            </span>
            <h3 className="text-xl sm:text-2xl font-serif italic font-bold text-white">
              Next Batch Commences 1st & 15th of Every Month
            </h3>
            <p className="text-xs text-white/90 mt-1 font-medium">
              Strictly capped at 8 students per batch for maximum 1-on-1 personalized mentoring.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenBooking('Academy')}
          className="px-8 py-4 rounded-full bg-white text-[#BE185D] font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:bg-amber-100 hover:scale-105 active:scale-95 transition-all whitespace-nowrap relative z-10"
        >
          Reserve Seat Now
        </button>
      </motion.div>

      {/* COURSES CATALOGUE - COMPACT VIBRANT CARDS WITH FULL DETAILS POPUP */}
      <div className="space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <span className="text-xs font-extrabold text-[#BE185D] uppercase tracking-widest px-4 py-1.5 rounded-full bg-white border-2 border-[#BE185D]/30 shadow-md inline-block">
            Curriculum Specializations
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615]">
            Training <span className="not-italic font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] via-[#BE185D] to-[#8B5CF6]">Packages</span>
          </h2>
          <p className="text-xs text-[#2C221E]/80 font-medium">
            Compact overview cards with full curriculum details in screen-fitting popups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES_DATA.map((course, index) => {
            const theme = PACKAGE_THEMES[index % PACKAGE_THEMES.length];

            return (
              <motion.div
                key={course.id}
                initial={theme.animation.initial}
                whileInView={theme.animation.whileInView}
                viewport={{ once: true, margin: "-40px" }}
                transition={theme.animation.transition}
                className="h-full"
              >
                <Card3D glowColor={theme.glowColor}>
                  <div className={`rounded-3xl ${theme.cardBg} ${theme.cardBorder} shadow-xl transition-all flex flex-col justify-between h-full relative overflow-hidden group`}>
                    
                    {/* Top Decorative Vibrant Color Strip */}
                    <div className={`h-3 w-full ${theme.topBarGradient}`} />

                    <div className="p-6 space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                      {/* Top Badges & Pricing */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#BE185D]/15 pb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md ${theme.badgeBg}`}>
                            {course.badge}
                          </span>
                          <span className="text-[10px] font-extrabold text-[#2C221E]/80 px-2.5 py-0.5 rounded-full bg-white border border-[#BE185D]/20 shadow-xs">
                            {course.level}
                          </span>
                        </div>

                        <div className="text-right">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs line-through text-[#2C221E]/40 font-bold">{course.originalPrice}</span>
                            <span className={`text-xl sm:text-2xl font-serif italic font-extrabold ${theme.priceGradient}`}>{course.price}</span>
                          </div>
                        </div>
                      </div>

                      {/* Course Title & Overview */}
                      <div className="space-y-1.5">
                        <h3 className="text-lg sm:text-xl font-serif italic font-bold text-[#1A1615] group-hover:text-[#BE185D] transition-colors leading-snug">
                          {course.title}
                        </h3>
                        <p className="text-xs text-[#2C221E]/80 leading-relaxed font-normal line-clamp-2">
                          {course.overview}
                        </p>
                      </div>

                      {/* Key Info Bar */}
                      <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/90 border border-[#BE185D]/15 text-xs font-medium shadow-xs">
                        <div className="flex items-center gap-2">
                          <Clock className={`w-3.5 h-3.5 ${theme.checkIconColor}`} />
                          <div>
                            <span className="text-[#2C221E]/60 text-[9px] uppercase font-bold block">Duration</span>
                            <strong className="text-[#1A1615] text-xs">{course.duration}</strong>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 border-l border-[#BE185D]/15 pl-2">
                          <BookOpen className={`w-3.5 h-3.5 ${theme.checkIconColor}`} />
                          <div>
                            <span className="text-[#2C221E]/60 text-[9px] uppercase font-bold block">Total Hours</span>
                            <strong className="text-[#1A1615] text-xs">{course.totalHours}</strong>
                          </div>
                        </div>
                      </div>

                      {/* Quick Highlights Preview */}
                      <div className="space-y-1 pt-1">
                        <ul className="space-y-1 text-xs">
                          {course.modules.slice(0, 2).map((moduleItem, mIdx) => (
                            <li key={mIdx} className="flex items-center gap-2 text-[#2C221E]/85">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${theme.checkIconColor} flex-shrink-0`} />
                              <span className="font-medium truncate">{moduleItem}</span>
                            </li>
                          ))}
                        </ul>
                        {course.modules.length > 2 && (
                          <p className="text-[11px] text-[#BE185D] font-extrabold pt-0.5">
                            +{course.modules.length - 2} more modules in full details
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Dual Action Buttons: Full Details Modal & Direct Booking */}
                    <div className="p-6 pt-0 relative z-10 flex flex-col sm:flex-row gap-2.5">
                      <button
                        onClick={() => setSelectedCourse({ ...course, theme })}
                        className="flex-1 py-3 px-3 rounded-xl bg-white border-2 border-[#BE185D]/30 text-[#BE185D] font-extrabold text-xs uppercase tracking-wider hover:bg-[#FFF0F5] hover:border-[#BE185D] active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Read More</span>
                      </button>

                      <button
                        onClick={() => onOpenBooking('Academy', course.title)}
                        className={`flex-1 py-3 px-3 rounded-xl ${theme.btnGradient} ${theme.btnShadow} text-white font-extrabold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 group/btn`}
                      >
                        <span>Reserve Seat</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FULL DETAILS SCREEN-FITTING POPUP MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Popup Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 25 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] rounded-3xl ${selectedCourse.theme.cardBg} border-2 ${selectedCourse.theme.cardBorder} shadow-2xl flex flex-col overflow-hidden z-10`}
            >
              {/* Top Gradient Banner */}
              <div className={`h-3 w-full ${selectedCourse.theme.topBarGradient}`} />

              {/* Modal Header */}
              <div className="p-5 sm:p-6 pb-4 border-b border-[#BE185D]/15 flex items-start justify-between gap-4 bg-white/70 backdrop-blur-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs ${selectedCourse.theme.badgeBg}`}>
                      {selectedCourse.badge}
                    </span>
                    <span className="text-[10px] font-extrabold text-[#2C221E]/80 px-2.5 py-0.5 rounded-full bg-white border border-[#BE185D]/20">
                      {selectedCourse.level}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1615]">
                    {selectedCourse.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 rounded-full bg-white/90 text-[#2C221E]/70 hover:text-[#BE185D] hover:bg-white transition-all shadow-md flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content Body */}
              <div className="p-5 sm:p-7 space-y-6 overflow-y-auto flex-1">
                {/* Investment & Duration Info Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/90 border border-[#BE185D]/20 shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#2C221E]/60 block">Course Fee</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className={`text-2xl font-serif italic font-extrabold ${selectedCourse.theme.priceGradient}`}>
                        {selectedCourse.price}
                      </span>
                      <span className="text-xs line-through text-[#2C221E]/40 font-bold">
                        {selectedCourse.originalPrice}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#2C221E]/60 font-semibold">Includes Taxes & Vanity Kit</span>
                  </div>

                  <div className="flex items-center gap-4 sm:border-l sm:border-[#BE185D]/15 sm:pl-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#2C221E]/60 block">Duration & Intensity</span>
                      <p className="text-xs font-bold text-[#1A1615] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#BE185D]" /> {selectedCourse.duration}
                      </p>
                      <p className="text-xs font-bold text-[#1A1615] flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#BE185D]" /> {selectedCourse.totalHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Course Overview */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#BE185D]">
                    Overview & Program Description
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2C221E]/85 leading-relaxed font-normal bg-white/70 p-4 rounded-xl border border-[#BE185D]/10">
                    {selectedCourse.overview}
                  </p>
                </div>

                {/* Full Curriculum Modules */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1A1615] flex items-center gap-2">
                    <Layers className={`w-4 h-4 ${selectedCourse.theme.checkIconColor}`} />
                    <span>Complete Modules Syllabus ({selectedCourse.modules.length} Modules):</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-xs">
                    {selectedCourse.modules.map((moduleItem, mIdx) => (
                      <li key={mIdx} className={`flex items-start gap-2.5 p-3 rounded-xl border ${selectedCourse.theme.moduleBg} shadow-xs`}>
                        <CheckCircle2 className={`w-4 h-4 ${selectedCourse.theme.checkIconColor} flex-shrink-0 mt-0.5`} />
                        <span className="font-semibold text-[#2C221E]/90">{moduleItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package Perks & Vanity Kit Inclusions */}
                <div className={`p-5 rounded-2xl ${selectedCourse.theme.perksBg} shadow-xs space-y-3`}>
                  <span className="text-xs font-extrabold text-[#BE185D] uppercase tracking-wider flex items-center gap-2">
                    <Gift className="w-4 h-4 text-[#F59E0B]" /> Full Kit & Certification Perks Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C221E]/85">
                    {selectedCourse.includes.map((inc, iIdx) => (
                      <p key={iIdx} className="flex items-center gap-2 font-semibold bg-white/80 p-2 rounded-lg border border-[#BE185D]/10">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /> {inc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Sticky Footer Action */}
              <div className="p-5 sm:p-6 border-t border-[#BE185D]/15 bg-white/80 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold text-[#1A1615]">Ready to enroll?</p>
                  <p className="text-[11px] text-[#2C221E]/70 font-medium">8 students per batch. ISO 9001 Certified.</p>
                </div>
                <button
                  onClick={() => {
                    const title = selectedCourse.title;
                    setSelectedCourse(null);
                    onOpenBooking('Academy', title);
                  }}
                  className={`w-full sm:w-auto px-7 py-3 rounded-xl ${selectedCourse.theme.btnGradient} ${selectedCourse.theme.btnShadow} text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2`}
                >
                  <GraduationCap className="w-4 h-4 text-white" />
                  <span>Reserve Seat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

