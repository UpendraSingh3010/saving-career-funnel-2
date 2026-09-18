import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { SavingCareersLogo } from './SavingCareersLogo';

interface FaqCtaSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const FaqCtaSection: React.FC<FaqCtaSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is ₹999 the complete course fee?',
      a: 'No. ₹999 is the registration fee that secures your seat in the contest/program. The applicable course fee is separate, and if your project successfully qualifies under the ranking criteria, your course fee becomes ₹0!',
    },
    {
      q: 'Do I have to pay the course fee before starting?',
      a: 'No. Participants start the learning and project journey without paying the full course fee upfront. You learn first, build your project, optimize it, and prove execution before any course fee is due.',
    },
    {
      q: 'What happens if my project ranks?',
      a: 'If your project meets the officially published contest ranking criteria during the tracking period, you do not have to pay the course fee. Your course fee is completely waived (Course Fee = ₹0).',
    },
    {
      q: 'What happens if my project does not rank?',
      a: 'If the project does not meet the qualification criteria, you can pay the applicable course fee later within 6 months, according to the program terms. You still permanently retain the practical skills, live domain, optimized pages, and experience gained during the challenge.',
    },
    {
      q: 'What will I learn in this program?',
      a: 'The challenge covers modern organic discovery from first principles: SEO (search engines, keyword intent, technical crawlability), AEO (Answer Engine Optimization, featured snippets, entity structure), and GEO (Generative Engine Optimization, LLM citations in ChatGPT and Perplexity).',
    },
    {
      q: 'Do I need previous SEO experience or an existing website?',
      a: 'The program is designed for beginners as well as experienced practitioners. You do not need an existing live website before registering; during Stage 02 (Build), you will choose, set up, or connect an eligible project with guidance.',
    },
    {
      q: 'Is ranking guaranteed?',
      a: 'No. Organic search rankings depend on multiple dynamic variables (competition, execution, niche selection, search engine updates) and cannot be artificially guaranteed. The contest gives you a disciplined execution framework, and qualifying projects earn the ₹0 course-fee waiver.',
    },
  ];

  return (
    <section id="section-faq" className="py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            Questions &amp; Final Registration Gate
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            Everything you need to know about the registration fee, ranking qualification, and contest terms.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3 mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#111111] border-[#00ff88]/40'
                      : 'bg-white border-[#00994f]/40 shadow-sm'
                    : darkMode
                    ? 'bg-[#0d0d0d] border-[#1f1f1f] hover:border-[#2a2a2a]'
                    : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#cbd5e1]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-current">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#00ff88] text-black rotate-180'
                        : darkMode
                        ? 'bg-[#1a1a1a] text-[#8e8e93]'
                        : 'bg-[#e2e8f0] text-[#64748b]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#8e8e93] leading-relaxed border-t border-[#222222]/30 dark:border-[#222222]/60 font-mono-code">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Conversion Gate Card */}
        <div
          className={`p-8 sm:p-12 lg:p-14 rounded-2xl border text-center relative overflow-hidden ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#1e1e1e] shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
              : 'bg-white border-[#e2e8f0] shadow-md'
          }`}
        >
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
              <span className="font-mono-code text-[11px] text-[#8e8e93] tracking-widest uppercase">
                COMMENCE PROTOCOL // BATCH ENROLLMENT
              </span>
            </div>

            <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Ready to build and rank?{' '}
              <span className={darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}>
                Enter the challenge.
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed max-w-lg mx-auto">
              Lock your seat for ₹999 today. Master modern SEO, AEO, and GEO under Nikhil Sir. Reach your target ranking, and pay ₹0 course fee.
            </p>

            <div className="pt-2 flex justify-center">
              <button
                id="final-cta-btn"
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enter Challenge — ₹999</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="pt-2 text-[11px] font-mono-code text-[#8e8e93]">
              *Registration fee (₹999) and course fee are separate. Clear, pre-agreed ranking criteria apply.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
