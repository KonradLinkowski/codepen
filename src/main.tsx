import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { CodeContextProvider } from './code.context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CodeContextProvider>
      <App />
    </CodeContextProvider>
  </React.StrictMode>
);
