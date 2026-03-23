import { cn } from '@/libs/utils/classNames';

export const SKIP_NAV_MAIN_CONTENT_ID = 'main-content';

export const SkipNavLink: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <a
      href={`#${SKIP_NAV_MAIN_CONTENT_ID}`}
      className={cn(
        'fixed left-4 top-0 inline-block -translate-y-full bg-surface-01 px-3 py-2 font-bold text-fg-01 transition-transform focus:translate-y-2 motion-reduce:transition-none',
        className,
      )}
    >
      Skip to main content
    </a>
  );
};
