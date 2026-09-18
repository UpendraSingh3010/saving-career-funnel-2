/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section1Hero } from './components/Section1Hero';
import { Section2Method } from './components/Section2Method';
import { Section3Instructor } from './components/Section3Instructor';
import { Section4Protocol } from './components/Section4Protocol';
import { Section5Offer } from './components/Section5Offer';
import { Section6Target } from './components/Section6Target';
import { Section7Outcome } from './components/Section7Outcome';
import { Section8Activate } from './components/Section8Activate';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundLayers } from './components/BackgroundLayers';
import { ArrowRight } from 'lucide-react';

export default function App() {
  // Default to dark mode (Saving.Careers standard aesthetic)
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('Challenge');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Global 3D Card Tilt & Magnetic Buttons physics (Saving.Careers enhancement engine)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      // 1. Tilt Cards
      const tiltTarget = (e.target as HTMLElement)?.closest('.tilt-card') as HTMLElement | null;
      if (tiltTarget) {
        const rect = tiltTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        tiltTarget.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.015)`;
      }

      // 2. Magnetic Buttons
      const magneticTarget = (e.target as HTMLElement)?.closest('.magnetic') as HTMLElement | null;
      if (magneticTarget) {
        const strength = 0.35;
        const rect = magneticTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        magneticTarget.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`;
      }
    };

    const handleGlobalMouseOut = (e: MouseEvent) => {
      const tiltTarget = (e.target as HTMLElement)?.closest('.tilt-card') as HTMLElement | null;
      const tiltRelated = (e.relatedTarget as HTMLElement)?.closest('.tilt-card') as HTMLElement | null;
      if (tiltTarget && tiltTarget !== tiltRelated) {
        tiltTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      }

      const magneticTarget = (e.target as HTMLElement)?.closest('.magnetic') as HTMLElement | null;
      const magneticRelated = (e.relatedTarget as HTMLElement)?.closest('.magnetic') as HTMLElement | null;
      if (magneticTarget && magneticTarget !== magneticRelated) {
        magneticTarget.style.transform = 'translate(0px, 0px)';
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    window.addEventListener('mouseout', handleGlobalMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseout', handleGlobalMouseOut);
    };
  }, []);

  // Track active section for floating progress indicator
  useEffect(() => {
    const sections = [
      { id: 'section-hero', name: 'Challenge' },
      { id: 'section-method', name: 'Method' },
      { id: 'section-instructor', name: 'Instructor' },
      { id: 'section-protocol', name: 'Protocol' },
      { id: 'section-offer', name: 'Offer' },
      { id: 'section-target', name: 'Target' },
      { id: 'section-outcome', name: 'Outcome' },
      { id: 'section-activate', name: 'Activate' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setCurrentSection(match.name);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col relative selection:bg-[#00ff88] selection:text-black ${
        darkMode ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#ffffff] text-[#000000]'
      }`}
    >
      {/* Authentic Saving.Careers Custom Cursor */}
      <CustomCursor />

      {/* Atmospheric Background Layers (Fractal Grain + Tech Grid + Ambient Spotlight) */}
      <BackgroundLayers darkMode={darkMode} />

      {/* Fixed Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Main 8-Section Funnel Content */}
      <main className="flex-1 relative z-10">
        {/* Section 01: Hero — Learn it. Apply it. Rank it. */}
        <Section1Hero
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Section 02: Method — One skill won't get you found anymore. */}
        <Section2Method darkMode={darkMode} />

        {/* Section 03: Instructor — Meet Nikhil Sir. */}
        <Section3Instructor darkMode={darkMode} />

        {/* Section 04: Protocol — Five steps. One outcome. */}
        <Section4Protocol darkMode={darkMode} />

        {/* Section 05: Offer — What if you didn't pay unless it worked? */}
        <Section5Offer darkMode={darkMode} />

        {/* Section 06: Target — Tap what describes you. */}
        <Section6Target darkMode={darkMode} />

        {/* Section 07: Outcome — "I learned SEO." vs. "I ranked a project." */}
        <Section7Outcome darkMode={darkMode} />

        {/* Section 08: Activate — Ready to stop learning and start proving it? */}
        <Section8Activate darkMode={darkMode} />
      </main>

      {/* Comprehensive Brand Footer & Site Credits */}
      <div className="relative z-10">
        <Footer
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      </div>

      {/* Floating Section Tracker Pill (Bottom Left on Desktop) */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-40 items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-md text-xs font-mono-code text-[#8e8e93] shadow-lg pointer-events-auto">
        <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
        <span className="text-white font-bold">{currentSection}</span>
      </div>

      {/* Sticky Mobile Registration Bar (Bottom) */}
      <div
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 border-t backdrop-blur-lg flex items-center justify-between gap-3 ${
          darkMode
            ? 'bg-[#0a0a0a]/95 border-[#1a1a1a]'
            : 'bg-white/95 border-[#e2e8f0]'
        }`}
      >
        <div>
          <div className="text-[10px] font-mono-code text-[#8e8e93]">
            Rank = Course Fee ₹0
          </div>
          <div className="font-display font-black text-sm text-[#00ff88]">
            Entry ₹999
          </div>
        </div>
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="px-5 py-2.5 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] flex items-center gap-1.5 cursor-pointer"
        >
          <span>Register</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
