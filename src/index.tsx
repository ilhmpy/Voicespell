import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './globalstyles';
import reportWebVitals from './reportWebVitals';
import "./i18n/i18n";
import { Languages } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <App />
        <GlobalStyles />
        <Languages />
  </React.StrictMode>
);

reportWebVitals();
