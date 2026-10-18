'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function HeroContent({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const mobile = window.matchMedia('(max-width: 700px) and (pointer: coarse)');
    const updateHeight = () => {
      // Safari's translucent controls can expose content beyond its CSS viewport.
      // Screen height stays stable when those controls expand or collapse.
      if (mobile.matches && window.screen.height > 0) {
        content.style.setProperty('--mobile-screen-height', `${window.screen.height}px`);
      } else {
        content.style.removeProperty('--mobile-screen-height');
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight, { passive: true });
    mobile.addEventListener('change', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      mobile.removeEventListener('change', updateHeight);
      content.style.removeProperty('--mobile-screen-height');
    };
  }, []);

  return <div ref={contentRef} className="hero-content">{children}</div>;
}
