import { cn } from '@/libs/utils/classNames';

export function AppBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div
        className={cn(
          'absolute inset-0',
          // sizing tokens
          '[--grid-size:10rem]',
          '[--dot-size:2rem]',
          '[--dot-offset:calc(var(--dot-size)*2)]',
          '[--frame-inset:clamp(0.5rem,2vw,1rem)]',
          '[--grid-line-opacity:4%]',
          '[--grid-dot-opacity:5%]',
          // Tailwind-provided colors via CSS vars (tailwindcss/theme.css)
          '[--grid-line:color-mix(in_oklab,var(--color-slate-950)_var(--grid-line-opacity),transparent)]',
          '[--grid-dot:color-mix(in_oklab,var(--color-slate-950)_var(--grid-dot-opacity),transparent)]',
          '[--glow:color-mix(in_oklab,var(--color-neutral-400)_10%,transparent)]',
          'dark:[--grid-line:color-mix(in_oklab,var(--color-slate-50)_var(--grid-line-opacity),transparent)]',
          'dark:[--grid-dot:color-mix(in_oklab,var(--color-slate-50)_var(--grid-dot-opacity),transparent)]',
          'dark:[--glow:color-mix(in_oklab,var(--color-neutral-400)_15%,transparent)]',
          // background layers
          'bg-[radial-gradient(1100px_520px_at_50%_-10%,var(--glow),transparent_60%),linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px),radial-gradient(circle_at_1px_1px,var(--grid-dot)_1px,transparent_1px)]',
          'bg-size-[auto,var(--grid-size)_var(--grid-size),var(--grid-size)_var(--grid-size),var(--dot-size)_var(--dot-size)]',
          // align grid/dots origin; offset dots to avoid grid lines
          'bg-position-[50%_0,var(--frame-inset)_var(--frame-inset),var(--frame-inset)_var(--frame-inset),calc(var(--frame-inset)+var(--dot-offset))_calc(var(--frame-inset)+var(--dot-offset))]',
        )}
      />
    </div>
  );
}
