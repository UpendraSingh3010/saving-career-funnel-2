import React, { useState } from 'react';
import { Search, MessageSquareText, Bot, Sparkles } from 'lucide-react';

interface Section2MethodProps {
  darkMode: boolean;
}

type DisciplineKey = 'SEO' | 'AEO' | 'GEO';

interface DisciplineData {
  key: DisciplineKey;
  label: string;
  fullName: string;
  share: string;
  color: string;
  headline: string;
  bullets: string[];
  icon: React.ElementType;
}

export const Section2Method: React.FC<Section2MethodProps> = ({ darkMode }) => {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineKey>('SEO');

  const disciplines: Record<DisciplineKey, DisciplineData> = {
    SEO: {
      key: 'SEO',
      label: 'SEO',
      fullName: 'Search Engine Optimization',
      share: '33.3%',
      color: '#00ff88',
      headline: 'Ranking on search engines',
      bullets: [
        'Keyword research & search-intent mapping',
        'On-page hierarchy & technical SEO foundations',
        'Crawl budget & authority signals',
      ],
      icon: Search,
    },
    AEO: {
      key: 'AEO',
      label: 'AEO',
      fullName: 'Answer Engine Optimization',
      share: '33.3%',
      color: '#38bdf8',
      headline: 'Getting pulled into direct answers',
      bullets: [
        'Structured content & schema markup',
        'FAQ formatting for instant answer boxes',
        'Entity relevance & knowledge graph indexing',
      ],
      icon: MessageSquareText,
    },
    GEO: {
      key: 'GEO',
      label: 'GEO',
      fullName: 'Generative Engine Optimization',
      share: '33.3%',
      color: '#c084fc',
      headline: 'Getting cited by AI search tools',
      bullets: [
        'AI-friendly content architecture & clean syntax',
        'Topical depth & comprehensive context layers',
        'Citability engineering for LLM synthesis engines',
      ],
      icon: Bot,
    },
  };

  const current = disciplines[activeDiscipline];

  // Helper to generate SVG donut slice path
  const getSlicePath = (startAngleDeg: number, endAngleDeg: number, innerR: number, outerR: number) => {
    const cx = 150;
    const cy = 150;
    const startRad = ((startAngleDeg - 90) * Math.PI) / 180;
    const endRad = ((endAngleDeg - 90) * Math.PI) / 180;

    const x1 = cx + outerR * Math.cos(startRad);
    const y1 = cy + outerR * Math.sin(startRad);
    const x2 = cx + outerR * Math.cos(endRad);
    const y2 = cy + outerR * Math.sin(endRad);

    const x3 = cx + innerR * Math.cos(endRad);
    const y3 = cy + innerR * Math.sin(endRad);
    const x4 = cx + innerR * Math.cos(startRad);
    const y4 = cy + innerR * Math.sin(startRad);

    const largeArc = endAngleDeg - startAngleDeg > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  const slices = [
    { key: 'SEO' as DisciplineKey, start: 0, end: 120, color: '#00ff88' },
    { key: 'AEO' as DisciplineKey, start: 120, end: 240, color: '#38bdf8' },
    { key: 'GEO' as DisciplineKey, start: 240, end: 360, color: '#c084fc' },
  ];

  return (
    <section
      id="section-method"
      className="py-20 sm:py-28 border-b border-inherit relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider">
              METHOD
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-4">
            One skill won't get you found anymore.
          </h2>

          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            Search now happens in three places at once.
          </p>
        </div>

        {/* Interactive Data Visualization Anchor: Donut Chart + Details Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          {/* Donut Chart Visual Anchor (Left / Top) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full transform -rotate-90 select-none"
              >
                {slices.map((slice) => {
                  const isActive = activeDiscipline === slice.key;
                  const path = getSlicePath(
                    slice.start + 1.5,
                    slice.end - 1.5,
                    isActive ? 64 : 68,
                    isActive ? 122 : 115
                  );

                  return (
                    <path
                      key={slice.key}
                      d={path}
                      fill={slice.color}
                      opacity={isActive ? 1 : 0.28}
                      className="cursor-pointer transition-all duration-300 ease-out hover:opacity-90"
                      onMouseEnter={() => setActiveDiscipline(slice.key)}
                      onClick={() => setActiveDiscipline(slice.key)}
                      style={{
                        filter: isActive
                          ? `drop-shadow(0px 0px 12px ${slice.color}66)`
                          : 'none',
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center Donut Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                <span
                  className="font-mono-code text-2xl sm:text-3xl font-black tracking-tight transition-colors duration-300"
                  style={{ color: current.color }}
                >
                  {current.label}
                </span>
                <span className="text-[11px] font-mono-code text-[#8e8e93] uppercase tracking-widest mt-0.5">
                  1/3 SPLIT
                </span>
              </div>
            </div>

            {/* Quick Segment Selector Buttons */}
            <div className="flex items-center gap-2 mt-4">
              {(['SEO', 'AEO', 'GEO'] as DisciplineKey[]).map((key) => {
                const isSelected = activeDiscipline === key;
                const d = disciplines[key];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveDiscipline(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-inherit shadow-sm'
                        : 'opacity-50 hover:opacity-80 border-transparent'
                    }`}
                    style={{
                      color: d.color,
                      borderColor: isSelected ? d.color : 'transparent',
                    }}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] font-mono-code text-[#8e8e93] mt-2">
              Tap or hover segments to inspect discipline
            </p>
          </div>

          {/* Surfaced Discipline Detail Panel (Right / Bottom) */}
          <div className="lg:col-span-7">
            <div
              key={current.key}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0a0a0a] border-[#1e1e1e] shadow-xl'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
              style={{
                borderLeftWidth: '4px',
                borderLeftColor: current.color,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${current.color}18`,
                      color: current.color,
                    }}
                  >
                    <current.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black">
                      {current.label}
                    </h3>
                    <p className="text-xs font-mono-code text-[#8e8e93]">
                      {current.fullName}
                    </p>
                  </div>
                </div>

                <span
                  className="px-2.5 py-1 rounded-md text-xs font-mono-code font-bold"
                  style={{
                    backgroundColor: `${current.color}15`,
                    color: current.color,
                  }}
                >
                  {current.headline}
                </span>
              </div>

              {/* What is taught */}
              <div className="space-y-2.5 my-5">
                {current.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-2.5 text-sm font-sans"
                  >
                    <span
                      className="font-mono-code font-bold mt-0.5"
                      style={{ color: current.color }}
                    >
                      →
                    </span>
                    <span className="text-current">{b}</span>
                  </div>
                ))}
              </div>

              {/* Explanation, kept short: each discipline gets applied to participant's own project, not a textbook example */}
              <div
                className={`pt-4 border-t border-inherit text-xs sm:text-sm font-mono-code leading-relaxed ${
                  darkMode ? 'text-[#a1a1aa]' : 'text-slate-600'
                }`}
              >
                <span className="font-bold text-current">Applied Outcome:</span>{' '}
                Each discipline is executed on your own real project — not a textbook example or sandbox clone.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
