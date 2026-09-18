import React from 'react';
import { BookOpen, Hammer, Sliders, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RoadmapSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const steps = [
    {
      step: '01',
      phase: 'LEARN',
      duration: 'Week 1–2',
      title: 'Search & Retrieval Fundamentals',
      icon: BookOpen,
      color: '#00ff88',
      desc: 'Understand what search algorithms and AI models actually evaluate: crawl budgets, entity nodes, semantic intent, and Large Language Model training citations.',
      milestone: 'Pre-agreed target queries and ranking benchmarks approved by Nikhil Sir.',
    },
    {
      step: '02',
      phase: 'BUILD',
      duration: 'Week 3',
      title: 'Deploy Live Web Asset',
      icon: Hammer,
      color: '#38bdf8',
      desc: 'No toy assignments. Launch or connect an active website: niche blog, personal brand, directory, SaaS tool, or business site with Google Search Console telemetry.',
      milestone: 'Live domain indexed, robots.txt configured, and tracking telemetry verified.',
    },
    {
      step: '03',
      phase: 'OPTIMIZE',
      duration: 'Week 4–6',
      title: 'Execute Triad Optimization',
      icon: Sliders,
      color: '#c084fc',
      desc: 'Systematically execute technical schema, write high-density entity content, structure FAQs for AI direct answers, and build topical authority backlinks.',
      milestone: 'Measurable impressions climb; pages qualify for Google and Perplexity snippets.',
    },
    {
      step: '04',
      phase: 'RANK',
      duration: 'Week 7–8',
      title: 'Reach Target SERP → Fee = ₹0',
      icon: Trophy,
      color: '#ff3366',
      desc: 'Track target queries into qualifying search positions. Submit official Google Search Console audit. Once verified, your course fee is completely waived to ₹0.',
      milestone: 'Audited ranking proof + ₹0 course fee status certificate.',
    },
  ];

  return (
    <section id="section-roadmap" className="py-20 sm:py-28 border-t border-[#222222]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            CHALLENGE ROADMAP // 4-STAGE PROTOCOL
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            A clear 4-stage execution pipeline.
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            You don’t wander through endless video modules. Every stage is tied to an actionable deliverable on your live domain, leading to one verifiable milestone: ranking.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className={`p-6 rounded-xl border flex flex-col justify-between relative transition-all ${
                  darkMode
                    ? 'bg-[#0a0a0a] border-[#1c1c1c] hover:border-[#333333]'
                    : 'bg-white border-[#e2e8f0] shadow-sm hover:border-[#cbd5e1]'
                }`}
              >
                <div>
                  {/* Step Code & Duration */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-inherit">
                    <span
                      className="font-mono-code text-xs font-bold uppercase tracking-widest"
                      style={{ color: s.color }}
                    >
                      [{s.step}] {s.phase}
                    </span>
                    <span className="font-mono-code text-[11px] text-[#8e8e93]">
                      {s.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div
                      className="p-2 rounded-lg shrink-0"
                      style={{
                        backgroundColor: `${s.color}15`,
                        color: s.color,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-bold text-base leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#8e8e93] leading-relaxed mb-5">
                    {s.desc}
                  </p>
                </div>

                {/* Milestone Deliverable Box */}
                <div
                  className={`p-3 rounded-lg border text-[11px] font-mono-code ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-[#d4d4d4]'
                      : 'bg-[#f8fafc] border-[#e2e8f0] text-[#334155]'
                  }`}
                >
                  <div className="text-[#8e8e93] uppercase text-[9.5px] font-bold mb-1">
                    Stage Deliverable:
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-[#00ff88]" />
                    <span>{s.milestone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Protocol Callout */}
        <div
          className={`p-5 sm:p-6 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
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
