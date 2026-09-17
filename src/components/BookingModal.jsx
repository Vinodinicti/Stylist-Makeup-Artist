import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, MessageCircle, Calendar, Phone, User, Mail, CheckCircle2, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, COURSES_DATA, ARTIST_INFO } from '../data/mockData';

export const BookingModal = ({ isOpen, onClose, initialType = 'Appointment', preselectedItem = '' }) => {
  const [bookingType, setBookingType] = useState(initialType);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    itemSelected: preselectedItem || '',
    date: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    setBookingType(initialType);
    if (preselectedItem) {
      setFormData((prev) => ({ ...prev, itemSelected: preselectedItem }));
    } else {
      const defaultItem = initialType === 'Academy' ? COURSES_DATA[0].title : SERVICES_DATA[0].title;
      setFormData((prev) => ({ ...prev, itemSelected: defaultItem }));
    }
    setSubmitted(false);
  }, [initialType, preselectedItem, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          serviceOrCourse: formData.itemSelected,
          date: formData.date,
          message: formData.message,
          type: bookingType
        })
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setSubmitted(true);
        setWhatsappUrl(data.whatsappUrl);
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } else {
        generateLocalWhatsapp();
      }
    } catch (err) {
      setLoading(false);
      generateLocalWhatsapp();
    }
  };

  const generateLocalWhatsapp = () => {
    const text = encodeURIComponent(
      `Hello Stylist Makeup Artist!\nMy Name: ${formData.name}\n${bookingType}: *${formData.itemSelected}*\nPreferred Date: ${formData.date || 'Flexible'}\nPhone: ${formData.phone}\nNotes: ${formData.message}`
    );
    const url = `https://wa.me/${ARTIST_INFO.whatsappPhone}?text=${text}`;
    setWhatsappUrl(url);
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1615]/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white border border-[#BE185D]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#2C221E]/60 hover:text-[#BE185D] p-2 rounded-full bg-[#FFFDF9] hover:bg-[#F5EBE1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#BE185D]/10 text-[#BE185D] border border-[#BE185D]/20 mb-2">
                  <img src="/logo.png" alt="Logo" className="w-4 h-4 object-contain" />
                  Glam Consultation Portal
                </span>
                <h3 className="text-2xl font-serif italic font-bold text-[#1A1615]">
                  {bookingType === 'Academy' ? 'Enroll in Makeup Academy' : 'Book Makeup Service'}
                </h3>
                <p className="text-xs text-[#2C221E]/70 mt-1">
                  Reserve your makeover or course seat with Anya Sharma
                </p>
              </div>

              {/* Type Switcher Pills */}
              <div className="flex rounded-xl bg-[#FFFDF9] p-1 mb-5 border border-[#BE185D]/20">
                <button
                  type="button"
                  onClick={() => {
                    setBookingType('Appointment');
                    setFormData((prev) => ({ ...prev, itemSelected: SERVICES_DATA[0].title }));
                  }}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    bookingType === 'Appointment'
                      ? 'bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white shadow-sm'
                      : 'text-[#2C221E]/70 hover:text-[#BE185D]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 inline" /> Makeup Service
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBookingType('Academy');
                    setFormData((prev) => ({ ...prev, itemSelected: COURSES_DATA[0].title }));
                  }}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    bookingType === 'Academy'
                      ? 'bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white shadow-sm'
                      : 'text-[#2C221E]/70 hover:text-[#BE185D]'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5 inline" /> Academy Course
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1615] mb-1">
                    Select {bookingType === 'Academy' ? 'Course' : 'Service'}
                  </label>
                  <select
                    name="itemSelected"
                    value={formData.itemSelected}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] text-xs font-medium focus:outline-none focus:border-[#BE185D]"
                  >
                    {bookingType === 'Appointment'
                      ? SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.price})
                          </option>
                        ))
                      : COURSES_DATA.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title} ({c.price})
                          </option>
                        ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1615] mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-[#2C221E]/40" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] text-xs focus:outline-none focus:border-[#BE185D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1615] mb-1">Phone / WhatsApp *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-[#2C221E]/40" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] text-xs focus:outline-none focus:border-[#BE185D]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1615] mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-[#2C221E]/40" />
                      <input
                        type="email"
                        name="email"
                        placeholder="name@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] text-xs focus:outline-none focus:border-[#BE185D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1615] mb-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#2C221E]/40" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] text-xs focus:outline-none focus:border-[#BE185D]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1615] mb-1">Notes / Requirements</label>
                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Event venue location, look preferences, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] text-xs focus:outline-none focus:border-[#BE185D]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white font-semibold text-xs tracking-wider uppercase shadow-magenta-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1A1615] mb-2">
                Enquiry Submitted!
              </h3>
              <p className="text-xs text-[#2C221E]/70 mb-5 max-w-sm mx-auto">
                Thank you, <strong className="text-[#BE185D]">{formData.name}</strong>. Your enquiry for <span className="font-semibold text-[#BE185D]">{formData.itemSelected}</span> has been logged.
              </p>

              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#BE185D]/20 mb-5 text-left">
                <h4 className="text-xs font-bold text-[#BE185D] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <MessageCircle className="w-4 h-4" /> Direct WhatsApp Connection
                </h4>
                <p className="text-[11px] text-[#2C221E]/70">
                  Click below to open a pre-filled WhatsApp chat with Anya Sharma's studio desk.
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Chat</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs text-[#2C221E]/60 hover:text-[#BE185D] font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
