import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Crown, ShieldCheck, ArrowRight } from 'lucide-react';

export const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const finishedRef = useRef(false);

  const handleComplete = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    if (onFinished) onFinished();
  };

  useEffect(() => {
    // Fast smooth progress increment (~0.7s total duration)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(handleComplete, 80);
          return 100;
        }
        return prev + 2;
      });
    }, 14);

    // Hard fallback timeout (0.8s max) to guarantee fast dismissal
    const maxTimeout = setTimeout(() => {
      clearInterval(interval);
      handleComplete();
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(maxTimeout);
    };
  }, []);

  return (
    <div
      onClick={handleComplete}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0D0B14] via-[#1F0F24] to-[#070A11] text-white overflow-hidden cursor-pointer selection:none transition-opacity duration-500"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              left: `${(i * 10) + 5}%`,
              top: `${(i * 9) + 5}%`,
              animationDelay: `${i * 0.15}s`,
            }}
            className="absolute text-amber-300/70 animate-bounce duration-1000"
          >
            <Sparkles className="w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Central Content Container - Always visible */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-5">
        
        {/* White Logo Container */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-amber-400 to-rose-500 blur-2xl opacity-60 animate-pulse" />
          <img
            src="/logo.png"
            alt="Stylist Makeup Artist Logo"
            className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Brand Titles */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-widest text-amber-300 uppercase">
            <Crown className="w-3.5 h-3.5 text-amber-300" />
            <span>Luxury Makeup Studio & Academy</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white drop-shadow-sm">
            Stylist Makeup Artist
          </h1>
          <p className="text-xs text-slate-300 font-light italic">
            By Anya Sharma • Delhi NCR & Worldwide
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full pt-2 space-y-2">
          <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-md border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-pink-500 to-rose-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(245,158,11,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono tracking-wider">
            <span className="flex items-center gap-1 text-amber-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Initializing Studio 4K...
            </span>
            <span className="font-bold text-white">{progress}%</span>
          </div>
        </div>

        {/* Quick Skip hint */}
        <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-center gap-1 hover:text-amber-300 transition-colors">
          <span>Tap anywhere to enter</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
