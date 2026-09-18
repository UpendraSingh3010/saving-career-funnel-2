import React, { useState } from 'react';
import { CheckCircle2, Shield, ArrowRight, Check, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { RubricRadarChart } from './RubricRadarChart';

interface PricingRulesSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const PricingRulesSection: React.FC<PricingRulesSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [hoveredRule, setHoveredRule] = useState<string | null>(null);
  const [showAllRules, setShowAllRules] = useState<boolean>(false);

  const rules = [
    {
      num: '01',
      title: 'Pre-Agreed Search Queries',
      short: 'Non-branded discovery queries approved during Week 2.',
      desc: 'Target queries must represent genuine discovery searches (non-branded), mutually finalized and approved during Week 2 orientation with Nikhil Sir.',
    },
    {
      num: '02',
      title: 'Defined Rank Benchmark',
      short: 'Google Page 1 (Top 10) OR Google AI Overview extraction.',
      desc: 'Qualifies by achieving Page 1 (Top 10 Google organic position) OR an official citation inside Google AI Overviews or Perplexity.',
    },
    {
      num: '03',
      title: 'Google Search Console Proof',
      short: 'Verified Search Console telemetry holding for >= 7 days.',
      desc: 'All rankings are verified directly via Search Console performance telemetry and live SERP audits, holding for at least 7 days.',
    },
    {
      num: '04',
      title: '100% White-Hat Standard',
      short: 'Ethical optimization only; no PBNs or link spam.',
      desc: 'Only sustainable, ethical optimization methods allowed. Link spam, PBNs, or manipulative black-hat techniques disqualify the project.',
    },
  ];

  return (
    <section id="section-pricing" className="py-20 sm:py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            PRICING MODEL &amp; OFFICIAL RULES
          </span>
        </div>

        <div className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Learn first. Prove results.{' '}
            <span className={darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}>
              Course fee = ₹0.
            </span>
          </h2>
          <p className="text-[#8e8e93] text-sm sm:text-base leading-relaxed">
            We align incentives completely. Registration fee and course fee are separate. If your project ranks on Google or AI search, your course fee is completely waived.
          </p>
        </div>

        {/* 2-Card Direct Pricing Contract */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Today */}
          <div
            className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#0a0a0a] border-[#1c1c1c]' : 'bg-white border-[#e2e8f0] shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-inherit">
                <span className="font-mono-code text-xs text-[#8e8e93] uppercase tracking-wider">
                  STEP 1: REGISTRATION
                </span>
                <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] font-bold">
                  SEAT LOCK
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className={`font-mono-code text-4xl sm:text-5xl font-black ${
                    darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                  }`}
                >
                  ₹999
                </span>
                <span className="text-xs font-mono-code text-[#8e8e93]">
                  paid once upon enrollment
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
                Locks your seat in the live batch. Includes live sessions with Nikhil Sir, complete SEO/AEO/GEO blueprints, and Google Search Console audit review.
              </p>

              <div className="space-y-2.5 font-mono-code text-xs text-current mb-8">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#00ff88] shrink-0" />
                  <span>No full course fee required upfront</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#00ff88] shrink-0" />
                  <span>Direct mentorship with Nikhil Sir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#00ff88] shrink-0" />
                  <span>You retain 100% ownership of your site &amp; rankings</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full py-3.5 px-4 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll For ₹999</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Card 2: The Outcome */}
          <div
            className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#0f0f0f] border-[#1e1e1e]' : 'bg-[#f8fafc] border-[#cbd5e1]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-inherit">
                <span className="font-mono-code text-xs text-[#8e8e93] uppercase tracking-wider">
                  STEP 2: OUTCOME UPON AUDIT
                </span>
                <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold">
                  PERFORMANCE LINKED
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className={`font-mono-code text-4xl sm:text-5xl font-black ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  ₹0
                </span>
                <span className="text-xs font-mono-code text-[#8e8e93]">
                  Course Fee if Project Ranks
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
                When your project achieves the agreed ranking benchmarks on Google or AI search during the tracking period, your course fee is waived to zero.
              </p>

              {/* Scenarios */}
              <div className="space-y-3 font-mono-code text-xs">
                <div
                  className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                    darkMode ? 'bg-[#00ff88]/10 border-[#00ff88]/30' : 'bg-emerald-50 border-emerald-200'
                  }`}
                >
                  <CheckCircle2 size={15} className="text-[#00ff88] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-current">If Project Ranks:</span>{' '}
                    <span className="text-current">Course Fee = ₹0. You keep your ranking asset and proof-of-work.</span>
                  </div>
                </div>

                <div
                  className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                    darkMode ? 'bg-[#181818] border-[#2a2a2a]' : 'bg-white border-[#cbd5e1]'
                  }`}
                >
                  <AlertCircle size={15} className="text-[#8e8e93] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-current">If Project Does Not Rank:</span>{' '}
                    <span className="text-[#8e8e93]">Standard course fee applies with a flexible 6-month buffer. You keep your domain and all assets.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 text-[11px] font-mono-code text-[#8e8e93]">
              *Zero fine print. All criteria defined and recorded prior to project launch.
            </div>
          </div>
        </div>

        {/* 5-Pillar Technical Audit Rubric (Radar Chart) */}
        <div className="mb-12">
          <RubricRadarChart darkMode={darkMode} />
        </div>

        {/* 4 Qualification Rules with Collapsible Boxes */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#00ff88]" />
              <h3 className="font-display font-bold text-base sm:text-lg">
                Official Ranking Verification Rules
              </h3>
            </div>

            <button
              onClick={() => setShowAllRules(!showAllRules)}
              className="font-mono-code text-xs text-[#8e8e93] hover:text-current underline cursor-pointer"
            >
              {showAllRules ? 'Collapse to Compact View' : 'Expand All 4 Rules'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {rules.map((r) => {
              const isOpen = showAllRules || hoveredRule === r.num;
              return (
                <div
                  key={r.num}
                  onMouseEnter={() => setHoveredRule(r.num)}
                  onMouseLeave={() => setHoveredRule(null)}
                  onClick={() => {
                    if (!showAllRules) {
                      setHoveredRule(hoveredRule === r.num ? null : r.num);
                    }
                  }}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isOpen
                      ? darkMode
                        ? 'bg-[#121212] border-[#00ff88] shadow-[0_0_25px_rgba(0,255,136,0.18)] -translate-y-1'
                        : 'bg-emerald-50/70 border-[#008744] shadow-md -translate-y-1'
                      : darkMode
                      ? 'bg-[#0a0a0a] border-[#1c1c1c] hover:border-[#333333]'
                      : 'bg-white border-[#e2e8f0] hover:border-[#cbd5e1]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`font-mono-code text-[11px] font-bold ${
                          isOpen
                            ? darkMode
                              ? 'text-[#00ff88]'
                              : 'text-[#008744]'
                            : 'text-[#8e8e93]'
                        }`}
                      >
                        RULE [{r.num}]
                      </span>
                      {!showAllRules && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            isOpen
                              ? `rotate-180 ${darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}`
                              : 'text-[#8e8e93]'
                          }`}
                        />
                      )}
                    </div>

                    <div className="font-display font-bold text-xs sm:text-sm text-current mb-2 leading-snug">
                      {r.title}
                    </div>

                    {isOpen ? (
                      <p className="text-xs text-[#8e8e93] leading-relaxed font-mono-code animate-in fade-in duration-200">
                        {r.desc}
                      </p>
                    ) : (
                      <p className="text-[11px] text-[#8e8e93] leading-snug font-mono-code line-clamp-2">
                        {r.short}
                      </p>
                    )}
                  </div>

                  {/* Micro indicator footer */}
                  <div className="pt-3 mt-2 border-t border-inherit flex items-center justify-between text-[10px] font-mono-code">
                    <span
                      className={
                        isOpen
                          ? darkMode
                            ? 'text-[#00ff88] font-bold'
                            : 'text-[#008744] font-bold'
                          : 'text-[#8e8e93]'
                      }
                    >
                      {isOpen ? '● ACTIVE INSPECTION' : 'HOVER TO EXPAND'}
                    </span>
                    <span className="text-[#8e8e93]">AUDIT STAGE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
