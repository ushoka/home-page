import { draftMode } from 'next/headers';
import { EnterDraftModeButton } from '@/components/DraftModeStatusToast/components/EnterDraftModeButton';
import { ExitDraftModeButton } from '@/components/DraftModeStatusToast/components/ExitDraftModeButton';
import { cn } from '@/libs/utils/classNames';

export const DraftStatusToast = async ({
  className,
}: {
  className?: string;
}) => {
  const { isEnabled } = await draftMode();

  if (!isEnabled && process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <aside
      aria-label="Draft Mode"
      className={cn('fixed bottom-4 left-4', className)}
    >
      <span className="flex items-center gap-2 rounded-lg border-2 border-border-03 bg-surface-04 p-2 font-bold text-fg-01">
        Draft Mode
        {isEnabled && <ExitDraftModeButton />}
        {!isEnabled && process.env.NODE_ENV !== 'production' && (
          <EnterDraftModeButton />
        )}
      </span>
    </aside>
  );
};
