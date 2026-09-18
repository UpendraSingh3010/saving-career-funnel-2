import React, { useState } from 'react';
import { RefreshCw, Check, ArrowRight, Activity, Terminal, Layers, Globe2 } from 'lucide-react';

interface Section4ProtocolProps {
  darkMode: boolean;
}

interface StepNode {
  id: string;
  num: string;
  name: string;
  summary: string;
  deepDive: string;
  isLoop?: boolean;
  deliverable: string;
  timeframe: string;
}

export const Section4Protocol: React.FC<Section4ProtocolProps> = ({ darkMode }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3);

  const steps: StepNode[] = [
    {
      id: 'step-01',
      num: '01',
      name: 'Register',
      summary: '₹999, no course fee yet',
      deepDive:
        'Secure your seat and reserve your project slot. No tuition fee is due at entry. The contest rules, target benchmark tiers, and cohort dashboard open immediately.',
      deliverable: 'Confirmed entry ticket, contest evaluation guidelines & benchmark spec sheet',
      timeframe: 'Day 0',
    },
    {
      id: 'step-02',
      num: '02',
      name: 'Learn',
      summary: 'SEO/AEO/GEO fundamentals',
      deepDive:
        'Live foundational deep-dives covering traditional crawl mechanics, direct answer snippet extraction, and LLM generative search citation structures with Nikhil Sir.',
      deliverable: 'Keyword blueprint, entity relationship schema & AI citability checklist',
      timeframe: 'Week 1',
    },
    {
      id: 'step-03',
      num: '03',
      name: 'Build',
      summary: 'A real, live project',
      deepDive:
        'Select or bring your own production domain or client website. No synthetic sandbox environments or mock simulations allowed — true live web indexing.',
      deliverable: 'Live production URL configured in Google Search Console',
      timeframe: 'Week 2',
    },
    {
      id: 'step-04',
      num: '04',
      name: 'Optimize',
      summary: 'Research, test, track, repeat',
      deepDive:
        'This is where most of the work happens — it is the only step engineered to cycle repeatedly. Research search intent, ship structured pages, test schema, measure impressions in Google Search Console, and iterate until the needle moves.',
      isLoop: true,
      deliverable: 'Weekly impression delta, schema validations & ranking climbs',
      timeframe: 'Continuous Cycle',
    },
    {
      id: 'step-05',
      num: '05',
      name: 'Rank',
      summary: 'Meet the criteria, pay ₹0',
      deepDive:
        'Hit the published contest ranking thresholds within the evaluation window. Your course fee automatically drops to ₹0, and you retain full permanent ownership of the ranking asset.',
      deliverable: '₹0 invoice reconciliation + permanent verified production rank',
      timeframe: 'Evaluation Window',
    },
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section
      id="section-protocol"
      className="py-24 sm:py-32 border-b border-inherit relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? `radial-gradient(circle at 75% 30%, rgba(0, 255, 136, 0.07) 0%, transparent 60%)`
            : `radial-gradient(circle at 75% 30%, rgba(0, 204, 106, 0.05) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              PROTOCOL
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Five steps, one outcome.
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            The connected execution path from registration to rank.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className={`p-3 sm:p-4 rounded-2xl border mb-8 ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#1e1e1e]'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {steps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                const isPast = idx < activeStepIndex;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`relative p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                      isActive
                        ? darkMode
                          ? 'bg-[#141414] border-[#00ff88] text-white shadow-lg ring-1 ring-[#00ff88]/30'
                          : 'bg-emerald-50 border-[#008744] text-slate-900 shadow-sm ring-1 ring-[#008744]/30'
                        : isPast
                        ? darkMode
                          ? 'bg-[#0f0f0f] border-[#222] text-[#8e8e93]'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                        : darkMode
                        ? 'bg-transparent border-transparent text-[#666] hover:bg-[#111]'
                        : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="font-mono-code text-[11px] font-bold">
                        {step.num}
                      </span>
                      {step.isLoop && (
                        <span
                          className="px-1.5 py-0.5 rounded text-[9px] font-mono-code font-bold bg-[#00ff88]/20 text-[#00ff88]"
                          title="Repeats iteratively"
                        >
                          LOOP
                        </span>
                      )}
                    </div>
                    <span className="font-mono-code text-xs sm:text-sm font-bold truncate">
                      {step.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={currentStep.id}
            className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 shadow-2xl relative overflow-hidden ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#1e1e1e]'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-inherit">
              <div className="flex items-center gap-3">
                <span className="font-mono-code text-xs font-bold px-3 py-1 rounded-lg bg-[#00ff88]/15 text-[#00ff88]">
                  STAGE {currentStep.num}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black">
                  {currentStep.name}
                </h3>
              </div>

              <div className="flex items-center gap-3 font-mono-code text-xs text-[#8e8e93]">
                <span>Timeframe: <strong className="text-current">{currentStep.timeframe}</strong></span>
                <span>·</span>
                <span>{currentStep.summary}</span>
              </div>
            </div>

            <p className="text-base sm:text-lg font-sans leading-relaxed text-current mb-8 max-w-3xl">
              {currentStep.deepDive}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-2xl border text-left font-mono-code text-xs ${
                  darkMode
                    ? 'bg-[#121212] border-[#222222]'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 text-[#8e8e93] mb-1.5 uppercase tracking-wider font-bold">
                  <Terminal size={14} className="text-[#00ff88]" />
                  <span>Concrete Deliverable</span>
                </div>
                <div className="text-current font-bold">
                  {currentStep.deliverable}
                </div>
              </div>

              {currentStep.isLoop ? (
                <div
                  className={`p-4 rounded-2xl border text-left font-mono-code text-xs flex items-center gap-3 ${
                    darkMode
                      ? 'bg-[#141414] border-[#00ff88]/40 text-white'
                      : 'bg-emerald-50 border-[#008744]/40 text-emerald-950'
                  }`}
                >
                  <RefreshCw
                    size={20}
                    className="shrink-0 text-[#00ff88] animate-spin-slow"
                  />
                  <div>
                    <span className="font-bold text-[#00ff88]">
                      Iterative Flywheel:
                    </span>{' '}
                    Most of the actual work happens inside &ldquo;Optimize&rdquo; — it is the only step designed to repeat until ranking signals lock in.
                  </div>
                </div>
              ) : (
                <div
                  className={`p-4 rounded-2xl border text-left font-mono-code text-xs ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222]'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#8e8e93] mb-1.5 uppercase tracking-wider font-bold">
                    <Globe2 size={14} className="text-[#38bdf8]" />
                    <span>Real-World Impact</span>
                  </div>
                  <div className="text-current">
                    Permanent production indexation with verifiable algorithmic ranking footprints.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
