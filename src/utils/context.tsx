import {
  Dispatch,
  FunctionComponent,
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

interface ContextReturn<T, U = T> {
  useHook: () => ContextType<T>;
  Provider: (props: ProviderProps<U>) => JSX.Element;
  Consumer: FunctionComponent<{
    children: (value: ContextType<T>) => JSX.Element;
  }>;
}

export const contextGenerator = <T, U = T>(
  defaultValue: T,
  name?: string,
): ContextReturn<T, U> => {
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
    Provider: ({ children, value }) => {
      let v = useContext(ctx)[0];
      if (typeof v == 'object') Object.merge(v, value ?? {});
      else v = value as any;
      return <ctx.Provider value={useState(v)}>{children}</ctx.Provider>;
    },
    Consumer: ({ children }) => children(useContext(ctx)),
  };
};
