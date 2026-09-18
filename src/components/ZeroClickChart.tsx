import React, { useState } from 'react';
import { Sparkles, Info, ArrowUpRight, ShieldCheck, Database, Search } from 'lucide-react';

interface ZeroClickChartProps {
  darkMode: boolean;
}

interface SegmentData {
  id: string;
  name: string;
  shortName: string;
  percentage: number;
  startAngle: number;
  endAngle: number;
  color: string;
  lightColor: string;
  tag: string;
  summary: string;
  impact: string;
  triadSolution: string;
}

export const ZeroClickChart: React.FC<ZeroClickChartProps> = ({ darkMode }) => {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(0);

  const segments: SegmentData[] = [
    {
      id: 'zero-click',
      name: 'Zero-Click Searches & AI Direct Answers',
      shortName: 'Zero-Click & AI Answers',
      percentage: 58.5,
      startAngle: 0,
      endAngle: 210.6,
      color: '#00ff88',
      lightColor: '#008744',
      tag: 'CRITICAL SHIFT',
      summary:
        'Searches resolved entirely inside the search interface without clicking any classic blue links (Google AI Overviews, Featured Snippets, Knowledge Panels, and conversational engines like Perplexity & ChatGPT).',
      impact:
        'Old-school SEO ignores this entire 58.5% share. If your site isn’t structured as an authoritative citation entity, you receive zero visibility.',
      triadSolution: 'Solved by: AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization).',
    },
    {
      id: 'organic-clicks',
      name: 'Traditional Organic Website Clicks',
      shortName: 'Organic Website Clicks',
      percentage: 36.0,
      startAngle: 210.6,
      endAngle: 340.2,
      color: '#38bdf8',
      lightColor: '#0284c7',
      tag: 'CLASSIC SERP',
      summary:
        'Traditional clicks to organic website listings on Google, Bing, and DuckDuckGo search result pages.',
      impact:
        'Competition is fiercer than ever because organic real estate has been compressed below AI Overviews and sponsored ads.',
      triadSolution: 'Solved by: Technical SEO, Schema triples, and high topical authority clustering.',
    },
    {
      id: 'paid-ads',
      name: 'Paid Ads & Sponsored Listings',
      shortName: 'Paid Ads & Sponsored',
      percentage: 5.5,
      startAngle: 340.2,
      endAngle: 360.0,
      color: '#f59e0b',
      lightColor: '#d97706',
      tag: 'RENTED TRAFFIC',
      summary:
        'Clicks to Google Ads and sponsored shopping listings across desktop and mobile queries.',
      impact:
        'Cost-per-click (CPC) has surged 34% over the last 2 years. Traffic abruptly ceases the moment daily ad budgets run out.',
      triadSolution: 'Replaced by: Permanent organic authority assets with compounding zero-cost traffic.',
    },
  ];

  const activeSegment = segments[activeSegmentIndex];

  // Helper function to calculate SVG coordinates
  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    innerRadius: number,
    outerRadius: number,
    startAngle: number,
    endAngle: number
  ) => {
    // 0.8 degree gap between slices for visual separation
    const adjustedEnd = Math.max(startAngle + 0.1, endAngle - 0.8);
    const startOuter = polarToCartesian(x, y, outerRadius, adjustedEnd);
    const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
    const startInner = polarToCartesian(x, y, innerRadius, startAngle);
    const endInner = polarToCartesian(x, y, innerRadius, adjustedEnd);

    const largeArcFlag = adjustedEnd - startAngle <= 180 ? '0' : '1';

    return [
      'M',
      startOuter.x,
      startOuter.y,
      'A',
      outerRadius,
      outerRadius,
      0,
      largeArcFlag,
      0,
      endOuter.x,
      endOuter.y,
      'L',
      startInner.x,
      startInner.y,
      'A',
      innerRadius,
      innerRadius,
      0,
      largeArcFlag,
      1,
      endInner.x,
      endInner.y,
      'Z',
    ].join(' ');
  };

  const cx = 180;
  const cy = 180;
  const outerR = 145;
  const innerR = 95;
  const activeOuterR = 155;

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-10 transition-all ${
        darkMode
          ? 'bg-[#0a0a0a] border-[#1f1f1f] shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
          : 'bg-white border-[#e2e8f0] shadow-md'
      }`}
    >
      {/* Top Header & Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-inherit">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="font-mono-code text-[11px] text-[#8e8e93] uppercase tracking-wider">
              INDUSTRY SEARCH BENCHMARK // ZERO-CLICK CRISIS
            </span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-current">
            Where Search Queries Actually End Up Today
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono-code text-[11px] text-[#8e8e93] self-start sm:self-auto border-inherit">
          <Database size={13} className="text-[#00ff88]" />
          <span>SparkToro &amp; Datos Global Study</span>
        </div>
      </div>

      {/* Main Grid: Interactive Donut Chart + Deep Breakdown Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left: Interactive Donut Chart SVG */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
            <svg
              viewBox="0 0 360 360"
              className="w-full h-full overflow-visible transition-all"
              role="img"
              aria-label="Interactive pie chart representing search query distribution"
            >
              <defs>
                {/* Subtle outer glow for active slice */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="6"
                    floodColor={darkMode ? activeSegment.color : activeSegment.lightColor}
                    floodOpacity="0.4"
                  />
                </filter>
              </defs>

              {/* Background Guide Circle */}
              <circle
                cx={cx}
                cy={cy}
                r={outerR + 2}
                fill="none"
                stroke={darkMode ? '#161616' : '#f1f5f9'}
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Donut Slices */}
              {segments.map((seg, idx) => {
                const isActive = activeSegmentIndex === idx;
                const rOut = isActive ? activeOuterR : outerR;
                const pathData = describeArc(cx, cy, innerR, rOut, seg.startAngle, seg.endAngle);
                const fillColor = darkMode ? seg.color : seg.lightColor;

                return (
                  <path
                    key={seg.id}
                    d={pathData}
                    fill={fillColor}
                    opacity={isActive ? 1 : 0.65}
                    filter={isActive ? 'url(#glow)' : undefined}
                    className="cursor-pointer transition-all duration-300 hover:opacity-100"
                    onClick={() => setActiveSegmentIndex(idx)}
                    onMouseEnter={() => setActiveSegmentIndex(idx)}
                    aria-label={`${seg.name}: ${seg.percentage}%`}
                  />
                );
              })}

              {/* Center Donut Hole Content */}
              <foreignObject
                x={cx - innerR + 10}
                y={cy - innerR + 10}
                width={(innerR - 10) * 2}
                height={(innerR - 10) * 2}
                className="overflow-visible"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 select-none">
                  <span
                    className="font-mono-code text-3xl sm:text-4xl font-extrabold tracking-tight transition-all"
                    style={{
                      color: darkMode ? activeSegment.color : activeSegment.lightColor,
                    }}
                  >
                    {activeSegment.percentage}%
                  </span>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#8e8e93] mt-1 line-clamp-2 leading-tight">
                    {activeSegment.shortName}
                  </span>
                  <span className="text-[9px] font-mono-code text-[#8e8e93] mt-0.5">
                    Click to inspect
                  </span>
                </div>
              </foreignObject>
            </svg>
          </div>

          {/* Quick Segment Selectors Below Chart */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {segments.map((s, idx) => {
              const isCurrent = activeSegmentIndex === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSegmentIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg border font-mono-code text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    isCurrent
                      ? darkMode
                        ? 'bg-[#161616] border-[#00ff88] text-white shadow-sm'
                        : 'bg-emerald-50 border-[#008744] text-[#008744] font-bold'
                      : darkMode
                      ? 'bg-[#0f0f0f] border-[#1e1e1e] text-[#8e8e93] hover:text-white'
                      : 'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b] hover:text-black'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: darkMode ? s.color : s.lightColor }}
                  />
                  <span>
                    {s.percentage}% {s.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Strategic Implication Box */}
        <div className="lg:col-span-6 space-y-5">
          <div
            className={`p-6 rounded-xl border transition-all ${
              darkMode
                ? 'bg-[#111111] border-[#222222]'
                : 'bg-[#f8fafc] border-[#e2e8f0]'
            }`}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span
                className="inline-block text-[11px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                style={{
                  backgroundColor: `${darkMode ? activeSegment.color : activeSegment.lightColor}18`,
                  color: darkMode ? activeSegment.color : activeSegment.lightColor,
                }}
              >
                {activeSegment.tag} • {activeSegment.percentage}% OF GLOBAL SEARCH
              </span>

              <span className="font-mono-code text-xs text-[#8e8e93]">
                Segment {activeSegmentIndex + 1} of 3
              </span>
            </div>

            <h4 className="font-display font-bold text-lg sm:text-xl text-current mb-2">
              {activeSegment.name}
            </h4>

            <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-4">
              {activeSegment.summary}
            </p>

            {/* Strategic Impact Box */}
            <div
              className={`p-4 rounded-lg border mb-4 font-mono-code text-xs ${
                darkMode ? 'bg-[#0a0a0a] border-[#1c1c1c]' : 'bg-white border-[#e2e8f0]'
              }`}
            >
              <div className="text-[#8e8e93] uppercase text-[10px] mb-1">
                The Practical Reality:
              </div>
              <div className="text-current leading-relaxed">
                {activeSegment.impact}
              </div>
            </div>

            {/* How the Saving.Careers Triad Solves It */}
            <div className="flex items-start gap-2 text-xs font-mono-code">
              <span className="text-[#00ff88] font-bold shrink-0">&gt;</span>
              <span
                className="font-semibold"
                style={{
                  color: darkMode ? activeSegment.color : activeSegment.lightColor,
                }}
              >
                {activeSegment.triadSolution}
              </span>
            </div>
          </div>

          {/* Academic / Research Footnote */}
          <div className="p-4 rounded-xl border border-dashed border-inherit text-xs font-mono-code text-[#8e8e93] flex items-start gap-2.5">
            <Info size={15} className="shrink-0 mt-0.5 text-current" />
            <div className="leading-relaxed">
              <strong className="text-current">Methodology &amp; Verification:</strong> Data compiled from SparkToro &amp; Datos clickstream analysis across 100M+ real search queries, supported by Gartner Search Landscape projections showing a continued decline in isolated blue-link click-throughs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
