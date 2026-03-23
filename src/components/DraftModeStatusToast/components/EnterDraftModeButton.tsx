export const EnterDraftModeButton: React.FC = () => {
  return (
    <a
      href={`/api/draft/enable?secret=${process.env.DRAFT_API_SECRET}`}
      className="bg-fg-01 px-2 py-1 text-sm text-surface-01 no-underline"
    >
      Enter
    </a>
  );
};
