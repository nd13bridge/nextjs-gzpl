'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

type AnimatedMattersProps = {
  matters: readonly string[];
  label: string;
};

export default function AnimatedMatters({ matters, label }: AnimatedMattersProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !('IntersectionObserver' in window)
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.2)) {
        list.dataset.reveal = 'visible';
        observer.disconnect();
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -20% 0px' });

    list.dataset.reveal = 'pending';
    observer.observe(list);

    return () => {
      observer.disconnect();
      delete list.dataset.reveal;
    };
  }, []);

  return (
    <ul ref={listRef} aria-label={label}>
      {matters.map((matter, index) => (
        <li key={matter} style={{ '--separator-delay': `${150 + index * 100}ms` } as CSSProperties}>
          {matter}
        </li>
      ))}
    </ul>
  );
}
