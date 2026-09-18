import React, { useState } from 'react';
import { Award, CheckCircle2, Globe, Users, TrendingUp, Sparkles, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface MentorSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [activeDirective, setActiveDirective] = useState<number>(0);

  const directives = [
    {
      num: '01',
      title: 'Why am I doing it?',
      badge: 'MECHANICS',
      summary: 'Understand crawler and LLM entity networks to make informed architectural choices.',
      details:
        'Instead of blindly copying checklists, understand how search crawlers and AI models interpret entity networks, parse Schema JSON-LD triples, and allocate retrieval weights.',
    },
    {
      num: '02',
      title: 'How do I know it worked?',
      badge: 'TELEMETRY',
      summary: 'Read Search Console, indexation logs, and AI citation graphs like a growth engineer.',
      details:
        'Move beyond vanity metrics. Learn to read Google Search Console performance curves, crawl request status, and AI citation references with mathematical precision.',
    },
    {
      num: '03',
      title: 'What should I optimize next?',
      badge: 'ITERATION',
      summary: 'Diagnose ranking fluctuations, competitor moves, and content decay ruthlessly.',
      details:
        'When a competitor outranks you or a keyword fluctuates, systematically diagnose whether the gap is structural schema, information gain, answer extractability, or topical authority.',
    },
    {
      num: '04',
      title: 'Real Scaled Experience',
      badge: '20+ YRS',
      summary: 'Two decades navigating every major Google update through the generative AI shift.',
      details:
        'Benefit from 20+ years of battle-tested enterprise growth experience. Having advised 500+ startups and scaled ventures, Nikhil Sir cuts through speculative noise.',
    },
  ];

  return (
    <section id="section-mentor" className="py-20 sm:py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            Contest Mentor &amp; Lead Strategist
          </span>
        </div>

        <div className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Learn With <span className={darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}>Nikhil Sir</span>.
          </h2>
          <p className="text-[#8e8e93] text-sm sm:text-base leading-relaxed">
            Understand underlying algorithmic mechanics directly from an industry veteran with 20+ years of scaled experience.
          </p>
        </div>

        {/* Mentor Bio & Compressed Directives Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            darkMode ? 'bg-[#0a0a0a] border-[#1c1c1c] shadow-xl' : 'bg-white border-[#e2e8f0] shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mentor Visual Badge / Photo */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-[#1c1c1c] via-[#0f0f0f] to-[#00ff88]/25 p-1 border border-[#00ff88]/40 flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(0,255,136,0.15)]">
                  <img
                    src="/nikhil-sir-photo.jpeg"
                    alt="Nikhil Sharma - Contest Mentor & Lead Strategist"
                    className="w-full h-full object-cover object-center rounded-xl"
                  />
                </div>

                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9.5px] font-mono-code font-bold bg-[#00ff88] text-black shadow-md whitespace-nowrap tracking-wider uppercase">
                  20+ YRS EXPERIENCE
                </div>
              </div>

              <div className="font-display font-bold text-xl">Nikhil Sharma</div>
              <div
                className={`text-xs font-mono-code mt-0.5 font-semibold ${
                  darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                }`}
              >
                Digital Growth &amp; Organic Search Strategist
              </div>
              <p className="text-xs text-[#8e8e93] mt-1.5 max-w-xs">
                Founder, NS Transform 2026. Advised 500+ startups &amp; enterprises on organic acquisition and business ROI.
              </p>

              <a
                href="https://www.nikhilsharma.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 inline-flex items-center gap-1.5 text-xs font-mono-code text-[#8e8e93] transition-colors ${
                  darkMode ? 'hover:text-[#00ff88]' : 'hover:text-[#008744]'
                }`}
              >
                <span>nikhilsharma.com</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Mentor Directives with Interactive Collapsing Cards */}
            <div
              className={`lg:col-span-8 space-y-4 lg:border-l lg:pl-8 ${
                darkMode ? 'lg:border-[#222222]' : 'lg:border-[#e2e8f0]'
              }`}
            >
              <div>
                <span
                  className={`font-mono-code text-[11px] uppercase tracking-wider font-bold block mb-1 ${
                    darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                  }`}
                >
                  The Mentorship Philosophy
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-current">
                  "We don't teach you just what to do. We teach you why you are doing it."
                </h3>
              </div>

              {/* Collapsible Directive Accordion Boxes */}
              <div className="space-y-2">
                {directives.map((d, idx) => {
                  const isOpen = activeDirective === idx;
                  return (
                    <div
                      key={d.num}
                      className={`rounded-xl border transition-all overflow-hidden ${
                        isOpen
                          ? darkMode
                            ? 'bg-[#141414] border-[#00ff88]/50 shadow-sm'
                            : 'bg-emerald-50/60 border-[#008744]/40 shadow-xs'
                          : darkMode
                          ? 'bg-[#0d0d0d] border-[#1f1f1f] hover:border-[#2a2a2a]'
                          : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#cbd5e1]'
                      }`}
                    >
                      <button
                        onClick={() => setActiveDirective(isOpen ? -1 : idx)}
                        className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`font-mono-code text-xs font-bold ${
                              isOpen
                                ? darkMode
                                  ? 'text-[#00ff88]'
                                  : 'text-[#008744]'
                                : 'text-[#8e8e93]'
                            }`}
                          >
                            [{d.num}]
                          </span>
                          <span className="font-display font-bold text-sm text-current">
                            "{d.title}"
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-inherit border border-inherit text-[#8e8e93]">
                            {d.badge}
                          </span>
                          {isOpen ? (
                            <ChevronUp size={16} className="text-[#8e8e93]" />
                          ) : (
                            <ChevronDown size={16} className="text-[#8e8e93]" />
                          )}
                        </div>
                      </button>

                      {/* Collapsible Content */}
                      {isOpen && (
                        <div className="px-4 pb-3.5 pt-1 border-t border-inherit text-xs sm:text-sm text-[#8e8e93] leading-relaxed animate-in fade-in duration-200">
                          <p>{d.details}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action row */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs font-mono-code text-[#8e8e93]">
                  Direct access in live teardowns &amp; contest audits
                </div>
                <button
                  onClick={onOpenRegister}
                  className="px-4 py-2 rounded-lg text-xs font-mono-code font-bold tracking-wider uppercase bg-[#00ff88] text-black hover:bg-[#00cc6a] cursor-pointer self-start sm:self-auto"
                >
                  Join Nikhil Sir’s Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
