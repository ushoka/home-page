import { cacheLife } from 'next/cache';

const startYear = 2020;

export const Footer: React.FC = async () => {
  'use cache';
  cacheLife('max');

  const currentYear = new Date().getFullYear();
  const copyrightYears =
    currentYear === startYear ? currentYear : `${startYear}-${currentYear}`;

  return (
    <footer className="pt-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pl-[calc(env(safe-area-inset-left)+1rem)] pr-[calc(env(safe-area-inset-right)+1rem)] text-fg-02">
      <p className="text-sm text-center font-display">
        Copyright @ {copyrightYears} Usho Ka (Yuxiao He). All rights reserved.
      </p>
    </footer>
  );
};
