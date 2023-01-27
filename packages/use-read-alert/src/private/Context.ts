import { createContext } from 'react';

type Type = { readAlert: (message: string) => void };

const Context = createContext<Type | undefined>(undefined);

Context.displayName = 'UseReadAlertContext';

export default Context;
