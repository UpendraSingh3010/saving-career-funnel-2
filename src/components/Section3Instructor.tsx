import React from 'react';
import {
  ShieldCheck,
  Globe,
  ExternalLink,
} from 'lucide-react';

interface Section3InstructorProps {
  darkMode: boolean;
}

export const Section3Instructor: React.FC<Section3InstructorProps> = ({ darkMode }) => {
  const methodologies = [
    {
      label: 'Business Strategy & ROI Optimization',
      desc: 'Aligning modern organic search directly with revenue goals, not vanity metrics.',
    },
    {
      label: 'Digital Transformation & AI Discovery',
      desc: 'Architecting for LLM citation engines (AEO & GEO) alongside classic Google algorithms.',
    },
    {
      label: 'Founder of InvestorReady™ Framework',
      desc: 'Teaching learners how to build real, verifiable digital assets that compete online.',
    },
  ];

  return (
    <section
      id="section-instructor"
      className="py-20 sm:py-28 border-b border-inherit relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider uppercase">
              LEAD INSTRUCTOR & MENTOR
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Learn With Nikhil Sir
          </h2>
          <p className="text-sm sm:text-base text-[#8e8e93] font-sans max-w-2xl mx-auto">
            Directly mentored by Nikhil Sharma — Business Strategist, Digital Transformation Expert & Founder of NS Transform.
          </p>
        </div>

        {/* Master Profile Container with Verified Data inside */}
        <div
          className={`p-6 sm:p-10 rounded-3xl border shadow-xl ${
            darkMode ? 'bg-[#0a0a0a] border-[#1e1e1e]' : 'bg-white border-slate-200'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Photo, Verified Roles, Quick Stats & Link */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-inherit shadow-2xl mb-4 group">
                <img
                  src="/nikhil-sir-photo.jpeg"
                  alt="Nikhil Sharma - Business Strategist & Digital Transformation Expert"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono-code text-[#00ff88] border border-[#00ff88]/30">
                    Lead Mentor • Saving.Careers
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black mb-1 text-current">
                Nikhil Sharma
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#00ff88] font-mono-code mb-1">
                Entrepreneur • Business Strategist • Digital Transformer
              </p>
              <p className="text-xs text-[#8e8e93] max-w-xs font-sans mb-4">
                Founder of multiple successful ventures and creator of the InvestorReady™ methodology.
              </p>

              {/* 3 Inline Verified Stat Pills inside the photo column */}
              <div className="grid grid-cols-3 gap-2 w-full max-w-xs mb-4">
                <div
                  className={`p-2 rounded-xl border text-center ${
                    darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="font-display text-base font-black text-[#00ff88]">20+</div>
                  <div className="text-[10px] text-[#8e8e93] font-mono-code leading-tight">Yrs Exp</div>
                </div>
                <div
                  className={`p-2 rounded-xl border text-center ${
                    darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="font-display text-base font-black text-[#38bdf8]">500+</div>
                  <div className="text-[10px] text-[#8e8e93] font-mono-code leading-tight">Mentored</div>
                </div>
                <div
                  className={`p-2 rounded-xl border text-center ${
                    darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="font-display text-base font-black text-amber-400">55+</div>
                  <div className="text-[10px] text-[#8e8e93] font-mono-code leading-tight">Ventures</div>
                </div>
              </div>

              {/* Official Website Link */}
              <a
                href="https://www.nikhilsharma.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-bold border transition-all ${
                  darkMode
                    ? 'bg-[#141414] border-[#2a2a2a] text-white hover:border-[#00ff88] hover:text-[#00ff88]'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-[#008744] hover:text-[#008744]'
                }`}
              >
                <Globe size={13} className="text-[#00ff88]" />
                <span>nikhilsharma.com</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
            </div>

            {/* Right Column: Verified Background, Strategic Pillars & 3 Core Questions */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-inherit pt-8 lg:pt-0 lg:pl-10">
              <div className="space-y-3.5 text-sm text-[#8e8e93] leading-relaxed mb-6">
                <p>
                  With <strong className="text-current font-bold">20+ years of proven expertise</strong> in business strategy and digital transformation, Nikhil Sharma has advised and scaled <strong className="text-current font-bold">500+ startups, entrepreneurs, and global enterprises</strong>.
                </p>
                <p>
                  As the founder of multiple commercial ventures, his philosophy moves digital marketing beyond passive certifications into <strong className="text-current font-bold">verifiable execution</strong>. In this challenge, he leads you through the exact methodologies used to transform organic visibility across Google, Perplexity, Claude, and ChatGPT.
                </p>
              </div>

              {/* 3 Core Strategic Pillars */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#8e8e93] block font-bold">
                  Strategic Framework for the Contest:
                </span>
                {methodologies.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs font-sans flex items-start gap-2.5 ${
                      darkMode ? 'bg-[#121212] border-[#222]' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-md bg-[#00ff88]/15 text-[#00ff88] flex items-center justify-center font-mono-code text-[11px] font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-current text-xs mb-0.5">
                        {item.label}
                      </h4>
                      <p className="text-[11px] text-[#8e8e93] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mentorship Core Questions */}
              <div
                className={`p-4 rounded-2xl border ${
                  darkMode ? 'bg-[#121212] border-[#242424]' : 'bg-emerald-50/50 border-emerald-200/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 font-mono-code text-xs font-bold text-current">
                  <ShieldCheck size={15} className="text-[#00ff88]" />
                  <span>The Practical Mentorship Rule</span>
                </div>
                <p className="text-xs font-sans text-[#8e8e93] leading-relaxed">
                  Instead of rote checklists, Nikhil Sir trains participants on 3 fundamental decisions: <span className="text-current font-semibold">&ldquo;Why are we doing this?&rdquo;</span>, <span className="text-current font-semibold">&ldquo;How do we verify it worked in real rankings?&rdquo;</span>, and <span className="text-current font-semibold">&ldquo;What do we iterate next?&rdquo;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
