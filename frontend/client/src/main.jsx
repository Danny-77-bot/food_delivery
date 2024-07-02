// main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/storeContext.jsx';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
  </BrowserRouter>
);
