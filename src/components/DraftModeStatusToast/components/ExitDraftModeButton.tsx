export const ExitDraftModeButton: React.FC = () => {
  return (
    <a
      href="/api/draft/disable"
      className="bg-fg-01 px-2 py-1 text-sm text-surface-01 no-underline"
    >
      Exit
    </a>
  );
};
