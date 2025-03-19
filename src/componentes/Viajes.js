import React from 'react';
import '../estilos/Viajes.css';

function Viajes({ imagen, nombre, fecha, texto }) {
  return (
    <div className='contenedor-viaje'>
      <img className='imagen-viaje' src={imagen} alt={`${nombre}`} />
      <div className='contenedor-texto-viaje'>
        <p className='nombre-viaje'><strong>{nombre}</strong></p>
        <p className='fecha-viaje'><strong>{fecha}</strong></p>
        <p className='texto-viaje'>{texto}</p>
      </div>
    </div>
  );
}

export default Viajes;