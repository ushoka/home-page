'use client';

import dynamic from 'next/dynamic';

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(mod => mod.Analytics),
  { ssr: false },
);

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights),
  { ssr: false },
);

export function ProductionMetrics() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
