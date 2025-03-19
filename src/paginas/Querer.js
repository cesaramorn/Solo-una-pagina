import { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import Boton from '../componentes/Boton';
import Contador from '../componentes/Contador';
import './Querer.css';

function Querer() {
  const [numClics, setNumClics] = useState(0);
  const [contadorId, setContadorId] = useState(null);

  useEffect(() => {
    const obtenerContador = async () => {
      const { data, error } = await supabase
        .from('Contador')
        .select('*')
        .single();
    
      if (error) {
        console.error('Error al obtener contador:', error);
      } else {
        setNumClics(data.contador);
        setContadorId(data.id);
      }
    };

    obtenerContador();
  }, []);

  const manejarClic = async () => {
    
    if (!contadorId) return; // Evita actualizar si aún no tenemos el ID

    const nuevoValor = numClics + 1;
    setNumClics(nuevoValor);

    const { error } = await supabase
      .from('Contador')
      .update({ contador: nuevoValor })
      .eq('id', contadorId);

    if (error) {
      console.error('Error al actualizar contador:', error);
    }
  };

  const reiniciarContador = () => {
    const query = 'vídeos de gatitos bonitos para que mi novia me vuelva a querer';
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <div className='querer'>
      <h1>Cuánto me quieres...</h1>
      <Contador numClics={numClics} />
      <Boton texto='Más' botonClic={true} manejarClic={manejarClic} />
      <Boton texto='Reiniciar' botonClic={false} manejarClic={reiniciarContador} />
    </div>
  );
}

export default Querer;