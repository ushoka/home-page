'use client';

import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <button
        type="button"
        className="mt-8 rounded-lg border-4 border-border-03 bg-surface-02 px-6 py-2 text-lg font-bold text-fg-01 shadow-md hover:bg-surface-04 hover:shadow-lg dark:hover:bg-gray-600"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
