import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './estilos.module.css';

function AdminPage() {
  const [citas, setCitas] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');

  useEffect(() => {
    if (fechaSeleccionada) {
      axios.get(`http://localhost:3001/api/citas/fecha?fecha=${fechaSeleccionada}`)
        .then(response => {
          // Formatear las fechas antes de almacenarlas en el estado local
          const citasFormateadas = response.data.map(cita => {
            const fechaFormateada = cita.fecha.split("T")[0];
            return { ...cita, fecha: fechaFormateada };
          });
          setCitas(citasFormateadas);
        })
        .catch(error => {
          console.error('Error al obtener las citas:', error);
        });
    }
  }, [fechaSeleccionada]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFechaSeleccionada(e.target.fecha.value);
  };

  return (
    <div>
      <h2 className={styles.title} style={{textAlign:"center"}}>Citas Programadas</h2>
      <form onSubmit={handleSubmit} className={styles.seleccionarFecha}>
        <label htmlFor="fecha">Selecciona una fecha:</label>
        <input type="date" id="fecha" name="fecha" required />
        <button type="submit" className={styles.botonFecha}>Filtrar</button>
      </form>
      <div className={styles.citas_container}>
        {citas.map(cita => (
          <div key={cita.id} className={styles.cita_card}>
            <h3 style={{textAlign:"center"}}>{cita.nombre}</h3>
            <p>Teléfono: {cita.telefono}</p>
            <p>Motivo: {cita.motivo}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
