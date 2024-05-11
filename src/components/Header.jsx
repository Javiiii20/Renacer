import { useState, useEffect } from 'react';
import styles from './estilos.module.css'


const Header = () => {
  
  const scrollToFormulario = () => {
    const ref = document.getElementById("formulario");
    ref.scrollIntoView({ behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verificar la posición de desplazamiento
      if (window.scrollY > 0) {
        // Si se ha desplazado, establecer el estado "scrolled" en verdadero
        setScrolled(true);
      } else {
        // Si no se ha desplazado, establecer el estado "scrolled" en falso
        setScrolled(false);
      }
    };

    // Agregar el evento de escucha del scroll cuando se monta el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de escucha del scroll cuando se desmonta el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente


  return (
    <>
    <nav className={scrolled ? styles.scrolled : ''}>
    <div className={styles.logo}>
      <img  src="logopng.png" alt="logo" />
    </div>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a style={{cursor:'pointer'}} onClick={scrollToFormulario}>Haz tu cita</a></li>
    </ul>
  </nav>
    <header>
    <div className={styles.headline}>
      <div className={styles.inner}>
        <h1>Clínica Psicológica <p></p>"Renacer"</h1>
        <p>Desliza para ver</p>
      </div>
    </div>
  </header>
  </>
  )
}

export default Header;



