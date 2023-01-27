import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import Context from './private/Context';

import type { CSSProperties, PropsWithChildren } from 'react';

const HIDE_ALERT_AFTER_MS = 1000;

const STYLE: CSSProperties = {
  color: 'transparent',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  whiteSpace: 'nowrap',
  width: 1
};

type Props = PropsWithChildren<{
  alertClassName?: string;
}>;

const UseReadAlertProvider = memo(({ alertClassName, children }: Props) => {
  const [messageObject, setMessageObject] = useState<{ message: string; shouldClear: boolean }>({
    message: '',
    shouldClear: false
  });

  const readAlert = useCallback(
    (message: string): void => setMessageObject(prevMessageObject => ({ message, shouldClear: !!prevMessageObject })),
    [setMessageObject]
  );

  const contextValue = useMemo(() => ({ readAlert }), [readAlert]);

  useEffect(() => {
    if (messageObject.shouldClear) {
      return setMessageObject(({ message }) => ({ message, shouldClear: false }));
    }

    if (messageObject.message) {
      const timeout = setTimeout(() => setMessageObject({ message: '', shouldClear: false }), HIDE_ALERT_AFTER_MS);

      return () => clearTimeout(timeout);
    }
  }, [messageObject]);

  return (
    <Context.Provider value={contextValue}>
      {children}
      <span className={alertClassName} role="alert" style={typeof alertClassName === 'undefined' ? STYLE : undefined}>
        {(!messageObject.shouldClear && messageObject.message) || ''}
      </span>
    </Context.Provider>
  );
});

UseReadAlertProvider.displayName = 'UseReadAlertProvider';

export default UseReadAlertProvider;
