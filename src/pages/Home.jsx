import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, GraduationCap, Award, Star, ArrowRight, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';
import { Card3D } from '../components/3DCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GlitterBackground } from '../components/GlitterBackground';
import { ARTIST_INFO, SERVICES_DATA, COURSES_DATA, TESTIMONIALS } from '../data/mockData';

// Letter-by-Letter Hero Text Animation Component
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.08, ease: [0.2, 0.65, 0.3, 0.9] }
  }
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2
    }
  }
};

const LetterByLetterHeading = ({ line1, line2Highlight }) => {
  const words1 = line1.split(" ");
  const words2 = line2Highlight.split(" ");

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-6xl xl:text-7xl font-serif italic text-[#1A1615] leading-[1.12] tracking-tight"
    >
      {/* Line 1 */}
      <span className="block mb-1">
        {words1.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-3 sm:mr-4">
            {word.split("").map((char, charIdx) => (
              <motion.span key={charIdx} variants={letterVariants} className="inline-block text-[#1A1615]">
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </span>

      {/* Line 2 Highlighted with Yellow to Dark Pink Gradient */}
      <span className="block not-italic font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D]">
        {words2.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-3 sm:mr-4">
            {word.split("").map((char, charIdx) => (
              <motion.span key={charIdx} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </motion.h1>
  );
};

export const Home = ({ setActiveTab, onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16 pt-14 bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-4 sm:pt-6 pb-12 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] via-[#FFF8E7] to-white">
        {/* Royal Indian Bridal Video Background with 80% Opacity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-60 mix-blend-multiply pointer-events-none"
          />
        </div>

        {/* Dynamic 3D Sparkling Glitter Particles & Motion Layer */}
        <GlitterBackground count={36} />

        {/* Soft Background Yellow & Dark Pink Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#BE185D]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#BE185D]/30 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="text-[11px] font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#BE185D] uppercase">
                  Voted #1 Luxury Indian Bridal Artist & Academy
                </span>
              </motion.div>

              {/* LETTER-BY-LETTER HERO HEADING */}
              <LetterByLetterHeading
                line1="Crafting Ethereal"
                line2Highlight="Indian Bridal Beauty."
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm sm:text-base text-[#2C221E]/80 max-w-xl leading-relaxed font-normal"
              >
                Experience world-class 4K HD Airbrush bridal transformations, sagan glam, and ISO certified masterclasses by celebrity artist <strong className="text-[#BE185D] font-bold">{ARTIST_INFO.name}</strong>.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  onClick={() => onOpenBooking('Appointment')}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white font-bold text-xs uppercase tracking-widest shadow-magenta-glow hover:scale-105 transition-all flex items-center gap-2.5 group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Bridal Makeover</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setActiveTab('academy')}
                  className="px-8 py-3.5 rounded-full bg-white border border-[#BE185D]/30 text-[#BE185D] font-bold text-xs uppercase tracking-widest hover:bg-[#F5EBE1] transition-all flex items-center gap-2 shadow-sm"
                >
                  <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
                  <span>Explore Academy</span>
                </button>
              </motion.div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#2C221E]/80 font-medium border-t border-[#BE185D]/15"
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Waterproof HD Airbrush</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#F59E0B]" />
                  <span>ISO Certified Academy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#BE185D]" />
                  <span>650+ Happy Indian Brides</span>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Image in 3D Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <Card3D glowColor="rgba(190, 24, 93, 0.3)" className="max-w-md mx-auto">
                <div className="p-2.5 bg-white rounded-2xl border border-[#BE185D]/20 shadow-xl space-y-2.5">
                  {/* Clean Image Container without text overlay */}
                  <div className="relative h-[320px] sm:h-[360px] lg:h-[340px] xl:h-[360px] rounded-xl overflow-hidden">
                    <img
                      src="/images/hero_royal_bridal.jpg"
                      alt="Royal Indian Bridal Makeup"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#F59E0B] to-[#BE185D] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-md shadow-md">
                      ROYAL BRIDAL HD
                    </div>
                  </div>

                  {/* Text Container Below the Image */}
                  <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/15 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-serif italic font-bold text-[#1A1615]">
                        Anya Sharma Master Studio
                      </h4>
                      <div className="flex items-center gap-1 mt-0.5 text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
                        ))}
                        <span className="text-xs font-extrabold text-[#1A1615] ml-1">
                          4.98 (650+ Reviews)
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg text-[10px] font-extrabold bg-gradient-to-r from-[#F59E0B] to-[#BE185D] text-white shadow-sm shrink-0">
                      4K HD
                    </span>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DYNAMIC STATS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-[#FFFDF9] border border-[#BE185D]/20 shadow-glam-card"
        >
          <div className="text-center space-y-1">
            <span className="block font-serif italic text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#BE185D]">
              {ARTIST_INFO.happyBrides}
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70">
              Happy Indian Brides
            </span>
          </div>

          <div className="text-center space-y-1 border-l border-[#BE185D]/20">
            <span className="block font-serif italic text-3xl sm:text-5xl font-extrabold text-[#BE185D]">
              {ARTIST_INFO.studentsTrained}
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70">
              Academy Graduates
            </span>
          </div>

          <div className="text-center space-y-1 border-l border-[#BE185D]/20">
            <span className="block font-serif italic text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#BE185D]">
              {ARTIST_INFO.experienceYears}+
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70">
              Years Experience
            </span>
          </div>

          <div className="text-center space-y-1 border-l border-[#BE185D]/20">
            <span className="block font-serif italic text-3xl sm:text-5xl font-extrabold text-[#F59E0B]">
              100%
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70">
              Waterproof HD Airbrush
            </span>
          </div>
        </motion.div>
      </section>

      {/* FEATURED SERVICES & PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative rounded-3xl py-10 px-6 sm:px-10 bg-gradient-to-br from-[#FFF5F7]/80 via-[#FFFDF0]/80 to-white/90 border border-[#BE185D]/20 shadow-lg overflow-hidden">
        {/* Luxury Flatlay Makeup Brushes Background Image Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/home_hero_bg.jpg"
            alt="Makeup Studio Flatlay Background"
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
          <span className="text-xs font-bold text-[#BE185D] uppercase tracking-widest">
            Handcrafted Artistry
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615]">
            Featured Services & <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] font-bold">Packages</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C221E]/70">
            Signature makeover packages crafted with TEMPTU 4K airbrush precision for Indian weddings and events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.slice(0, 3).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card3D glowColor="rgba(190, 24, 93, 0.35)">
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col justify-between h-full bg-gradient-to-br from-[#FFF0F5] via-[#FCE7F3] to-white rounded-3xl border-2 border-[#BE185D]/30 shadow-xl text-[#1A1615] group hover:border-[#BE185D] hover:scale-[1.02] transition-all">
                  <div>
                    {/* Image */}
                    <div className="relative h-44 sm:h-64 rounded-2xl overflow-hidden group bg-[#FFF0F5] border-2 border-[#BE185D]/20 mb-3 sm:mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider rounded-md shadow-md">
                        {service.category.toUpperCase()}
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-black text-[#BE185D] text-lg sm:text-xl">{service.price}</span>
                        <span className="line-through text-gray-500 font-bold text-[11px] sm:text-xs">{service.originalPrice}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif italic font-extrabold text-[#1A1615] group-hover:text-[#BE185D] transition-colors line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#1A1615] font-semibold mt-1.5 leading-relaxed">
                        {service.shortDescription || service.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking('Appointment', service.title)}
                    className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-md mt-2"
                  >
                    Book Service
                  </button>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setActiveTab('services')}
            className="px-8 py-3 rounded-full bg-white border border-[#BE185D]/30 text-[#BE185D] font-bold text-xs uppercase tracking-wider hover:bg-[#F5EBE1] transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <span>View All Makeup Services</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
          </button>
        </div>
      </section>

      {/* AI GLAM TRANSFORMATION STUDIO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider onOpenBooking={onOpenBooking} />
      </section>

      {/* ACADEMY MASTERCLASS PREVIEW - LIGHT PINK BG WITH GOLD GLITTERS ON THIS SECTION ALONE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#FFF5F7] via-[#FCE7F3] to-[#FBCFE8] shadow-xl border-2 border-[#BE185D]/30 overflow-hidden">
          {/* Gold & Pink Ambient Orbs & Flares */}
          <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[#BE185D]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1),transparent_70%)] pointer-events-none" />

          {/* Pale & Dull Glitters Layer (Subtle Pale Sparkles & Soft Particles) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            {[...Array(24)].map((_, i) => {
              const top = (i * 19 + 5) % 95;
              const left = (i * 29 + 13) % 95;
              const size = (i % 3 === 0) ? 'w-3 h-3' : (i % 2 === 0) ? 'w-2.5 h-2.5' : 'w-2 h-2';
              const duration = 2.5 + (i % 4) * 0.8;
              const delay = (i % 5) * 0.5;
              const isStar = i % 3 === 0;

              return (
                <div
                  key={i}
                  className="absolute animate-glitter-gold-twinkle"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                  }}
                >
                  {isStar ? (
                    <Sparkles
                      className={`${size} text-[#C8963E]/70`}
                    />
                  ) : (
                    <div
                      className={`${size} rounded-full bg-[#D4A373]/50 transform rotate-45`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* SECTION CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-5 text-[#1A1615]">
              <span className="text-xs font-extrabold text-[#BE185D] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#BE185D]/30 inline-flex items-center gap-1.5 shadow-sm">
                <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
                Stylist Academy
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615] leading-tight">
                Become an ISO Certified <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] font-black">Master Artist.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#2C221E]/85 leading-relaxed font-normal">
                Learn 1-on-1 under Celebrity Artist Anya Sharma. Diploma programs equipping you with live model practice, TEMPTU airbrush certification, and vanity kit inclusions.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('academy')}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl inline-flex items-center gap-2 transform active:scale-95"
                >
                  <GraduationCap className="w-4 h-4 text-white" />
                  <span>Explore Courses & Modules</span>
                </button>
              </div>
            </div>

            {/* Right Course Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {COURSES_DATA.slice(0, 2).map((course) => (
                <div
                  key={course.id}
                  className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-[#F59E0B]/30 space-y-4 shadow-2xl relative overflow-hidden group hover:border-[#F59E0B] transition-all transform hover:-translate-y-1"
                >
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-5 h-5 text-[#F59E0B] animate-glitter-gold-twinkle" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-gradient-to-r from-[#F59E0B] to-[#BE185D] text-white rounded-md shadow-sm">
                    {course.badge}
                  </span>
                  <h3 className="text-base font-serif italic font-bold text-[#1A1615] group-hover:text-[#BE185D] transition-colors">
                    {course.title}
                  </h3>
                  <div className="text-xs text-[#2C221E]/80 space-y-1 font-medium">
                    <p>Duration: <strong className="text-[#1A1615] font-bold">{course.duration}</strong></p>
                    <p>Fee: <strong className="text-[#BE185D] font-extrabold">{course.price}</strong></p>
                  </div>
                  <button
                    onClick={() => onOpenBooking('Academy', course.title)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#BE185D] to-[#E11D48] text-white font-bold text-xs hover:from-[#F59E0B] hover:to-[#BE185D] hover:text-white transition-all shadow-md border border-[#BE185D]/20"
                  >
                    Enquire Batch
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS WITH SPINNING & ZOOMING ONE-BY-ONE ANIMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-10 px-6 sm:px-10 relative rounded-3xl bg-gradient-to-br from-[#FFF5F7]/80 via-[#FFFDF0]/80 to-[#FFF3EA]/90 border border-[#BE185D]/20 shadow-lg overflow-hidden">
        {/* Bridal Veil Background Image Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/home_section_bg_veil.webp"
            alt="Bridal Veil Background"
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
            Client Love
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615]">
            What Our <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] font-black">Brides Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.2, rotate: (idx % 2 === 0 ? -45 : 45) }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.85,
                delay: idx * 0.25,
                type: "spring",
                stiffness: 80,
                damping: 14
              }}
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              className="h-full"
            >
              <Card3D glowColor="rgba(190, 24, 93, 0.35)">
                <div className="p-7 space-y-5 rounded-2xl bg-white border-2 border-[#BE185D]/20 shadow-xl hover:border-[#BE185D] transition-all flex flex-col justify-between h-full relative overflow-hidden group">
                  <div className="absolute top-3 right-3 opacity-15 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-5 h-5 text-[#F59E0B] animate-glitter-twinkle" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#2C221E]/85 italic leading-relaxed font-normal">
                      "{item.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#BE185D]/15">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#BE185D] shadow-sm group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <h4 className="text-sm font-serif font-bold text-[#1A1615] group-hover:text-[#BE185D] transition-colors">{item.name}</h4>
                      <p className="text-[11px] font-bold text-[#BE185D]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
