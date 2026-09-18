import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Sliders, Layers, Terminal } from 'lucide-react';

interface RubricRadarChartProps {
  darkMode: boolean;
}

interface PillarRubric {
  id: string;
  name: string;
  shortName: string;
  targetScore: number;
  outdatedScore: number;
  benchmark: string;
  description: string;
  auditStandard: string;
  whyItMatters: string;
}

export const RubricRadarChart: React.FC<RubricRadarChartProps> = ({ darkMode }) => {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'both' | 'target' | 'outdated'>('both');

  const pillars: PillarRubric[] = [
    {
      id: 'schema',
      name: 'Schema & Knowledge Graph Depth',
      shortName: 'Schema Triples',
      targetScore: 95,
      outdatedScore: 35,
      benchmark: 'Score ≥ 90 / 100',
      description:
        'Implementation of connected JSON-LD entity triples (@id, Organization, Article, FAQPage, ItemList) linking your domain to established knowledge bases (Wikidata/Google Knowledge Graph).',
      auditStandard:
        'Zero syntax warnings on Google Rich Results Test & complete entity validation in Schema.org validator.',
      whyItMatters:
        'Search engines and AI crawlers do not read HTML like humans; they parse connected entity graphs to determine authoritative truth.',
    },
    {
      id: 'extractability',
      name: 'Answer Engine Extractability',
      shortName: 'AEO Extractability',
      targetScore: 92,
      outdatedScore: 20,
      benchmark: 'Score ≥ 85 / 100',
      description:
        'Structuring headings, paragraph lengths, and direct definitions in exact 40–60 word answer capsules formatted for Google AI Overviews and Perplexity extraction.',
      auditStandard:
        'Tested across target search prompts with verified AI synthesis capture and snippet readiness.',
      whyItMatters:
        'Over 58% of queries are answered zero-click. Content without clear extractable capsule answers is systematically ignored by AI engines.',
    },
    {
      id: 'info-gain',
      name: 'Information Gain & Original Data',
      shortName: 'Information Gain',
      targetScore: 90,
      outdatedScore: 25,
      benchmark: 'Score ≥ 85 / 100',
      description:
        'Verification that content introduces unique proprietary data, original benchmarks, or first-hand experience rather than generic regurgitated AI text.',
      auditStandard:
        'Google Information Gain Patent compliance: must contain net-new semantic entities not found in the top 10 SERP results.',
      whyItMatters:
        'Google automatically devalues carbon-copy content. High information-gain pages are the primary source models cite in AI Overviews.',
    },
    {
      id: 'crawl-efficiency',
      name: 'Crawl & Index DOM Efficiency',
      shortName: 'DOM & Crawl Health',
      targetScore: 94,
      outdatedScore: 50,
      benchmark: 'Score ≥ 90 / 100',
      description:
        'Sub-800ms Server Response (TTFB), lightweight DOM tree, zero render-blocking bloat, and fully indexable server-rendered HTML for both Googlebot and LLM web-crawlers (GPTBot, ClaudeBot).',
      auditStandard:
        'Passing 90+ on Google Lighthouse Mobile and verified 200 OK status on Google Search Console URL Inspection tool.',
      whyItMatters:
        'If Googlebot or Perplexity times out or encounters heavy JS client-rendering, the asset never makes it into the vector retrieval graph.',
    },
    {
      id: 'authority-clustering',
      name: 'Topical Authority Clustering',
      shortName: 'Topical Clustering',
      targetScore: 92,
      outdatedScore: 40,
      benchmark: 'Score ≥ 85 / 100',
      description:
        'Interconnected semantic hub-and-spoke architecture. Supporting articles provide topical context, internal link equity, and mutual anchor text signals directly to the target ranking page.',
      auditStandard:
        'At least 5 tightly focused supporting content clusters internally linked with exact-match topical context and zero orphan pages.',
      whyItMatters:
        'Google ranks topical authorities, not isolated lone articles. Clustering proves to the search algorithm that your asset owns the domain subject.',
    },
  ];

  const selectedPillar = pillars[selectedPillarIndex];

  // Radar geometry calculations
  const cx = 200;
  const cy = 195;
  const maxRadius = 135;
  const levels = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index: number, scoreRatio: number) => {
    // 5 vertices, starting straight up at -90 deg
    const angle = (-90 + index * 72) * (Math.PI / 180);
    const r = maxRadius * scoreRatio;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // Generate polygon points string
  const getPolygonPoints = (scores: number[]) => {
    return scores
      .map((score, idx) => {
        const { x, y } = getCoordinates(idx, score / 100);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const targetPolygon = getPolygonPoints(pillars.map((p) => p.targetScore));
  const outdatedPolygon = getPolygonPoints(pillars.map((p) => p.outdatedScore));

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-10 transition-all ${
        darkMode
          ? 'bg-[#0a0a0a] border-[#1f1f1f] shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
          : 'bg-white border-[#e2e8f0] shadow-md'
      }`}
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-inherit">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="font-mono-code text-[11px] text-[#8e8e93] uppercase tracking-wider">
              TECHNICAL AUDIT CRITERIA // ZERO BIAS
            </span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-current">
            The 5-Pillar Contest Qualification Rubric
          </h3>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1 max-w-2xl">
            How your live web project is objectively audited by Nikhil Sir before waiving the course fee to ₹0.
          </p>
        </div>

        {/* View Mode Toggle Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg border font-mono-code text-xs self-start sm:self-auto border-inherit bg-inherit">
          <button
            onClick={() => setViewMode('both')}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              viewMode === 'both'
                ? darkMode
                  ? 'bg-[#222222] text-white font-bold'
                  : 'bg-slate-200 text-black font-bold'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            Overlay
          </button>
          <button
            onClick={() => setViewMode('target')}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              viewMode === 'target'
                ? darkMode
                  ? 'bg-[#00ff88]/20 text-[#00ff88] font-bold'
                  : 'bg-emerald-100 text-[#008744] font-bold'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            Target Standard
          </button>
          <button
            onClick={() => setViewMode('outdated')}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              viewMode === 'outdated'
                ? darkMode
                  ? 'bg-rose-500/20 text-rose-400 font-bold'
                  : 'bg-rose-100 text-rose-600 font-bold'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            Legacy Course
          </button>
        </div>
      </div>

      {/* Main Grid: Radar Chart + Deep Audit Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Interactive Radar Chart SVG */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[390px] aspect-square flex items-center justify-center">
            <svg
              viewBox="0 0 400 390"
              className="w-full h-full overflow-visible select-none"
              role="img"
              aria-label="Radar chart displaying 5-pillar technical contest qualification rubric"
            >
              {/* Concentric Grid Levels */}
              {levels.map((lvl) => {
                const points = pillars
                  .map((_, i) => {
                    const { x, y } = getCoordinates(i, lvl);
                    return `${x.toFixed(1)},${y.toFixed(1)}`;
                  })
                  .join(' ');
                return (
                  <polygon
                    key={lvl}
                    points={points}
                    fill="none"
                    stroke={darkMode ? '#222222' : '#e2e8f0'}
                    strokeWidth={lvl === 1.0 ? '1.5' : '1'}
                    strokeDasharray={lvl === 1.0 ? 'none' : '3 3'}
                  />
                );
              })}

              {/* Axis Rays */}
              {pillars.map((_, idx) => {
                const outer = getCoordinates(idx, 1.0);
                return (
                  <line
                    key={idx}
                    x1={cx}
                    y1={cy}
                    x2={outer.x}
                    y2={outer.y}
                    stroke={darkMode ? '#262626' : '#cbd5e1'}
                    strokeWidth="1"
                  />
                );
              })}

              {/* Outdated Course Baseline Polygon (Red / Rose) */}
              {(viewMode === 'both' || viewMode === 'outdated') && (
                <polygon
                  points={outdatedPolygon}
                  fill={darkMode ? '#f43f5e' : '#e11d48'}
                  fillOpacity={darkMode ? '0.12' : '0.08'}
                  stroke={darkMode ? '#f43f5e' : '#e11d48'}
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="transition-all duration-300"
                />
              )}

              {/* Saving.Careers Target Standard Polygon (Green) */}
              {(viewMode === 'both' || viewMode === 'target') && (
                <polygon
                  points={targetPolygon}
                  fill={darkMode ? '#00ff88' : '#059669'}
                  fillOpacity={darkMode ? '0.22' : '0.15'}
                  stroke={darkMode ? '#00ff88' : '#059669'}
                  strokeWidth="2.5"
                  className="transition-all duration-300"
                />
              )}

              {/* Interactive Vertices & Labels */}
              {pillars.map((p, idx) => {
                const targetCoord = getCoordinates(idx, p.targetScore / 100);
                const labelCoord = getCoordinates(idx, 1.22);
                const isSelected = selectedPillarIndex === idx;

                return (
                  <g key={p.id} className="cursor-pointer" onClick={() => setSelectedPillarIndex(idx)}>
                    {/* Outer Label text */}
                    <text
                      x={labelCoord.x}
                      y={labelCoord.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-[10px] font-mono-code transition-all ${
                        isSelected
                          ? darkMode
                            ? 'fill-[#00ff88] font-bold'
                            : 'fill-[#008744] font-bold'
                          : darkMode
                          ? 'fill-[#a1a1aa] hover:fill-white'
                          : 'fill-[#64748b] hover:fill-black'
                      }`}
                    >
                      {p.shortName}
                    </text>

                    {/* Target vertex node */}
                    <circle
                      cx={targetCoord.x}
                      cy={targetCoord.y}
                      r={isSelected ? 6 : 4.5}
                      fill={darkMode ? '#00ff88' : '#059669'}
                      stroke={darkMode ? '#000000' : '#ffffff'}
                      strokeWidth="2"
                      className="transition-all"
                    />

                    {/* Active Halo Indicator */}
                    {isSelected && (
                      <circle
                        cx={targetCoord.x}
                        cy={targetCoord.y}
                        r={11}
                        fill="none"
                        stroke={darkMode ? '#00ff88' : '#059669'}
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                        className="animate-spin-slow"
                      />
                    )}
                  </g>
                );
              })}

              {/* Center Anchor Point */}
              <circle cx={cx} cy={cy} r="3" fill={darkMode ? '#555555' : '#94a3b8'} />
            </svg>
          </div>

          {/* Legend and Navigation Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="flex items-center gap-2 font-mono-code text-[11px]">
              <span className="w-3 h-3 rounded bg-[#00ff88]/30 border border-[#00ff88]"></span>
              <span className={darkMode ? 'text-white font-medium' : 'text-slate-900 font-medium'}>
                Saving.Careers Qualifying Bar (&gt;85%)
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#8e8e93]">
              <span className="w-3 h-3 rounded bg-rose-500/20 border border-rose-500 border-dashed"></span>
              <span>Typical Course Baseline (&lt;40%)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Selected Pillar Deep Technical Inspector */}
        <div className="lg:col-span-6 space-y-4">
          <div
            className={`p-6 rounded-xl border transition-all ${
              darkMode
                ? 'bg-[#111111] border-[#222222]'
                : 'bg-[#f8fafc] border-[#e2e8f0]'
            }`}
          >
            {/* Header with pill indicators */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span
                className="inline-block text-[11px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                style={{
                  backgroundColor: darkMode ? '#00ff8815' : '#00874415',
                  color: darkMode ? '#00ff88' : '#008744',
                }}
              >
                Pillar {selectedPillarIndex + 1} of 5 • {selectedPillar.benchmark}
              </span>

              <span className="font-mono-code text-xs text-[#8e8e93]">
                Target: {selectedPillar.targetScore}% vs Baseline: {selectedPillar.outdatedScore}%
              </span>
            </div>

            <h4 className="font-display font-bold text-lg sm:text-xl text-current mb-2">
              {selectedPillar.name}
            </h4>

            <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-4">
              {selectedPillar.description}
            </p>

            {/* Audit Checklist Box */}
            <div
              className={`p-4 rounded-lg border mb-4 font-mono-code text-xs ${
                darkMode ? 'bg-[#0a0a0a] border-[#1c1c1c]' : 'bg-white border-[#e2e8f0]'
              }`}
            >
              <div className="flex items-center gap-1.5 text-current font-bold uppercase text-[10px] mb-1.5">
                <Terminal size={12} className="text-[#00ff88]" />
                <span>Nikhil Sir’s Live Audit Verification:</span>
              </div>
              <div className="text-[#8e8e93] leading-relaxed">
                {selectedPillar.auditStandard}
              </div>
            </div>

            {/* Why it guarantees rank */}
            <div className="space-y-1 text-xs font-mono-code">
              <div className="text-[10px] uppercase text-[#8e8e93] tracking-wider">
                Why this unlocks the ₹0 fee:
              </div>
              <div className="flex items-start gap-2 text-current leading-relaxed">
                <CheckCircle2 size={14} className="text-[#00ff88] shrink-0 mt-0.5" />
                <span>{selectedPillar.whyItMatters}</span>
              </div>
            </div>
          </div>

          {/* Quick Select Buttons for all 5 Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {pillars.map((p, idx) => {
              const isSelected = selectedPillarIndex === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillarIndex(idx)}
                  className={`p-2.5 rounded-lg border text-left font-mono-code text-xs transition-all cursor-pointer ${
                    isSelected
                      ? darkMode
                        ? 'bg-[#1c1c1c] border-[#00ff88] text-white shadow-sm'
                        : 'bg-emerald-50 border-[#008744] text-[#008744] font-bold'
                      : darkMode
                      ? 'bg-[#0f0f0f] border-[#1e1e1e] text-[#8e8e93] hover:text-white'
                      : 'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b] hover:text-black'
                  }`}
                >
                  <div className="text-[10px] text-[#8e8e93]">0{idx + 1}</div>
                  <div className="truncate font-semibold">{p.shortName}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
