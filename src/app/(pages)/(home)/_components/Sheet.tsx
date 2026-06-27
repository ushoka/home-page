import { cn } from '@/libs/utils/classNames';

type SheetProps = {
  heading: string;
  children?: React.ReactNode;
  className?: string;
};

export const Sheet: React.FC<SheetProps> = ({
  heading,
  children,
  className,
}) => {
  return (
    <article
      className={cn(
        'inline-flex flex-col overflow-hidden rounded-lg border-dashed border-2 border-border-03 px-8 py-4 text-fg-01 selection:bg-selection',
        className,
      )}
    >
      <h3 className="text-xl font-bold font-display uppercase">{heading}</h3>
      <div className="mt-4 text-sm">{children}</div>
    </article>
  );
};
