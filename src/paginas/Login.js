import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import supabase  from '../supabaseClient.js';
import Indice from '../diseño/Indice';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      // Mensaje personalizado
      if (error.message === 'Invalid login credentials') {
        setError('Correo o contraseña incorrectos. Intenta de nuevo.');
      }
    } else {
      navigate('/');
    }
  };

  const formulario = (
    <form onSubmit={handleLogin} className="formulario-login fila-login" noValidate>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (error) setError(null);
        }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (error) setError(null);
        }}
      />
      <button type="submit">Iniciar sesión</button>
      {error && <p className="error">{error}</p>}
    </form>
  );

  return <Indice contenidoExtra={formulario} />;

};

export default Login;
