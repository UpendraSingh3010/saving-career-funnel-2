import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface Section5OfferProps {
  darkMode: boolean;
}

export const Section5Offer: React.FC<Section5OfferProps> = ({ darkMode }) => {
  return (
    <section
      id="section-offer"
      className="py-20 sm:py-28 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              OFFER
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Learn First. Prove It. Pay Later.
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            Your learning should be demonstrated through execution, not just course completion.
          </p>
        </div>

        {/* High-Contrast Comparison Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Box 1: Traditional Course */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#0a0a0a]/60 border-[#1c1c1c]' : 'bg-slate-50/80 border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] font-bold">
                  Traditional Course
                </span>
                <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-red-500/10 text-red-400">
                  Upfront Risk
                </span>
              </div>

              {/* Step Diagram */}
              <div className="space-y-3 font-mono-code text-xs mb-6">
                <div className="p-3 rounded-xl border border-inherit flex items-center gap-2 text-[#8e8e93]">
                  <span className="w-5 h-5 rounded-full bg-inherit border border-inherit flex items-center justify-center font-bold text-[10px]">
                    1
                  </span>
                  <span>Pay complete fee upfront</span>
                </div>
                <div className="p-3 rounded-xl border border-inherit flex items-center gap-2 text-[#8e8e93]">
                  <span className="w-5 h-5 rounded-full bg-inherit border border-inherit flex items-center justify-center font-bold text-[10px]">
                    2
                  </span>
                  <span>Watch recorded lessons</span>
                </div>
                <div className="p-3 rounded-xl border border-inherit flex items-center gap-2 text-[#8e8e93]">
                  <span className="w-5 h-5 rounded-full bg-inherit border border-inherit flex items-center justify-center font-bold text-[10px]">
                    3
                  </span>
                  <span>Complete course &amp; hope you can apply it</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed">
                You pay before ever knowing if the knowledge will yield actual visibility.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-inherit text-xs font-mono-code text-[#8e8e93]">
              Standard passive completion
            </div>
          </div>

          {/* Box 2: Saving.Careers Challenge */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between shadow-2xl relative ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#00ff88]/50 ring-1 ring-[#00ff88]/30'
                : 'bg-white border-[#008744]/50 ring-1 ring-[#008744]/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-mono-code text-xs uppercase tracking-wider font-bold ${
                    darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                  }`}
                >
                  Saving.Careers Challenge
                </span>
                <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-[#00ff88]/20 text-[#00ff88] font-bold">
                  Performance-Based
                </span>
              </div>

              {/* Step Diagram */}
              <div className="space-y-3 font-mono-code text-xs mb-6">
                <div
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-[#141414] border-[#222]' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center font-bold text-[10px]">
                      1
                    </span>
                    <span>₹999 Registration to start</span>
                  </span>
                  <span className="text-[11px] text-[#8e8e93]">Entry Fee</span>
                </div>

                <div
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-[#141414] border-[#222]' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center font-bold text-[10px]">
                      2
                    </span>
                    <span>Apply SEO, AEO &amp; GEO on real project</span>
                  </span>
                  <span className="text-[11px] text-[#8e8e93]">Execution</span>
                </div>

                <div
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode
                      ? 'bg-[#00ff88]/10 border-[#00ff88]/40 text-[#00ff88]'
                      : 'bg-emerald-50 border-[#008744]/40 text-[#008744]'
                  }`}
                >
                  <span className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} />
                    <span>Project ranks according to criteria?</span>
                  </span>
                  <span className="font-bold text-xs uppercase">COURSE FEE = ₹0</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-current leading-relaxed">
                If your project qualifies under the contest criteria: <strong>Your course fee is ₹0</strong>. If not, pay the applicable course fee later within 6 months.
              </p>
            </div>

            <div
              className={`mt-6 pt-4 border-t border-inherit text-xs font-mono-code flex items-center justify-between ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              <span>Zero course fee upfront</span>
              <span>100% Asset Ownership</span>
            </div>
          </div>
        </div>

        {/* Clear Rules & Criteria Summary Card */}
        <div
          className={`p-5 sm:p-6 rounded-2xl border text-xs font-mono-code ${
            darkMode ? 'bg-[#0d0d0d] border-[#222]' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="text-current font-bold mb-2 flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#00ff88]" />
            <span>What Does &ldquo;Rank&rdquo; Mean?</span>
          </div>
          <p className="text-[#8e8e93] leading-relaxed mb-3 font-sans text-xs">
            Ranking qualification will follow the official contest criteria shared with participants, defining:
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              'Eligible project types',
              'Eligible search platforms',
              'Target keywords/queries',
              'Ranking positions',
              'Verification method',
              'Tracking period',
              'Qualification deadline',
            ].map((rule) => (
              <span
                key={rule}
                className="px-2.5 py-1 rounded-md border border-inherit bg-inherit text-current"
              >
                {rule}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
