import React, { useState } from 'react';
import { Minus, Check, ExternalLink, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

interface Section7OutcomeProps {
  darkMode: boolean;
}

export const Section7Outcome: React.FC<Section7OutcomeProps> = ({ darkMode }) => {
  const [selectedProofTab, setSelectedProofTab] = useState<'pitch' | 'interview' | 'serp'>('pitch');

  return (
    <section
      id="section-outcome"
      className="py-24 sm:py-32 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#a855f7]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              OUTCOME
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            A claim vs. proof.
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            The credibility distinction that changes interviews, pitches, and careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-12">
          <div
            className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between ${
              darkMode
                ? 'bg-[#0a0a0a]/60 border-[#1c1c1c]'
                : 'bg-slate-50/70 border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#8e8e93]"></span>
                <span className="font-mono-code text-xs text-[#8e8e93] uppercase tracking-wider font-bold">
                  The Claim
                </span>
              </div>

              <div className="font-display text-2xl sm:text-3xl font-black text-[#8e8e93] mb-4">
                &ldquo;I learned SEO.&rdquo;
              </div>

              <p className="text-sm sm:text-base font-sans text-[#8e8e93] leading-relaxed mb-6">
                Easy to say. Hard to verify. Forgotten in an interview or a client pitch within thirty seconds because anyone can watch tutorial videos and claim competence.
              </p>

              <div
                className={`p-4 rounded-xl border font-mono-code text-xs ${
                  darkMode
                    ? 'bg-[#111] border-[#222] text-[#777]'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}
              >
                Result: Unverifiable assertion · Blends into hundreds of generic resumes
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-inherit text-xs font-mono-code text-[#8e8e93]">
              Passive credentialing
            </div>
          </div>

          <div
            className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#00ff88]/40 shadow-2xl shadow-[#00ff88]/5'
                : 'bg-white border-[#008744]/40 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
                <span
                  className={`font-mono-code text-xs uppercase tracking-wider font-bold ${
                    darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                  }`}
                >
                  The Proof
                </span>
              </div>

              <div
                className={`font-display text-2xl sm:text-3xl font-black mb-4 ${
                  darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                }`}
              >
                &ldquo;I ranked a project using SEO, AEO and GEO.&rdquo;
              </div>

              <p className="text-sm sm:text-base font-sans text-current leading-relaxed mb-6">
                Specific, checkable, and yours to show. A live production URL that demonstrates organic indexing, featured direct snippet extraction, and generative AI search citations.
              </p>

              <div
                className={`p-4 rounded-xl border font-mono-code text-xs ${
                  darkMode
                    ? 'bg-[#00ff88]/10 border-[#00ff88]/30 text-white'
                    : 'bg-emerald-50 border-[#008744]/30 text-emerald-950'
                }`}
              >
                Result: Auditable live evidence · Immediate trust in pitches and portfolio reviews
              </div>
            </div>

            <div
              className={`mt-8 pt-4 border-t border-inherit text-xs font-mono-code ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              Auditable production proof
            </div>
          </div>
        </div>

        <div
          className={`max-w-4xl mx-auto p-6 rounded-3xl border ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#1e1e1e]'
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-inherit">
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] font-bold">
              Where This Difference Matters
            </span>

            <div className="flex items-center gap-2 font-mono-code text-xs">
              <button
                onClick={() => setSelectedProofTab('pitch')}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedProofTab === 'pitch'
                    ? darkMode
                      ? 'bg-[#181818] border-[#00ff88] text-[#00ff88] font-bold'
                      : 'bg-slate-100 border-[#008744] text-[#008744] font-bold'
                    : 'border-transparent text-[#8e8e93]'
                }`}
              >
                Client Pitch
              </button>

              <button
                onClick={() => setSelectedProofTab('interview')}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedProofTab === 'interview'
                    ? darkMode
                      ? 'bg-[#181818] border-[#00ff88] text-[#00ff88] font-bold'
                      : 'bg-slate-100 border-[#008744] text-[#008744] font-bold'
                    : 'border-transparent text-[#8e8e93]'
                }`}
              >
                Job Interview
              </button>

              <button
                onClick={() => setSelectedProofTab('serp')}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedProofTab === 'serp'
                    ? darkMode
                      ? 'bg-[#181818] border-[#00ff88] text-[#00ff88] font-bold'
                      : 'bg-slate-100 border-[#008744] text-[#008744] font-bold'
                    : 'border-transparent text-[#8e8e93]'
                }`}
              >
                Venture Launch
              </button>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-current leading-relaxed">
            {selectedProofTab === 'pitch' &&
              '“Instead of promising search traffic theoretically, show your prospective client the exact ranking asset you built during this challenge. Client retention jumps when you prove execution upfront.”'}
            {selectedProofTab === 'interview' &&
              '“Hiring managers are exhausted by certificates of completion. When you open a live browser tab and demonstrate rank #1 in Search Console and citations in Perplexity, you skip the junior queue.”'}
            {selectedProofTab === 'serp' &&
              '“For founders building products, organic search is the only sustainable customer acquisition channel that compounds without ad spend. You leave the challenge with your actual venture already indexed.”'}
          </p>
        </div>
      </div>
    </section>
  );
};
