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

export interface ProviderProps<T> {
  children?: any;
  value?: T;
}

interface ContextReturn<T> {
  useHook: () => ContextType<T>;
  Provider: (props: ProviderProps<T>) => JSX.Element;
  Consumer: FunctionComponent<{
    children: (value: ContextType<T>) => JSX.Element;
  }>;
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
    Provider: ({ children, value }) => (
      <ctx.Provider value={useState(value ?? useContext(ctx)[0])}>
        {children}
      </ctx.Provider>
    ),
    Consumer: ({ children }) => children(useContext(ctx)),
  };
};
