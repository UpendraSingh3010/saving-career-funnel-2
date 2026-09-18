import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface Section1HeroProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const Section1Hero: React.FC<Section1HeroProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  return (
    <section
      id="section-hero"
      className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-inherit"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: darkMode
            ? `radial-gradient(circle at 50% 15%, rgba(0, 255, 136, 0.12) 0%, transparent 65%)`
            : `radial-gradient(circle at 50% 15%, rgba(0, 204, 106, 0.08) 0%, transparent 65%)`,
        }}
      />

      {/* Subtle coordinate grid lines for clean architectural feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-inherit mb-6 text-xs font-mono-code bg-inherit/80 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span className="text-[#8e8e93] font-medium tracking-wide">
            A practical learning contest by Saving.Careers with Nikhil Sir
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6">
          Learn SEO, AEO &amp; GEO.{' '}
          <span className="block text-current">Build a Real Project.</span>
          <span
            className={
              darkMode
                ? 'text-[#00ff88] drop-shadow-[0_0_35px_rgba(0,255,136,0.3)]'
                : 'text-[#008744]'
            }
          >
            Make It Rank.
          </span>
        </h1>

        {/* Subhead / Callout */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#8e8e93] leading-relaxed mb-10 font-sans">
          Stop learning digital marketing only through videos and theory. Join a practical learning challenge where you learn, apply, optimize step by step, and work towards one clear outcome: <strong className="text-current font-semibold">RANK YOUR PROJECT</strong>.
        </p>

        {/* Clean Metrics Ticker Block */}
        <div className="max-w-3xl mx-auto mb-10">
          <div
            className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-around gap-4 text-center ${
              darkMode
                ? 'bg-[#0a0a0a]/90 border-[#1f1f1f] shadow-2xl'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] mb-1">
                To Enter
              </span>
              <span className="font-mono-code text-2xl sm:text-3xl font-black text-current">
                ₹999
              </span>
              <span className="text-xs font-mono-code text-[#8e8e93] mt-0.5">
                Registration fee
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-inherit opacity-30" />

            <div className="flex flex-col items-center">
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] mb-1">
                If Your Project Ranks
              </span>
              <span
                className={`font-mono-code text-2xl sm:text-3xl font-black ${
                  darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                }`}
              >
                COURSE FEE = ₹0
              </span>
              <span className="text-xs font-mono-code text-[#8e8e93] mt-0.5">
                No course fee upfront
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-inherit opacity-30" />

            <div className="flex flex-col items-center">
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] mb-1">
                The Environment
              </span>
              <span className="font-mono-code text-lg sm:text-xl font-bold text-current">
                1 Real Project
              </span>
              <span className="text-xs font-mono-code text-[#8e8e93] mt-0.5">
                Compete online
              </span>
            </div>
          </div>
        </div>

        {/* Primary CTA Button & Guarantee Note */}
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-mono-code text-sm font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer magnetic"
          >
            <span>Register for ₹999</span>
            <ArrowRight size={16} />
          </button>
          <span className="text-xs font-mono-code text-[#8e8e93]">
            Registration fee and course fee are separate · Program terms and ranking criteria apply
          </span>
        </div>
      </div>
    </section>
  );
};
