'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// Next.js can remount this component on Back without a new document navigation.
let reloadPositionHandled = false;

export default function HeroContent({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    // Refresh starts at the full header; anchors and history navigation keep their position.
    if (reloadPositionHandled || navigation?.type !== 'reload' || window.location.hash) return;

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.readyState === 'complete') reloadPositionHandled = true;
    };
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) resetScroll();
    };
    const restoreHistory = () => {
      window.history.scrollRestoration = previousRestoration;
    };

    resetScroll();
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('pagehide', restoreHistory);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('pagehide', restoreHistory);
      restoreHistory();
    };
  }, []);

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
