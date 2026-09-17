import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Card3D = ({
  children,
  className = '',
  glowColor = 'rgba(212, 175, 55, 0.25)',
  maxTilt = 12,
  scaleOnHover = 1.02
}) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / height) - 0.5) * -2 * maxTilt;
    const rY = ((mouseX / width) - 0.5) * 2 * maxTilt;

    setRotateX(rX);
    setRotateY(rY);

    const pctX = Math.round((mouseX / width) * 100);
    const pctY = Math.round((mouseY / height) * 100);
    setMousePos({ x: pctX, y: pctY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 260,
          mass: 0.5
        }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? `0 22px 45px -10px rgba(44, 34, 30, 0.12), 0 0 25px 0 ${glowColor}`
            : '0 10px 25px -10px rgba(44, 34, 30, 0.05)'
        }}
        className="relative rounded-2xl bg-white border border-[#EADBC8] overflow-hidden transition-all duration-300 group"
      >
        {/* Specular Metallic Champagne Glow Reflection */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(550px circle at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.14), transparent 45%)`
            }}
          />
        )}

        {/* 3D Content Container */}
        <div style={{ transform: 'translateZ(25px)' }} className="relative z-20 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
