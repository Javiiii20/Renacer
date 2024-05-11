import styles from './estilos.module.css'

const GoogleMap = () => (
  <div style={{ background: "white", padding: "16px", display: 'flex', justifyContent: "space-around", alignItems: 'center', flexWrap: "wrap"}}>
    <iframe className={styles.mapa}
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.4384087253173!2d-91.31123958045035!3d14.192605864005394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858f2eb57c145107%3A0xcaa0e9f119c8343a!2sClinica%20Psicol%C3%B3gica%20Integral%20%22Renacer%22!5e0!3m2!1ses-419!2sgt!4v1714937230766!5m2!1ses-419!2sgt"
      width="600"
      height="450"
      style={{ border: 0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div style={{maxWidth: "600px", textAlign: "center", padding: "16px"}}>
    <h1 className={styles.title}>Nuestra ubicación</h1>
    <p>¡Nos encantaría recibirte en nuestro espacio! Nos puedes encontrar en la siguiente ubicación. Aquí, te esperamos con los brazos abiertos para acompañarte en tu viaje hacia el bienestar emocional.  Ven y descubre un entorno cálido y acogedor, diseñado especialmente para ti. Estaremos listo para brindarte el apoyo que necesitas mientras exploras nuevas formas de crecimiento personal.¡Te esperamos con ansias! </p>
    </div>
  </div>
);

export default GoogleMap;
