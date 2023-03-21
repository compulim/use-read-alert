import React, { Fragment, useCallback } from 'react';
import { useReadAlert } from 'use-read-alert';

const App = () => {
  const readAlert = useReadAlert();

  const handleClick = useCallback(() => readAlert('Hello, World!'), [readAlert]);

  return (
    <Fragment>
      <h1>useReadAlert demo</h1>
      <button onClick={handleClick} type="button">
        Click me
      </button>
    </Fragment>
  );
};

export default App;
