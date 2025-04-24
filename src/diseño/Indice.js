import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../estilos/Indice.css';
import Menu from '../componentes/Menu';
import { useAuth } from '../AuthContext';

function Indice({ contenidoExtra = null }) {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);
  const { user } = useAuth();

  const abrirMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const esPrincipal = location.pathname === '/' || location.pathname === '/login';

  const elementos = user
    ? [
        { text: 'Inicio', link: '' },
        { text: 'Calculadora', link: 'amar' },
        { text: 'Cartas', link: 'cartas' },
        { text: 'Contador', link: 'querer' },
        { text: 'Planes', link: 'plan' },
        { text: 'Viajes', link: 'viaje' },
      ]
    : [{ text: 'Iniciar Sesión', link: 'login' }];

  return (
    <div className='indice'>
      {esPrincipal && (
        <h1 className='menu-texto' onClick={abrirMenu}>
          Esto solo es una página que dice que te quiero...
        </h1>
      )}

      {esPrincipal && (
        <Menu esVisible={menuVisible} elementos={elementos} />
      )}

      {contenidoExtra}

    </div>
  );
}

export default Indice;
