import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './Aplicacion.css';
import Inicio from './paginas/Inicio';
import Viaje from './paginas/Viaje';
import Querer from './paginas/Querer';
import Amar from './paginas/Amar';
import Plan from './paginas/Plan';
import Cartas from './paginas/Cartas';
import Login from './paginas/Login';
import Diccionario from './paginas/Diccionario';
import Principal from './diseño/Principal';


function Aplicacion() {
  return (
    <AuthProvider>
      <div className='fondo-aplicacion'>
        <Router>

          <div className='clouds'>
            <div className='cloud cloud1'></div>
            <div className='cloud cloud2'></div>
            <div className='cloud cloud3'></div>
            <div className='cloud cloud4'></div>
            <div className='cloud cloud5'></div>
          </div>

          <Routes>

            {/* Ruta que usa Indice */}
            <Route path='/' element={<Inicio />} />
            <Route path='/login' element={<Login />} />
            
            {/* Rutas que usan Principal */}
            <Route element={<Principal />}>
              <Route path='/viaje' element={<Viaje />} />
              <Route path='/querer' element={<Querer />} />
              <Route path='/amar' element={<Amar />} />
              <Route path='/plan' element={<Plan />} />
              <Route path='/diccionario' element={<Diccionario />} />
              <Route path='/cartas' element={<Cartas />} />
            </Route>
            
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default Aplicacion;