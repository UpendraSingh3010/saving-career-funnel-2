import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const checkPointer = () => {
      setIsPointerDevice(mediaQuery.matches);
      if (mediaQuery.matches) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    checkPointer();
    mediaQuery.addEventListener('change', checkPointer);

    if (!mediaQuery.matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotX = e.clientX;
      dotY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const onMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const onMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    // Smooth physics loop (Matching saving.careers linear interpolation)
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${dotX}px`;
        cursorDotRef.current.style.top = `${dotY}px`;
      }

      animId = requestAnimationFrame(animateCursor);
    };

    animId = requestAnimationFrame(animateCursor);

    // Global event delegation for interactive hover expansion
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, select, textarea, [role="button"], .tilt-card, .magnetic, .interactive-hover, .cursor-pointer'
      );

      if (interactive) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseenter', onMouseEnterWindow);
    document.addEventListener('mouseleave', onMouseLeaveWindow);

    return () => {
      cancelAnimationFrame(animId);
      mediaQuery.removeEventListener('change', checkPointer);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.body.classList.remove('has-custom-cursor');
      document.body.classList.remove('cursor-hover');
    };
  }, [isVisible]);

  if (!isPointerDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        aria-hidden="true"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        aria-hidden="true"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};
