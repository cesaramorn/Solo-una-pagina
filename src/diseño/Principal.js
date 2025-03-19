import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../componentes/Menu';
import '../estilos/Principal.css';


function Principal() {
  return (
    <div className='principal'>
      <Menu 
        esVisible={true} 
        elementos={[
          { text: 'Inicio', link: '' },
          { text: 'Calculadora', link: 'amar' },
          { text: 'Cartas', link: 'cartas' },
          { text: 'Contador', link: 'querer' },
          { text: 'Planes', link: 'plan' },
          { text: 'Viajes', link: 'viaje' }
        ]}
      /> {/*Siempre visible*/}
      <Outlet /> {/*Renderiza el contenido de la ruta hija*/}
    </div>
  );
}

export default Principal;