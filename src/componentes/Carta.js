import React, { useState } from 'react';
import '../estilos/Carta.css';
import { AiFillCaretUp } from 'react-icons/ai';

function Carta({ autor, titulo, fecha, contenido }) {
  const [expandida, setExpandida] = useState(false);

  const toggleExpandida = () => {
    setExpandida(!expandida);
  };

  return (
    <div
      className={`carta ${expandida ? 'expandida' : ''} ${
        autor === 'Mónica' ? 'autor-monica' : 'autor-cesar'
      }`}
      onClick={toggleExpandida}
    >
      <div className='carta-frontal'>
        <h3>{titulo}</h3>
        <p>{fecha}</p>
      </div>
      <div className='carta-contenido'>
        <p>{contenido}</p>
        <button onClick={toggleExpandida} className='icono-cerrar'>
          <AiFillCaretUp size={24} />
        </button>
      </div>
    </div>
  );
}

export default Carta;