import Item from './Item';
import '../estilos/Menu.css';
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Menu({ esVisible, elementos }) {

  const [inicio, setInicio] = useState(0); // Índice inicial del grupo visible
  const elementosPorPagina = 4; // Número máximo de elementos visibles

  const avanzar = () => {
    if (inicio + elementosPorPagina < elementos.length) {
      setInicio(inicio + elementosPorPagina);
    }
  };

  const retroceder = () => {
    if (inicio > 0) {
      setInicio(inicio - elementosPorPagina);
    }
  };

  const elementosVisibles = elementos.slice(inicio, inicio + elementosPorPagina);

  return (
    <div className={`menu-desplegable ${esVisible ? 'menu-visible' : ''}`}>
      <ul className="menu-listado">
        {/* Flecha izquierda: solo visible si no estamos en la primera página */}
        {inicio > 0 && (
          <li className="menu-item boton-flecha izquierda" onClick={retroceder}>
            <AiOutlineLeft />
          </li>
        )}

        {/* Mostrar los elementos visibles */}
        {elementosVisibles.map((elemento, index) => (
          <Item key={index} text={elemento.text} link={elemento.link} esUltimo={index === elementosVisibles.length - 1}/>
        ))}

        {/* Flecha derecha: solo visible si hay más elementos por mostrar */}
        {inicio + elementosPorPagina < elementos.length && (
          <li className="menu-item boton-flecha derecha" onClick={avanzar}>
            <AiOutlineRight />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;