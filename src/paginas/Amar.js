import Tecla from '../componentes/Tecla';
import Pantalla from '../componentes/Pantalla';
import Limpiar from '../componentes/Limpiar';
import './Amar.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Amar() {

  const [entrada, setEntrada] = useState('');

  const agregarEntrada = valor => {
    setEntrada(entrada + valor);
  };

  const calcularResultado = () => {
    if (entrada) {
      try {
        setEntrada(evaluate(entrada).toString());
      } catch (error) {
        alert('La expresión matemática ingresada no es válida');
        setEntrada('');
      }
    } else {
      alert('Por favor, ingresa valores para realizar un cálculo');
    }
  };

  return (
    <div className='amar'>
      <h1>Cuánto me amas...</h1>
      <div className='calculadora'>
        <Pantalla pantalla={entrada}/>
        <div className='fila'>
          <Tecla manejarClic={agregarEntrada}>
            1
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            2
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            3
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            +
          </Tecla>
        </div>
        <div className='fila'>
          <Tecla manejarClic={agregarEntrada}>
            4
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            5
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            6
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            -
          </Tecla>
        </div>
        <div className='fila'>
          <Tecla manejarClic={agregarEntrada}>
            7
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            8
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            9
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            *
          </Tecla>
        </div>
        <div className='fila'>
          <Tecla manejarClic={calcularResultado}>
            =
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            0
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            .
          </Tecla>
          <Tecla manejarClic={agregarEntrada}>
            /
          </Tecla>
        </div>
        <div className='fila'>
          <Limpiar manejarLimpiar={() => setEntrada('')}>
            Borrar
          </Limpiar>
        </div>
      </div>
    </div>
  );  
}

export default Amar;