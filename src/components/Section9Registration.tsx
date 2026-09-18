import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Section9RegistrationProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const Section9Registration: React.FC<Section9RegistrationProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  return (
    <section
      id="section-registration"
      className="py-24 sm:py-32 relative overflow-hidden text-center"
    >
      {/* Background ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? `radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.08) 0%, transparent 70%)`
            : `radial-gradient(circle at 50% 50%, rgba(0, 204, 106, 0.05) 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-6 text-xs font-mono-code bg-inherit">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
            REGISTRATION
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight mb-6">
          Are You Ready to Test Your Skills?
        </h2>

        {/* Clean Contrast Box */}
        <div className="max-w-2xl mx-auto mb-8 text-base sm:text-lg text-[#8e8e93] font-sans leading-relaxed">
          <p className="mb-4">
            You can keep watching tutorials. Or you can build something. Optimize it. Measure it. Improve it. And attempt to rank it.
          </p>
          <div className="font-mono-code text-sm font-bold text-current">
            LEARN → BUILD → OPTIMIZE → RANK
          </div>
        </div>

        {/* Action Card */}
        <div
          className={`max-w-lg mx-auto p-6 sm:p-8 rounded-3xl border shadow-2xl mb-8 ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#00ff88]/40 ring-1 ring-[#00ff88]/20'
              : 'bg-white border-[#008744]/40 ring-1 ring-[#008744]/20'
          }`}
        >
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-inherit">
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93]">
              Contest Registration
            </span>
            <span
              className={`font-mono-code text-2xl sm:text-3xl font-black ${
                darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
              }`}
            >
              ₹999
            </span>
          </div>

          <div className="space-y-2 text-xs font-sans text-[#8e8e93] text-left mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#00ff88] shrink-0" />
              <span>Full learning access to SEO, AEO &amp; GEO with Nikhil Sir</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#00ff88] shrink-0" />
              <span>Apply directly to your real live project</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#00ff88] shrink-0" />
              <span>Project qualifies under criteria? <strong>Course fee = ₹0</strong></span>
            </div>
          </div>

          <button
            onClick={onOpenRegister}
            className="w-full py-4 rounded-xl font-mono-code text-sm font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer magnetic"
          >
            <span>Join the Saving.Careers Challenge</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <p className="text-xs font-mono-code text-[#8e8e93] max-w-xl mx-auto leading-normal">
          ₹999 Registration Fee. Course fee is separate from the registration fee. Ranking qualification, payment timelines and all ₹0 course-fee benefits are subject to the official contest rules and program terms.
        </p>
      </div>
    </section>
  );
};
