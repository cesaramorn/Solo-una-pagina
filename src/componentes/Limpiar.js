import React from 'react';
import '../estilos/Limpiar.css';

const Limpiar = (props) => (
	<div className='limpiar' onClick={props.manejarLimpiar}>
		{props.children}
	</div>
);

export default Limpiar;