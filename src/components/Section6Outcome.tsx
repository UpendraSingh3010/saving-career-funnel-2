import React, { useState, useEffect } from 'react';

interface Section6OutcomeProps {
  darkMode: boolean;
}

export const Section6Outcome: React.FC<Section6OutcomeProps> = ({ darkMode }) => {
  const [activePhrase, setActivePhrase] = useState<0 | 1>(0);

  // Slow loop cross-fade
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="section-outcome"
      className="py-24 sm:py-32 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow: [06] OUTCOME */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-6 text-xs font-mono-code">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="text-[#8e8e93] font-semibold tracking-wider">
            [06] OUTCOME
          </span>
        </div>

        {/* Headline: "I learned SEO." vs. "I ranked a project." */}
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          <span className="text-[#8e8e93] line-through decoration-[#ff3366]/60">
            &ldquo;I learned SEO.&rdquo;
          </span>{' '}
          <span className="text-xs sm:text-sm font-mono-code text-[#8e8e93] mx-2">
            vs.
          </span>{' '}
          <span className={darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}>
            &ldquo;I ranked a project.&rdquo;
          </span>
        </h2>

        {/* Line: One is a claim. The other is proof. */}
        <p className="text-lg sm:text-xl text-[#8e8e93] font-sans mb-12">
          One is a claim. The other is proof.
        </p>

        {/* Interactive Element (Light Touch): Smooth Cross-Fading Focus Card */}
        <div
          onClick={() => setActivePhrase((prev) => (prev === 0 ? 1 : 0))}
          className={`max-w-md mx-auto p-8 rounded-2xl border transition-all duration-500 cursor-pointer select-none ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#1f1f1f] shadow-2xl'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="h-20 flex flex-col items-center justify-center relative">
            {activePhrase === 0 ? (
              <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
                <div className="text-xl sm:text-2xl font-display font-black text-[#ff3366] tracking-tight">
                  &ldquo;I learned SEO.&rdquo;
                </div>
                <div className="text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mt-2">
                  → The Claim (Certificates &amp; Notes)
                </div>
              </div>
            ) : (
              <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
                <div
                  className={`text-xl sm:text-2xl font-display font-black tracking-tight ${
                    darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                  }`}
                >
                  &ldquo;I ranked a project.&rdquo;
                </div>
                <div className="text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mt-2">
                  → The Proof (Live Search Engine Results)
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-inherit flex items-center justify-center gap-2">
            <span
              className={`w-2 h-2 rounded-full transition-all ${
                activePhrase === 0 ? 'bg-[#ff3366] w-5' : 'bg-[#444444]'
              }`}
            />
            <span
              className={`w-2 h-2 rounded-full transition-all ${
                activePhrase === 1 ? 'bg-[#00ff88] w-5' : 'bg-[#444444]'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
