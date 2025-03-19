import React from 'react';
import '../estilos/Tecla.css';

function Tecla(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div className={`tecla-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Tecla;