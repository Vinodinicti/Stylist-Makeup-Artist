import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, ChevronDown, ChevronUp, Sparkles, Clock, CheckCircle2, Calendar, User, BookOpen, Layers, Zap, GraduationCap } from 'lucide-react';
import { Card3D } from '../components/3DCard';
import { GlitterBackground } from '../components/GlitterBackground';
import { ARTIST_INFO, FAQS, SERVICES_DATA, COURSES_DATA } from '../data/mockData';

export const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Appointment',
    subject: SERVICES_DATA[0].title,
    date: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          phone: contactForm.phone,
          email: contactForm.email,
          serviceOrCourse: contactForm.subject,
          date: contactForm.date,
          message: contactForm.message,
          type: contactForm.type
        })
      });
    } catch (err) {
      console.log('Backend offline, opening direct WhatsApp chat');
    }

    setLoading(false);
    setSubmitted(true);
  };

  const whatsappDirect = `https://wa.me/${ARTIST_INFO.whatsappPhone}?text=${encodeURIComponent(
    `Hello Stylist Makeup Artist! My name is ${contactForm.name || 'a visitor'}.\nI want to enquire regarding: *${contactForm.subject}*\nDate: ${contactForm.date || 'Flexible'}\nPhone: ${contactForm.phone}\nMessage: ${contactForm.message}`
  )}`;

  return (
    <div className="pt-16 sm:pt-20 pb-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF0] via-[#FFF3EA] to-[#FFEFEF] text-[#1A1615] rounded-3xl overflow-hidden relative border-2 border-[#BE185D]/30 shadow-2xl">
      {/* Luxury Cosmetics Vanity Counter Contact Background Image with Opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/images/contact_hero_bg.jpg"
          alt="Contact & Booking Counter Background"
          className="w-full h-full object-cover object-center opacity-45 mix-blend-multiply pointer-events-none"
        />
      </div>

      {/* 3D SPARKLING GLITTER PARTICLES & MOTION LAYER */}
      <GlitterBackground count={42} />

      {/* BACKGROUND ANIMATED MULTI-COLOR AMBIENT ORBS */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#F59E0B]/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-[#BE185D]/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#8B5CF6]/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      {/* HEADER HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto space-y-4 relative z-10"
      >
        <span className="text-[11px] font-extrabold text-[#BE185D] uppercase tracking-widest px-4 py-1.5 rounded-full bg-white border-2 border-[#BE185D]/30 shadow-md inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
          STUDIO DESK & RESERVATIONS
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif italic text-[#1A1615] leading-tight">
          Contact & <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] via-[#BE185D] to-[#8B5CF6] font-black">Bookings</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#1A1615] leading-relaxed font-bold max-w-2xl mx-auto">
          Reserve your wedding dates, check academy batch availability, or request a customized consultation with Anya Sharma.
        </p>
      </motion.div>

      {/* MAIN TWO COLUMN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
        {/* LEFT STUDIO INFORMATION CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 space-y-6"
        >
          <Card3D glowColor="rgba(190, 24, 93, 0.35)">
            <div className="p-6 sm:p-8 space-y-6 rounded-3xl bg-gradient-to-br from-[#FFF0F5] via-[#FCE7F3] to-white border-2 border-[#BE185D]/30 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-black text-[#BE185D] uppercase tracking-widest">VISIT US</span>
                <h3 className="text-xl sm:text-2xl font-serif italic font-extrabold text-[#1A1615] flex items-center justify-center sm:justify-start gap-2">
                  <Sparkles className="w-5 h-5 text-[#F59E0B]" /> Studio Headquarters
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-[#1A1615] font-bold">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-2xl bg-white/95 border-2 border-[#BE185D]/20 shadow-md group hover:border-[#BE185D] transition-colors text-center sm:text-left">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#BE185D] to-[#E11D48] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1A1615] text-sm">Main Studio & Academy</h5>
                    <p className="mt-0.5 text-[#1A1615] font-semibold">{ARTIST_INFO.location}</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-black text-[#BE185D] uppercase tracking-wider inline-flex items-center gap-1 mt-1 hover:underline"
                    >
                      <span>Directions on Google Maps</span> →
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-2xl bg-white/95 border-2 border-[#BE185D]/20 shadow-md group hover:border-[#BE185D] transition-colors text-center sm:text-left">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1A1615] text-sm">Phone & WhatsApp Hotline</h5>
                    <p className="mt-0.5 text-[#1A1615] font-semibold">+91 98765 43210 / +91 98111 22334</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-2xl bg-white/95 border-2 border-[#BE185D]/20 shadow-md group hover:border-[#BE185D] transition-colors text-center sm:text-left">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1A1615] text-sm">Official Email Desk</h5>
                    <p className="mt-0.5 text-[#1A1615] font-semibold">{ARTIST_INFO.email}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-2xl bg-white/95 border-2 border-[#BE185D]/20 shadow-md group hover:border-[#BE185D] transition-colors text-center sm:text-left">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1A1615] text-sm">Studio Operating Hours</h5>
                    <p className="mt-0.5 text-[#1A1615] font-semibold">Monday - Sunday: 10:00 AM - 08:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Connect Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border-2 border-emerald-500/40 text-center space-y-3 shadow-md">
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800 flex items-center justify-center gap-1.5 block">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 animate-pulse" /> INSTANT WHATSAPP RESPONSE
                </span>
                <p className="text-xs text-[#1A1615] font-bold">Need instant slot confirmation for upcoming wedding dates?</p>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappPhone}?text=${encodeURIComponent('Hello Anya! I want to check bridal slot availability for my wedding.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* RIGHT FORM CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FFFBEB] via-[#FFF5F7] to-white border-2 border-[#BE185D]/30 shadow-2xl relative overflow-hidden">
            {!submitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-black text-[#BE185D] uppercase tracking-widest">ONLINE RESERVATION FORM</span>
                  <h3 className="text-2xl sm:text-3xl font-serif italic font-extrabold text-[#1A1615]">Send an Enquiry</h3>
                  <p className="text-xs text-[#1A1615] font-bold">Fill out your event or course details for a fast response within 2 hours.</p>
                </div>

                {/* Dual Mode Selector Pills */}
                <div className="flex flex-col sm:flex-row rounded-2xl bg-white p-1.5 border-2 border-[#BE185D]/25 shadow-sm gap-1 sm:gap-0">
                  <button
                    type="button"
                    onClick={() => setContactForm((prev) => ({ ...prev, type: 'Appointment', subject: SERVICES_DATA[0].title }))}
                    className={`flex-1 py-3 text-xs font-black tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                      contactForm.type === 'Appointment'
                        ? 'bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white shadow-md'
                        : 'text-[#1A1615] hover:text-[#BE185D]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Makeup Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactForm((prev) => ({ ...prev, type: 'Academy', subject: COURSES_DATA[0].title }))}
                    className={`flex-1 py-3 text-xs font-black tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                      contactForm.type === 'Academy'
                        ? 'bg-gradient-to-r from-[#BE185D] via-[#8B5CF6] to-[#F59E0B] text-white shadow-md'
                        : 'text-[#1A1615] hover:text-[#BE185D]'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" /> Academy Course
                  </button>
                </div>

                {/* Target Dropdown */}
                <div>
                  <label className="block text-xs font-black text-[#1A1615] mb-1.5 uppercase tracking-wider">
                    Target {contactForm.type === 'Appointment' ? 'Service Package' : 'Academy Diploma Course'} *
                  </label>
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#BE185D]/30 text-[#1A1615] text-xs font-bold focus:outline-none focus:border-[#BE185D] shadow-sm"
                  >
                    {contactForm.type === 'Appointment'
                      ? SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} — ({s.price})
                          </option>
                        ))
                      : COURSES_DATA.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title} — ({c.price})
                          </option>
                        ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-[#1A1615] mb-1.5 uppercase tracking-wider">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#BE185D]/30 text-[#1A1615] text-xs font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#BE185D] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#1A1615] mb-1.5 uppercase tracking-wider">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={contactForm.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#BE185D]/30 text-[#1A1615] text-xs font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#BE185D] shadow-sm"
                    />
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-[#1A1615] mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@domain.com"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#BE185D]/30 text-[#1A1615] text-xs font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#BE185D] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#1A1615] mb-1.5 uppercase tracking-wider">Event / Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={contactForm.date}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#BE185D]/30 text-[#1A1615] text-xs font-bold focus:outline-none focus:border-[#BE185D] shadow-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-black text-[#1A1615] mb-1.5 uppercase tracking-wider">Special Requests / Questions</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your wedding venue location, skin preferences, or course questions..."
                    value={contactForm.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#BE185D]/30 text-[#1A1615] text-xs font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#BE185D] shadow-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit Booking Enquiry</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif italic font-bold text-[#1A1615]">Thank You, {contactForm.name}!</h3>
                <p className="text-xs text-[#2C221E]/80 max-w-md mx-auto leading-relaxed">
                  Your enquiry for <strong className="text-[#BE185D]">{contactForm.subject}</strong> has been logged. Our management desk will confirm date availability shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappDirect}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 rounded-full bg-[#F5EBE1] text-[#1A1615] font-extrabold text-xs uppercase tracking-wider hover:bg-[#BE185D] hover:text-white transition-all"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* ANIMATED FAQ ACCORDION SECTION */}
      <div className="space-y-8 pt-8 border-t-2 border-[#BE185D]/15 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <span className="text-xs font-extrabold text-[#BE185D] uppercase tracking-widest px-4 py-1.5 rounded-full bg-white border border-[#BE185D]/30 shadow-sm inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615]">
            Got Questions? <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] font-black">We Have Answers</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-[#FFF0F5] via-[#FFF5F7] to-white border-2 border-[#BE185D]/30 overflow-hidden shadow-md hover:border-[#BE185D] transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif italic font-extrabold text-sm sm:text-base text-[#1A1615] hover:text-[#BE185D] transition-colors"
              >
                <span>{faq.q}</span>
                <div className="w-7 h-7 rounded-full bg-white border-2 border-[#BE185D]/30 flex items-center justify-center flex-shrink-0 shadow-xs">
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#BE185D]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#BE185D]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-xs sm:text-sm text-[#1A1615] leading-relaxed border-t border-[#BE185D]/20 bg-white/80 font-bold">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
