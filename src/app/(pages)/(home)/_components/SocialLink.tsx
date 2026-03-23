import type React from 'react';

export const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  text: string;
}> = ({ href, icon, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-fg-02 motion-safe:transition-colors hover:text-fg-03 sm:justify-start"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};
