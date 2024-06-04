import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './estilos.module.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [motivo, setMotivo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [esFinDeSemana, setEsFinDeSemana] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    const inputFecha = document.getElementById("fecha");

    const validarFecha = () => {
      const fechaSeleccionada = new Date(inputFecha.value);
      const dia = fechaSeleccionada.getDay();
      setEsFinDeSemana(dia === 5 || dia === 6);
    };

    inputFecha.addEventListener("input", validarFecha);

    return () => {
      inputFecha.removeEventListener("input", validarFecha);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (esFinDeSemana) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'No se permiten sábados ni domingos. Por favor, selecciona otra fecha.',
      });
      return;
    }

    if (!captchaValue) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Por favor, verifica que no eres un robot.',
      });
      return;
    }

    try {
      const formData = {
        nombre,
        telefono,
        motivo,
        fecha,
        hora,
        captchaValue,
      };

      const ocupadoResponse = await axios.get(`https://rbackend-xo9l.onrender.com/api/citas/disponibilidad`, { params: { fecha, hora } });
      if (ocupadoResponse.data.disponible === true) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'La hora seleccionada ya está ocupada. Por favor, elige otra hora.',
        });
        return;
      }

      const response = await axios.post('https://rbackend-xo9l.onrender.com/api/citas', formData);

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Cita enviada correctamente',
        });
        setNombre('');
        setTelefono('');
        setMotivo('');
        setFecha('');
        setHora('');
        setCaptchaValue(null); // Reiniciar el valor del captcha
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Error al enviar la cita',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al enviar la cita',
      });
      console.error('Error al enviar la cita:', error);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div ref={ref} id="formulario" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", padding: "16px" }}>
      <div className={styles.contacto} style={{ maxWidth: "600px", textAlign: "center", padding: "32px" }}>
        <h2 className={styles.title}>¡Puedes reservar tu cita desde aquí!</h2>
        <p>¡Reserva tu cita ahora! Completa el siguiente formulario y asegura tu espacio para recibir la atención que mereces.
          Una vez reservada, te estaremos esperando el día y la hora que seleccionaste. En nuestra clínica, te garantizamos un ambiente acogedor y profesionales comprometidos a brindarte el mejor cuidado.
          ¡Estamos emocionados de conocerte y acompañarte en tu viaje hacia el bienestar!</p>
      </div>
      <section id={styles.cita_form}>
        <h2>Complete el siguiente formulario para agendar su cita:</h2>
        <form onSubmit={handleSubmit} id={styles.cita_form2}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

          <label htmlFor="motivo">Motivo de la consulta:</label>
          <textarea id="motivo" name="motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} required></textarea>

          <label htmlFor="fecha-hora">Fecha y Hora:</label>
          <div className={styles.date_time_inputs}>
            <input type="date" id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
            <select id="hora" name="hora" value={hora} onChange={(e) => setHora(e.target.value)} required>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
            </select>
          </div>
          <div className={styles.captchaContainer}>
            <ReCAPTCHA
              sitekey="6LfuPe8pAAAAABY54Jb89ryzoxNOjAv8EYGDGC3g" //comentario
              onChange={handleCaptchaChange}
            />
          </div>
          <button type="submit" id={styles.enviar_cita}>Agendar Cita</button>
        </form>
      </section>
    </div>
  );
};

export default Formulario;
