import React from 'react';
import { GraduationCap, Briefcase, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

interface AudienceSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const personas = [
    {
      code: 'TRACK_01',
      title: 'Graduates & Job Seekers',
      focus: 'Proof-of-Work over Paper Certificates',
      icon: GraduationCap,
      desc: 'Instead of handing recruiters another generic PDF certificate, showcase a live indexable website with verified Google rankings to prove your capability immediately.',
    },
    {
      code: 'TRACK_02',
      title: 'Growth & Content Marketers',
      focus: 'Mastering the AI Shift (AEO + GEO)',
      icon: TrendingUp,
      desc: 'Evolve beyond basic on-page keywords. Learn entity clustering, AI Overviews extraction, and how to get your brand synthesized inside LLMs like Perplexity and ChatGPT.',
    },
    {
      code: 'TRACK_03',
      title: 'Freelancers & Agency Owners',
      focus: 'High-Ticket Retainers with Case Studies',
      icon: Briefcase,
      desc: 'Build repeatable organic audit frameworks you can deploy for clients to charge ₹50k–₹1.5L/mo retainers backed by verifiable SERP growth.',
    },
    {
      code: 'TRACK_04',
      title: 'Founders & Bootstrappers',
      focus: 'Zero-CAC Inbound Traffic Engines',
      icon: Rocket,
      desc: 'Stop burning burn-rates on Google Ads. Build enduring, high-intent organic visibility for your product, SaaS, or newsletter that compounds over time.',
    },
  ];

  return (
    <section id="section-audience" className="py-20 sm:py-28 border-t border-[#222222]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            WHO ENTERS THE CHALLENGE
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Built for those who value execution.
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            If you want passive videos, digital marketing has thousands of them. This challenge is strictly for people who want to ship a real project and see it climb on Google.
          </p>
        </div>

        {/* 4 Clean Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {personas.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.code}
                className={`p-6 rounded-xl border flex flex-col justify-between transition-all ${
                  darkMode
                    ? 'bg-[#0a0a0a] border-[#1c1c1c] hover:border-[#333333]'
                    : 'bg-white border-[#e2e8f0] shadow-sm hover:border-[#cbd5e1]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-inherit">
                    <span className="font-mono-code text-[11px] text-[#8e8e93]">
                      {p.code}
                    </span>
                    <span className="font-mono-code text-[11px] text-[#00ff88] font-bold">
                      {p.focus}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div
                      className={`p-2 rounded-lg ${
                        darkMode ? 'bg-[#00ff88]/10 text-[#00ff88]' : 'bg-emerald-100 text-[#008744]'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-bold text-base">{p.title}</h3>
                  </div>

                  <p className="text-xs text-[#8e8e93] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-inherit">
          <div className="text-xs font-mono-code text-[#8e8e93]">
            No previous technical engineering degree required. Just commitment to execute.
          </div>
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Register For ₹999</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};
