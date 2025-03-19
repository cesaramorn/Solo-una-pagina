import React from 'react';
import ReactDOM from 'react-dom/client';
import Aplicacion from './Aplicacion';
import './index.css'; // Estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>
);

