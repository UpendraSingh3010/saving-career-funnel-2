import React, { useState } from 'react';
import { ArrowRight, Terminal, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { HeroRankSimulator } from './HeroRankSimulator';

interface HeroSectionProps {
  onOpenRegister: () => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRegister,
  darkMode,
}) => {
  const [showFullSpecs, setShowFullSpecs] = useState(false);

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
          <span className="inline-block w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            SAVING.CAREERS // 2026 SEARCH &amp; AI CONTEST
          </span>
        </div>

        {/* Main Hero Typography */}
        <div className="max-w-4xl mb-12">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6">
            Rank Your Live Website.{' '}
            <span
              className={
                darkMode
                  ? 'text-[#00ff88]'
                  : 'text-[#008744]'
              }
            >
              Course Fee = ₹0.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#8e8e93] leading-relaxed max-w-2xl font-sans">
            A real-world execution challenge. Build an active domain, optimize for Google Search, AI Overviews, and LLM citations. If you rank on agreed benchmarks, your course fee is 100% waived.
          </p>
        </div>

        {/* Terminal Style Value Card */}
        <div
          className={`tilt-card rounded-2xl border p-6 sm:p-8 font-mono-code text-xs relative overflow-hidden transition-all mb-14 ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#1e1e1e] shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
              : 'bg-white border-[#e2e8f0] shadow-xl'
          }`}
        >
          {/* Terminal Window Chrome */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-inherit text-[#8e8e93]">
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
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Compressed Parameters with Collapsible Details */}
              <div className="lg:col-span-7 space-y-3 font-mono-code text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#8e8e93]">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span><strong className="text-current">CHALLENGE</strong>: Deploy &amp; rank live project on Google + AI search</span>
                </div>
                <div className="flex items-start gap-2 text-[#8e8e93]">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span><strong className="text-current">SEAT LOCK</strong>: ₹999 entry registration (Zero course fee upfront)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff88] font-bold">&gt;</span>
                  <span className={darkMode ? 'text-[#00ff88] font-bold' : 'text-[#008744] font-bold'}>
                    SUCCESS OUTCOME: If project ranks on agreed criteria → COURSE FEE = ₹0
                  </span>
                </div>

                {/* Collapsible Specs Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => setShowFullSpecs(!showFullSpecs)}
                    className="flex items-center gap-1.5 text-xs text-[#8e8e93] hover:text-current font-mono-code transition-colors cursor-pointer"
                  >
                    <span>{showFullSpecs ? 'Collapse Specifications' : '+ View Full Directive Manifest (Curriculum, Mentor, Rules)'}</span>
                    {showFullSpecs ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>

                  {showFullSpecs && (
                    <div className="mt-3 pt-3 border-t border-inherit space-y-2 text-xs text-[#8e8e93] animate-in fade-in duration-150">
                      <div className="flex items-start gap-2">
                        <span className="text-[#38bdf8] font-bold">•</span>
                        <span><strong className="text-current">Curriculum Triad:</strong> SEO (Google SERP) + AEO (Direct Answers) + GEO (LLM Citations)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#38bdf8] font-bold">•</span>
                        <span><strong className="text-current">Lead Mentor:</strong> Nikhil Sharma (Founder, 20+ yrs scaled search strategist)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#38bdf8] font-bold">•</span>
                        <span><strong className="text-current">Asset Rights:</strong> You retain 100% permanent ownership of your domain &amp; rankings</span>
                      </div>
                    </div>
                  )}
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

        {/* Live Search Surface Simulator (Interactive Rank Previewer) */}
        <div className="mb-14">
          <HeroRankSimulator darkMode={darkMode} onOpenRegister={onOpenRegister} />
        </div>

        {/* Clean 3-Metric Strip (Direct Reference to saving.careers Hero Footer) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#222222]/40">
          <div className="py-2">
            <div
              className={`font-mono-code text-xl sm:text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              SEO + AEO + GEO
            </div>
            <div className="text-xs text-[#8e8e93] font-mono-code uppercase mt-0.5">
              Triple-Surface Optimization
            </div>
          </div>

          <div className="py-2">
            <div
              className={`font-mono-code text-xl sm:text-2xl font-bold ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              ₹0 Course Fee
            </div>
            <div className="text-xs text-[#8e8e93] font-mono-code uppercase mt-0.5">
              Performance-Linked Incentive
            </div>
          </div>

          <div className="py-2">
            <div
              className={`font-mono-code text-xl sm:text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              100% Live Domain
            </div>
            <div className="text-xs text-[#8e8e93] font-mono-code uppercase mt-0.5">
              Verified GSC &amp; AI Telemetry
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
