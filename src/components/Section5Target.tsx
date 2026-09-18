import React, { useState } from 'react';
import { GraduationCap, Briefcase, Rocket, RefreshCw } from 'lucide-react';

interface Section5TargetProps {
  darkMode: boolean;
}

type PersonaKey = 'Student' | 'Freelancer' | 'Founder' | 'Career Switcher';

interface PersonaData {
  key: PersonaKey;
  line: string;
  icon: React.ElementType;
}

export const Section5Target: React.FC<Section5TargetProps> = ({ darkMode }) => {
  const [activePersona, setActivePersona] = useState<PersonaKey>('Student');

  const personas: Record<PersonaKey, PersonaData> = {
    Student: {
      key: 'Student',
      line: 'Skip the certificate. Build proof instead.',
      icon: GraduationCap,
    },
    Freelancer: {
      key: 'Freelancer',
      line: 'Apply it to client work immediately.',
      icon: Briefcase,
    },
    Founder: {
      key: 'Founder',
      line: 'Rank your own project while you learn.',
      icon: Rocket,
    },
    'Career Switcher': {
      key: 'Career Switcher',
      line: 'Walk away with a real result, not just notes.',
      icon: RefreshCw,
    },
  };

  const current = personas[activePersona];

  return (
    <section
      id="section-target"
      className="py-20 sm:py-28 border-b border-inherit relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow: [05] TARGET */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code">
          <span className="w-2 h-2 rounded-full bg-[#c084fc]"></span>
          <span className="text-[#8e8e93] font-semibold tracking-wider">
            [05] TARGET
          </span>
        </div>

        {/* Headline: Tap what describes you. */}
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-10">
          Tap what describes you.
        </h2>

        {/* Interactive Element: 4 Persona Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto mb-10">
          {(['Student', 'Freelancer', 'Founder', 'Career Switcher'] as PersonaKey[]).map(
            (personaKey) => {
              const item = personas[personaKey];
              const Icon = item.icon;
              const isSelected = activePersona === personaKey;

              return (
                <button
                  key={personaKey}
                  onClick={() => setActivePersona(personaKey)}
                  className={`px-5 py-3 rounded-xl font-mono-code text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer border ${
                    isSelected
                      ? darkMode
                        ? 'bg-[#00ff88] text-black border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.3)] scale-105'
                        : 'bg-[#008744] text-white border-[#008744] shadow-md scale-105'
                      : darkMode
                      ? 'bg-[#0a0a0a] text-[#8e8e93] border-[#222222] hover:border-[#444444] hover:text-white'
                      : 'bg-white text-[#64748b] border-[#cbd5e1] hover:border-[#94a3b8] hover:text-[#0f172a]'
                  }`}
                >
                  <Icon size={16} />
                  <span>{personaKey}</span>
                </button>
              );
            }
          )}
        </div>

        {/* Revealed Single Matched Line beneath the chips */}
        <div className="min-h-[4.5rem] flex items-center justify-center">
          <div
            key={current.key}
            className={`py-4 px-8 sm:px-10 rounded-2xl border text-base sm:text-lg font-mono-code font-bold transition-all duration-300 animate-in fade-in zoom-in-95 ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#222222] text-white shadow-lg'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
          >
            <span
              className={`mr-2.5 font-bold ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              {current.key} →
            </span>
            <span>{current.line}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
