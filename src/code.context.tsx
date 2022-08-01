import { createContext, ReactNode, useContext, useRef } from 'react';

export type Data = {
  html?: string;
  css?: string;
  js?: string;
};

type Listener = (data: Data) => void;

export interface CodeContextData {
  addRunListener: (fn: Listener) => void;
  removeRunListener: (fn: Listener) => void;
  run: () => void;
  assignData: (data: Data) => void;
}

const CodeContext = createContext<CodeContextData | undefined>(undefined);

export const CodeContextProvider = ({ children }: { children: ReactNode }) => {
  const listenersRef = useRef<Listener[]>([]);
  const dataRef = useRef<Data>({});

  const addRunListener = (listener: Listener) => {
    listenersRef.current.push(listener);
  };

  const removeRunListener = (listener: Listener) => {
    listenersRef.current.splice(listenersRef.current.indexOf(listener));
  };

  const run = () => {
    listenersRef.current.forEach((listener) => listener(dataRef.current));
  };

  const assignData = (data: Data) => {
    dataRef.current = data;
  };

  return (
    <CodeContext.Provider
      value={{ addRunListener, removeRunListener, run, assignData }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error(
      '`useCodeContext` can only be used inside `CodeContextProvider`'
    );
  }

  return context;
};
