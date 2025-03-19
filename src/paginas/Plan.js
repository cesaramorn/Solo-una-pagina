import './Plan.css';
import Listado from '../componentes/Listado';

function Plan() {
	return (
		<div className='tareas'>
			<h1>Vamos juntos a...</h1>
			<div className='lista'>
				<h2>Listado de planes</h2>
				<Listado />
			</div>
		</div>
	); 
}

export default Plan;