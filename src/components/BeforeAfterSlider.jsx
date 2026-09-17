import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sliders, Wand2, ZoomIn, ZoomOut, Check, ArrowRight, Camera, Eye, Heart, RefreshCcw } from 'lucide-react';
import { GlitterBackground } from './GlitterBackground';

export const MANNEQUIN_STYLES = [
  { id: 'natural', name: 'Natural Soft Glam', lip: 'Rose', eye: 'Nude', blush: 'Peach', highlighter: 'Pearl', contour: 'Soft' },
  { id: 'bridal', name: 'Bridal Makeup', lip: 'Red', eye: 'Gold', blush: 'Berry', highlighter: 'Gold', contour: 'Defined' },
  { id: 'party', name: 'Celebrity Party Glam', lip: 'Wine', eye: 'Smokey', blush: 'Terracotta', highlighter: 'Champagne', contour: 'Warm' },
  { id: 'dewy', name: 'Dewy Glass Skin', lip: 'Pink', eye: 'Rose Gold', blush: 'Rose', highlighter: 'Pearl', contour: 'Soft' },
  { id: 'airbrush', name: 'HD Airbrush', lip: 'Berry', eye: 'Bronze', blush: 'Coral', highlighter: 'Rose Gold', contour: 'Warm' },
  { id: 'smokey', name: 'Smokey Eyes', lip: 'Nude', eye: 'Smokey', blush: 'Peach', highlighter: 'Champagne', contour: 'Defined' },
  { id: 'editorial', name: 'Editorial Glam', lip: 'Wine', eye: 'Emerald', blush: 'Terracotta', highlighter: 'Rose Gold', contour: 'Defined' },
];

export const INDIAN_SKIN_TONES = [
  { id: 'light', name: 'Light (Warm Ivory)', tint: '#FFF2E6', opacity: 0.28 },
  { id: 'light-medium', name: 'Light Medium (Wheatish)', tint: '#F4D0B5', opacity: 0.18 },
  { id: 'medium', name: 'Medium (Golden Honey)', tint: '#E09858', opacity: 0 },
  { id: 'dusky', name: 'Dusky (Warm Bronze)', tint: '#9E5B28', opacity: 0.38 },
  { id: 'deep', name: 'Deep (Deep Caramel)', tint: '#542D12', opacity: 0.58 },
];

export const EYESHADOW_SHADES = [
  { name: 'Nude', hex: '#D97706' },
  { name: 'Brown', hex: '#78350F' },
  { name: 'Bronze', hex: '#B45309' },
  { name: 'Gold', hex: '#F59E0B' },
  { name: 'Rose Gold', hex: '#F43F5E' },
  { name: 'Copper', hex: '#EA580C' },
  { name: 'Plum', hex: '#701A75' },
  { name: 'Emerald', hex: '#047857' },
  { name: 'Smokey', hex: '#1E293B' },
];

export const BLUSH_SHADES = [
  { name: 'Peach', hex: '#F97316' },
  { name: 'Rose', hex: '#FB7185' },
  { name: 'Pink', hex: '#EC4899' },
  { name: 'Coral', hex: '#F43F5E' },
  { name: 'Berry', hex: '#BE185D' },
  { name: 'Terracotta', hex: '#C2410C' },
];

export const LIP_SHADES = [
  { name: 'Nude', hex: '#D97706' },
  { name: 'Peach', hex: '#F97316' },
  { name: 'Rose', hex: '#FB7185' },
  { name: 'Pink', hex: '#EC4899' },
  { name: 'Berry', hex: '#BE185D' },
  { name: 'Wine', hex: '#881337' },
  { name: 'Red', hex: '#DC2626' },
  { name: 'Brown Nude', hex: '#9A3412' },
];

export const HIGHLIGHTER_SHADES = [
  { name: 'Champagne', hex: '#FCD34D' },
  { name: 'Pearl', hex: '#F8FAFC' },
  { name: 'Gold', hex: '#F59E0B' },
  { name: 'Rose Gold', hex: '#FB7185' },
];

export const CONTOUR_TYPES = ['Soft', 'Warm', 'Defined'];

