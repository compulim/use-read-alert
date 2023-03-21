import { createRoot } from 'react-dom/client';
import { UseReadAlertProvider } from 'use-read-alert';
import React from 'react';

import App from './App';

const rootElement = document.getElementById('root');

rootElement &&
  createRoot(rootElement).render(
    <UseReadAlertProvider>
      <App />
    </UseReadAlertProvider>
  );
