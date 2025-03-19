import React, { useState, useEffect } from 'react';
import './Viaje.css';
import Viajes from '../componentes/Viajes';
import supabase from '../supabaseClient';

function Viaje() {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    async function fetchViajes() {
      const { data, error } = await supabase.from('Viajes').select('*');
      if (error) {
        console.error('Error al obtener los viajes:', error);
      } else {

        // Convertir "Mes de Año" en un objeto Date
        const parseFecha = (fecha) => {
          const meses = {
            enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
            julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
          };

          const partes = fecha.toLowerCase().split(' de '); // Ejemplo: ["octubre", "2022"]
          const mes = meses[partes[0]];
          const año = parseInt(partes[1], 10);
          return new Date(año, mes, 1); // Se asume el primer día del mes
        };

        // Ordenar los viajes por fecha ascendente
        const viajesOrdenados = data.sort((b, a) => parseFecha(a.fecha) - parseFecha(b.fecha));
        setViajes(viajesOrdenados);
      }
    }

    fetchViajes();
  }, []);

  return (
    <div className='viaje'>
      <h1>Un paseo por algunas de nuestras aventuras</h1>
      {viajes.map((viaje) => (
        <Viajes
          key={viaje.id}
          imagen={viaje.imagen}
          nombre={viaje.nombre}
          fecha={viaje.fecha}
          texto={viaje.descripcion}
        />
      ))}
    </div>
  );
}

export default Viaje;