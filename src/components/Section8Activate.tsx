import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface Section8ActivateProps {
  darkMode: boolean;
}

export const Section8Activate: React.FC<Section8ActivateProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    currentStatus: 'Student',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  const statusOptions = [
    'Student',
    'Beginner',
    'Freelancer',
    'Founder',
    'Career Switcher',
  ];

  return (
    <section
      id="section-activate"
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? `radial-gradient(circle at 50% 40%, rgba(0, 255, 136, 0.1) 0%, transparent 65%)`
            : `radial-gradient(circle at 50% 40%, rgba(0, 204, 106, 0.08) 0%, transparent 65%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-inherit mb-4 text-xs font-mono-code bg-inherit">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
            <span className="text-[#8e8e93] font-semibold tracking-wider">
              ACTIVATE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            Ready to stop learning and start proving it?
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] font-sans">
            Join the challenge cohort. Execute your live project with Nikhil Sir.
          </p>
        </div>

        {/* Structured Conversion Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5 cols): Five-Step Path Recap + Fee Logic */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#1e1e1e]'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] font-bold block mb-4">
                Five-Step Path Recap
              </span>

              {/* Connected flow pills */}
              <div className="space-y-2.5 font-mono-code text-xs sm:text-sm mb-6">
                {[
                  { num: '01', label: 'Register', note: '₹999 entry' },
                  { num: '02', label: 'Learn', note: 'SEO/AEO/GEO' },
                  { num: '03', label: 'Build', note: 'live real project' },
                  { num: '04', label: 'Optimize', note: 'repeat & iterate' },
                  { num: '05', label: 'Rank', note: 'criteria met → ₹0' },
                ].map((item, idx) => (
                  <div
                    key={item.num}
                    className={`flex items-center justify-between p-2 rounded-xl border ${
                      darkMode
                        ? 'bg-[#121212] border-[#222222]'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#00ff88] font-bold">
                        {item.num}
                      </span>
                      <span className="font-bold text-current">{item.label}</span>
                    </div>
                    <span className="text-[#8e8e93] text-[11px]">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>

              {/* Clear Fee Logic Box */}
              <div
                className={`p-4 rounded-2xl border text-xs sm:text-sm font-mono-code leading-relaxed ${
                  darkMode
                    ? 'bg-[#141414] border-[#00ff88]/30 text-white'
                    : 'bg-white border-[#008744]/30 text-slate-900 shadow-sm'
                }`}
              >
                <div className="font-bold text-[#00ff88] mb-1">
                  The Fee Logic:
                </div>
                <div>
                  ₹0 course fee if you rank your project. Otherwise, payable within 6 months. Registration fee (₹999) is always separate.
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-inherit flex items-center justify-between text-[11px] font-mono-code text-[#8e8e93]">
              <span>Next cohort batch</span>
              <span className="text-[#00ff88] font-bold">Opening Now</span>
            </div>
          </div>

          {/* Right Column (7 cols): Registration Form */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              darkMode
                ? 'bg-[#0a0a0a] border-[#1e1e1e] shadow-2xl'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] font-bold">
                  Challenge Enrollment
                </span>
                <span className="font-mono-code text-xs text-[#00ff88] font-bold">
                  ₹999 One-Time
                </span>
              </div>

              {submitted ? (
                <div className="py-10 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#00ff88]/20 text-[#00ff88] mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-black text-2xl mb-1">
                    Registration Confirmed!
                  </h3>
                  <p className="text-sm font-mono-code text-[#8e8e93] max-w-sm mx-auto mb-6">
                    Welcome to the challenge, {formData.fullName}. Check {formData.email} for the orientation link &amp; project setup guide.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono-code underline text-[#8e8e93] hover:text-current cursor-pointer"
                  >
                    Submit another attendee
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jai Sharma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#00ff88] ${
                        darkMode
                          ? 'bg-[#121212] border-[#222222] text-white placeholder-neutral-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#00ff88] ${
                        darkMode
                          ? 'bg-[#121212] border-[#222222] text-white placeholder-neutral-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Current Status */}
                  <div>
                    <label className="block text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mb-1.5">
                      Current Status
                    </label>
                    <select
                      value={formData.currentStatus}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentStatus: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#00ff88] cursor-pointer ${
                        darkMode
                          ? 'bg-[#121212] border-[#222222] text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      {statusOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-black">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CTA Button: Register for ₹999 */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-4 px-6 rounded-xl font-mono-code text-sm font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer magnetic"
                  >
                    <span>Register for ₹999</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-inherit text-[11px] font-mono-code text-[#8e8e93] text-center sm:text-left">
              Registration fee &amp; course fee are separate · Instant seat confirmation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
