import styles from './estilos.module.css'

export const Footer = () => {
  return (
    <footer>
    <div className={styles.footer_container}>
        <div className={styles.contact_info}>
            <h3>Contacto</h3>
            <p>Teléfono: +502 5454 1686</p>
            <p>Correo electrónico: prenacergt@gmail.com</p>
        </div>
        <div className={styles.social_media}>
            <h3>Encuéntranos en facebook</h3>
            <div className={styles.social_icons}>
            <a href="https://www.facebook.com/ClinicaPsicologiaNuevaConcepcion" target="_blank">
            </a>
          </div>
        </div>
    </div>
    <p className={styles.copyright}>&copy; 2024 Clínica Psicológica "Renacer". Todos los derechos reservados.</p>
    </footer>
  )
}
