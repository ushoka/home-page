import type { Route } from 'next';
import Link from 'next/link';
import { ViewTransition } from 'react';
import { PostTag } from '@/app/(pages)/memo/_components/PostTag';
import { memoTitleViewTransitionName } from '@/app/(pages)/memo/_utils/viewTransitionNames';
import { cn } from '@/libs/utils/classNames';
import { formatDate } from '@/libs/utils/date';

export const PostCard = <T extends string>(props: {
  title: string;
  slug: string;
  href: Route<T>;
  date: string;
  tags: { name: string }[];
  className?: string;
}) => {
  const { title, slug, href, date, tags, className } = props;

  return (
    <Link
      href={href}
      prefetch={true}
      className={cn(
        'inline-block h-full w-full overflow-hidden rounded-lg border-2 border-border-03 bg-surface-04 text-fg-01 no-underline rotate-0 scale-100 shadow-md z-0 motion-safe:transition-[scale,box-shadow] motion-safe:duration-250 motion-safe:hover:scale-105 motion-safe:hover:shadow-xl motion-safe:hover:z-10',
        className,
      )}
    >
      <article className="p-3 flex flex-col gap-1">
        <ViewTransition name={memoTitleViewTransitionName(slug)}>
          <h3 className="text-lg font-bold">{title}</h3>
        </ViewTransition>
        {date && <div className="text-sm text-fg-02">{formatDate(date)}</div>}
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <li key={tag.name}>
                <PostTag name={tag.name} />
              </li>
            ))}
          </ul>
        )}
      </article>
    </Link>
  );
};
