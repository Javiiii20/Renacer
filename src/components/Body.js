import React from 'react';
import styles from './estilos.module.css';

export const Body = () => {
  const scrollToFormulario = () => {
    // Obtener la referencia al elemento del formulario
    const ref = document.getElementById("formulario");
    // Desplazar la ventana hasta el formulario
    ref.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className={styles.text}>
      <div className={styles.section}>
        <h2 className={styles.title}>Tu bienestar mental es nuestra prioridad</h2>
        <p className={styles.paragraph}>
        En la Clínica Psicológica "Renacer", tu bienestar mental es nuestra principal prioridad. Nos enorgullece brindar un ambiente de apoyo y comprensión, donde cada paso que das hacia la salud mental se encuentra respaldado por nuestra psicóloga profesional.
        En "Renacer", contamos con una psicóloga altamente capacitada en diversas áreas de la salud mental. Se especializa en el tratamiento de una amplia gama de trastornos y desafíos emocionales, desde la depresión y la ansiedad hasta los problemas de pareja, familiares y de adicciones.
        Se emplea un enfoque personalizado, adaptando las terapias a las necesidades únicas de cada paciente. <br/><br/> Se utilizan técnicas probadas y respaldadas por la investigación, como la terapia cognitivo-conductual, la terapia de aceptación y compromiso, y la terapia psicodinámica, entre otras.
        Además de las sesiones individuales, ofrecemos terapia de pareja y talleres educativos sobre temas relevantes para la salud mental. Nuestro objetivo es empoderar a nuestros pacientes con herramientas y estrategias para afrontar los desafíos de la vida cotidiana y alcanzar un bienestar emocional duradero.
        En "Renacer", nos esforzamos por brindar un entorno seguro, confidencial y libre de juzgamiento, donde cada individuo pueda sentirse cómodo y respetado. Estamos aquí para acompañarte en tu viaje hacia una vida más plena y satisfactoria. Únete a nosotros y comienza tu camino hacia la sanación y el crecimiento personal.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Nuestra Misión</h2>
        <p className={styles.paragraph}>
        La misión de la Clínica Psicológica "Renacer" es ofrecer un espacio seguro y acogedor donde los pacientes puedan recibir terapia psicológica de calidad, con profesionales comprometidos con su bienestar emocional. Nuestra visión es ser reconocidos como líderes en la atención psicológica, promoviendo la salud mental y el equilibrio emocional en la comunidad.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Contáctanos Hoy!</h2>
        <p className={styles.paragraph}>
          Estaremos encantados de ser parte de tu viaje hacia la recuperación y el crecimiento. No estás solo en esto. Si estás listo para dar el paso hacia una mejor salud mental, reserva tu cita hoy mismo!
        </p>
        <div style={{marginTop: "20px"}}>

            <button onClick={scrollToFormulario} type="button" className={styles.cita}>Haz tu cita</button>

        </div>
      </div>
    </section>
  );
};
