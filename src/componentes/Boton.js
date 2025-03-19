import React from 'react';
import '../estilos/Boton.css';

function Boton({texto, botonClic, manejarClic}) {
  return (
    <button
      className={botonClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;