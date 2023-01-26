/** @jest-environment jsdom */

import { act } from '@testing-library/react-hooks';
import { cleanup, fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React, { useCallback } from 'react';

import ReadAlertComposer from 'use-read-alert/ReadAlertComposer';
import useReadAlert from 'use-read-alert/useReadAlert';

const App = () => {
  const readAlert = useReadAlert();

  const handleClick = useCallback(() => {
    readAlert('Hello, World!');
  }, [readAlert]);

  return (
    <button onClick={handleClick} type="button">
      Click
    </button>
  );
};

afterEach(cleanup);

test('simple scenario', async () => {
  // GIVEN: A test application with <ReadAlertComposer>.
  const result = render(
    <ReadAlertComposer>
      <App />
    </ReadAlertComposer>
  );

  // THEN: It should have role="alert" setup.
  expect(screen.getByRole('alert')).toBeTruthy();

  act(() => {
    const button = screen.getByText('Click');

    // WHEN: The button is clicked, it will call useReadAlert('Hello, World!').
    button && fireEvent.click(button);
  });

  // THEN: It should read "Hello, World!" using role="alert".
  expect(screen.getByText('Hello, World!')).toBe(screen.getByRole('alert'));

  // TODO: We should use Jest fake timers to advance the clock precisely.
  //       However, it seems there is a bug with @testing-library/react and jest@29 that all Jest advance timers functions are not working properly.

  // THEN: It should remove "Hello, World!" after a second.
  await waitForElementToBeRemoved(() => screen.getByText('Hello, World!'), { timeout: 2000 });
});
