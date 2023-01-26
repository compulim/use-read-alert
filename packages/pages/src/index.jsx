import { createRoot } from 'react-dom/client';
import { ReadAlertComposer } from 'use-read-alert';
import React from 'react';

import App from './App';

createRoot(document.getElementById('root')).render(
  <ReadAlertComposer>
    <App />
  </ReadAlertComposer>
);
