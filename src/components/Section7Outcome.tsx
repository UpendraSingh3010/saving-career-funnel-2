import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

interface Section7OutcomeProps {
  darkMode: boolean;
}

export const Section7Outcome: React.FC<Section7OutcomeProps> = ({ darkMode }) => {
  const realityCheckpoints = [
    "A page doesn't rank",
    'A competitor outranks you',
    'A keyword behaves differently than expected',
    'Search intent changes',
    'Technical issues appear',
    'An experiment works — another fails',
    'You analyze the result and optimize again',
  ];

  return (
    <section
      id="section-outcome"
      className="py-20 sm:py-28 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#a855f7]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              OUTCOME
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Your Project Becomes Your Proof
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            Demonstrating how you think, execute, and solve real ranking problems.
          </p>
        </div>

        {/* The Claim vs The Proof (Clean Split Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Side A: Passive */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#0a0a0a]/60 border-[#1c1c1c]' : 'bg-slate-50/70 border-slate-200'
            }`}
          >
            <div>
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#8e8e93] block mb-4">
                Passive Completion
              </span>
              <div className="font-display text-2xl font-black text-[#8e8e93] mb-4">
                &ldquo;I learned SEO.&rdquo;
              </div>
              <p className="text-sm font-sans text-[#8e8e93] leading-relaxed">
                Easy to say, but forgotten in thirty seconds during interviews or client discussions. Anyone can finish videos and claim terminology.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-inherit text-xs font-mono-code text-[#8e8e93]">
              No tangible asset
            </div>
          </div>

          {/* Side B: Active Proof */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between shadow-xl ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#00ff88]/40 ring-1 ring-[#00ff88]/20'
                : 'bg-white border-[#008744]/40 ring-1 ring-[#008744]/20'
            }`}
          >
            <div>
              <span
                className={`text-xs font-mono-code uppercase tracking-wider block mb-4 font-bold ${
                  darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                }`}
              >
                Demonstrable Capability
              </span>
              <div
                className={`font-display text-2xl font-black mb-4 ${
                  darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                }`}
              >
                &ldquo;I worked on a real project and applied SEO, AEO and GEO strategies to improve its visibility.&rdquo;
              </div>
              <p className="text-sm font-sans text-current leading-relaxed">
                Something to analyze. Something to improve. Something to discuss. And something that proves how you think and execute online.
              </p>
            </div>

            <div
              className={`mt-6 pt-4 border-t border-inherit text-xs font-mono-code font-bold ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              Auditable live proof
            </div>
          </div>
        </div>

        {/* Practical Learning > Passive Learning Reality List */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? 'bg-[#0a0a0a] border-[#1e1e1e]' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Flame size={18} className="text-[#00ff88]" />
            <h3 className="font-display text-lg sm:text-xl font-black">
              Practical Learning &gt; Passive Learning
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6 font-sans">
            You can watch 100 videos about SEO. But the real lessons begin when you encounter live search friction:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono-code text-xs">
            {realityCheckpoints.map((point, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                  darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shrink-0" />
                <span className="text-current">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
