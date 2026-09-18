import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Section7ActivateProps {
  darkMode: boolean;
}

export const Section7Activate: React.FC<Section7ActivateProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ticks, setTicks] = useState<[boolean, boolean, boolean]>([false, false, false]);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Student');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Sequentially tick off the 3 checklist items on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered tick animations
          setTimeout(() => setTicks([true, false, false]), 300);
          setTimeout(() => setTicks([true, true, false]), 700);
          setTimeout(() => setTicks([true, true, true]), 1100);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    const generatedId = 'SC-RANK-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedId);
    setIsSubmitted(true);
  };

  const checklistItems = ['Register', 'Learn', 'Rank'];

  return (
    <section
      id="section-activate"
      ref={sectionRef}
      className="py-20 sm:py-32 border-b border-inherit relative"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow: [07] ACTIVATE */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span className="text-[#8e8e93] font-semibold tracking-wider">
            [07] ACTIVATE
          </span>
        </div>

        {/* Headline: Ready to stop learning and start proving it? */}
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight mb-8">
          Ready to stop learning and start proving it?
        </h2>

        {/* Interactive Element: 3-item checklist (Register → Learn → Rank) that visually ticks itself off */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10">
          {checklistItems.map((item, idx) => {
            const isTicked = ticks[idx];
            return (
              <div key={item} className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isTicked
                      ? 'bg-[#00ff88] text-black shadow-[0_0_15px_rgba(0,255,136,0.4)] scale-110'
                      : darkMode
                      ? 'bg-[#1a1a1a] text-[#555555] border border-[#2a2a2a]'
                      : 'bg-slate-200 text-slate-400 border border-slate-300'
                  }`}
                >
                  {isTicked ? <Check size={16} strokeWidth={3} /> : <span className="text-xs font-mono-code">{idx + 1}</span>}
                </div>
                <span
                  className={`font-mono-code text-xs sm:text-sm font-bold transition-colors ${
                    isTicked
                      ? darkMode
                        ? 'text-white'
                        : 'text-slate-900'
                      : 'text-[#8e8e93]'
                  }`}
                >
                  {item}
                </span>
                {idx < checklistItems.length - 1 && (
                  <span className="text-[#8e8e93] text-xs sm:text-sm font-mono-code ml-1 sm:ml-2">→</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Conversion Form or Success State */}
        {isSubmitted ? (
          <div
            className={`p-8 rounded-2xl border text-center animate-in fade-in zoom-in-95 ${
              darkMode ? 'bg-[#0a0a0a] border-[#00ff88]/40' : 'bg-white border-[#008744]/40 shadow-xl'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="font-display font-bold text-xl mb-1">
              Seat Registration Reserved!
            </h3>
            <p className="text-xs font-mono-code text-[#8e8e93] mb-4">
              Registration Pass ID: <span className="text-[#00ff88] font-bold">{ticketId}</span>
            </p>
            <p className="text-xs text-[#8e8e93] leading-relaxed mb-6 font-mono-code">
              Confirmation and cohort briefing will be dispatched to <strong>{email}</strong>.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 rounded-lg font-mono-code text-xs font-bold border border-inherit hover:bg-white/5 cursor-pointer"
            >
              Submit Another Reservation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`p-6 sm:p-8 rounded-2xl border text-left transition-all ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#1e1e1e] shadow-2xl'
                : 'bg-white border-[#e2e8f0] shadow-xl'
            }`}
          >
            <div className="space-y-4 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono-code text-[#8e8e93] mb-1.5 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nikhil Sharma"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-mono-code transition-all outline-none ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-white focus:border-[#00ff88]'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#008744]'
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono-code text-[#8e8e93] mb-1.5 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-mono-code transition-all outline-none ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-white focus:border-[#00ff88]'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#008744]'
                  }`}
                />
              </div>

              {/* Current Status Dropdown: Student, Freelancer, Founder, Career Switcher */}
              <div>
                <label className="block text-xs font-mono-code text-[#8e8e93] mb-1.5 uppercase">
                  Current Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-mono-code transition-all outline-none cursor-pointer ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-white focus:border-[#00ff88]'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#008744]'
                  }`}
                >
                  <option value="Student">Student</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Founder">Founder</option>
                  <option value="Career Switcher">Career Switcher</option>
                </select>
              </div>
            </div>

            {/* CTA: Register for ₹999 */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-mono-code text-sm font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_25px_rgba(0,255,136,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer magnetic mb-4"
            >
              <span>Register for ₹999</span>
              <ArrowRight size={16} />
            </button>

            {/* Trust line: ₹0 if you rank. Otherwise, pay later — within 6 months. */}
            <div className="text-center">
              <p className="text-xs font-mono-code text-[#8e8e93]">
                ₹0 if you rank. Otherwise, pay later — within 6 months.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
