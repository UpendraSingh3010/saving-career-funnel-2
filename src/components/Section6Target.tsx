import React, { useState } from 'react';
import { Compass, Briefcase, Check, Sparkles, ArrowRight, UserCheck } from 'lucide-react';

interface Section6TargetProps {
  darkMode: boolean;
}

export const Section6Target: React.FC<Section6TargetProps> = ({ darkMode }) => {
  const [selectedPersona, setSelectedPersona] = useState<'track-a' | 'track-b'>('track-a');

  return (
    <section
      id="section-target"
      className="py-24 sm:py-32 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              TARGET
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Built for two kinds of people.
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            Those just starting, and those already working.
          </p>
        </div>

        {/* Varied Asymmetric Two-Column Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {/* Profile 01: Just Starting Out */}
          <div
            onClick={() => setSelectedPersona('track-a')}
            className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all cursor-pointer ${
              selectedPersona === 'track-a'
                ? darkMode
                  ? 'bg-[#0a0a0a] border-[#00ff88] shadow-[0_0_35px_rgba(0,255,136,0.15)] ring-1 ring-[#00ff88]'
                  : 'bg-white border-[#008744] shadow-lg ring-1 ring-[#008744]'
                : darkMode
                ? 'bg-[#0a0a0a]/50 border-[#1f1f1f] opacity-80 hover:opacity-100'
                : 'bg-white/60 border-slate-200 opacity-80 hover:opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-code text-xs uppercase tracking-wider px-3 py-1 rounded-lg bg-[#00ff88]/10 text-[#00ff88] font-bold">
                  Track A · Just Starting
                </span>
                <Compass size={22} className="text-[#00ff88]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black mb-3">
                Students &amp; Beginners
              </h3>

              <p className="text-sm sm:text-base font-sans text-[#8e8e93] leading-relaxed mb-6">
                Those who want practical proof over another certificate-only course. Start from the ground up on a real, live project — learning modern search mechanics through actual deployment.
              </p>
            </div>

            <div>
              <div className="pt-4 border-t border-inherit flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-mono-code border ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-[#00ff88]'
                      : 'bg-slate-50 border-slate-200 text-[#008744]'
                  }`}
                >
                  Student
                </span>
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-mono-code border ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-[#00ff88]'
                      : 'bg-slate-50 border-slate-200 text-[#008744]'
                  }`}
                >
                  Beginner
                </span>
              </div>
              <p className="text-[11px] font-mono-code text-[#8e8e93] mt-3">
                Replaces passive coursework with a verifiable live production URL
              </p>
            </div>
          </div>

          {/* Profile 02: Already Working */}
          <div
            onClick={() => setSelectedPersona('track-b')}
            className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all cursor-pointer ${
              selectedPersona === 'track-b'
                ? darkMode
                  ? 'bg-[#0a0a0a] border-[#38bdf8] shadow-[0_0_35px_rgba(56,189,248,0.15)] ring-1 ring-[#38bdf8]'
                  : 'bg-white border-[#0284c7] shadow-lg ring-1 ring-[#0284c7]'
                : darkMode
                ? 'bg-[#0a0a0a]/50 border-[#1f1f1f] opacity-80 hover:opacity-100'
                : 'bg-white/60 border-slate-200 opacity-80 hover:opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-code text-xs uppercase tracking-wider px-3 py-1 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] font-bold">
                  Track B · Already Working
                </span>
                <Briefcase size={22} className="text-[#38bdf8]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black mb-3">
                Freelancers, Founders &amp; Switchers
              </h3>

              <p className="text-sm sm:text-base font-sans text-[#8e8e93] leading-relaxed mb-6">
                Those who want to apply search and AI visibility directly to client engagements or rank their own venture immediately. No conceptual drift; immediate commercial leverage.
              </p>
            </div>

            <div>
              <div className="pt-4 border-t border-inherit flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-mono-code border ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-[#38bdf8]'
                      : 'bg-slate-50 border-slate-200 text-[#0284c7]'
                  }`}
                >
                  Freelancer
                </span>
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-mono-code border ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-[#38bdf8]'
                      : 'bg-slate-50 border-slate-200 text-[#0284c7]'
                  }`}
                >
                  Founder
                </span>
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-mono-code border ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-[#38bdf8]'
                      : 'bg-slate-50 border-slate-200 text-[#0284c7]'
                  }`}
                >
                  Career Switcher
                </span>
              </div>
              <p className="text-[11px] font-mono-code text-[#8e8e93] mt-3">
                Direct client deliverables &amp; organic pipeline generation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
