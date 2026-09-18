import React, { useState } from 'react';
import { BookOpen, Hammer, Sliders, Trophy, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface RoadmapSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showAllStages, setShowAllStages] = useState<boolean>(false);

  const steps = [
    {
      step: '01',
      phase: 'LEARN',
      duration: 'Week 1–2',
      title: 'Search & Retrieval Fundamentals',
      icon: BookOpen,
      color: '#00ff88',
      shortSummary: 'Understand how search algorithms, entity nodes, and LLM citations work.',
      desc: 'Understand what modern search algorithms and generative AI models actually evaluate: crawl budgets, entity nodes, semantic intent, and Large Language Model retrieval graphs.',
      milestone: 'Pre-agreed target queries and ranking benchmarks approved by Nikhil Sir.',
      keyActions: [
        'Query Intent & SERP Feature Mapping',
        'Entity Graphs & Schema.org Triples',
        'Benchmarking target queries for evaluation',
      ],
    },
    {
      step: '02',
      phase: 'BUILD',
      duration: 'Week 3',
      title: 'Deploy Live Web Asset',
      icon: Hammer,
      color: '#38bdf8',
      shortSummary: 'Launch or connect an active website with Google Search Console tracking.',
      desc: 'No toy subdomains. Launch or connect an active website: niche blog, personal brand, directory, SaaS tool, or business site with real Search Console telemetry.',
      milestone: 'Live domain indexed, robots.txt configured, and tracking telemetry verified.',
      keyActions: [
        'Domain DNS & Server Response Time setup',
        'Google Search Console & Bing Webmaster link',
        'Baseline indexation audit directly with Nikhil Sir',
      ],
    },
    {
      step: '03',
      phase: 'OPTIMIZE',
      duration: 'Week 4–6',
      title: 'Execute Triad Optimization',
      icon: Sliders,
      color: '#c084fc',
      shortSummary: 'Execute technical schema, answer capsules, and topical authority clusters.',
      desc: 'Systematically execute technical schema, write high-density entity content, structure FAQs for AI direct answers, and build topical authority clusters.',
      milestone: 'Measurable impressions climb; pages qualify for Google and Perplexity snippets.',
      keyActions: [
        'Deploy 40–60 word answer capsules for AI Overviews',
        'Topical clustering & internal link equity pass',
        'Information gain validation to avoid generic AI text',
      ],
    },
    {
      step: '04',
      phase: 'RANK',
      duration: 'Week 7–8',
      title: 'Reach Target SERP → Fee = ₹0',
      icon: Trophy,
      color: '#ff3366',
      shortSummary: 'Track target queries into Top 10 / AI Citation to waive course fee to ₹0.',
      desc: 'Track target queries into qualifying search positions. Submit official Google Search Console audit. Once verified, your course fee is completely waived to ₹0.',
      milestone: 'Audited ranking proof + ₹0 course fee status certificate.',
      keyActions: [
        '7-day rank retention verification in Search Console',
        'Live SERP audit teardown with Nikhil Sir',
        'Formal course fee waiver & asset ownership retention',
      ],
    },
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="section-roadmap" className="py-20 sm:py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
              CHALLENGE ROADMAP // 4-STAGE PROTOCOL
            </span>
          </div>

          {/* View Mode Toggle */}
          <button
            onClick={() => setShowAllStages(!showAllStages)}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border font-mono-code text-xs transition-all cursor-pointer ${
              showAllStages
                ? darkMode
                  ? 'bg-[#222222] border-[#00ff88] text-white'
                  : 'bg-emerald-50 border-[#008744] text-[#008744]'
                : darkMode
                ? 'bg-[#111111] border-[#222222] text-[#8e8e93] hover:text-white'
                : 'bg-white border-[#e2e8f0] text-[#64748b] hover:text-black'
            }`}
          >
            <Layers size={13} />
            <span>{showAllStages ? 'Switch to Compact Interactive View' : 'Expand All 4 Stages'}</span>
          </button>
        </div>

        <div className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            A clear 4-stage execution pipeline.
          </h2>
          <p className="text-[#8e8e93] text-sm sm:text-base leading-relaxed">
            Every stage is tied to a verifiable deliverable on your live domain leading to the ₹0 fee outcome.
          </p>
        </div>

        {!showAllStages ? (
          /* COMPACT INTERACTIVE PIPELINE VIEW */
          <div className="space-y-6 mb-12">
            {/* Stage Selector Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {steps.map((s, idx) => {
                const isSelected = activeStep === idx;
                const Icon = s.icon;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 sm:p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? darkMode
                          ? 'bg-[#141414] border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.15)]'
                          : 'bg-emerald-50/70 border-[#008744] shadow-sm'
                        : darkMode
                        ? 'bg-[#0a0a0a] border-[#1c1c1c] hover:border-[#333333] opacity-80 hover:opacity-100'
                        : 'bg-white border-[#e2e8f0] hover:border-[#cbd5e1] opacity-90 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span
                        className="font-mono-code text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: s.color }}
                      >
                        [{s.step}] {s.phase}
                      </span>
                      <span className="font-mono-code text-[10px] text-[#8e8e93]">
                        {s.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className="p-1.5 rounded shrink-0"
                        style={{ backgroundColor: `${s.color}15`, color: s.color }}
                      >
                        <Icon size={14} />
                      </div>
                      <div className="font-display font-bold text-xs sm:text-sm text-current truncate">
                        {s.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Collapsible Active Stage Detail Drawer */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-[#0e0e0e] border-[#222222] shadow-[0_15px_35px_rgba(0,0,0,0.8)]'
                  : 'bg-white border-[#e2e8f0] shadow-md'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-inherit">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{
                      backgroundColor: `${current.color}15`,
                      color: current.color,
                    }}
                  >
                    <CurrentIcon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono-code text-xs font-bold uppercase tracking-widest"
                        style={{ color: current.color }}
                      >
                        STAGE {current.step} // {current.phase}
                      </span>
                      <span className="text-[#8e8e93] text-xs font-mono-code">
                        • {current.duration}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-current">
                      {current.title}
                    </h3>
                  </div>
                </div>

                {/* Milestone Pill */}
                <div
                  className={`px-3.5 py-2 rounded-xl border text-xs font-mono-code max-w-md ${
                    darkMode ? 'bg-[#141414] border-[#262626]' : 'bg-[#f8fafc] border-[#e2e8f0]'
                  }`}
                >
                  <div className="text-[10px] font-bold text-[#8e8e93] uppercase mb-0.5">
                    Stage Milestone Deliverable:
                  </div>
                  <div className="flex items-start gap-1.5 text-current">
                    <CheckCircle2 size={13} className="text-[#00ff88] shrink-0 mt-0.5" />
                    <span>{current.milestone}</span>
                  </div>
                </div>
              </div>

              {/* Description & Action Plan */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-4">
                    {current.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono-code text-current">
                    <span className="text-[#00ff88] font-bold">&gt;</span>
                    <span>Direct teardowns with Nikhil Sir during live contest sessions.</span>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-2">
                  <div className="text-[11px] font-mono-code uppercase text-[#8e8e93] tracking-wider">
                    Core Action Steps:
                  </div>
                  {current.keyActions.map((action, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded-lg border text-xs font-mono-code flex items-center gap-2 ${
                        darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
                      <span className="text-current">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigator in Drawer */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-inherit">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className={`text-xs font-mono-code px-3 py-1.5 rounded border transition-all cursor-pointer ${
                    activeStep === 0
                      ? 'opacity-30 cursor-not-allowed border-transparent'
                      : darkMode
                      ? 'border-[#262626] hover:border-[#00ff88] text-[#8e8e93] hover:text-white'
                      : 'border-slate-200 hover:border-slate-400 text-slate-600'
                  }`}
                >
                  ← Previous Stage
                </button>

                <div className="text-[11px] font-mono-code text-[#8e8e93]">
                  {activeStep + 1} of {steps.length} Stages
                </div>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(activeStep + 1)}
                  className={`text-xs font-mono-code px-3 py-1.5 rounded border transition-all cursor-pointer ${
                    activeStep === steps.length - 1
                      ? 'opacity-30 cursor-not-allowed border-transparent'
                      : darkMode
                      ? 'border-[#262626] hover:border-[#00ff88] text-[#8e8e93] hover:text-white'
                      : 'border-slate-200 hover:border-slate-400 text-slate-600'
                  }`}
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* EXPANDED ACCORDION VIEW */
          <div className="space-y-3 mb-12">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className={`p-5 rounded-xl border transition-all ${
                    darkMode ? 'bg-[#0a0a0a] border-[#1c1c1c]' : 'bg-white border-[#e2e8f0]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono-code text-xs font-bold uppercase tracking-widest"
                        style={{ color: s.color }}
                      >
                        [{s.step}] {s.phase}
                      </span>
                      <h3 className="font-display font-bold text-base text-current">
                        {s.title}
                      </h3>
                    </div>
                    <span className="font-mono-code text-xs text-[#8e8e93]">{s.duration}</span>
                  </div>

                  <p className="text-xs text-[#8e8e93] leading-relaxed mb-3">{s.desc}</p>

                  <div className="flex items-center gap-2 text-xs font-mono-code text-current">
                    <CheckCircle2 size={12} className="text-[#00ff88] shrink-0" />
                    <span className="text-[#8e8e93]">Deliverable:</span>
                    <span>{s.milestone}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Clean Protocol Callout */}
        <div
          className={`p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            darkMode
              ? 'bg-[#0f0f0f] border-[#1e1e1e]'
              : 'bg-[#f8fafc] border-[#e2e8f0]'
          }`}
        >
          <div className="text-xs sm:text-sm font-mono-code text-[#8e8e93]">
            <span className="text-current font-bold">READY TO COMMENCE?</span>{' '}
            Reserve your batch pass for ₹999. Course fee is ₹0 if you achieve qualifying rank.
          </div>
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Lock Seat For ₹999</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};
