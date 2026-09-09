'use client';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

let initialized = false;

async function initAxe() {
  const axe = (await import('@axe-core/react')).default;
  await axe(React, ReactDOM, 1000);
}

export const A11yReporter: React.FC = () => {
  useEffect(() => {
    if (initialized) return;
    void initAxe().then(() => {
      initialized = true;
    });
  }, []);

  return null;
};
