import React, { useState, useEffect } from 'react';
import Palabra from '../componentes/Palabra';
import supabase from '../supabaseClient';
import './Diccionario.css';

function Diccionario() {
  const [palabras, setPalabras] = useState([]);

  useEffect(() => {
    async function fetchPalabras() {
      const { data, error } = await supabase.from('Palabras').select('*');
      if (error) {
        console.error('Error al obtener las palabras:', error);
      } else {
        // Opcional: podrías ordenarlas alfabéticamente si lo deseas
        const palabrasOrdenadas = data.sort((a, b) =>
          a.palabra.localeCompare(b.palabra)
        );
        setPalabras(palabrasOrdenadas);
      }
    }

    fetchPalabras();
  }, []);

  return (
    <div className='diccionario'>
      <h1>Nuestras palabras</h1>
      {palabras.map((item) => (
        <Palabra
          key={item.id}
          palabra={item.palabra}
          definicion={item.definicion}
          autor={item.autor}
        />
      ))}
    </div>
  );
}

export default Diccionario;