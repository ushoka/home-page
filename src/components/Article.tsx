import type { ReactNode } from 'react';
import { cn } from '@/libs/utils/classNames';

export function Article({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={cn(
        'prose prose-neutral relative w-full wrap-break-words lg:prose-lg dark:prose-invert prose-h1:font-display prose-h2:font-display prose-h3:font-display prose-a:[font-weight:inherit]',
        className,
      )}
    >
      {children}
    </article>
  );
}
