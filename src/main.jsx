import React from 'react';
import { createRoot } from 'react-dom/client';
import '../Styles/globals.css';
import '../Styles/utilities.css';
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
