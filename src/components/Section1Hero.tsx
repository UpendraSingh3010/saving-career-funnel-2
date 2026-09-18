import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Search, Bot, MessageSquareText, TrendingUp } from 'lucide-react';

interface Section1HeroProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const Section1Hero: React.FC<Section1HeroProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [activeTab, setActiveTab] = useState<'serp' | 'geo' | 'aeo'>('serp');
  const [seatsLeft, setSeatsLeft] = useState(14);

  useEffect(() => {
    // Subtle countdown timer for urgency without spam
    const interval = setInterval(() => {
      setSeatsLeft((prev) => (prev > 7 ? prev - 1 : 14));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="section-hero"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden border-b border-inherit"
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

      {/* Subtle coordinate grid lines for high-agency, telemetry feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '3.5rem 3.5rem',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top telemetry ticker */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono-code">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-inherit bg-inherit/70 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              CHALLENGE
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#8e8e93]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
              Cohort 2026: <strong className="text-current">{seatsLeft} Seats Remaining</strong>
            </span>
            <span>·</span>
            <span>Verified Contest Standard</span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Hero Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12">
          {/* Left Column (7 cols): Strong Typography & Core Proposition */}
          <div className="lg:col-span-7 text-left">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Learn it. Apply it.{' '}
              <span
                className={
                  darkMode
                    ? 'text-[#00ff88] drop-shadow-[0_0_35px_rgba(0,255,136,0.35)]'
                    : 'text-[#008744]'
                }
              >
                Rank it.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#8e8e93] leading-relaxed mb-8 font-sans max-w-xl">
              A practical SEO, AEO &amp; GEO challenge with Nikhil Sir — rank your project and your course fee becomes ₹0.
            </p>

            {/* Quick Metrics Bar */}
            <div
              className={`p-4 rounded-2xl border mb-8 grid grid-cols-3 gap-2 text-left ${
                darkMode
                  ? 'bg-[#0a0a0a]/90 border-[#1f1f1f]'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div>
                <span className="block text-[11px] font-mono-code text-[#8e8e93] uppercase tracking-wider">
                  Registration
                </span>
                <span className="font-mono-code text-xl sm:text-2xl font-black text-current">
                  ₹999
                </span>
                <span className="block text-[10px] font-mono-code text-[#8e8e93]">
                  to join
                </span>
              </div>

              <div className="border-l border-inherit pl-3">
                <span className="block text-[11px] font-mono-code text-[#8e8e93] uppercase tracking-wider">
                  If You Rank
                </span>
                <span
                  className={`font-mono-code text-xl sm:text-2xl font-black ${
                    darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                  }`}
                >
                  ₹0
                </span>
                <span className="block text-[10px] font-mono-code text-[#8e8e93]">
                  course fee
                </span>
              </div>

              <div className="border-l border-inherit pl-3">
                <span className="block text-[11px] font-mono-code text-[#8e8e93] uppercase tracking-wider">
                  Scope
                </span>
                <span className="font-mono-code text-base sm:text-xl font-bold text-current">
                  1 Real Project
                </span>
                <span className="block text-[10px] font-mono-code text-[#8e8e93]">
                  not sample data
                </span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenRegister}
                className="px-8 py-4 rounded-xl font-mono-code text-sm font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer magnetic"
              >
                <span>Register for ₹999</span>
                <ArrowRight size={16} />
              </button>
              <div className="text-xs font-mono-code text-[#8e8e93] text-center sm:text-left flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#00ff88] shrink-0" />
                <span>Zero tuition due until performance evaluation</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Live Telemetry Simulated Search & AI Preview */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-3xl border p-5 sm:p-6 shadow-2xl relative overflow-hidden transition-all ${
                darkMode
                  ? 'bg-[#0b0b0b] border-[#1e1e1e]'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-inherit text-xs font-mono-code">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 text-[#8e8e93] text-[11px]">live-rank-telemetry.sys</span>
                </div>
                <div className="flex items-center gap-1 text-[#00ff88] text-[11px] font-bold">
                  <TrendingUp size={13} />
                  <span>Rank #1 Active</span>
                </div>
              </div>

              {/* View Switcher Tabs (SEO, AEO, GEO) */}
              <div className="grid grid-cols-3 gap-1 p-1 rounded-xl border border-inherit mb-4 font-mono-code text-xs">
                <button
                  onClick={() => setActiveTab('serp')}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
                    activeTab === 'serp'
                      ? darkMode
                        ? 'bg-[#181818] text-[#00ff88] font-bold'
                        : 'bg-slate-100 text-[#008744] font-bold'
                      : 'text-[#8e8e93] hover:text-current'
                  }`}
                >
                  <Search size={12} />
                  <span>Google</span>
                </button>

                <button
                  onClick={() => setActiveTab('aeo')}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
                    activeTab === 'aeo'
                      ? darkMode
                        ? 'bg-[#181818] text-[#38bdf8] font-bold'
                        : 'bg-slate-100 text-[#0284c7] font-bold'
                      : 'text-[#8e8e93] hover:text-current'
                  }`}
                >
                  <MessageSquareText size={12} />
                  <span>Answer</span>
                </button>

                <button
                  onClick={() => setActiveTab('geo')}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
                    activeTab === 'geo'
                      ? darkMode
                        ? 'bg-[#181818] text-[#c084fc] font-bold'
                        : 'bg-slate-100 text-purple-700 font-bold'
                      : 'text-[#8e8e93] hover:text-current'
                  }`}
                >
                  <Bot size={12} />
                  <span>AI Cited</span>
                </button>
              </div>

              {/* Dynamic Simulated Preview Container */}
              <div
                className={`p-4 rounded-2xl border text-left font-sans text-xs transition-all ${
                  darkMode
                    ? 'bg-[#121212] border-[#202020]'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                {activeTab === 'serp' && (
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-4 h-4 rounded-full bg-[#00ff88]/20 flex items-center justify-center text-[10px] font-bold text-[#00ff88]">
                        G
                      </div>
                      <span className="font-mono-code text-[11px] text-[#8e8e93]">
                        https://yourdomain.com › challenge-project
                      </span>
                    </div>
                    <div className="font-bold text-sm text-[#38bdf8] hover:underline cursor-pointer mb-1 leading-snug">
                      Your Real Project: The Authoritative Field Guide
                    </div>
                    <p className="text-[#8e8e93] text-xs leading-relaxed">
                      Optimized for organic intent, structured entities, and index saturation. Live traffic logged directly into Google Search Console.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#00ff88]/15 text-[#00ff88] font-mono-code text-[10px] font-bold">
                        SERP Position: 1.2
                      </span>
                      <span className="px-2 py-0.5 rounded bg-inherit border border-inherit text-[#8e8e93] font-mono-code text-[10px]">
                        Indexed 100%
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'aeo' && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8] font-mono-code text-[10px] font-bold">
                        Featured Answer Box
                      </span>
                      <span className="text-[#8e8e93] text-[10px] font-mono-code">
                        Direct Snippet Triggered
                      </span>
                    </div>
                    <p className="font-medium text-xs sm:text-sm text-current leading-relaxed mb-2">
                      &ldquo;Structured entity schemas allow direct algorithmic citation before the user even clicks the traditional link list.&rdquo;
                    </p>
                    <div className="text-[11px] font-mono-code text-[#8e8e93]">
                      Source: yourdomain.com/faq-framework
                    </div>
                  </div>
                )}

                {activeTab === 'geo' && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-[#c084fc]/15 text-[#c084fc] font-mono-code text-[10px] font-bold">
                        Generative Engine Citation
                      </span>
                      <span className="text-[#8e8e93] text-[10px] font-mono-code">
                        ChatGPT / Perplexity
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-inherit bg-inherit/50 font-mono-code text-[11px] leading-relaxed mb-2 text-[#a1a1aa]">
                      According to research published by <span className="text-[#c084fc] font-bold">[Your Project Name]</span>, modern topical authority clusters consistently achieve primary source citations in synthetic summaries.
                    </div>
                    <span className="text-[10px] font-mono-code text-[#8e8e93]">
                      Citations: 14 LLM nodes synced
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-inherit flex items-center justify-between text-[11px] font-mono-code text-[#8e8e93]">
                <span>Status: In-challenge domain</span>
                <span className="text-[#00ff88]">Real live URL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
