import React, { useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { TermsModal } from './TermsModal';

interface Section4OfferProps {
  darkMode: boolean;
}

export const Section4Offer: React.FC<Section4OfferProps> = ({ darkMode }) => {
  const [toggleState, setToggleState] = useState<'rank' | 'norank'>('rank');
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <section
      id="section-offer"
      className="py-20 sm:py-28 border-b border-inherit relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow: [04] OFFER */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
          <span className="text-[#8e8e93] font-semibold tracking-wider">
            [04] OFFER
          </span>
        </div>

        {/* Headline: What if you didn't pay unless it worked? */}
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-10">
          What if you didn't pay unless it worked?
        </h2>

        {/* Interactive Element: Two-State Toggle */}
        <div className="inline-flex p-1.5 rounded-2xl border border-inherit bg-inherit backdrop-blur-md mb-8">
          <button
            onClick={() => setToggleState('rank')}
            className={`px-6 py-3 rounded-xl font-mono-code text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              toggleState === 'rank'
                ? darkMode
                  ? 'bg-[#00ff88] text-black shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                  : 'bg-[#008744] text-white shadow-md'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            If I rank
          </button>
          <button
            onClick={() => setToggleState('norank')}
            className={`px-6 py-3 rounded-xl font-mono-code text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              toggleState === 'norank'
                ? darkMode
                  ? 'bg-white text-black shadow-md'
                  : 'bg-slate-900 text-white shadow-md'
                : 'text-[#8e8e93] hover:text-current'
            }`}
          >
            If I don't rank
          </button>
        </div>

        {/* Swapped Single Line Result Text Below */}
        <div className="min-h-[5rem] flex items-center justify-center mb-6">
          <div
            key={toggleState}
            className={`py-5 px-8 sm:px-12 rounded-2xl border text-base sm:text-xl font-mono-code font-black transition-all duration-300 animate-in fade-in zoom-in-95 ${
              toggleState === 'rank'
                ? darkMode
                  ? 'bg-[#00ff88]/10 border-[#00ff88] text-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,0.15)]'
                  : 'bg-emerald-50 border-[#008744] text-[#008744] shadow-sm'
                : darkMode
                ? 'bg-[#111111] border-[#333333] text-white shadow-sm'
                : 'bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
            }`}
          >
            {toggleState === 'rank' ? (
              <span>If I rank → Course fee = ₹0.</span>
            ) : (
              <span>If I don't rank → Pay later, within 6 months.</span>
            )}
          </div>
        </div>

        {/* Support line (static, small): ₹999 registration is always separate from the course fee. */}
        <p className="text-xs sm:text-sm font-mono-code text-[#8e8e93] mb-6">
          ₹999 registration is always separate from the course fee.
        </p>

        {/* CTA: See how it works (optional, links to full terms — keep off the main conversion path) */}
        <div>
          <button
            onClick={() => setIsTermsOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#8e8e93] hover:text-current underline underline-offset-4 transition-colors cursor-pointer"
          >
            <HelpCircle size={13} />
            <span>See how it works</span>
          </button>
        </div>
      </div>

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        darkMode={darkMode}
      />
    </section>
  );
};