// --- 3D SVG MICRO-DIAGRAM COMPONENTS FOR MAKEUP STUDIO ---
const Icon3DSkinTone = () => (
  <span className="w-5 h-5 rounded-lg bg-gradient-to-tr from-[#9E5B28] via-[#E09858] to-[#FFF2E6] border border-[#D97706]/40 shadow-xs flex items-center justify-center flex-shrink-0 relative overflow-hidden">
    <svg className="w-3.5 h-3.5 drop-shadow-sm" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FFF2E6" />
      <path d="M2 12l10 5 10-5" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" stroke="#9E5B28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Icon3DEyeshadow = () => (
  <span className="w-5 h-5 rounded-lg bg-[#2C221E] border border-[#D97706]/40 shadow-xs flex items-center justify-center flex-shrink-0 relative overflow-hidden">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#1A1615" stroke="#D97706" strokeWidth="1.5" />
      <circle cx="8" cy="12" r="3.5" fill="#F59E0B" stroke="#FFF" strokeWidth="0.8" />
      <circle cx="16" cy="12" r="3.5" fill="#F43F5E" stroke="#FFF" strokeWidth="0.8" />
    </svg>
  </span>
);

const Icon3DBlush = () => (
  <span className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#FB7185] to-[#BE185D] border border-white/50 shadow-xs flex items-center justify-center flex-shrink-0 relative overflow-hidden">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" fill="#F43F5E" stroke="#FFF" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="4.5" fill="#EC4899" />
    </svg>
  </span>
);

const Icon3DLip = () => (
  <span className="w-5 h-5 rounded-lg bg-gradient-to-b from-[#F59E0B] to-[#D97706] border border-[#D97706]/40 shadow-xs flex items-center justify-center flex-shrink-0 relative overflow-hidden">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <rect x="8" y="11" width="8" height="10" rx="1.5" fill="#D97706" stroke="#FFF" strokeWidth="0.8" />
      <path d="M9 11V6C9 4 11 3 12 3C13 3 15 4 15 6V11H9Z" fill="#DC2626" />
    </svg>
  </span>
);

const Icon3DHighlighter = () => (
  <span className="w-5 h-5 rounded-lg bg-gradient-to-tr from-[#FCD34D] via-[#F59E0B] to-[#FFF] border border-[#F59E0B]/50 shadow-xs flex items-center justify-center flex-shrink-0 relative overflow-hidden">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
      <path d="M2 9h20M12 21L6 9M12 21l6-12" stroke="#FFF" strokeWidth="1" />
    </svg>
  </span>
);

const Icon3DContour = () => (
  <span className="w-5 h-5 rounded-lg bg-[#451A03] border border-[#78350F]/50 shadow-xs flex items-center justify-center flex-shrink-0 relative overflow-hidden">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#D97706" strokeWidth="1.5" />
      <path d="M7 9c2-2 8-2 10 0M6 15c3 3 9 3 12 0" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </span>
);

