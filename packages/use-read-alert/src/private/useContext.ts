import { useContext as useReactContext } from 'react';

import Context from './Context';

export default function useContext() {
  const contextValue = useReactContext(Context);

  if (!contextValue) {
    throw new Error('<UseReadAlertProvider> must be installed before using this hook.');
  }

  return contextValue;
}
