import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface Section8FaqProps {
  darkMode: boolean;
}

export const Section8Faq: React.FC<Section8FaqProps> = ({ darkMode }) => {
  // All FAQ questions closed on initial load
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({});

  const faqs = [
    {
      q: 'Is ₹999 the complete course fee?',
      a: 'No. ₹999 is the registration fee for joining the contest/program. The applicable course fee is separate.',
    },
    {
      q: 'Do I have to pay the course fee before starting?',
      a: 'No. Participants can start the learning and project journey without paying the course fee upfront, according to the program terms.',
    },
    {
      q: 'What happens if my project ranks?',
      a: 'If your project meets the officially defined ranking criteria within the applicable contest conditions, you will not have to pay the course fee (Course Fee = ₹0).',
    },
    {
      q: 'What happens if my project does not rank?',
      a: 'If the project does not meet the qualification criteria, the applicable course fee can be paid later within 6 months, subject to the program terms.',
    },
    {
      q: 'What will I learn?',
      a: 'The program focuses on practical concepts across: SEO (Search Engine Optimization), AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization). The objective is to understand these concepts and apply them to a real project.',
    },
    {
      q: 'Do I need previous SEO experience?',
      a: 'The program can be suitable for beginners as well as learners who already understand basic digital marketing concepts and want more practical exposure.',
    },
    {
      q: 'Do I need my own project?',
      a: 'Participants will work on a practical project during the challenge. Exact project eligibility and setup requirements should follow the official contest guidelines.',
    },
    {
      q: 'Is ranking guaranteed?',
      a: 'No. Search rankings depend on multiple factors and cannot be guaranteed. The challenge provides a framework for learning, implementation and experimentation. Qualification for the ₹0 course-fee benefit depends on actually meeting the official ranking criteria.',
    },
    {
      q: 'What are the ranking criteria?',
      a: 'Detailed ranking criteria, verification methods, timelines and eligibility rules should be provided in the official contest guidelines before participation.',
    },
    {
      q: 'How long do I have to pay the course fee if I don’t qualify?',
      a: 'Under the proposed program model, participants can pay the applicable course fee within 6 months, subject to the final program terms and payment policy.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section
      id="section-faq"
      className="py-20 sm:py-28 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              FAQS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#8e8e93] font-sans">
            Direct, transparent answers regarding registration, qualification, and fees.
          </p>
        </div>

        {/* Two-Box Grid with Small, Compact Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = !!openIndices[idx];

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#0f0f0f] border-[#00ff88]/40 ring-1 ring-[#00ff88]/15 shadow-sm'
                      : 'bg-white border-[#008744]/35 shadow-sm'
                    : darkMode
                    ? 'bg-[#080808] border-[#181818] hover:border-[#282828]'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-start justify-between gap-3 cursor-pointer"
                >
                  <span className="font-display text-xs sm:text-sm font-bold text-current leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 p-1 rounded-md border mt-0.5 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 border-[#00ff88] text-[#00ff88]'
                        : 'border-inherit text-[#8e8e93]'
                    }`}
                  >
                    <ChevronDown size={13} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 sm:px-4 pb-3.5 pt-0 font-sans text-xs text-[#8e8e93] leading-relaxed border-t border-inherit/30 mt-0.5 pt-2.5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
