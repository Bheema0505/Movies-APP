import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <GlobalStyles />
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
  </>
);
