import React, { useState, useEffect } from 'react';
import { SavingCareersLogo } from './SavingCareersLogo';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenRegister,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Challenge', href: '#section-hero' },
    { label: 'SEO • AEO • GEO', href: '#section-triad' },
    { label: '4-Stage Protocol', href: '#section-roadmap' },
    { label: 'Rules & ₹0 Fee', href: '#section-pricing' },
    { label: 'Mentor', href: '#section-mentor' },
    { label: 'FAQs', href: '#section-faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Authentic Saving.Careers Command Ribbon */}
      <div
        className={`w-full py-1.5 px-4 sm:px-6 lg:px-8 border-b text-[10.5px] font-mono-code transition-colors ${
          darkMode
            ? 'bg-[#000000] border-[#1a1a1a] text-[#8e8e93]'
            : 'bg-[#f1f5f9] border-[#cbd5e1] text-[#475569]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
            <span className="font-bold text-current">SAVING.CAREERS PROTOCOL</span>
            <span className="hidden sm:inline text-[#666666]">|</span>
            <span className="hidden sm:inline">LIVE BATCH NOW ACTIVE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-current font-semibold">TARGET: RANK LIVE WEB ASSET</span>
            <span className="hidden md:inline text-[#666666]">•</span>
            <span className={darkMode ? 'text-[#00ff88] font-bold' : 'text-[#008744] font-bold'}>
              RANK = COURSE FEE ₹0
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-[#000000]/95 backdrop-blur-md border-[#1a1a1a]'
              : 'bg-[#ffffff]/95 backdrop-blur-md border-[#e2e8f0]'
            : darkMode
            ? 'bg-[#000000]/70 backdrop-blur-sm border-[#1a1a1a]/60'
            : 'bg-[#ffffff]/80 backdrop-blur-sm border-[#e2e8f0]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#section-hero" className="flex items-center gap-3 shrink-0">
            <SavingCareersLogo />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-mono-code text-xs tracking-wider whitespace-nowrap">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors py-1 hover:text-[#00ff88] ${
                  darkMode ? 'text-[#9ca3af]' : 'text-[#475569]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Dark/Light toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle color mode"
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                darkMode
                  ? 'border-[#262626] bg-[#0e0e0e] text-[#e5e5e5] hover:border-[#00ff88]/40 hover:text-[#00ff88]'
                  : 'border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] hover:border-[#008744]/40 hover:text-[#008744]'
              }`}
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Primary CTA */}
            <button
              id="header-register-btn"
              onClick={onOpenRegister}
              className="magnetic hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono-code font-bold tracking-wider uppercase transition-all duration-200 bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_20px_rgba(0,255,136,0.35)] cursor-pointer whitespace-nowrap"
            >
              <span>Enter Challenge — ₹999</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden p-2 rounded-lg border ${
                darkMode
                  ? 'border-[#222222] text-[#8e8e93] hover:text-[#00ff88]'
                  : 'border-[#cbd5e1] text-[#475569] hover:text-[#008744]'
              }`}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 transition-all ${
            darkMode ? 'bg-[#0a0a0a] border-[#222222]' : 'bg-[#ffffff] border-[#e2e8f0]'
          }`}
        >
          <div className="flex flex-col gap-3.5 font-mono-code text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 flex items-center justify-between transition-colors ${
                  darkMode ? 'text-[#8e8e93] hover:text-[#00ff88]' : 'text-[#475569] hover:text-[#008744]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight size={12} className="opacity-40" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="mt-3 w-full py-3 rounded-lg text-center font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] cursor-pointer"
            >
              Enter Challenge — ₹999 (Course Fee ₹0 If Ranked)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
