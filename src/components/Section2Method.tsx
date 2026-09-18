import React, { useState } from 'react';
import { Search, Bot, MessageSquareText, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface Section2MethodProps {
  darkMode: boolean;
}

type MethodTab = 'seo' | 'aeo' | 'geo';

export const Section2Method: React.FC<Section2MethodProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<MethodTab>('seo');

  const methods = {
    seo: {
      id: 'seo',
      code: 'SEO',
      name: 'Search Engine Optimization',
      tagline: 'Get discovered through search.',
      color: '#00ff88',
      summary:
        "Learn how to improve your website's visibility on traditional search engines through better content, structure, keywords, technical optimization and authority.",
      topics: [
        'Keyword & search-intent research',
        'On-page SEO & content optimization',
        'Website structure & internal linking',
        'Technical SEO fundamentals',
        'Competitor research & authority signals',
        'Search performance tracking & ranking analysis',
      ],
    },
    aeo: {
      id: 'aeo',
      code: 'AEO',
      name: 'Answer Engine Optimization',
      tagline: 'Become easier to understand and surface as an answer.',
      color: '#38bdf8',
      summary:
        'Search is increasingly becoming answer-driven. Learn how to structure your content so that search engines and answer-based platforms can clearly understand, extract and present your answers.',
      topics: [
        'Question-based search intent',
        'Structured content & direct-answer formatting',
        'Entity and topical relevance',
        'FAQ optimization & content clarity',
        'Semantic coverage & rich snippet opportunities',
      ],
    },
    geo: {
      id: 'geo',
      code: 'GEO',
      name: 'Generative Engine Optimization',
      tagline: 'Prepare your content for AI-driven discovery environments.',
      color: '#a855f7',
      summary:
        'AI-powered discovery is changing how people find information. Learn the fundamentals of positioning your content to be understood, referenced and surfaced within generative search experiences.',
      topics: [
        'AI-friendly content structure & topical depth',
        'Entity clarity & authority signals',
        'Citability & original insights',
        'Trust-building content',
        'Brand and topic associations in LLMs',
      ],
    },
  };

  const current = methods[activeTab];

  return (
    <section
      id="section-method"
      className="py-20 sm:py-28 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              METHOD
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-4">
            This Is Not Just Another SEO Course
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans leading-relaxed">
            Watching lessons is easy. Applying what you learn to a real website, solving ranking problems, and generating measurable visibility is where actual learning happens.
          </p>
        </div>

        {/* Clean Interactive Tri-Search Diagram & Explorer */}
        <div
          className={`p-6 sm:p-10 rounded-3xl border shadow-xl relative transition-all ${
            darkMode ? 'bg-[#0a0a0a] border-[#1e1e1e]' : 'bg-white border-slate-200'
          }`}
        >
          {/* Top Tri-Search Spectrum Diagram Tabs */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 rounded-2xl border border-inherit mb-8 font-mono-code text-xs">
            <button
              onClick={() => setActiveTab('seo')}
              className={`p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'seo'
                  ? darkMode
                    ? 'bg-[#141414] text-[#00ff88] border border-[#00ff88]/40 shadow-sm'
                    : 'bg-emerald-50 text-[#008744] border border-[#008744]/40 shadow-sm'
                  : 'text-[#8e8e93] hover:text-current'
              }`}
            >
              <Search size={16} />
              <div className="text-center sm:text-left">
                <span className="font-black text-sm block">SEO (33.3%)</span>
                <span className="text-[10px] hidden sm:block opacity-75">Search Engines</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('aeo')}
              className={`p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'aeo'
                  ? darkMode
                    ? 'bg-[#141414] text-[#38bdf8] border border-[#38bdf8]/40 shadow-sm'
                    : 'bg-sky-50 text-[#0284c7] border border-[#0284c7]/40 shadow-sm'
                  : 'text-[#8e8e93] hover:text-current'
              }`}
            >
              <MessageSquareText size={16} />
              <div className="text-center sm:text-left">
                <span className="font-black text-sm block">AEO (33.3%)</span>
                <span className="text-[10px] hidden sm:block opacity-75">Answer Platforms</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('geo')}
              className={`p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'geo'
                  ? darkMode
                    ? 'bg-[#141414] text-[#a855f7] border border-[#a855f7]/40 shadow-sm'
                    : 'bg-purple-50 text-purple-700 border border-purple-300 shadow-sm'
                  : 'text-[#8e8e93] hover:text-current'
              }`}
            >
              <Bot size={16} />
              <div className="text-center sm:text-left">
                <span className="font-black text-sm block">GEO (33.3%)</span>
                <span className="text-[10px] hidden sm:block opacity-75">Generative AI</span>
              </div>
            </button>
          </div>

          {/* Visual Pie / Donut Breakdown Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8 pb-8 border-b border-inherit">
            {/* Left Column (5 cols): Dynamic SVG Donut Diagram */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Segment 1: SEO (0 - 33.3%) -> dasharray: 33.33 100 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#00ff88"
                    strokeWidth="12"
                    strokeDasharray="27.9 55.8"
                    strokeDashoffset="0"
                    className={`transition-all duration-500 cursor-pointer ${
                      activeTab === 'seo' ? 'opacity-100 stroke-[15]' : 'opacity-40 hover:opacity-80'
                    }`}
                    onClick={() => setActiveTab('seo')}
                  />
                  {/* Segment 2: AEO (33.3% - 66.6%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#38bdf8"
                    strokeWidth="12"
                    strokeDasharray="27.9 55.8"
                    strokeDashoffset="-27.9"
                    className={`transition-all duration-500 cursor-pointer ${
                      activeTab === 'aeo' ? 'opacity-100 stroke-[15]' : 'opacity-40 hover:opacity-80'
                    }`}
                    onClick={() => setActiveTab('aeo')}
                  />
                  {/* Segment 3: GEO (66.6% - 100%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#a855f7"
                    strokeWidth="12"
                    strokeDasharray="27.9 55.8"
                    strokeDashoffset="-55.8"
                    className={`transition-all duration-500 cursor-pointer ${
                      activeTab === 'geo' ? 'opacity-100 stroke-[15]' : 'opacity-40 hover:opacity-80'
                    }`}
                    onClick={() => setActiveTab('geo')}
                  />
                </svg>

                {/* Donut Center Data Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-mono-code text-xs text-[#8e8e93] uppercase">Focus</span>
                  <span className="font-mono-code text-xl sm:text-2xl font-black text-current">
                    {current.code}
                  </span>
                  <span className="text-[10px] font-mono-code text-[#8e8e93]">1/3 Spectrum</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 font-mono-code text-xs">
                <span className="flex items-center gap-1.5 text-[#8e8e93]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88]"></span> SEO
                </span>
                <span className="flex items-center gap-1.5 text-[#8e8e93]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]"></span> AEO
                </span>
                <span className="flex items-center gap-1.5 text-[#8e8e93]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></span> GEO
                </span>
              </div>
            </div>

            {/* Right Column (7 cols): Selected Focus Details */}
            <div className="md:col-span-7 text-left">
              <div className="inline-block font-mono-code text-xs font-bold px-3 py-1 rounded-lg mb-2 bg-inherit border border-inherit text-[#8e8e93]">
                {current.tagline}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black mb-3 text-current">
                {current.name}
              </h3>

              <p className="text-sm sm:text-base font-sans text-[#8e8e93] leading-relaxed mb-6">
                {current.summary}
              </p>

              {/* Specific Curriculum Bullets */}
              <div className="space-y-2">
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] block mb-2 font-bold">
                  What You Apply To Your Project:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border text-xs font-sans flex items-start gap-2 ${
                        darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#00ff88]" />
                      <span className="text-current font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Mindset Shift Banner: Passive vs Active */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm font-sans flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <span className="text-[#8e8e93] block text-xs font-mono-code uppercase tracking-wider mb-0.5">
                The Learning Shift
              </span>
              <span className="font-medium text-current">
                Instead of asking <em>“Did I finish the module?”</em>, you start asking <em>“Did this improve my project? Did visibility increase?”</em>
              </span>
            </div>

            <div className="shrink-0 px-3 py-1.5 rounded-lg border border-inherit font-mono-code text-xs text-[#00ff88] font-bold">
              Active Execution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
