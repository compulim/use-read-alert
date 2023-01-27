/** @jest-environment jsdom */

const { act } = require('@testing-library/react-hooks');
const { cleanup, fireEvent, render, waitForElementToBeRemoved } = require('@testing-library/react');
const { screen } = require('@testing-library/dom');
const React = require('react');

const { default: useReadAlert } = require('use-read-alert/useReadAlert');
const { default: UseReadAlertProvider } = require('use-read-alert/UseReadAlertProvider');

const { useCallback } = React;

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
  // GIVEN: A test application with <UseReadAlertProvider>.
  const result = render(
    <UseReadAlertProvider>
      <App />
    </UseReadAlertProvider>
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
