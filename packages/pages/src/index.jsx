import { createRoot } from 'react-dom/client';
import { UseReadAlertProvider } from 'use-read-alert';
import React from 'react';

import App from './App';

createRoot(document.getElementById('root')).render(
  <UseReadAlertProvider>
    <App />
  </UseReadAlertProvider>
);
