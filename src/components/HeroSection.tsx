import React from 'react';
import { ArrowRight, Terminal, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRegister,
  darkMode,
}) => {
  return (
    <section
      id="section-hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      {/* Background radial accent glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: darkMode
            ? `radial-gradient(circle at 50% 15%, rgba(0, 255, 136, 0.14) 0%, transparent 60%)`
            : `radial-gradient(circle at 50% 15%, rgba(0, 204, 106, 0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Protocol Tag (Authentic Saving.Careers Style) */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span className="font-mono-code text-[11px] sm:text-xs text-[#8e8e93] tracking-widest uppercase">
            CHALLENGE PROTOCOL // SAVING.CAREERS WITH NIKHIL SIR
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mb-6">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06]">
            Don’t just study SEO.{' '}
            <span
              className={`block ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              Make your project rank.
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold opacity-90 mt-2">
              If it ranks, your course fee is ₹0.
            </span>
          </h1>
        </div>

        {/* Precise, scannable subhead */}
        <p className="text-base sm:text-lg text-[#8e8e93] max-w-2xl leading-relaxed mb-10">
          Stop collecting passive certificates. Master modern <strong className="text-current font-semibold">SEO (Google)</strong>,{' '}
          <strong className="text-current font-semibold">AEO (AI Overviews)</strong>, and{' '}
          <strong className="text-current font-semibold">GEO (ChatGPT &amp; Perplexity citations)</strong> on your own live website.
          Reach verified organic ranking, and pay ₹0 course fee.
        </p>

        {/* Authentic Saving.Careers System Protocol Terminal Card */}
        <div
          className={`rounded-xl border transition-all overflow-hidden mb-12 ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#1e1e1e] shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
              : 'bg-white border-[#e2e8f0] shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
          }`}
        >
          {/* Terminal Titlebar */}
          <div
            className={`px-4 sm:px-6 py-3 border-b flex items-center justify-between text-xs font-mono-code ${
              darkMode
                ? 'bg-[#0f0f0f] border-[#1e1e1e] text-[#8e8e93]'
                : 'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88]"></span>
              <span className="ml-2 font-semibold tracking-wider uppercase text-current">
                PROTOCOL_BOOT // CONTEST_DIRECTIVE
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
              <span className={darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}>BATCH OPEN</span>
            </div>
          </div>

          {/* Terminal Body Content */}
          <div className="p-5 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Key Parameters */}
              <div className="lg:col-span-7 space-y-3 font-mono-code text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#8e8e93]">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span><strong className="text-current">CHALLENGE</strong>: Deploy &amp; rank live project on Google + AI search</span>
                </div>
                <div className="flex items-start gap-2 text-[#8e8e93]">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span><strong className="text-current">CURRICULUM</strong>: SEO (Google SERP) + AEO (Direct Answers) + GEO (LLM Citations)</span>
                </div>
                <div className="flex items-start gap-2 text-[#8e8e93]">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span><strong className="text-current">MENTOR</strong>: Nikhil Sharma (Founder, 20+ yrs growth strategist)</span>
                </div>
                <div className="flex items-start gap-2 text-[#8e8e93]">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span><strong className="text-current">SEAT LOCK</strong>: ₹999 entry registration today</span>
                </div>
                <div className="flex items-start gap-2 text-[#8e8e93]">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span><strong className="text-current">UPFRONT FEE</strong>: ₹0 (Zero course fee required upfront)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span className={darkMode ? 'text-[#00ff88] font-bold' : 'text-[#008744] font-bold'}>
                    SUCCESS OUTCOME: If project ranks on agreed criteria → COURSE FEE = ₹0
                  </span>
                </div>
              </div>

              {/* Right Column: Clear Action Box */}
              <div
                className={`lg:col-span-5 p-5 rounded-xl border flex flex-col justify-between gap-4 ${
                  darkMode
                    ? 'bg-[#121212] border-[#222222]'
                    : 'bg-[#f8fafc] border-[#e2e8f0]'
                }`}
              >
                <div>
                  <div className="text-[11px] font-mono-code text-[#8e8e93] uppercase tracking-wider">
                    Registration Pass
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span
                      className={`font-mono-code text-3xl sm:text-4xl font-black ${
                        darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                      }`}
                    >
                      ₹999
                    </span>
                    <span className="text-xs font-mono-code text-[#8e8e93]">
                      to reserve your batch seat
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-[#8e8e93] leading-relaxed">
                    No upfront course fee. Rank your project under Nikhil Sir’s framework and pay nothing more.
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    id="hero-register-cta"
                    onClick={onOpenRegister}
                    className="w-full py-3.5 px-5 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enter Challenge — ₹999</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="#section-pricing"
                    className={`w-full py-2.5 px-4 rounded-lg font-mono-code text-xs font-semibold text-center border transition-all ${
                      darkMode
                        ? 'border-[#262626] text-[#8e8e93] hover:text-white hover:bg-[#1a1a1a]'
                        : 'border-[#cbd5e1] text-[#475569] hover:text-black hover:bg-[#e2e8f0]'
                    }`}
                  >
                    How the ₹0 Fee &amp; Rules Work ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean 3-Metric Strip (Direct Reference to saving.careers Hero Footer) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#222222]/40">
          <div className="py-2">
            <div
              className={`font-mono-code text-3xl font-extrabold ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              ₹0
            </div>
            <div className="text-xs font-mono-code text-[#8e8e93] mt-1">
              Course Fee if your project ranks
            </div>
          </div>
          <div className="py-2">
            <div className="font-mono-code text-3xl font-extrabold text-current">
              3-in-1 Stack
            </div>
            <div className="text-xs font-mono-code text-[#8e8e93] mt-1">
              SEO (Google) + AEO (Answers) + GEO (AI Citations)
            </div>
          </div>
          <div className="py-2">
            <div className="font-mono-code text-3xl font-extrabold text-current">
              100% Real
            </div>
            <div className="text-xs font-mono-code text-[#8e8e93] mt-1">
              Live indexable website &amp; Google Search Console proof
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
