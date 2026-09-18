import React from 'react';
import { Compass, Lightbulb, CheckCircle2, ShieldCheck, Quote, Award } from 'lucide-react';

interface Section3InstructorProps {
  darkMode: boolean;
}

export const Section3Instructor: React.FC<Section3InstructorProps> = ({ darkMode }) => {
  return (
    <section
      id="section-instructor"
      className="py-24 sm:py-32 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              INSTRUCTOR
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Meet Nikhil Sir.
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            Teaching the why and how, not just a checklist.
          </p>
        </div>

        {/* Editorial Profile Card */}
        <div
          className={`p-8 sm:p-12 rounded-3xl border transition-all shadow-2xl ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#1e1e1e]'
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Instructor Portrait & Verified Identifier */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-inherit shadow-xl mb-4 group">
                <img
                  src="/nikhil-sir-photo.jpeg"
                  alt="Nikhil Sharma (Nikhil Sir)"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-mono-code text-[#00ff88] border border-[#00ff88]/30 flex items-center gap-1">
                  <ShieldCheck size={12} />
                  <span>Lead Mentor</span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black mb-1">
                Nikhil Sharma
              </h3>
              <p className="text-xs font-mono-code text-[#00ff88] font-bold tracking-wider uppercase">
                Nikhil Sir
              </p>
              <p className="text-xs text-[#8e8e93] font-mono-code mt-1">
                Organic Search &amp; Digital Growth Strategist
              </p>
            </div>

            {/* Core Teaching Philosophy & Explanation */}
            <div className="lg:col-span-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-inherit pt-8 lg:pt-0 lg:pl-10">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono-code bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 font-bold">
                  <Compass size={14} />
                  <span>The Teaching Standard</span>
                </div>

                <div className="relative pl-6 border-l-2 border-[#00ff88]/60 italic font-display text-xl sm:text-2xl font-bold leading-snug text-current">
                  &ldquo;Not just what to do — why it works, how to tell if it worked, and what to change next.&rdquo;
                </div>

                <p className="text-sm sm:text-base text-[#8e8e93] font-sans leading-relaxed">
                  Built around understanding the mechanics of ranking algorithms and generative citation engines, rather than passively memorizing a rigid checklist that becomes obsolete after the next core update.
                </p>

                {/* 2-Column Mentorship Pillar Mini Bento */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div
                    className={`p-3.5 rounded-xl border text-xs font-mono-code ${
                      darkMode
                        ? 'bg-[#121212] border-[#222]'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-current font-bold mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
                      Live Site Architecture
                    </div>
                    <p className="text-[#8e8e93]">
                      Direct hands-on code review and schema configuration on your real domain.
                    </p>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border text-xs font-mono-code ${
                      darkMode
                        ? 'bg-[#121212] border-[#222]'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-current font-bold mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                      AI Crawler Grounding
                    </div>
                    <p className="text-[#8e8e93]">
                      Engineering content depth that LLMs index as authoritative ground truth.
                    </p>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border text-xs font-mono-code leading-relaxed ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-[#a1a1aa]'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="text-[#00ff88] font-bold">Verified Background:</span> Founder, NS Transform 2026. Directly guides students, founders, and practitioners on organic acquisition and modern search positioning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
