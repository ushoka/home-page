'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { cn } from '@/libs/utils/classNames';

const navItems = [
  { label: 'Home', href: '/', highlightRegex: /^\/?$/ },
  { label: 'Job', href: '/job', highlightRegex: /^\/job$/ },
] as const;

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={className}>
      <nav aria-label="main-nav">
        <Suspense fallback={<Nav />}>
          <CurrentNav />
        </Suspense>
      </nav>
    </header>
  );
};

function CurrentNav() {
  const pathname = usePathname();
  return <Nav pathname={pathname} />;
}

function Nav({ pathname }: { pathname?: string }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 pt-[calc(env(safe-area-inset-top)+1rem)] pl-[calc(env(safe-area-inset-left)+1rem)] pr-[calc(env(safe-area-inset-right)+1rem)] pb-4">
      {navItems.map(({ label, href, highlightRegex }) => {
        const isCurrent =
          pathname != undefined && highlightRegex.test(pathname);
        return (
          <li className="inline-block" key={label}>
            <Link
              aria-current={isCurrent ? 'page' : undefined}
              href={href}
              prefetch={true}
              className={cn(
                'p-2 text-xl font-bold font-display uppercase',
                isCurrent && 'text-accent hover:text-accent-hover',
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
