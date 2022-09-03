import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CatFactsContextProvider } from './context/CatFacts/catFactsContext';
import { DarkModeContextProvider } from './context/themeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <CatFactsContextProvider>
        <App />
      </CatFactsContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
