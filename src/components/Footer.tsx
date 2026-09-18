import React from 'react';
import { SavingCareersLogo } from './SavingCareersLogo';
import { ArrowRight, ShieldCheck, ExternalLink, Sparkles, Mail, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenRegister }) => {
  const quickLinks = [
    { label: 'Challenge', href: '#section-hero' },
    { label: 'Method', href: '#section-method' },
    { label: 'Instructor', href: '#section-instructor' },
    { label: 'Protocol', href: '#section-protocol' },
    { label: 'Offer', href: '#section-offer' },
    { label: 'Target', href: '#section-target' },
    { label: 'Outcome', href: '#section-outcome' },
    { label: 'FAQ', href: '#section-faq' },
  ];

  const corePillars = [
    'Traditional & Entity SEO',
    'AEO (ChatGPT & Perplexity)',
    'GEO (Google AI Overviews)',
    'Google Search Console Logs',
    'Live Keyword Teardowns',
    'Proof-First Ranking Metrics',
  ];

  return (
    <footer
      className={`border-t transition-colors relative overflow-hidden ${
        darkMode
          ? 'bg-[#050505] border-[#222222] text-[#8e8e93]'
          : 'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b]'
      }`}
    >
      {/* Top Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b ${
            darkMode ? 'border-[#222222]/50' : 'border-[#e2e8f0]'
          }`}
        >
          {/* Column 1: Brand & Core Proposition (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <SavingCareersLogo showText={true} />
            <p className="text-sm leading-relaxed max-w-md pt-2">
              A practical, proof-first digital marketing contest by{' '}
              <span className={darkMode ? 'text-white font-medium' : 'text-[#0f172a] font-medium'}>
                Saving.Careers
              </span>{' '}
              mentored by{' '}
              <span className={`font-medium ${darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}`}>
                Nikhil Sir
              </span>
              . Master modern organic search, build real web assets, and qualify for a{' '}
              <span className={`font-bold ${darkMode ? 'text-[#00ff88]' : 'text-[#008744]'}`}>
                ₹0 course fee
              </span>{' '}
              by ranking.
            </p>

            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-code ${
                darkMode
                  ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20'
                  : 'bg-emerald-50 text-[#008744] border border-emerald-200'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  darkMode ? 'bg-[#00ff88]' : 'bg-[#008744]'
                }`}
              ></span>
              <span>₹999 Entry • Course Fee = ₹0 If Ranked</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono-code font-bold tracking-wider uppercase transition-all duration-200 bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_25px_rgba(0,255,136,0.35)] cursor-pointer"
              >
                <span>Register Now (₹999)</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Column 2: Challenge Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className={`font-mono-code text-xs uppercase tracking-widest font-bold ${darkMode ? 'text-white' : 'text-[#0f172a]'}`}>
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono-code">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors flex items-center gap-1.5 py-0.5 ${
                      darkMode ? 'hover:text-[#00ff88]' : 'hover:text-[#008744]'
                    }`}
                  >
                    <span className={darkMode ? 'text-[#00ff88]/50' : 'text-[#008744]/70'}>›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Triad Curriculum (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className={`font-mono-code text-xs uppercase tracking-widest font-bold ${darkMode ? 'text-white' : 'text-[#0f172a]'}`}>
              Challenge Triad
            </div>
            <ul className="space-y-2 text-xs font-mono-code">
              {corePillars.map((pillar) => (
                <li key={pillar} className="flex items-center gap-2 py-0.5">
                  <CheckCircle2
                    size={13}
                    className={darkMode ? 'text-[#00ff88] shrink-0' : 'text-[#008744] shrink-0'}
                  />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Mentor & Contact (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className={`font-mono-code text-xs uppercase tracking-widest font-bold ${darkMode ? 'text-white' : 'text-[#0f172a]'}`}>
              Mentorship
            </div>
            <div className="text-xs space-y-2">
              <div>
                <span className={`font-bold block ${darkMode ? 'text-white' : 'text-[#0f172a]'}`}>Nikhil Sharma</span>
                <span className="text-[#8e8e93] font-mono-code text-[11px]">20+ Yrs Experience</span>
              </div>
              <a
                href="https://www.nikhilsharma.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-xs font-mono-code hover:underline ${
                  darkMode ? 'text-[#00ff88]' : 'text-[#008744]'
                }`}
              >
                <span>nikhilsharma.com</span>
                <ExternalLink size={11} />
              </a>
              <div className="pt-2">
                <span className={`text-[11px] font-mono-code block ${darkMode ? 'text-white' : 'text-[#0f172a]'}`}>Questions?</span>
                <span className="text-[11px] font-mono-code text-[#8e8e93] flex items-center gap-1 mt-0.5">
                  <Mail size={11} className={darkMode ? 'text-[#00ff88]' : 'text-[#008744]'} />
                  <span>contact@saving.careers</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Terms & Site Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <div className="text-xs font-mono-code text-center md:text-left space-y-1">
            <div>
              © 2026 <span className={darkMode ? 'text-white font-medium' : 'text-[#0f172a] font-medium'}>Saving.Careers</span> × Nikhil Sir. All rights reserved.
            </div>
            <div className="text-[11px] text-[#666666]">
              Registration fee (₹999) &amp; course fee are separate. Performance-based ranking qualification applies.
            </div>
          </div>

          {/* Right Bottom Corner: Site Credits Widget */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="poweredBy">
              <a
                href="https://play.fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FabulousMedia"
                className="creditLogo"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                />
              </a>

              <div className="divider"></div>

              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoCommercially"
                className="creditLogo"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
