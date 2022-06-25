import {
  Consumer,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { SetOutsideOfProviderError } from './errors/SetOutsideOfProviderError';

type ContextType<T> = [T, Dispatch<SetStateAction<T>>];

interface ContextReturn<T> {
  useHook: () => ContextType<T>;
  Provider: FunctionComponent<PropsWithChildren>;
  Consumer: Consumer<ContextType<T>>;
}

export const contextGenerator = <T,>(
  defaultValue: T,
  name?: string,
): ContextReturn<T> => {
  const ctx = createContext<ContextType<T>>([
    defaultValue,
    () => {
      const { displayName } = ctx;
      throw new SetOutsideOfProviderError(displayName);
    },
  ]);
  ctx.displayName = name;

  return {
    useHook: () => useContext(ctx),
    Provider: ({ children }) => {
      const state = useState(useContext(ctx)[0]);

      return <ctx.Provider value={state}>{children}</ctx.Provider>;
    },
    Consumer: ctx.Consumer,
  };
};
