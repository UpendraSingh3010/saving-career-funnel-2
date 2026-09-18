import React, { useState } from 'react';
import { Search, Sparkles, Bot, Globe, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface HeroRankSimulatorProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

type SurfaceType = 'seo' | 'aeo' | 'geo';

export const HeroRankSimulator: React.FC<HeroRankSimulatorProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [activeSurface, setActiveSurface] = useState<SurfaceType>('aeo');
  const [customDomain, setCustomDomain] = useState<string>('myproject.com');
  const [selectedTopic, setSelectedTopic] = useState<string>('ai-workflow');

  const topics = [
    {
      id: 'ai-workflow',
      label: 'AI Automation',
      query: 'how to build autonomous ai workflows without code',
      pageTitle: 'Autonomous AI Workflows Architecture Guide (2026 Benchmark)',
      slug: 'autonomous-ai-workflows',
      capsuleAnswer:
        'To build autonomous AI workflows without code, connect LLM inference APIs with event-driven vector webhooks. Structure state machines using deterministic schema validation to eliminate hallucinations.',
      citationQuote:
        'According to field benchmarks by [myproject.com], deterministic schema routing reduces workflow hallucination rates from 23% down to 1.4%.',
    },
    {
      id: 'fintech-saas',
      label: 'Fintech Analytics',
      query: 'open banking api latency comparison benchmarks',
      pageTitle: 'Global Open Banking API Latency & Uptime Index',
      slug: 'open-banking-api-benchmarks',
      capsuleAnswer:
        'The lowest latency open banking gateways currently average 142ms response times with 99.98% uptime. Regional compliance requires ISO 20022 message formatting with real-time mTLS verification.',
      citationQuote:
        'Comparative latency telemetry published by [myproject.com] indicates WebSocket-based open banking endpoints deliver 3.2x faster settlement reconciliation.',
    },
    {
      id: 'climate-tech',
      label: 'CleanTech',
      query: 'carbon accounting methodology for cloud servers',
      pageTitle: 'Cloud Datacenter Carbon Accounting & PUE Calculator',
      slug: 'cloud-carbon-accounting',
      capsuleAnswer:
        'Datacenter carbon accounting calculates Scope 2 & 3 emissions by multiplying regional grid carbon intensity (gCO2eq/kWh) by server wattage draw and cooling Power Usage Effectiveness (PUE).',
      citationQuote:
        'Empirical server wattage telemetry from [myproject.com] highlights dynamic voltage scaling as the single largest contributor to Scope 2 data center reductions.',
    },
  ];

  const currentTopic = topics.find((t) => t.id === selectedTopic) || topics[0];
  const cleanDomain = customDomain.trim().replace(/^https?:\/\//, '') || 'myproject.com';

  return (
    <div
      className={`rounded-2xl border transition-all overflow-hidden ${
        darkMode
          ? 'bg-[#0a0a0a] border-[#1e1e1e] shadow-[0_20px_50px_rgba(0,0,0,0.85)]'
          : 'bg-white border-[#e2e8f0] shadow-xl'
      }`}
    >
      {/* Top Interactive Simulator Control Bar */}
      <div
        className={`px-5 py-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-3 ${
          darkMode ? 'bg-[#0f0f0f] border-[#1e1e1e]' : 'bg-[#f8fafc] border-[#e2e8f0]'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-current">
            LIVE RANK PREVIEWER // YOUR CONTEST ASSET
          </span>
        </div>

        {/* Surface Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg border font-mono-code text-xs border-inherit bg-inherit self-start md:self-auto">
          <button
            onClick={() => setActiveSurface('seo')}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all cursor-pointer ${
              activeSurface === 'seo'
                ? darkMode
                  ? 'bg-[#1e1e1e] text-[#00ff88] font-bold shadow-sm'
                  : 'bg-emerald-50 text-[#008744] font-bold shadow-sm'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            <Search size={13} />
            <span>01. SEO (SERP #1)</span>
          </button>

          <button
            onClick={() => setActiveSurface('aeo')}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all cursor-pointer ${
              activeSurface === 'aeo'
                ? darkMode
                  ? 'bg-[#1e1e1e] text-[#38bdf8] font-bold shadow-sm'
                  : 'bg-sky-50 text-sky-700 font-bold shadow-sm'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            <Sparkles size={13} />
            <span>02. AEO (AI Overview)</span>
          </button>

          <button
            onClick={() => setActiveSurface('geo')}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all cursor-pointer ${
              activeSurface === 'geo'
                ? darkMode
                  ? 'bg-[#1e1e1e] text-[#c084fc] font-bold shadow-sm'
                  : 'bg-purple-50 text-purple-700 font-bold shadow-sm'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            <Bot size={13} />
            <span>03. GEO (ChatGPT/Perplexity)</span>
          </button>
        </div>
      </div>

      {/* Simulator Inputs & Domain Customizer */}
      <div
        className={`px-5 py-3 border-b flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs font-mono-code ${
          darkMode ? 'bg-[#121212] border-[#1e1e1e]' : 'bg-[#f1f5f9] border-[#e2e8f0]'
        }`}
      >
        {/* Domain name input */}
        <div className="flex items-center gap-2">
          <span className="text-[#8e8e93] whitespace-nowrap">Your Project Domain:</span>
          <div className="flex items-center gap-1 bg-inherit border border-inherit rounded px-2 py-1 focus-within:border-[#00ff88] transition-all">
            <Globe size={12} className="text-[#00ff88]" />
            <span className="text-[#8e8e93]">https://</span>
            <input
              type="text"
              value={customDomain}
              onChange={(e) => setCustomDomain(e.target.value)}
              placeholder="myproject.com"
              className="bg-transparent text-current font-bold outline-none w-32 sm:w-36 font-mono-code text-xs"
            />
          </div>
        </div>

        {/* Topic Selector Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-[#8e8e93] whitespace-nowrap mr-1">Sample Niche:</span>
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTopic(t.id)}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer whitespace-nowrap ${
                selectedTopic === t.id
                  ? darkMode
                    ? 'bg-[#222222] text-white font-bold border border-[#00ff88]/50'
                    : 'bg-white text-black font-bold border border-slate-300 shadow-xs'
                  : 'text-[#8e8e93] hover:text-current border border-transparent'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Surface Preview Stage */}
      <div className="p-5 sm:p-8">
        {/* Simulated Search Bar */}
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-full border mb-6 text-sm ${
            darkMode
              ? 'bg-[#141414] border-[#222222] text-[#8e8e93]'
              : 'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b]'
          }`}
        >
          <Search size={16} className="text-[#8e8e93] shrink-0" />
          <span className="text-current font-medium truncate">{currentTopic.query}</span>
        </div>

        {/* TAB 1: Classic Google Organic SERP (#1 Position) */}
        {activeSurface === 'seo' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div
              className={`p-5 rounded-xl border relative ${
                darkMode
                  ? 'bg-[#111111] border-[#00ff88]/40 shadow-[0_0_25px_rgba(0,255,136,0.08)]'
                  : 'bg-white border-[#008744]/40 shadow-sm'
              }`}
            >
              {/* Rank Badge */}
              <div className="flex items-center justify-between gap-2 mb-2 font-mono-code text-xs">
                <div className="flex items-center gap-1.5 text-[#00ff88] font-bold">
                  <span className="px-2 py-0.5 rounded bg-[#00ff88]/15 border border-[#00ff88]/30">
                    POSITION #1 ORGANIC
                  </span>
                  <span className="text-[#8e8e93]">• Google Search Result</span>
                </div>
                <span className="text-[10px] text-[#8e8e93] uppercase">Topical Authority High</span>
              </div>

              {/* Breadcrumb URL */}
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#8e8e93] mb-1">
                <div className="w-4 h-4 rounded-full bg-[#00ff88]/20 flex items-center justify-center text-[9px] font-bold text-[#00ff88]">
                  {cleanDomain.charAt(0).toUpperCase()}
                </div>
                <span className="text-current font-semibold">{cleanDomain}</span>
                <span>›</span>
                <span>guides</span>
                <span>›</span>
                <span className="text-[#8e8e93]">{currentTopic.slug}</span>
              </div>

              {/* SERP Blue Title */}
              <h4 className="text-lg sm:text-xl font-medium text-[#38bdf8] hover:underline cursor-pointer mb-2 leading-snug">
                {currentTopic.pageTitle}
              </h4>

              {/* Meta Description Snippet */}
              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-3">
                <span className="font-mono-code text-current font-semibold">
                  Verified 2026 Architecture:{' '}
                </span>
                {currentTopic.capsuleAnswer}
              </p>

              {/* Rich Schema Snippet Tags */}
              <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] text-[#8e8e93]">
                <span className="px-2 py-0.5 rounded bg-[#222222]/50 border border-inherit">
                  ✓ Validated JSON-LD Schema
                </span>
                <span className="px-2 py-0.5 rounded bg-[#222222]/50 border border-inherit">
                  ★ 4.9 (128 reviews)
                </span>
                <span className="px-2 py-0.5 rounded bg-[#222222]/50 border border-inherit">
                  Updated Today
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Google AI Overview (AEO Extract) */}
        {activeSurface === 'aeo' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div
              className={`p-6 rounded-xl border relative ${
                darkMode
                  ? 'bg-gradient-to-b from-[#131b26] to-[#0f141d] border-[#38bdf8]/40 shadow-[0_0_30px_rgba(56,189,248,0.12)]'
                  : 'bg-gradient-to-b from-sky-50 to-white border-sky-300 shadow-sm'
              }`}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#38bdf8] animate-pulse" />
                  <span className="font-mono-code text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
                    Google AI Overview // Answer Engine Extraction
                  </span>
                </div>
                <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30 font-bold">
                  PRIMARY SOURCE
                </span>
              </div>

              {/* Direct Synthesized Answer Capsule */}
              <p className="text-sm sm:text-base text-current leading-relaxed mb-4">
                {currentTopic.capsuleAnswer}
              </p>

              {/* Extracted Citation Source Card */}
              <div
                className={`p-3 rounded-lg border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-[#0a0a0a] border-[#222222]' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-6 h-6 rounded bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold text-current truncate">
                      {currentTopic.pageTitle}
                    </div>
                    <div className="text-[11px] font-mono-code text-[#38bdf8] truncate">
                      https://{cleanDomain}/{currentTopic.slug}
                    </div>
                  </div>
                </div>

                <span className="shrink-0 font-mono-code text-[10px] px-2 py-1 rounded bg-[#00ff88]/15 text-[#00ff88] font-bold border border-[#00ff88]/30">
                  CITED
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Generative AI Citation (GEO in ChatGPT & Perplexity) */}
        {activeSurface === 'geo' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div
              className={`p-6 rounded-xl border relative ${
                darkMode
                  ? 'bg-[#100f18] border-[#c084fc]/40 shadow-[0_0_30px_rgba(192,132,252,0.12)]'
                  : 'bg-purple-50/50 border-purple-300 shadow-sm'
              }`}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Bot size={16} className="text-[#c084fc]" />
                  <span className="font-mono-code text-xs font-bold text-[#c084fc] uppercase tracking-wider">
                    Conversational LLM Search // Perplexity &amp; ChatGPT Search
                  </span>
                </div>
                <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-[#c084fc]/15 text-[#c084fc] border border-[#c084fc]/30 font-bold">
                  VECTOR RETRIEVAL
                </span>
              </div>

              {/* Synthesized Response quoting user's site */}
              <p className="text-sm sm:text-base text-current leading-relaxed mb-4">
                {currentTopic.citationQuote.replace('[myproject.com]', cleanDomain)}
              </p>

              {/* Perplexity/ChatGPT Citation Footnote Pill */}
              <div className="flex items-center gap-2">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono-code transition-all cursor-pointer hover:border-[#c084fc] ${
                    darkMode ? 'bg-[#161424] border-[#2c2742]' : 'bg-white border-purple-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-[#c084fc] text-black font-bold flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span className="font-bold text-current">{cleanDomain}</span>
                  <span className="text-[#8e8e93]">/ {currentTopic.slug}</span>
                  <ExternalLink size={11} className="text-[#c084fc]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Contest Outcome Status Bar */}
        <div
          className={`mt-6 p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
            darkMode ? 'bg-[#0f0f0f] border-[#1e1e1e]' : 'bg-[#f8fafc] border-[#e2e8f0]'
          }`}
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-[#00ff88]/15 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="font-mono-code text-xs font-bold uppercase text-current">
                CONTEST VERIFICATION STATUS: 100% QUALIFIED
              </div>
              <div className="text-xs text-[#8e8e93]">
                Achieving this ranking on your live project waives the entire course fee.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Lock Seat For ₹999</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
