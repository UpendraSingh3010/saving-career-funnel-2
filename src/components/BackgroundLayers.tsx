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

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* 1. Authentic SVG Fractal Grain Noise from saving.careers */}
      <div className="grain-overlay" />

      {/* 2. Global Precision Technical Grid */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          darkMode ? 'opacity-30' : 'opacity-20'
        }`}
        style={{
          backgroundImage: darkMode
            ? `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`
            : `linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 3. Dynamic Interactive Mouse Spotlight (Subtle Cyber Ambient Torch) */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          background: darkMode
            ? `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 255, 136, 0.045) 0%, rgba(0, 204, 106, 0.015) 35%, transparent 70%)`
            : `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 153, 79, 0.035) 0%, transparent 65%)`,
        }}
      />

      {/* 4. Top Horizon Radial Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] opacity-40 blur-3xl pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at top, rgba(0, 255, 136, 0.12) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at top, rgba(0, 153, 79, 0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
