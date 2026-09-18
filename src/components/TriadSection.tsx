import React, { useState } from 'react';
import { Search, Bot, MessageSquareText, CheckCircle2, X, ChevronDown, ChevronUp } from 'lucide-react';
import { ZeroClickChart } from './ZeroClickChart';

interface TriadSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const TriadSection: React.FC<TriadSectionProps> = ({
  darkMode,
}) => {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const pillars = [
    {
      code: '01_SEO',
      title: 'SEO',
      name: 'Search Engine Optimization',
      target: 'Google Organic, Bing, DuckDuckGo',
      icon: Search,
      color: '#00ff88',
      summary:
        'Dominate traditional algorithmic search. Build high-performance site architecture, semantic keyword graphs, and topical authority that Google trusts.',
      deliverables: [
        'Search Intent & Competitor Gap Analysis',
        'Topical Authority & Internal Link Graphs',
        'Technical SEO, Crawl Budget & Schema.org',
      ],
    },
    {
      code: '02_AEO',
      title: 'AEO',
      name: 'Answer Engine Optimization',
      target: 'Google AI Overviews, Featured Snippets',
      icon: MessageSquareText,
      color: '#38bdf8',
      summary:
        'Capture zero-click searches. Structure content so search algorithms extract your direct answers as the primary solution in AI Overviews and answer boxes.',
      deliverables: [
        'Query Clustering & Direct-Answer Formatting',
        'Entity Graphs & Knowledge Panel Relevance',
        'Structured Microdata & Voice Search Ready',
      ],
    },
    {
      code: '03_GEO',
      title: 'GEO',
      name: 'Generative Engine Optimization',
      target: 'ChatGPT Search, Perplexity, Claude, Gemini',
      icon: Bot,
      color: '#c084fc',
      summary:
        'Get cited by AI models. Position your brand and data so Large Language Models synthesize, quote, and reference your website during conversational search.',
      deliverables: [
        'Modular High-Citability Content Layouts',
        'Original Research & Entity Authority Nodes',
        'AI Retrieval-Augmented Placement Strategy',
      ],
    },
  ];

  return (
    <section id="section-triad" className="py-20 sm:py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow and Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            THE SEARCH PARADIGM // 2025–2026
          </span>
        </div>

        <div className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Search is no longer just 10 blue links.
          </h2>
          <p className="text-[#8e8e93] text-sm sm:text-base leading-relaxed">
            Modern users find answers through traditional search, AI summary snapshots, and conversational LLMs.
            This challenge trains you to rank across all three organic surfaces simultaneously.
          </p>
        </div>

        {/* 3 Pillars Clean Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isExpanded = expandedPillar === p.code;
            return (
              <div
                key={p.code}
                className={`p-5 sm:p-6 rounded-xl border flex flex-col justify-between transition-all ${
                  darkMode
                    ? 'bg-[#0a0a0a] border-[#1c1c1c] hover:border-[#333333]'
                    : 'bg-white border-[#e2e8f0] shadow-sm hover:border-[#cbd5e1]'
                }`}
              >
                <div>
                  {/* Top identifier */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-inherit">
                    <span className="font-mono-code text-[11px] text-[#8e8e93] uppercase tracking-wider">
                      {p.code}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: p.color }}
                    />
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: `${p.color}15`,
                        color: p.color,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">{p.title}</h3>
                      <div className="text-[11px] text-[#8e8e93] font-mono-code">{p.name}</div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-[#8e8e93] leading-relaxed mb-4">
                    {p.summary}
                  </p>

                  {/* Collapsible Key Competencies Accordion Drawer */}
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedPillar(isExpanded ? null : p.code)}
                      className="w-full flex items-center justify-between py-1.5 px-2.5 rounded border border-inherit font-mono-code text-[11px] text-[#8e8e93] hover:text-current transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Key Competencies' : 'Inspect 3 Competencies'}</span>
                      {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </button>

                    {isExpanded && (
                      <div className="space-y-1.5 pt-2 animate-in fade-in duration-150">
                        {p.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-2 rounded border text-[11px] font-mono-code flex items-center gap-2 ${
                              darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
                            <span className="text-current">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Target Surface Tag */}
                <div
                  className={`pt-2.5 border-t text-[11px] font-mono-code text-[#8e8e93] border-inherit`}
                >
                  <span className="text-current font-semibold">Target:</span> {p.target}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Industry Benchmark Chart: The Zero-Click Shift */}
        <div className="mb-12">
          <ZeroClickChart darkMode={darkMode} />
        </div>

        {/* Clean Shift Contrast Banner: Old vs New */}
        <div
          className={`p-5 sm:p-7 rounded-xl border ${
            darkMode
              ? 'bg-[#0f0f0f] border-[#1e1e1e]'
              : 'bg-[#f8fafc] border-[#e2e8f0]'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* Old Way */}
            <div className="space-y-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-5 border-inherit">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff3366] font-bold uppercase tracking-wider">
                <X size={14} />
                <span>The Outdated Way (Passive Courses)</span>
              </div>
              <ul className="text-xs text-[#8e8e93] space-y-1 pt-1 font-mono-code">
                <li>• 40+ hours recorded videos with zero accountability</li>
                <li>• Dummy subdomains nobody ever searches for</li>
                <li>• PDF certificates that prove zero ranking ability</li>
              </ul>
            </div>

            {/* The Saving.Careers Protocol */}
            <div className="space-y-2">
              <div className={`flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}>
                <CheckCircle2 size={14} />
                <span>The Saving.Careers Protocol</span>
              </div>
              <ul className="text-xs text-[#8e8e93] space-y-1 pt-1 font-mono-code">
                <li>• Real, live indexable domain competing for genuine searches</li>
                <li>• Live telemetry: Search Console &amp; AI Overview citations</li>
                <li>• Reach target ranking position → Course fee waived to ₹0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
