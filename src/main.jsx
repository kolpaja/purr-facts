import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loading from './components/Loading';
import { CatFactsContextProvider } from './context/catFactsContext';
import { DarkModeContextProvider } from './context/themeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <DarkModeContextProvider>
        <CatFactsContextProvider>
          <App />
        </CatFactsContextProvider>
      </DarkModeContextProvider>
    </Suspense>
  </React.StrictMode>
);
