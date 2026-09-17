import React from 'react';
import { motion } from 'framer-motion';
import { ARTIST_INFO } from '../data/mockData';

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${ARTIST_INFO.whatsappPhone}?text=${encodeURIComponent(
    'Hi Anya Sharma Studio, I would like to enquire about your bridal makeover services and academy masterclasses.'
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center focus:outline-none"
      aria-label="Chat with us on WhatsApp"
      title="WhatsApp Us"
    >
      {/* Outer subtle pulse glow */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-60 pointer-events-none" />

      {/* Small Circular Icon Container */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:shadow-emerald-500/50">
        {/* Clean WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.399.637-1.002 3.66 3.748-.983.598.353z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-amber-400 border-2 border-white rounded-full" />
      </div>
    </motion.a>
  );
};
