import React, { useState } from 'react';
import '../estilos/Formulario.css';

function Formulario({ onSubmit }) {
  const [entrada, setEntrada] = useState('');

  const manejarCambio = (e) => {
    setEntrada(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    onSubmit({ texto: entrada });
    setEntrada(''); // Limpiar el campo después de enviar
  };

  return (
    <form className='plan-formulario' onSubmit={manejarEnvio}>
      <input 
        className='plan-input' 
        type='text' 
        placeholder='Escribe un plan' 
        name='texto' 
        value={entrada}
        onChange={manejarCambio} 
      />
      <button className='plan-boton'>Agregar</button>
    </form>
  );
}

export default Formulario;