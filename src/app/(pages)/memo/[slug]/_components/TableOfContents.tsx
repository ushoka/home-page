'use client';

import { useEffect, useRef, useState } from 'react';
import { SCROLL_CONTAINER_ID } from '@/libs/constants/scroll';
import { cn } from '@/libs/utils/classNames';

export type Toc = { text: string; id: string; level: number };

function scrollToHashFragment(hash: string): boolean {
  const targetElement = document.getElementById(hash);
  if (!targetElement) return false;

  const scrollContainer = document.getElementById(SCROLL_CONTAINER_ID);
  if (!scrollContainer) return false;

  const containerRect = scrollContainer.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const currentScrollTop = scrollContainer.scrollTop;
  const targetScrollTop =
    currentScrollTop + (targetRect.top - containerRect.top);

  scrollContainer.scrollTo({
    top: Math.round(targetScrollTop),
    behavior: 'instant',
  });

  return true;
}

function getActiveIndexFromLink(
  tableOfContents: Toc[],
  link: Element | null,
): number {
  const href = link?.getAttribute('href');
  if (!href) return 0;
  const id = href.slice(1);
  const foundIndex = tableOfContents.findIndex(toc => toc.id === id);
  return foundIndex >= 0 ? foundIndex : 0;
}

export const TableOfContents: React.FC<{
  tableOfContents: Toc[];
  className?: string;
}> = ({ tableOfContents, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const didScrollToHash = useRef(false);

  useEffect(() => {
    const nav = navRef.current;
    const scrollContainer = document.getElementById(SCROLL_CONTAINER_ID);
    if (!nav || !scrollContainer) return;

    if (!didScrollToHash.current) {
      didScrollToHash.current = true;
      const hash = window.location.hash.slice(1);
      if (hash) {
        scrollToHashFragment(hash);
      }
    }

    const applyActiveId = (id: string) => {
      const foundIndex = tableOfContents.findIndex(toc => toc.id === id);
      if (foundIndex < 0) return;
      setActiveIndex(foundIndex);
    };

    const syncFromNative = () => {
      const currentLink = nav.querySelector('a:target-current');
      if (!currentLink) return false;
      setActiveIndex(getActiveIndexFromLink(tableOfContents, currentLink));
      return true;
    };

    const visibleHeadings = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          visibleHeadings.set(entry.target.id, entry.isIntersecting);
        }

        const current = tableOfContents.findLast(toc =>
          visibleHeadings.get(toc.id),
        );
        if (current) {
          applyActiveId(current.id);
        } else if (scrollContainer.scrollTop < 16 && tableOfContents[0]) {
          applyActiveId(tableOfContents[0].id);
        }
      },
      {
        root: scrollContainer,
        // Expand the observation rect above the scroller so headings that
        // have scrolled past still count; findLast then picks the current one.
        rootMargin: '10000px 0px -60% 0px',
        threshold: 0,
      },
    );

    tableOfContents.forEach(toc => {
      const heading = document.getElementById(toc.id);
      if (heading) observer.observe(heading);
    });

    // Native :target-current tracks the viewport today, not overflow
    // scrollers. Keep it as the preferred source when it actually moves;
    // IntersectionObserver covers the custom #scroll-container.
    if (CSS.supports('scroll-target-group: auto')) {
      const previousNativeIndex = { current: -1 };

      const syncIfNativeMoved = () => {
        const currentLink = nav.querySelector('a:target-current');
        const nextIndex = getActiveIndexFromLink(tableOfContents, currentLink);
        if (nextIndex === previousNativeIndex.current) return;
        previousNativeIndex.current = nextIndex;
        if (currentLink) {
          setActiveIndex(nextIndex);
        }
      };

      const frame = requestAnimationFrame(() => {
        syncFromNative();
        previousNativeIndex.current = getActiveIndexFromLink(
          tableOfContents,
          nav.querySelector('a:target-current'),
        );
      });
      scrollContainer.addEventListener('scrollend', syncIfNativeMoved, {
        passive: true,
      });

      return () => {
        cancelAnimationFrame(frame);
        scrollContainer.removeEventListener('scrollend', syncIfNativeMoved);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, [tableOfContents]);

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const href = event.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;

    const id = href.slice(1);
    if (!document.getElementById(id)) return;

    event.preventDefault();
    window.history.pushState(null, '', href);
    scrollToHashFragment(id);
    applyActiveFromId(id);
  }

  function applyActiveFromId(id: string) {
    const foundIndex = tableOfContents.findIndex(toc => toc.id === id);
    if (foundIndex >= 0) {
      setActiveIndex(foundIndex);
    }
  }

  return (
    <aside
      aria-labelledby="toc"
      className={cn(
        'w-60 max-w-max overflow-auto rounded-lg border-2 border-dashed border-border-02 bg-surface-03 p-2 font-display',
        className,
      )}
    >
      <nav
        id="toc"
        ref={navRef}
        aria-label="Table of contents"
        className="toc-nav"
      >
        <div className="relative">
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute hidden w-0.75 rounded-sm bg-accent transition-[top,bottom,left,right,opacity] duration-200 ease-out motion-reduce:transition-none',
              '[@supports(position-anchor:--toc-active)]:block',
              '[@supports(position-anchor:--toc-active)]:opacity-100',
              '[@supports(position-anchor:--toc-active)]:[position-anchor:--toc-active]',
              '[@supports(position-anchor:--toc-active)]:top-[calc(anchor(top)+0.25rem)]',
              '[@supports(position-anchor:--toc-active)]:bottom-[calc(anchor(bottom)+0.25rem)]',
              '[@supports(position-anchor:--toc-active)]:left-[calc(anchor(left)+0px)]',
            )}
          />
          <ul className="flex flex-col gap-1 py-2">
            {tableOfContents.map((toc, index) => (
              <li key={toc.id} className="text-sm font-medium">
                <a
                  href={`#${toc.id}`}
                  aria-current={activeIndex === index ? 'location' : undefined}
                  className={cn(
                    'relative block px-2 text-base leading-[1.1] no-underline hover:underline',
                    toc.level === 3 ? 'ml-4 py-0.5 text-sm text-fg-02' : 'py-1',
                    'before:absolute before:bottom-1 before:left-0 before:top-1 before:block before:w-0.75 before:rounded-sm before:motion-safe:transition-colors before:content-[""]',
                    '[@supports(position-anchor:--toc-active)]:before:hidden',
                    activeIndex === index && 'toc-current',
                  )}
                  onClick={handleNavClick}
                >
                  {toc.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};
