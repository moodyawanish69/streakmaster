// Main entry point for the app
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../Styles/globals.css';
import '../Styles/utilities.css';
import App from './AppMain.jsx';

// Get the root element from HTML
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
