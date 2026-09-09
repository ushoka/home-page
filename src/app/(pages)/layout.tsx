import '@/libs/styles/globals.css';
import type { Viewport } from 'next';
import { Google_Sans_Code, Google_Sans_Flex, Outfit } from 'next/font/google';
import { Suspense, ViewTransition } from 'react';
import { A11yReporter } from '@/components/A11yReporter';
import { AppBackground } from '@/components/AppBackground';
import { DraftStatusToast } from '@/components/DraftModeStatusToast';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ProductionMetrics } from '@/components/ProductionMetrics';
import { RouteFocus } from '@/components/RouteFocus';
import {
  SKIP_NAV_MAIN_CONTENT_ID,
  SkipNavLink,
} from '@/components/SkipNavLink';
import { SCROLL_CONTAINER_ID } from '@/libs/constants/scroll';
import { cn } from '@/libs/utils/classNames';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});

const googleSansCode = Google_Sans_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-google-sans-code',
});

const googleSansFlex = Google_Sans_Flex({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-google-sans-flex',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        outfit.variable,
        googleSansCode.variable,
        googleSansFlex.variable,
      )}
    >
      <head />
      <body className="overflow-hidden">
        <AppBackground />
        <div className="relative z-10 h-full">
          <ViewTransition>
            <ViewTransition name="skip-nav">
              <SkipNavLink className="z-10" />
            </ViewTransition>
            <div
              id={SCROLL_CONTAINER_ID}
              className="isolate flex h-full flex-col overflow-y-scroll gap-10 overflow-x-hidden"
            >
              <div className="flex-1">
                <ViewTransition name="site-header">
                  <Header />
                </ViewTransition>
                <main
                  id={SKIP_NAV_MAIN_CONTENT_ID}
                  tabIndex={-1}
                  className="isolate mx-auto max-w-6xl pl-[calc(env(safe-area-inset-left)+1.5rem)] pr-[calc(env(safe-area-inset-right)+1.5rem)] mt-6 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {children}
                </main>
              </div>
              <ViewTransition name="site-footer">
                <Footer />
              </ViewTransition>
            </div>
            <DraftStatusToast className="z-10" />
          </ViewTransition>
          <Suspense>
            <RouteFocus />
          </Suspense>
          {process.env.NODE_ENV !== 'production' && <A11yReporter />}
          {process.env.NODE_ENV === 'production' && <ProductionMetrics />}
        </div>
      </body>
    </html>
  );
}
