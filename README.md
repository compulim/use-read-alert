# `use-read-alert`

A callback hook to read assertive alert by the screen reader.

## Background

## How to use

Installs the provider component. The provider component is required to use the `useReadAlert` hook.

```tsx
React.createRoot(document.getElementById('root')).render(
  <ReadAlertProvider>
    <App />
  </ReadAlertProvider>
);
```

Then, in your component, calls the callback function to read the alert message.

```tsx
const readAlert = useReadAlert();

readAlert('Hello, World!');
```

## API

```ts
function ReadAlertProvider(PropsWithChildren<{
   alertClassName?: string;
}>);

function useReadAlert(): (message: string) => void;
```

By default, the `alert` role will be hidden using CSS. If you prefer to hide it using your own CSS, you can provide an `alertClassName`.

## Behaviors

## Contributions

Like us? [Star](https://github.com/compulim/use-read-alert/stargazers) us.

Want to make it better? [File](https://github.com/compulim/use-read-alert/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/use-read-alert/pulls) a pull request.
