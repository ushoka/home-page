import type { Route } from 'next';
import Link from 'next/link';
import { PostTag } from '@/app/(pages)/memo/_components/PostTag';
import { getTagCardBorderColor } from '@/app/(pages)/memo/_utils/tags';
import { cn } from '@/libs/utils/classNames';
import { formatDate } from '@/libs/utils/date';

export const PostCard = <T extends string>(props: {
  title: string;
  href: Route<T>;
  date: string;
  tags: { name: string; color: string }[];
  className?: string;
}) => {
  const { title, href, date, tags, className } = props;

  return (
    <Link
      href={href}
      className={cn(
        'inline-block overflow-hidden rounded-lg border-4 bg-surface-02 text-fg-01 no-underline',
        tags[0] && getTagCardBorderColor(tags[0].color),
        className,
      )}
    >
      <article className="h-full flex flex-col justify-between">
        <div className="px-4 pb-4 pt-2 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            {date && (
              <div className="mt-1 text-base text-fg-03">
                {formatDate(date)}
              </div>
            )}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <PostTag key={tag.name} name={tag.name} color={tag.color} />
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};
