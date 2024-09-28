import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Crear el root para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