export const BeforeAfterSlider = ({ onOpenBooking }) => {
  // 1. Mannequin Identity & View State
  const [selectedSkinToneId, setSelectedSkinToneId] = useState('medium');
  const [rotationAngle, setRotationAngle] = useState(0); // -25 (Left), 0 (Front), 25 (Right)
  const [zoomLevel, setZoomLevel] = useState(1.0); // 1.0 to 1.6

  // 2. Makeup Customization State
  const [activeStyleId, setActiveStyleId] = useState('natural');
  const [eyeshadow, setEyeshadow] = useState('Nude');
  const [blush, setBlush] = useState('Peach');
  const [lip, setLip] = useState('Rose');
  const [highlighter, setHighlighter] = useState('Pearl');
  const [contour, setContour] = useState('Soft');
  const [intensity, setIntensity] = useState(70); // 15 (Soft) to 100 (Glam)

  // 3. AI Recommendation State
  const [aiSuggestedLook, setAiSuggestedLook] = useState(null);
  const [isAiThinking, setIsAiThinking] = useState(false);

  // Active Skin Tone & Color Codes
  const skinObj = INDIAN_SKIN_TONES.find(s => s.id === selectedSkinToneId) || INDIAN_SKIN_TONES[2];
  const lipHex = LIP_SHADES.find(l => l.name === lip)?.hex || '#FB7185';
  const eyeHex = EYESHADOW_SHADES.find(e => e.name === eyeshadow)?.hex || '#D97706';
  const blushHex = BLUSH_SHADES.find(b => b.name === blush)?.hex || '#F97316';
  const hlHex = HIGHLIGHTER_SHADES.find(h => h.name === highlighter)?.hex || '#FCD34D';

  const alphaMult = intensity / 100;
  const contourOpacity = (contour === 'Defined' ? 0.38 : contour === 'Warm' ? 0.26 : 0.16) * alphaMult;

  // Apply Preset Style
  const applyPresetStyle = (style) => {
    setActiveStyleId(style.id);
    setLip(style.lip);
    setEyeshadow(style.eye);
    setBlush(style.blush);
    setHighlighter(style.highlighter);
    setContour(style.contour);
  };

  // AI Create My Look Recommendation Generator
  const generateAILook = () => {
    setIsAiThinking(true);

    setTimeout(() => {
      let recEye = 'Bronze';
      let recBlush = 'Peach';
      let recHl = 'Gold';
      let recLip = 'Rose';

      if (selectedSkinToneId === 'dusky' || selectedSkinToneId === 'deep') {
        recEye = 'Gold';
        recBlush = 'Terracotta';
        recHl = 'Gold';
        recLip = 'Brown Nude';
      } else if (selectedSkinToneId === 'light') {
        recEye = 'Rose Gold';
        recBlush = 'Rose';
        recHl = 'Pearl';
        recLip = 'Pink';
      } else {
        recEye = 'Bronze';
        recBlush = 'Peach';
        recHl = 'Champagne';
        recLip = 'Rose';
      }

      setEyeshadow(recEye);
      setBlush(recBlush);
      setHighlighter(recHl);
      setLip(recLip);

      setAiSuggestedLook({
        title: "AI Coordinated Harmony",
        desc: `${recEye} eyes + ${recBlush} blush + ${recHl} highlight + ${recLip} lips`
      });

      setIsAiThinking(false);
    }, 1200);
  };

  // Reset Mannequin
  const handleReset = () => {
    setActiveStyleId('natural');
    setEyeshadow('Nude');
    setBlush('Peach');
    setLip('Rose');
    setHighlighter('Pearl');
    setContour('Soft');
    setIntensity(40);
    setRotationAngle(0);
    setZoomLevel(1.0);
    setAiSuggestedLook(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 bg-gradient-to-br from-[#FFF5F7] via-[#FFFDF0] via-[#FFF3EA] to-[#FFEFEF] p-6 sm:p-10 rounded-[2.5rem] border-2 border-[#FDE68A]/60 shadow-2xl relative overflow-hidden">
      
      {/* Dynamic 3D Sparkling Glitter Particles & Motion Layer */}
      <GlitterBackground count={32} />

      {/* Decorative Animated Glowing Ambient Background Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#FBCFE8]/40 via-[#FDE68A]/40 to-[#FED7AA]/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#FED7AA]/40 via-[#FBCFE8]/40 to-[#FDE68A]/40 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* LUXURY BEAUTY STUDIO HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto space-y-3 relative z-10"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-[11px] font-extrabold text-[#BE185D] uppercase tracking-widest px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0F5] via-[#FEF9C3] to-[#FFEDD5] backdrop-blur-md border border-[#FDE68A] shadow-sm inline-flex items-center gap-2 cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D97706] animate-pulse" />
          AI VIRTUAL MAKEUP STUDIO
        </motion.span>

        <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1A1615]">
          Digital Makeup <span className="not-italic font-black bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] via-[#E11D48] to-[#BE185D]">Consultation</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#2C221E]/80 max-w-2xl mx-auto font-normal">
          Experiment with makeup styles, skin tones, and shades on our 3D beauty mannequin. Inspect details in real-time before booking your appointment.
        </p>

        {/* LIVE ACTIVE PALETTE SUMMARY STRIP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-[#FDE68A]/60 shadow-xs text-xs font-bold text-[#1A1615] mt-2"
        >
          <span className="text-[10px] text-[#2C221E]/60 uppercase tracking-wider font-extrabold">Active Palette:</span>
          
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#FFFDF9] border border-[#FDE68A]/50">
            <span className="w-2.5 h-2.5 rounded-full shadow-xs" style={{ backgroundColor: eyeHex }} />
            <span className="text-[11px]">{eyeshadow} Eyes</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#FFFDF9] border border-[#FDE68A]/50">
            <span className="w-2.5 h-2.5 rounded-full shadow-xs" style={{ backgroundColor: blushHex }} />
            <span className="text-[11px]">{blush} Blush</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#FFFDF9] border border-[#FDE68A]/50">
            <span className="w-2.5 h-2.5 rounded-full shadow-xs" style={{ backgroundColor: lipHex }} />
            <span className="text-[11px]">{lip} Lips</span>
          </div>
        </motion.div>
      </motion.div>

      {/* MAIN 2-COLUMN EXPERIENCE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* LEFT COLUMN: HERO 3D BEAUTY MODEL (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          
          {/* Model Viewing Frame Container (Glowing Gradient Border) */}
          <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#FED7AA]/60 bg-gradient-to-b from-[#FFFFFF] via-[#FFF5F7] to-[#FFF3EA] shadow-2xl flex-1 flex flex-col items-center justify-center min-h-[460px] sm:min-h-[540px]">
            
            {/* Ambient Inner Frame Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/5 via-transparent to-[#BE185D]/5 pointer-events-none" />

            {/* AI Thinking Loading Overlay */}
            <AnimatePresence>
              {isAiThinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3 text-[#1A1615]"
                >
                  <Wand2 className="w-10 h-10 text-[#D97706] animate-bounce" />
                  <h4 className="text-xl font-serif italic font-bold">
                    Analyzing Facial Features & Skin Tone…
                  </h4>
                  <p className="text-xs text-[#BE185D] font-extrabold uppercase tracking-wider animate-pulse">
                    Blending Custom Color Pigments & Shimmer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 3D BEAUTY MODEL IMAGE WITH HIGH-PRECISION FEATURE OVERLAYS */}
            <div className="w-full aspect-square max-w-[480px] relative flex items-center justify-center overflow-hidden p-2 mx-auto">
              <div className="w-full h-full relative flex items-center justify-center">
                {/* 3D Indian Model Head Image */}
                <img
                  src="/images/indian_model_head.jpg"
                  alt="3D Digital Indian Makeup Model"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none"
                />

                {/* SVG Feature-Based Makeup Layer Overlaid Precisely on Model's Facial Features */}
                <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <filter id="blushFeather" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="28" />
                    </filter>
                    <filter id="eyeshadowFeather" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="9" />
                    </filter>
                    <filter id="highlighterFeather" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="9" />
                    </filter>
                    <filter id="contourFeather" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="22" />
                    </filter>
                    <filter id="lipFeather" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.2" />
                    </filter>
                  </defs>

                  {/* Isolated Skin Tone Overlay (Seamless Full Canvas Blend - Soft Light) */}
                  {skinObj.opacity > 0 && (
                    <rect
                      x="0"
                      y="0"
                      width="500"
                      height="500"
                      fill={skinObj.tint}
                      filter="url(#blushFeather)"
                      opacity={skinObj.opacity * 0.45}
                      style={{ mixBlendMode: 'soft-light' }}
                    />
                  )}

                  {/* Contour Shadowing along Cheek Hollows & Jawline */}
                  <ellipse cx="150" cy="275" rx="16" ry="28" fill="rgba(110,45,10,0.5)" filter="url(#contourFeather)" opacity={contourOpacity * 0.5} />
                  <ellipse cx="350" cy="275" rx="16" ry="28" fill="rgba(110,45,10,0.5)" filter="url(#contourFeather)" opacity={contourOpacity * 0.5} />

                  {/* Soft Round Airbrushed Cheekbone Blush */}
                  <ellipse cx="175" cy="248" rx="24" ry="20" fill={blushHex} filter="url(#blushFeather)" opacity={0.55 * alphaMult} style={{ mixBlendMode: 'multiply' }} />
                  <ellipse cx="325" cy="248" rx="24" ry="20" fill={blushHex} filter="url(#blushFeather)" opacity={0.55 * alphaMult} style={{ mixBlendMode: 'multiply' }} />

                  {/* Elegant Highlighter Sheen on Nose Bridge, Cheekbones & Cupid's Bow */}
                  <ellipse cx="250" cy="230" rx="2.5" ry="18" fill={hlHex} filter="url(#highlighterFeather)" opacity={0.38 * alphaMult} />
                  <ellipse cx="175" cy="236" rx="14" ry="5" fill={hlHex} filter="url(#highlighterFeather)" opacity={0.30 * alphaMult} />
                  <ellipse cx="325" cy="236" rx="14" ry="5" fill={hlHex} filter="url(#highlighterFeather)" opacity={0.30 * alphaMult} />
                  <ellipse cx="250" cy="298" rx="4" ry="2" fill={hlHex} filter="url(#highlighterFeather)" opacity={0.38 * alphaMult} />

                  {/* Vivid Eyeshadow Gradient over Upper Eyelids */}
                  <ellipse cx="188" cy="202" rx="24" ry="9" fill={eyeHex} filter="url(#eyeshadowFeather)" opacity={0.78 * alphaMult} style={{ mixBlendMode: 'multiply' }} />
                  <ellipse cx="312" cy="202" rx="24" ry="9" fill={eyeHex} filter="url(#eyeshadowFeather)" opacity={0.78 * alphaMult} style={{ mixBlendMode: 'multiply' }} />

                  {/* Precise Lipstick Overlay strictly on Model's Natural Lip Boundary */}
                  <path
                    d="M 196 310 Q 220 302, 238 303 Q 250 305, 262 303 Q 280 302, 304 310 Q 275 340, 250 341 Q 225 340, 196 310 Z"
                    fill={lipHex}
                    filter="url(#lipFeather)"
                    opacity={0.85 * alphaMult}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                  {/* Lower Lip Gloss Highlight Reflection */}
                  <path
                    d="M 220 326 Q 250 332, 280 326 Q 250 336, 220 326 Z"
                    fill="#FFFFFF"
                    filter="url(#highlighterFeather)"
                    opacity={0.38 * alphaMult}
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* AI CREATE MY LOOK BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={generateAILook}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#E11D48] to-[#BE185D] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Wand2 className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI Create My Look</span>
          </motion.button>

          {/* AI Suggestion Box */}
          {aiSuggestedLook && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#D97706]/40 shadow-md space-y-1 text-center"
            >
              <span className="text-[10px] font-extrabold uppercase text-[#D97706] tracking-wider block flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" /> AI Harmony Recommendation
              </span>
              <p className="text-xs font-bold text-[#1A1615]">
                {aiSuggestedLook.desc}
              </p>
            </motion.div>
          )}

        </div>

        {/* RIGHT COLUMN: COLORFUL LUXURY MAKEUP PALETTE PANEL (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-5 bg-gradient-to-br from-white/95 via-[#FFFDF5]/90 to-[#FFF5F7]/95 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border-2 border-[#FBCFE8]/60 shadow-xl">
          
          <div className="flex items-center justify-between border-b border-[#FDE68A]/60 pb-3.5">
            <h3 className="text-xl font-serif italic font-bold text-[#1A1615] flex items-center gap-2.5">
              <Sliders className="w-5 h-5 text-[#D97706]" />
              <span>Colorful Studio Palette</span>
            </h3>
            <span className="text-[10px] font-extrabold uppercase text-[#BE185D] bg-gradient-to-r from-[#FFF0F5] to-[#FEF3C7] px-3 py-1 rounded-full border border-[#FBCFE8] shadow-xs">
              Live Color Blending
            </span>
          </div>

          {/* 1. INDIAN SKIN TONE SELECTOR */}
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-[#1A1615] uppercase tracking-wider block flex items-center gap-2">
              <Icon3DSkinTone /> Indian Skin Tone:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INDIAN_SKIN_TONES.map((tone) => {
                const isSelected = selectedSkinToneId === tone.id;
                return (
                  <motion.button
                    key={tone.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedSkinToneId(tone.id)}
                    className={`py-2 px-2.5 rounded-xl text-[11px] font-bold text-center border-2 transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#FFFDF9] to-[#FEF3C7] text-[#1A1615] border-[#D97706] ring-2 ring-[#D97706]/30 shadow-md font-extrabold'
                        : 'bg-white text-[#2C221E]/80 border-[#FDE68A]/60 hover:border-[#D97706] hover:bg-[#FFFDF5]'
                    }`}
                  >
                    {tone.name}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* 2. MAKEUP INTENSITY SLIDER */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-gradient-to-r from-[#FFF5F7] via-[#FFFDF0] to-[#FFF3EA] border border-[#FDE68A]/60">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-[#1A1615] uppercase tracking-wider">Makeup Intensity:</span>
              <span className="text-[#BE185D] font-extrabold bg-white px-2.5 py-0.5 rounded-full border border-[#BE185D]/30 shadow-xs">
                {intensity < 40 ? 'Soft' : intensity < 75 ? 'Medium' : 'Glam'} ({intensity}%)
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="100"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full accent-[#BE185D] cursor-pointer h-2 bg-[#FDE68A]/70 rounded-lg"
            />
            <div className="flex justify-between text-[9px] text-[#2C221E]/60 uppercase font-extrabold">
              <span>Soft</span>
              <span>Medium</span>
              <span>Glam</span>
            </div>
          </div>

          {/* 3. EYESHADOW SHADES PALETTE */}
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-[#1A1615] uppercase tracking-wider block flex items-center gap-2">
              <Icon3DEyeshadow /> Eyeshadow Studio:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              {EYESHADOW_SHADES.map((eye) => {
                const isSelected = eyeshadow === eye.name;
                return (
                  <motion.button
                    key={eye.name}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setEyeshadow(eye.name)}
                    style={{
                      backgroundColor: isSelected ? eye.hex : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : '#1A1615',
                      borderColor: isSelected ? eye.hex : '#E5D5C5',
                      boxShadow: isSelected ? `0 4px 14px ${eye.hex}66` : 'none'
                    }}
                    className={`py-2 px-2 sm:px-2.5 rounded-xl text-[11px] sm:text-xs flex items-center justify-center gap-1.5 sm:gap-2 border-2 transition-all ${
                      isSelected
                        ? 'font-extrabold ring-2 ring-white/50 shadow-md'
                        : 'font-bold bg-white text-[#2C221E]/80 hover:border-gray-400 hover:bg-[#FFFDF9]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border shadow-sm flex-shrink-0 relative overflow-hidden flex items-center justify-center ${
                        isSelected ? 'border-white/50 bg-white' : 'border-black/15'
                      }`}
                      style={{ backgroundColor: isSelected ? '#FFFFFF' : eye.hex }}
                    >
                      {isSelected ? (
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" style={{ color: eye.hex }} />
                      ) : (
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                      )}
                    </span>
                    <span className="whitespace-nowrap">{eye.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* 4. BLUSH SHADES PALETTE */}
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-[#1A1615] uppercase tracking-wider block flex items-center gap-2">
              <Icon3DBlush /> Blush & Flush Bar:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              {BLUSH_SHADES.map((b) => {
                const isSelected = blush === b.name;
                return (
                  <motion.button
                    key={b.name}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setBlush(b.name)}
                    style={{
                      backgroundColor: isSelected ? b.hex : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : '#1A1615',
                      borderColor: isSelected ? b.hex : '#E5D5C5',
                      boxShadow: isSelected ? `0 4px 14px ${b.hex}66` : 'none'
                    }}
                    className={`py-2 px-2 sm:px-2.5 rounded-xl text-[11px] sm:text-xs flex items-center justify-center gap-1.5 sm:gap-2 border-2 transition-all ${
                      isSelected
                        ? 'font-extrabold ring-2 ring-white/50 shadow-md'
                        : 'font-bold bg-white text-[#2C221E]/80 hover:border-gray-400 hover:bg-[#FFFDF9]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border shadow-sm flex-shrink-0 relative overflow-hidden flex items-center justify-center ${
                        isSelected ? 'border-white/50 bg-white' : 'border-black/15'
                      }`}
                      style={{ backgroundColor: isSelected ? '#FFFFFF' : b.hex }}
                    >
                      {isSelected ? (
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" style={{ color: b.hex }} />
                      ) : (
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                      )}
                    </span>
                    <span className="whitespace-nowrap">{b.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* 5. LIP COLOR SHADES PALETTE */}
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-[#1A1615] uppercase tracking-wider block flex items-center gap-2">
              <Icon3DLip /> Velvet Lip Bar:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {LIP_SHADES.map((l) => {
                const isSelected = lip === l.name;
                return (
                  <motion.button
                    key={l.name}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setLip(l.name)}
                    style={{
                      backgroundColor: isSelected ? l.hex : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : '#1A1615',
                      borderColor: isSelected ? l.hex : '#E5D5C5',
                      boxShadow: isSelected ? `0 4px 14px ${l.hex}66` : 'none'
                    }}
                    className={`py-2 px-2 rounded-xl text-[10px] sm:text-[11px] flex items-center justify-center gap-1.5 border-2 transition-all ${
                      isSelected
                        ? 'font-extrabold ring-2 ring-white/50 shadow-md'
                        : 'font-bold bg-white text-[#2C221E]/80 hover:border-gray-400 hover:bg-[#FFFDF9]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full border shadow-sm flex-shrink-0 relative overflow-hidden flex items-center justify-center ${
                        isSelected ? 'border-white/50 bg-white' : 'border-black/15'
                      }`}
                      style={{ backgroundColor: isSelected ? '#FFFFFF' : l.hex }}
                    >
                      {isSelected ? (
                        <Check className="w-2.5 h-2.5 stroke-[3]" style={{ color: l.hex }} />
                      ) : (
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                      )}
                    </span>
                    <span className="whitespace-nowrap">{l.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* 6. HIGHLIGHTER & CONTOUR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Highlighter */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold text-[#1A1615] uppercase block flex items-center gap-1.5">
                <Icon3DHighlighter /> Highlighter:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {HIGHLIGHTER_SHADES.map((h) => {
                  const isSelected = highlighter === h.name;
                  const isPearl = h.hex === '#F8FAFC';
                  return (
                    <motion.button
                      key={h.name}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setHighlighter(h.name)}
                      style={{
                        backgroundColor: isSelected ? h.hex : '#FFFFFF',
                        color: isSelected ? (isPearl ? '#1A1615' : '#FFFFFF') : '#1A1615',
                        borderColor: isSelected ? (isPearl ? '#D97706' : h.hex) : '#E5D5C5',
                        boxShadow: isSelected ? `0 4px 14px ${h.hex}66` : 'none'
                      }}
                      className={`py-1.5 px-2 rounded-xl text-[10px] flex items-center justify-center gap-1.5 border-2 transition-all ${
                        isSelected
                          ? 'font-extrabold ring-2 ring-amber-400/40 shadow-md'
                          : 'font-bold bg-white text-[#2C221E]/80 hover:border-gray-400 hover:bg-[#FFFDF9]'
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full border shadow-sm flex-shrink-0 relative overflow-hidden flex items-center justify-center ${
                          isSelected ? (isPearl ? 'border-amber-400 bg-[#D97706]' : 'border-white/50 bg-white') : 'border-black/15'
                        }`}
                        style={{ backgroundColor: isSelected ? (isPearl ? '#D97706' : '#FFFFFF') : h.hex }}
                      >
                        {isSelected ? (
                          <Check className="w-2 h-2 stroke-[3]" style={{ color: isPearl ? '#FFFFFF' : h.hex }} />
                        ) : null}
                      </span>
                      <span className="whitespace-nowrap">{h.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Contour */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold text-[#1A1615] uppercase block flex items-center gap-1.5">
                <Icon3DContour /> Contour:
              </span>
              <div className="grid grid-cols-3 gap-1">
                {CONTOUR_TYPES.map((c) => {
                  const isSelected = contour === c;
                  return (
                    <motion.button
                      key={c}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setContour(c)}
                      style={{
                        backgroundColor: isSelected ? '#78350F' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : '#1A1615',
                        borderColor: isSelected ? '#78350F' : '#E5D5C5'
                      }}
                      className={`py-1.5 px-1 rounded-xl text-[10px] font-bold text-center border-2 transition-all ${
                        isSelected
                          ? 'font-extrabold shadow-md ring-2 ring-[#78350F]/30'
                          : 'bg-white text-[#2C221E]/80 border-[#E5D5C5] hover:border-gray-400'
                      }`}
                    >
                      <span className="whitespace-nowrap">{c}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* DUAL MAIN ACTION BUTTONS */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (onOpenBooking) {
                  onOpenBooking('Appointment', `Mannequin Consult: ${lip} Lip, ${eyeshadow} Eyes, ${blush} Blush, ${highlighter} Highlight`);
                }
              }}
              className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#E11D48] to-[#BE185D] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>APPLY & BOOK THIS LOOK</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleReset}
              className="py-4 px-6 rounded-2xl bg-white border-2 border-[#E5D5C5] hover:border-[#D97706] text-[#1A1615] font-extrabold text-xs uppercase tracking-wider hover:bg-[#FAF7F2] transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <RefreshCcw className="w-3.5 h-3.5 text-[#D97706]" />
              <span>RESET MANNEQUIN</span>
            </motion.button>
          </div>

        </div>
      </div>
    </div>
  );
};
