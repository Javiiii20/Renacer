import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './estilos.module.css';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://rbackend-xo9l.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }
  
      // Si la solicitud fue exitosa, llamar a la función onLogin
      onLogin();
      // Actualizamos el estado para reflejar que el usuario ha iniciado sesión
      setIsLoggedIn(true);
      // Mostrar una alerta de bienvenida
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenida Lilian!',
        text: 'Has iniciado sesión correctamente.',
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      // Mostrar una alerta de error
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Credenciales incorrectas',
      });
    }
  };

  // Si el usuario ya está autenticado, redirigir a la página de administración
  if (isLoggedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username" className={styles.label}>Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          required
        /><br />
        <label htmlFor="password" className={styles.label}>Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        /><br />
        <button type="submit" className={styles.button}>Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
