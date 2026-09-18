import React, { useState } from 'react';
import {
  GraduationCap,
  Compass,
  TrendingUp,
  PenTool,
  Briefcase,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

interface Section6TargetProps {
  darkMode: boolean;
}

export const Section6Target: React.FC<Section6TargetProps> = ({ darkMode }) => {
  const [selectedId, setSelectedId] = useState<string>('students');

  const targets = [
    {
      id: 'students',
      icon: GraduationCap,
      label: 'Students',
      desc: 'Who want practical exposure instead of another certificate-only course.',
    },
    {
      id: 'beginners',
      icon: Compass,
      label: 'Digital Marketing Beginners',
      desc: 'Who want to understand modern organic search from the ground up.',
    },
    {
      id: 'learners',
      icon: TrendingUp,
      label: 'SEO Learners',
      desc: 'Who already know the basics but want to test their ability on a real project.',
    },
    {
      id: 'writers',
      icon: PenTool,
      label: 'Content Writers',
      desc: 'Who want to understand how content connects with SEO, answer engines and AI-driven discovery.',
    },
    {
      id: 'freelancers',
      icon: Briefcase,
      label: 'Freelancers',
      desc: 'Who want stronger practical SEO knowledge they can apply to client or personal projects.',
    },
    {
      id: 'founders',
      icon: Rocket,
      label: 'Founders & Creators',
      desc: 'Who want to improve the organic visibility of their own website, business or content platform.',
    },
  ];

  return (
    <section
      id="section-target"
      className="py-20 sm:py-28 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              TARGET
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Who Is This For?
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            Built for learners who want to build demonstrable capability on a live project.
          </p>
        </div>

        {/* Clean, Non-Cluttered Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {targets.map((item) => {
            const IconComponent = item.icon;
            const isSelected = selectedId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? darkMode
                      ? 'bg-[#141414] border-[#00ff88] text-white shadow-lg ring-1 ring-[#00ff88]/30'
                      : 'bg-emerald-50 border-[#008744] text-slate-900 shadow-sm ring-1 ring-[#008744]/30'
                    : darkMode
                    ? 'bg-[#0a0a0a] border-[#1e1e1e] text-[#8e8e93] hover:border-[#333]'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-xl border ${
                        isSelected
                          ? darkMode
                            ? 'bg-[#00ff88]/20 border-[#00ff88]/40 text-[#00ff88]'
                            : 'bg-emerald-100 border-emerald-300 text-[#008744]'
                          : 'bg-inherit border-inherit text-[#8e8e93]'
                      }`}
                    >
                      <IconComponent size={18} />
                    </div>
                    {isSelected && (
                      <CheckCircle2 size={16} className="text-[#00ff88]" />
                    )}
                  </div>

                  <h3 className="font-display text-base font-bold mb-1 text-current">
                    {item.label}
                  </h3>

                  <p className="text-xs font-sans text-[#8e8e93] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Reality Note */}
        <div
          className={`p-4 rounded-xl border text-center font-mono-code text-xs ${
            darkMode ? 'bg-[#0d0d0d] border-[#222] text-[#8e8e93]' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <span className="text-current font-bold">The Unifying Commonality:</span> Every participant works on a project that can actually compete online.
        </div>
      </div>
    </section>
  );
};
