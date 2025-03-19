import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import Planes from './Planes';
import '../estilos/Listado.css';
import supabase from '../supabaseClient';

function Listado() {
  const [planes, setPlanes] = useState([]);

  // Cargar planes
  useEffect(() => {
    const obtenerPlanes = async () => {
      const { data, error } = await supabase.from('Planes').select('*');
      if (error) {
        console.error('Error al obtener planes:', error.message);
      } else {
        setPlanes(data);
      }
    };
    obtenerPlanes();
  }, []);

  // Agregar un nuevo plan
  const agregarPlan = async (plan) => {
    if (plan.texto.trim()) {
      plan.texto = plan.texto.trim();
      const { data, error } = await supabase
        .from('Planes')
        .insert([{ descripcion: plan.texto, completado: false }])
        .select(); 

      if (error) {
        console.error('Error al agregar el plan:', error.message);
      } else {
        setPlanes([data[0], ...planes]);
      }
    }
  };

  // Eliminar un plan
  const eliminarPlan = async (id) => {
    const { error } = await supabase.from('Planes').delete().eq('id', id);

    if (error) {
      console.error('Error al eliminar el plan:', error.message);
    } else {
      setPlanes(planes.filter(plan => plan.id !== id));
    }
  };

  // Completar o descompletar
  const completarPlan = async (id, estadoActual) => {
    const { error } = await supabase
      .from('Planes')
      .update({ completado: !estadoActual })
      .eq('id', id);

    if (error) {
      console.error('Error al actualizar el estado:', error.message);
    } else {
      setPlanes(planes.map(plan => 
        plan.id === id ? { ...plan, completado: !estadoActual } : plan
      ));
    }
  };

  return (
    <>
      <Formulario onSubmit={agregarPlan} />
      <div className='listado'>
        {planes.map((plan) => 
          <Planes
            key={plan.id}
            id={plan.id}
            texto={plan.descripcion} // Ajuste al nombre en Supabase
            completado={plan.completado}
            eliminar={eliminarPlan}
            completar={() => completarPlan(plan.id, plan.completado)}
          />
        )}
      </div>
    </>
  );
}

export default Listado;