import { useContext } from 'react';

import ReadAlertContext from './ReadAlertContext';

export default function useReadAlertContext() {
  const contextValue = useContext(ReadAlertContext);

  if (!contextValue) {
    throw new Error('useReadAlertContext() can only used under <ReadAlertComposer>.');
  }

  return contextValue;
}
