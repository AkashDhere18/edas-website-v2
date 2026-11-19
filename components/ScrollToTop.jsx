'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Every page opens at the top (same behaviour as the original site).
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    } catch {}
    const onPageShow = () => {
      if (!location.hash) window.scrollTo(0, 0);
    };
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  useEffect(() => {
    if (!location.hash || location.hash === '#top') window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
