import React, { useState, useEffect } from 'react';
import Carta from '../componentes/Carta';
import './Cartas.css';
import supabase from '../supabaseClient';

function Cartas() {

  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    async function fetchCartas() {
      const { data, error } = await supabase.from('Cartas').select('*');
      if (error) {
        console.error('Error al obtener las cartas:', error);
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

        // Ordenar las cartas por fecha ascendente
        const cartasOrdenadas = data.sort((b, a) => parseFecha(a.fecha) - parseFecha(b.fecha));
        setCartas(cartasOrdenadas);
      }
    }

    fetchCartas();
  }, []);
  return (
    <div className='cartas'>
      <h1>Nuestras cartas</h1>
      {cartas.map((carta) => (
        <Carta
          key={carta.id}
          titulo={carta.titulo}
          autor={carta.autor}
          fecha={carta.fecha}
          contenido={carta.contenido}
        />
      ))}
    </div>
  );
}

export default Cartas;