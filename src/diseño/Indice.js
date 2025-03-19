import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../estilos/Indice.css';
import Menu from '../componentes/Menu';

function Indice() {

  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  const abrirMenu = () => {
    setMenuVisible(!menuVisible);  // Alterna entre mostrar/ocultar el menú
  };

  // Verifica si estamos en la página principal
  const esPrincipal = location.pathname === '/';

  return (
    <div className='indice'>
      {esPrincipal && (
        <h1 className='menu-texto' onClick={abrirMenu}>
          Esto solo es una página que dice que te quiero...
        </h1>
      )}

      {esPrincipal && 
      <Menu 
        esVisible={menuVisible} 
        elementos={[
          { text: 'Inicio', link: '' },
          { text: 'Calculadora', link: 'amar' },
          { text: 'Cartas', link: 'cartas' },
          { text: 'Contador', link: 'querer' },
          { text: 'Planes', link: 'plan' },
          { text: 'Viajes', link: 'viaje' }
        ]}
      />
      }

    </div>
  );
}

export default Indice;
