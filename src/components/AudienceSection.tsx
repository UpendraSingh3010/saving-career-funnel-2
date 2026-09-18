import React, { useState } from 'react';
import { GraduationCap, Briefcase, Rocket, TrendingUp, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface AudienceSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<number>(0);

  const personas = [
    {
      code: 'TRACK_01',
      title: 'Graduates & Job Seekers',
      focus: 'Proof-of-Work over Paper Certificates',
      icon: GraduationCap,
      color: '#00ff88',
      headline: 'Show recruiters a live indexed website instead of another PDF certificate.',
      desc: 'Hiring managers ignore theoretical course certificates. Pointing to a live domain ranking in Google top 10 and cited in Google AI Overviews instantly proves your capability and commands higher starting packages.',
      deliverables: [
        'Live case-study portfolio link for resumes and LinkedIn',
        'Demonstrated mastery of Google Search Console telemetry',
        'Direct proof of beating established websites on search',
      ],
    },
    {
      code: 'TRACK_02',
      title: 'Growth & Content Marketers',
      focus: 'Mastering the AI Shift (AEO + GEO)',
      icon: TrendingUp,
      color: '#38bdf8',
      headline: 'Evolve past basic keyword stuffing into entity graphs and LLM citations.',
      desc: 'With Google AI Overviews taking over 58%+ of search results, classic SEO tactics are drying up. Master structured answer capsules and generative citations so your brand is quoted inside Perplexity, ChatGPT, and Gemini.',
      deliverables: [
        'Structured FAQ and definition capsules for AI synthesis',
        'Information gain and semantic entity graph building',
        'Crawl and vector retrieval optimization for AI web bots',
      ],
    },
    {
      code: 'TRACK_03',
      title: 'Freelancers & Agency Owners',
      focus: 'High-Ticket Retainers with Case Studies',
      icon: Briefcase,
      color: '#c084fc',
      headline: 'Package modern search audits to close ₹50k–₹1.5L/month retainers.',
      desc: 'Stop competing on price. Pitch clients a comprehensive SEO + AEO + GEO strategy with documented audit frameworks that solve their traffic decline in the era of zero-click AI answers.',
      deliverables: [
        'Repeatable 5-pillar technical audit framework for client pitches',
        'Proof-of-concept ranking blueprint you can white-label',
        'Competitive gap reports that convince enterprise decision makers',
      ],
    },
    {
      code: 'TRACK_04',
      title: 'Founders & Bootstrappers',
      focus: 'Zero-CAC Inbound Traffic Engines',
      icon: Rocket,
      color: '#f59e0b',
      headline: 'Stop burning burn-rates on Google Ads with compounding organic loops.',
      desc: 'Customer acquisition costs (CAC) on paid ads rise each quarter. Build an enduring inbound search engine for your SaaS, product, or newsletter that delivers qualified users at zero marginal ad spend.',
      deliverables: [
        'High-converting bottom-of-funnel programmatic search hubs',
        'Positioning brand authority inside AI search conversations',
        'Permanent compounding traffic that survives ad budget cuts',
      ],
    },
  ];

  const active = personas[selectedTrack];
  const ActiveIcon = active.icon;

  return (
    <section id="section-audience" className="py-20 sm:py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            WHO ENTERS THE CHALLENGE
          </span>
        </div>

        <div className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Built for those who value execution.
          </h2>
          <p className="text-[#8e8e93] text-sm sm:text-base leading-relaxed">
            Choose your profile below to see how the contest directly maps to your career or business goals.
          </p>
        </div>

        {/* 4 Interactive Profile Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          {personas.map((p, idx) => {
            const isSelected = selectedTrack === idx;
            const Icon = p.icon;
            return (
              <button
                key={p.code}
                onClick={() => setSelectedTrack(idx)}
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? darkMode
                      ? 'bg-[#141414] border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.15)]'
                      : 'bg-emerald-50/70 border-[#008744] shadow-sm'
                    : darkMode
                    ? 'bg-[#0a0a0a] border-[#1c1c1c] hover:border-[#333333] opacity-80 hover:opacity-100'
                    : 'bg-white border-[#e2e8f0] hover:border-[#cbd5e1] opacity-90 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-inherit">
                  <span className="font-mono-code text-[10px] text-[#8e8e93]">
                    {p.code}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded shrink-0"
                    style={{ backgroundColor: `${p.color}15`, color: p.color }}
                  >
                    <Icon size={15} />
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-current truncate">
                    {p.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Collapsible Selected Persona Drawer */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            darkMode
              ? 'bg-[#0e0e0e] border-[#222222] shadow-[0_15px_35px_rgba(0,0,0,0.8)]'
              : 'bg-white border-[#e2e8f0] shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-inherit">
            <div className="flex items-center gap-3">
              <div
                className="p-2.5 rounded-xl"
                style={{ backgroundColor: `${active.color}15`, color: active.color }}
              >
                <ActiveIcon size={22} />
              </div>
              <div>
                <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-[#8e8e93]">
                  {active.code} FOCUS // {active.focus}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-current">
                  {active.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono-code text-xs font-bold uppercase bg-[#00ff88] text-black hover:bg-[#00cc6a] transition-all cursor-pointer self-start sm:self-auto"
            >
              <span>Join This Track</span>
              <ArrowRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="font-display font-bold text-base sm:text-lg text-current">
                "{active.headline}"
              </h4>
              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed">
                {active.desc}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <div className="text-[11px] font-mono-code uppercase text-[#8e8e93] tracking-wider">
                Target Outcomes For You:
              </div>
              {active.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-lg border text-xs font-mono-code flex items-start gap-2 ${
                    darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <CheckCircle2 size={13} className="text-[#00ff88] shrink-0 mt-0.5" />
                  <span className="text-current leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
