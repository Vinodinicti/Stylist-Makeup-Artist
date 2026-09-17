import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Flame, Star, CheckCircle2, ShieldCheck, Heart, GraduationCap, Crown, Trophy, Medal } from 'lucide-react';
import { Card3D } from '../components/3DCard';
import { GlitterBackground } from '../components/GlitterBackground';
import { ARTIST_INFO } from '../data/mockData';

export const About = ({ onOpenBooking }) => {
  const timelineMilestones = [
    {
      year: "2015 - 2017",
      title: "International Academy Certification",
      desc: "Completed master diploma in London & Dubai in Airbrush and SFX beauty makeup under celebrity international masters."
    },
    {
      year: "2018 - 2020",
      title: "Stylist Studio Founder & Fashion Runway Artist",
      desc: "Lead makeup artist for top Lakme Fashion Week designers & 200+ high-profile celebrity brides across India."
    },
    {
      year: "2021 - 2023",
      title: "Makeup Academy Launch & TEMPTU Certification",
      desc: "Founded Stylist Makeup Academy training over 400+ students and introducing state-of-the-art 4K HD Airbrush training."
    },
    {
      year: "2024 - Present",
      title: "Awarded Best Luxury Bridal Artist 2024",
      desc: "Recognized as the top luxury bridal and makeover artist in Delhi NCR & Pan India with over 650+ satisfied brides."
    }
  ];

  const signatureTechniques = [
    {
      title: "4K TEMPTU HD Airbrush Base",
      desc: "Micro-fine compressed mist foundation providing a poreless, featherweight 18-hour waterproof finish.",
      icon: Sparkles,
      color: "from-[#F59E0B] to-[#E11D48]"
    },
    {
      title: "Sculptural 3D Contour & Lighting",
      desc: "Strategic bone structure highlighting tailored specifically to photograph flawlessly under 4K studio cameras.",
      icon: Award,
      color: "from-[#E11D48] to-[#BE185D]"
    },
    {
      title: "Korean Dewy Glass Skin Prep",
      desc: "Deep hydration 24K gold leaf prep ensuring your natural skin glows from within without looking greasy.",
      icon: Flame,
      color: "from-[#F59E0B] via-[#E11D48] to-[#BE185D]"
    }
  ];

  return (
    <div className="mt-16 mb-4 pt-6 sm:pt-8 pb-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF0] via-[#FFF3EA] to-[#FFEFEF] rounded-3xl overflow-hidden relative border-2 border-[#FDE68A]/60 shadow-2xl">
      
      {/* --- CREATIVE 3D SPARKLING GLITTER & MOTION PARTICLES LAYER --- */}
      <GlitterBackground count={45} />

      {/* --- CREATIVE 3D FLOATING AMBIENT BACKGROUND ELEMENTS --- */}
      {/* 1. Top Left: Sinuous Floating Gold Sunshine Orb */}
      <motion.div
        animate={{
          y: [0, -30, 15, 0],
          x: [0, 20, -15, 0],
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.4, 0.65, 0.4]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 left-10 w-96 h-96 bg-gradient-to-tr from-[#FDE68A] via-[#F59E0B]/30 to-[#FEF08A] rounded-full blur-[130px] pointer-events-none"
      />

      {/* 2. Top Right: Floating 3D Glowing Rose Orb */}
      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1],
          rotate: [0, 60, -30, 0],
          opacity: [0.35, 0.6, 0.35]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-5 w-[480px] h-[480px] bg-gradient-to-br from-[#FBCFE8] via-[#F472B6]/40 to-[#FCE7F3] rounded-full blur-[140px] pointer-events-none"
      />



      {/* 5. Bottom Center: Slow Floating Peach Amber Orb */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -20, 0],
          scale: [0.9, 1.25, 0.9, 0.9]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 left-1/3 w-[450px] h-[450px] bg-gradient-to-t from-[#FFEDD5] via-[#FED7AA] to-[#FBCFE8] rounded-full blur-[140px] pointer-events-none"
      />

      {/* HEADER HERO (BROUGHT HIGHER UP) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-2.5 relative z-10 pt-2"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-[11px] font-extrabold text-[#BE185D] uppercase tracking-widest px-5 py-2 rounded-full bg-gradient-to-r from-[#FFF0F5] via-[#FEF9C3] via-[#FFEDD5] to-[#FCE7F3] border-2 border-[#FDE68A] shadow-md inline-flex items-center gap-2 cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
          EXCLUSIVE MASTERY & ARTISTRY
        </motion.span>
        <h1 className="text-4xl sm:text-6xl font-serif italic text-[#1A1615] leading-tight">
          Meet <span className="not-italic font-black bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] via-[#E11D48] to-[#BE185D]">Anya Sharma</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#2C221E]/85 leading-relaxed font-semibold max-w-2xl mx-auto">
          {ARTIST_INFO.bio}
        </p>
      </motion.div>

      {/* ARTIST PROFILE & VIBRANT COLORFUL GRADIENT BOX SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left 3D Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <Card3D glowColor="rgba(190, 24, 93, 0.35)">
            <div className="p-3">
              <div className="relative h-[480px] rounded-xl overflow-hidden">
                <img
                  src="/images/indian_artist_portrait.jpg"
                  alt="Anya Sharma Celebrity Indian Makeup Artist"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615]/85 via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#F59E0B] to-[#BE185D] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-sm shadow-md">
                  CELEBRITY ARTIST
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#BE185D]/20 shadow-md">
                  <h3 className="text-base font-serif italic font-bold text-[#1A1615]">Anya Sharma</h3>
                  <p className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#BE185D]">
                    Master Celebrity Artist & Educator
                  </p>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* Right Vibrant Colorful Gradient Feature Box with White Text Container Over It */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] shadow-2xl overflow-hidden text-white group">
            {/* Background shimmer effect */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-xs font-extrabold tracking-wider uppercase">
                <Award className="w-4 h-4 text-amber-200" />
                <span>Award-Winning Master Educator</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif italic font-bold text-white leading-tight">
                Transforming beauty into <span className="not-italic text-amber-200 font-extrabold">timeless Indian art.</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                With over a decade of industry expertise, Anya Sharma believes that makeup should enhance your natural elegance, not mask it. From royal Indian brides to high-fashion runway shows, every makeover is customized according to facial architecture, skin undertones, and studio lighting.
              </p>

              {/* White Cards Over the Colorful Gradient Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white text-[#1A1615] shadow-xl border border-white/60 transform hover:-translate-y-1 transition-transform">
                  <h4 className="text-3xl font-serif italic font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#BE185D]">
                    650+
                  </h4>
                  <p className="text-xs text-[#2C221E]/80 font-bold mt-0.5">Bridal Makeovers Completed</p>
                </div>

                <div className="p-4 rounded-2xl bg-white text-[#1A1615] shadow-xl border border-white/60 transform hover:-translate-y-1 transition-transform">
                  <h4 className="text-3xl font-serif italic font-extrabold text-[#BE185D]">
                    420+
                  </h4>
                  <p className="text-xs text-[#2C221E]/80 font-bold mt-0.5">Certified Academy Students</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Appointment')}
                  className="px-8 py-3.5 rounded-full bg-white text-[#BE185D] hover:bg-[#FAF5F2] font-extrabold text-xs uppercase tracking-widest shadow-xl transition-all transform hover:scale-105 active:scale-95"
                >
                  Book Bridal Consultation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SIGNATURE MAKEUP TECHNIQUES - LIGHT YELLOW BG WITH PINK GLITTERS ON THIS SECTION ALONE */}
      <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#FFFBEB] via-[#FEF08A] to-[#FEF3C7] shadow-xl border-2 border-[#F59E0B]/30 overflow-hidden my-12 z-10">
        {/* Pink Glitter Ambient Orbs & Flares */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#BE185D]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[#E11D48]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(190,24,93,0.1),transparent_70%)] pointer-events-none" />

        {/* Pale & Dull Pink Glitters Layer (Subtle Pale Sparkles & Soft Particles) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {[...Array(24)].map((_, i) => {
            const top = (i * 17 + 7) % 95;
            const left = (i * 23 + 11) % 95;
            const size = (i % 3 === 0) ? 'w-3 h-3' : (i % 2 === 0) ? 'w-2.5 h-2.5' : 'w-2 h-2';
            const duration = 2.5 + (i % 4) * 0.8;
            const delay = (i % 5) * 0.5;
            const isStar = i % 3 === 0;

            return (
              <div
                key={i}
                className="absolute animate-glitter-twinkle"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              >
                {isStar ? (
                  <Sparkles
                    className={`${size} text-[#BE185D]/60`}
                  />
                ) : (
                  <div
                    className={`${size} rounded-full bg-[#BE185D]/40 transform rotate-45`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* SECTION CONTENT */}
        <div className="relative z-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <span className="text-[11px] font-extrabold text-[#BE185D] uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#BE185D]/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48] animate-spin" />
              EXCLUSIVE MASTERY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615] leading-tight">
              Signature Makeup <span className="not-italic font-black bg-clip-text text-transparent bg-gradient-to-r from-[#BE185D] via-[#E11D48] to-[#881337]">Techniques</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#2C221E]/90 max-w-lg mx-auto">
              Proprietary luxury beauty formulas and airbrush methods crafted for flawless long-wear performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureTechniques.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Card3D glowColor="rgba(190, 24, 93, 0.45)">
                    <div className="p-8 space-y-5 text-center flex flex-col items-center justify-between h-full bg-gradient-to-br from-[#FFF0F5] via-[#FCE7F3] to-white rounded-3xl border-2 border-[#BE185D]/30 shadow-2xl relative overflow-hidden group hover:border-[#BE185D] hover:scale-[1.02] transition-all">
                      <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="w-5 h-5 text-[#BE185D] animate-glitter-twinkle" />
                      </div>
                      <div className="space-y-4">
                        {/* Gradient Icon Badge */}
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${tech.color} mx-auto flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-serif italic font-extrabold text-[#1A1615]">
                          {tech.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-[#1A1615] leading-relaxed font-bold">
                          {tech.desc}
                        </p>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* INTERACTIVE 3D CAREER TIMELINE - ALTERNATING ENTRANCE TO PAGE CENTER (NO TIMELINE LINE) */}
      <div className="space-y-10 pt-10 pb-10 px-6 sm:px-10 relative rounded-3xl bg-gradient-to-br from-[#FFF5F7]/85 via-[#FFFDF0]/85 to-[#FFF3EA]/90 border-2 border-[#BE185D]/20 shadow-xl overflow-hidden my-10 z-10">
        {/* Professional Vanity Mirror Background Image Layer with Opacity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/about_milestones_bg.jpg"
            alt="Milestones & Legacy Vanity Mirror Background"
            className="w-full h-full object-cover object-center opacity-45 mix-blend-multiply pointer-events-none"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-2 relative z-10"
        >
          <span className="text-xs font-extrabold text-[#BE185D] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFFDF9] border border-[#BE185D]/30 shadow-sm inline-block">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615]">
            Milestones & <span className="not-italic font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D]">Legacy</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {timelineMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isEven ? -180 : 180 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, type: "spring", stiffness: 60 }}
                className="w-full"
              >
                <Card3D glowColor={isEven ? "rgba(245, 158, 11, 0.35)" : "rgba(190, 24, 93, 0.35)"}>
                  <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#BE185D]/20 shadow-xl hover:border-[#BE185D] transition-all flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden group">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-xs font-extrabold whitespace-nowrap shadow-md group-hover:scale-105 transition-transform">
                      {item.year}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-lg sm:text-xl font-serif italic font-bold text-[#1A1615] group-hover:text-[#BE185D] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#2C221E]/80 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
