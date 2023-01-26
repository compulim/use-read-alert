import { createContext } from 'react';

type Type = { readAlert: (message: string) => void };

const ReadAlertContext = createContext<Type | undefined>(undefined);

export default ReadAlertContext;
