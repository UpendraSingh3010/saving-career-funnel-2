import React, { useState } from 'react';
import { RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Section4ProtocolProps {
  darkMode: boolean;
}

export const Section4Protocol: React.FC<Section4ProtocolProps> = ({ darkMode }) => {
  const [selectedStep, setSelectedStep] = useState<number>(3); // Default on Optimize

  const steps = [
    {
      num: '01',
      name: 'Register',
      headline: '₹999 registration fee',
      body: 'Join the contest with a ₹999 registration fee. You do not need to pay the complete course fee before starting.',
      tag: 'Entry',
    },
    {
      num: '02',
      name: 'Learn',
      headline: 'Practical SEO, AEO and GEO',
      body: 'Learn practical SEO, AEO and GEO concepts with Nikhil Sir. Understand what actually affects visibility, discoverability and rankings.',
      tag: 'Fundamentals',
    },
    {
      num: '03',
      name: 'Build',
      headline: 'Work on your own real project',
      body: 'Choose, create or work on your own real project. Instead of solving imaginary assignments, you work on something that can actually compete online.',
      tag: 'Foundation',
    },
    {
      num: '04',
      name: 'Optimize',
      headline: 'The iterative execution loop',
      body: 'Research. Create content. Improve pages. Optimize structure. Strengthen search visibility. Test ideas. Track progress. Repeat.',
      isLoop: true,
      tag: 'Active Cycle',
    },
    {
      num: '05',
      name: 'Rank',
      headline: 'Meet the criteria, course fee = ₹0',
      body: 'Your final challenge is simple: Can you make your project rank? If your project meets the defined contest ranking criteria, you do not have to pay the course fee.',
      tag: 'The Outcome',
    },
  ];

  const current = steps[selectedStep];

  return (
    <section
      id="section-protocol"
      className="py-20 sm:py-28 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              PROTOCOL
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Your Journey Is Simple
          </h2>
          <div className="font-mono-code text-sm sm:text-base font-bold text-[#00ff88] tracking-widest uppercase mb-2">
            LEARN → BUILD → OPTIMIZE → RANK
          </div>
          <p className="text-base text-[#8e8e93] font-sans">
            Five connected stages connecting entry to your final ranking outcome.
          </p>
        </div>

        {/* Clean Process Flow Diagram */}
        <div
          className={`p-6 sm:p-10 rounded-3xl border shadow-xl ${
            darkMode ? 'bg-[#0a0a0a] border-[#1e1e1e]' : 'bg-white border-slate-200'
          }`}
        >
          {/* Step Progression Bar / Diagram */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mb-8 p-1.5 rounded-2xl border border-inherit bg-inherit/50">
            {steps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setSelectedStep(idx)}
                  className={`flex-1 p-3 rounded-xl text-left sm:text-center transition-all cursor-pointer border ${
                    isSelected
                      ? darkMode
                        ? 'bg-[#161616] border-[#00ff88] text-white shadow-sm'
                        : 'bg-emerald-50 border-[#008744] text-slate-900 shadow-sm'
                      : 'border-transparent text-[#8e8e93] hover:text-current'
                  }`}
                >
                  <div className="flex items-center sm:justify-center gap-1.5 text-xs font-mono-code mb-1">
                    <span className="font-bold">{step.num}</span>
                    {step.isLoop && (
                      <RefreshCw size={11} className="text-[#00ff88] animate-spin-slow" />
                    )}
                  </div>
                  <div className="font-bold text-xs sm:text-sm truncate">
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div
            className={`p-6 sm:p-8 rounded-2xl border text-left transition-all ${
              darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-inherit">
              <div className="flex items-center gap-3">
                <span className="font-mono-code text-xs font-bold px-2.5 py-1 rounded bg-[#00ff88]/15 text-[#00ff88]">
                  Step {current.num}
                </span>
                <h3 className="font-display text-2xl font-black">
                  {current.name}
                </h3>
              </div>

              <span className="font-mono-code text-xs text-[#8e8e93] uppercase tracking-wider">
                {current.tag}
              </span>
            </div>

            <div className="font-display text-lg sm:text-xl font-bold mb-3 text-current">
              {current.headline}
            </div>

            <p className="font-sans text-sm sm:text-base text-[#8e8e93] leading-relaxed mb-6">
              {current.body}
            </p>

            {/* Loop Callout if Step 04 */}
            {current.isLoop && (
              <div
                className={`p-3.5 rounded-xl border text-xs font-mono-code flex items-center gap-3 ${
                  darkMode
                    ? 'bg-[#161616] border-[#00ff88]/40 text-[#00ff88]'
                    : 'bg-emerald-100 border-[#008744]/40 text-emerald-900'
                }`}
              >
                <RefreshCw size={18} className="shrink-0 animate-spin-slow" />
                <span>
                  <strong>Iterative Loop:</strong> Research → Create content → Improve pages → Optimize structure → Strengthen visibility → Track progress → Repeat.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
