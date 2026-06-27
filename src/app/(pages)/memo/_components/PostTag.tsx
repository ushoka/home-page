export const PostTag: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <span className="inline-block border-border-02 font-mono text-xs text-fg-03">
      #{name}
    </span>
  );
};
