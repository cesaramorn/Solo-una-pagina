import React from 'react';
import '../estilos/Planes.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Planes({ id, texto, completado, completar, eliminar }) {
	return (
	  <div className={completado ? 'plan-contenedor completado' : 'plan-contenedor'}>
		<div className='plan-texto' onClick={completar}>
		  {texto}
		</div>
		<div className='plan-contenedor-iconos' onClick={() => eliminar(id)}>
		  <AiOutlineCloseCircle className='plan-icono'/>
		</div>
	  </div>
	);
}

export default Planes;