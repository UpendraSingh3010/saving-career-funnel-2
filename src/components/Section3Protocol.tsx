import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface Section3ProtocolProps {
  darkMode: boolean;
}

interface StepNode {
  num: string;
  name: string;
  line: string;
}

export const Section3Protocol: React.FC<Section3ProtocolProps> = ({ darkMode }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepNode[] = [
    {
      num: '01',
      name: 'Register',
      line: 'Join for ₹999.',
    },
    {
      num: '02',
      name: 'Learn',
      line: 'Real SEO/AEO/GEO concepts.',
    },
    {
      num: '03',
      name: 'Build',
      line: 'Your own live project.',
    },
    {
      num: '04',
      name: 'Optimize',
      line: 'Test, measure, repeat.',
    },
    {
      num: '05',
      name: 'Rank',
      line: 'Meet the criteria, pay ₹0.',
    },
  ];

  const currentStep = steps[activeStep];

  return (
    <section
      id="section-protocol"
      className="py-20 sm:py-28 border-b border-inherit relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow: [03] PROTOCOL */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="text-[#8e8e93] font-semibold tracking-wider">
            [03] PROTOCOL
          </span>
        </div>

        {/* Headline: Five steps. One outcome. */}
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-12">
          Five steps. One outcome.
        </h2>

        {/* Interactive Horizontal Stepper with 5 Nodes */}
        <div className="relative max-w-3xl mx-auto mb-10 px-2 sm:px-6">
          {/* Background Track Line */}
          <div
            className={`absolute top-6 left-8 right-8 h-[2px] -translate-y-1/2 z-0 hidden sm:block ${
              darkMode ? 'bg-[#222222]' : 'bg-[#e2e8f0]'
            }`}
          >
            {/* Active Progress Fill */}
            <div
              className="h-full bg-[#00ff88] transition-all duration-300"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Stepper Nodes */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-0 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer w-[18%] min-w-[70px] transition-all"
                  aria-label={`Step ${step.num}: ${step.name}`}
                >
                  {/* Node Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono-code text-xs font-bold transition-all duration-200 border-2 ${
                      isActive
                        ? darkMode
                          ? 'bg-[#00ff88] text-black border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.5)] scale-110'
                          : 'bg-[#008744] text-white border-[#008744] shadow-md scale-110'
                        : isPast
                        ? darkMode
                          ? 'bg-[#111111] text-[#00ff88] border-[#00ff88]/60'
                          : 'bg-slate-100 text-[#008744] border-[#008744]/60'
                        : darkMode
                        ? 'bg-[#0a0a0a] text-[#8e8e93] border-[#222222] group-hover:border-[#444444]'
                        : 'bg-white text-[#94a3b8] border-[#cbd5e1] group-hover:border-[#94a3b8]'
                    }`}
                  >
                    {isPast ? <Check size={16} /> : step.num}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`mt-2 font-mono-code text-xs font-bold transition-colors ${
                      isActive
                        ? darkMode
                          ? 'text-[#00ff88]'
                          : 'text-[#008744]'
                        : 'text-[#8e8e93] group-hover:text-current'
                    }`}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Revealed Line for the Active Node (strictly <= 6 words, no paragraphs) */}
        <div className="min-h-[4rem] flex items-center justify-center">
          <div
            key={currentStep.num}
            className={`py-4 px-8 rounded-xl border text-sm sm:text-base font-mono-code font-bold transition-all duration-200 animate-in fade-in zoom-in-95 ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#222222] text-white shadow-lg'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
          >
            <span
              className={`mr-2.5 font-mono-code ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              {currentStep.name} —
            </span>
            <span>{currentStep.line}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
