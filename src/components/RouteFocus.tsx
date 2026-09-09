'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { SKIP_NAV_MAIN_CONTENT_ID } from '@/components/SkipNavLink';

export function RouteFocus() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const main = document.getElementById(SKIP_NAV_MAIN_CONTENT_ID);
    main?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}
