import React, { useState } from 'react';
import { CheckCircle2, Clock, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

interface Section5OfferProps {
  darkMode: boolean;
}

type BranchKey = 'rank' | 'no-rank';

export const Section5Offer: React.FC<Section5OfferProps> = ({ darkMode }) => {
  const [activeBranch, setActiveBranch] = useState<BranchKey>('rank');

  return (
    <section
      id="section-offer"
      className="py-24 sm:py-32 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              OFFER
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            What if you didn't pay unless it worked?
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            The post-registration branching path and fee mechanics.
          </p>
        </div>

        {/* Interactive Dynamic Simulation Container */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Interactive Mode Switcher */}
          <div className="flex items-center justify-center gap-3 mb-8 font-mono-code text-xs">
            <button
              onClick={() => setActiveBranch('rank')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all cursor-pointer ${
                activeBranch === 'rank'
                  ? darkMode
                    ? 'bg-[#00ff88]/15 border-[#00ff88] text-[#00ff88] font-bold shadow-lg ring-1 ring-[#00ff88]/30'
                    : 'bg-emerald-50 border-[#008744] text-[#008744] font-bold shadow-sm ring-1 ring-[#008744]/30'
                  : 'border-inherit text-[#8e8e93] hover:text-current'
              }`}
            >
              <CheckCircle2 size={15} />
              <span>Simulate: Project Ranks</span>
            </button>

            <button
              onClick={() => setActiveBranch('no-rank')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all cursor-pointer ${
                activeBranch === 'no-rank'
                  ? darkMode
                    ? 'bg-[#38bdf8]/15 border-[#38bdf8] text-[#38bdf8] font-bold shadow-lg ring-1 ring-[#38bdf8]/30'
                    : 'bg-sky-50 border-[#0284c7] text-[#0284c7] font-bold shadow-sm ring-1 ring-[#0284c7]/30'
                  : 'border-inherit text-[#8e8e93] hover:text-current'
              }`}
            >
              <Clock size={15} />
              <span>Simulate: Still Optimizing</span>
            </button>
          </div>

          {/* Dynamic Invoice & Branching Card */}
          <div
            className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 shadow-2xl relative overflow-hidden ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#1e1e1e]'
                : 'bg-white border-slate-200'
            }`}
          >
            {/* Top status indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-inherit">
              <div>
                <span
                  className={`font-mono-code text-xs uppercase tracking-wider px-3 py-1 rounded-lg font-bold ${
                    activeBranch === 'rank'
                      ? 'bg-[#00ff88]/15 text-[#00ff88]'
                      : 'bg-[#38bdf8]/15 text-[#38bdf8]'
                  }`}
                >
                  {activeBranch === 'rank'
                    ? 'Branch · Criteria Met'
                    : 'Branch · Extended Runway'}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black mt-2">
                  {activeBranch === 'rank'
                    ? 'Course Tuition Fee: ₹0'
                    : 'Pay Later, Within 6 Months'}
                </h3>
              </div>

              <div className="font-mono-code text-xs text-[#8e8e93] text-left sm:text-right">
                <span className="block text-current font-bold">
                  Registration: ₹999 Paid
                </span>
                <span>(Always separate from course fee)</span>
              </div>
            </div>

            {/* Dynamic Breakdown Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 font-mono-code text-xs">
              <div
                className={`p-4 rounded-2xl border ${
                  darkMode
                    ? 'bg-[#121212] border-[#222222]'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[#8e8e93] block mb-1 uppercase tracking-wider">
                  Registration Entry
                </span>
                <span className="text-base font-bold text-current block">
                  ₹999
                </span>
                <span className="text-[11px] text-[#8e8e93]">
                  Paid to enter cohort
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  darkMode
                    ? 'bg-[#121212] border-[#222222]'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[#8e8e93] block mb-1 uppercase tracking-wider">
                  Course Tuition Fee
                </span>
                <span
                  className={`text-base font-bold block ${
                    activeBranch === 'rank'
                      ? 'text-[#00ff88]'
                      : darkMode
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {activeBranch === 'rank' ? '₹0 (100% Waived)' : 'Applicable Course Fee'}
                </span>
                <span className="text-[11px] text-[#8e8e93]">
                  {activeBranch === 'rank'
                    ? 'Triggered upon ranking'
                    : 'Deferred up to 6 months'}
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  activeBranch === 'rank'
                    ? darkMode
                      ? 'bg-[#00ff88]/10 border-[#00ff88]/30 text-white'
                      : 'bg-emerald-50 border-[#008744]/30 text-emerald-950'
                    : darkMode
                    ? 'bg-[#38bdf8]/10 border-[#38bdf8]/30 text-white'
                    : 'bg-sky-50 border-[#0284c7]/30 text-sky-950'
                }`}
              >
                <span className="block mb-1 uppercase tracking-wider text-[11px] opacity-80">
                  Asset Ownership
                </span>
                <span className="text-base font-bold block">
                  100% Yours
                </span>
                <span className="text-[11px] opacity-80">
                  You keep domain &amp; all code
                </span>
              </div>
            </div>

            {/* Narrative Explanation */}
            <p className="text-sm sm:text-base font-sans text-[#8e8e93] leading-relaxed mb-6">
              {activeBranch === 'rank'
                ? 'When you hit the published contest ranking thresholds within the evaluation window, your course tuition automatically reconciles to ₹0. You keep the fully optimized, ranking digital asset and all commercial value.'
                : 'If your project is still climbing the index and requires extended optimization runway, you do not pay on day one. You have a full 6-month buffer to settle the applicable course fee, while retaining everything you built and learned.'}
            </p>

            <div className="pt-4 border-t border-inherit flex items-center justify-between text-xs font-mono-code text-[#8e8e93]">
              <span className="flex items-center gap-1.5 text-current">
                <ShieldCheck size={14} className="text-[#00ff88]" />
                <span>Zero hidden fees or penalty clauses</span>
              </span>
              <span className="text-[#00ff88] font-bold">
                Transparent Execution
              </span>
            </div>
          </div>
        </div>

        {/* Short Key Takeaway */}
        <div className="text-center max-w-xl mx-auto">
          <div
            className={`inline-block px-5 py-2.5 rounded-xl border font-mono-code text-xs sm:text-sm ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#222222] text-[#8e8e93]'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            <span className="text-current font-bold">The Core Mechanic:</span>{' '}
            ₹999 registration is always separate from the course fee.
          </div>
        </div>
      </div>
    </section>
  );
};
