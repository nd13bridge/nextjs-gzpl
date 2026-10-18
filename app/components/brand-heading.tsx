'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function BrandHeading({ children }: { children: ReactNode }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    let frame = 0;
    heading.dataset.entrance = 'pending';

    // Start after the wordmark's font is ready, so the fade is actually visible.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          if (!cancelled) heading.dataset.entrance = 'visible';
        });
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      delete heading.dataset.entrance;
    };
  }, []);

  return <h1 ref={headingRef} className="brand-lockup" id="main-heading">{children}</h1>;
}
