import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export const GlitterBackground = ({ count = 35, theme = 'gold-pink' }) => {
  // Pre-calculated deterministic values for seamless rendering without hydrations mismatch
  const glitters = Array.from({ length: count }, (_, i) => {
    const top = (i * 17 + 7) % 94;
    const left = (i * 23 + 11) % 94;
    const size = (i % 4 === 0) ? 18 : (i % 3 === 0) ? 14 : (i % 2 === 0) ? 10 : 7;
    const duration = 3.5 + (i % 5) * 1.2;
    const delay = (i % 6) * 0.4;
    const colorType = i % 4; // 0: Gold, 1: Rose Pink, 2: Warm Amber, 3: Diamond White
    const type = i % 3; // 0: Sparkle Star, 1: Glowing Circular Bokeh, 2: Diamond Prism

    return { id: i, top, left, size, duration, delay, colorType, type };
  });

  const getColorClass = (colorType) => {
    switch (colorType) {
      case 0:
        return 'text-[#F59E0B] drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]'; // Gold
      case 1:
        return 'text-[#F43F5E] drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]'; // Rose Pink
      case 2:
        return 'text-[#D97706] drop-shadow-[0_0_6px_rgba(217,119,6,0.7)]'; // Amber
      default:
        return 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]'; // Diamond White
    }
  };

  const getBokehBg = (colorType) => {
    switch (colorType) {
      case 0:
        return 'bg-gradient-to-tr from-[#F59E0B] to-[#FDE68A] shadow-[0_0_12px_#F59E0B]';
      case 1:
        return 'bg-gradient-to-tr from-[#F43F5E] to-[#FBCFE8] shadow-[0_0_12px_#F43F5E]';
      case 2:
        return 'bg-gradient-to-tr from-[#D97706] to-[#FED7AA] shadow-[0_0_10px_#D97706]';
      default:
        return 'bg-white shadow-[0_0_12px_#FFFFFF]';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {glitters.map((g) => {
        const colorClass = getColorClass(g.colorType);
        const bokehBg = getBokehBg(g.colorType);

        return (
          <motion.div
            key={g.id}
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{
              opacity: [0.15, 0.9, 0.3, 1, 0.15],
              scale: [0.7, 1.35, 0.85, 1.2, 0.7],
              y: [0, -35, 15, -20, 0],
              x: [0, 15, -15, 10, 0],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: g.duration,
              delay: g.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              top: `${g.top}%`,
              left: `${g.left}%`,
            }}
          >
            {g.type === 0 ? (
              <Sparkles style={{ width: g.size, height: g.size }} className={`${colorClass} animate-pulse`} />
            ) : g.type === 1 ? (
              <div
                style={{ width: g.size * 0.75, height: g.size * 0.75 }}
                className={`rounded-full opacity-70 ${bokehBg}`}
              />
            ) : (
              <div
                style={{ width: g.size * 0.8, height: g.size * 0.8 }}
                className="rotate-45 border-2 border-[#F59E0B]/70 bg-gradient-to-tr from-[#FDE68A]/40 to-white/60 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
