import React, { useEffect, useState } from 'react';

interface BackgroundLayersProps {
  darkMode: boolean;
}

export const BackgroundLayers: React.FC<BackgroundLayersProps> = ({ darkMode }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 50,
    y: 20,
  });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const pctX = Math.round((e.clientX / window.innerWidth) * 100);
          const pctY = Math.round((e.clientY / window.innerHeight) * 100);
          setMousePos({ x: pctX, y: pctY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const accentColor = darkMode ? '#00ff88' : '#00cc6a';
  const dangerColor = '#ff3366';

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Authentic SVG Fractal Grain Noise from saving.careers */}
      <div className="grain-overlay" />

      {/* 2. Authentic Cyber Infrastructure Server Backdrop (exact saving.careers asset) */}
      <div className="absolute top-0 left-0 right-0 h-[850px] overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt=""
          aria-hidden="true"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            darkMode ? 'opacity-12 filter grayscale contrast-125' : 'opacity-[0.06] filter grayscale contrast-110'
          }`}
          loading="eager"
        />
        {/* Gradient fade to match page background seamlessly */}
        <div
          className="absolute inset-0"
          style={{
            background: darkMode
              ? 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 60%, #000000 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.9) 60%, #ffffff 100%)',
          }}
        />
      </div>

      {/* 3. Global 100px Technical Precision Grid (exact saving.careers .hero-grid) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          darkMode ? 'opacity-25' : 'opacity-20'
        }`}
        style={{
          backgroundImage: darkMode
            ? `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`
            : `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* 4. Thematic SVG Orbital Rings & Telemetry Radar Artwork (exact saving.careers top right asset) */}
      <div className="absolute top-8 right-2 sm:right-10 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] pointer-events-none transition-opacity duration-500">
        <svg
          className={`w-full h-full ${darkMode ? 'opacity-20' : 'opacity-25'}`}
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Orbital rings */}
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke={accentColor}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            stroke={accentColor}
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke={accentColor}
            strokeWidth="1"
          />

          {/* Data nodes */}
          <circle cx="200" cy="20" r="4" fill={accentColor} />
          <circle cx="380" cy="200" r="4" fill={dangerColor} />
          <circle cx="200" cy="380" r="4" fill={accentColor} />
          <circle cx="20" cy="200" r="4" fill={accentColor} />
          <circle cx="340" cy="60" r="3" fill={accentColor} />
          <circle cx="60" cy="340" r="3" fill={accentColor} />

          {/* Center hub */}
          <circle cx="200" cy="200" r="8" fill={accentColor} />
          <circle
            cx="200"
            cy="200"
            r="20"
            stroke={accentColor}
            strokeWidth="1"
            fill="none"
          />

          {/* Connecting lines */}
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="20"
            stroke={accentColor}
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="200"
            y1="200"
            x2="380"
            y2="200"
            stroke={dangerColor}
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="200"
            y1="200"
            x2="340"
            y2="60"
            stroke={accentColor}
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* 5. Dynamic Interactive Mouse Spotlight (Subtle Ambient Torch) */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          background: darkMode
            ? `radial-gradient(750px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 255, 136, 0.045) 0%, rgba(0, 204, 106, 0.015) 35%, transparent 70%)`
            : `radial-gradient(750px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 204, 106, 0.04) 0%, transparent 65%)`,
        }}
      />

      {/* 6. Top Horizon Radial Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at top, rgba(0, 255, 136, 0.12) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at top, rgba(0, 204, 106, 0.07) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
