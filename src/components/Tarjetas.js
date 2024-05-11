import React from 'react'
import styles from './estilos.module.css'

export const Tarjetas = () => {
  return (
    <div className={styles.cards_container}>
    <div className="cardContainer inactive">
      <div className="card" data-id="1">
        <div className="side front">
          <div className="img img1"></div>
          <div className="info">
            <h2>Terapia Infantil</h2>
            <p>La terapia infantil o psicoterapia infantil es un tipo de intervención terapéutica que tiene como finalidad principal potenciar el bienestar emocional y social del niño.</p>
              <h3>¿Qué esperar?</h3>
                <p class="back-card">Los niños encuentran un espacio seguro y de apoyo donde pueden expresar sus pensamientos y sentimientos. Durante las sesiones, un terapeuta especializado en niños utilizará técnicas de juego y conversación para ayudar al niño a comprender y manejar sus emociones. Los padres también pueden 
                  participar activamente en el proceso. Espera que tu hijo se sienta más seguro, aprenda habilidades emocionales y mejore su bienestar general.</p>
          </div>
        </div>
        </div>
      </div>
  
    <div className="cardContainer inactive">
      <div className="card" data-id="2">
        <div className="side front">
          <div className="img img2"></div>
          <div className="info">
            <h2>Terapia de pareja</h2>
            <p>Una relación de pareja no siempre es fácil, hay que atravesar numerosas situaciones a nivel personal, a nivel de pareja y circunstancias de la vida que pueden afectar a la relación.</p>
  
              <h3>¿Qué esperar?</h3>
                <p>Es un espacio diseñado para mejorar la comunicación entre las parejas. Durante las sesiones, los terapeutas ayudarán a identificar patrones de comportamiento y a desarrollar estrategias para superar los desafíos. Puede esperar una comunicación más abierta, una mayor empatía y herramientas efectivas para resolver conflictos. 
                  La terapia de pareja puede fortalecer la relación y brindar a las parejas una base sólida para el futuro.</p>
      </div>
    </div>
  </div>
    </div>
  
  
    <div className="cardContainer inactive">
      <div className="card" data-id="3">
        <div className="side front">
          <div className="img img3"></div>
          <div className="info">
            <h2>Cambio de Conducta</h2>
            <p>A través de un enfoque estructurado y estrategias específicas, aprenderás a identificar y superar obstáculos, desarrollando la capacidad de lograr cambios positivos y duraderos en tu vida.</p>
  
              <h3>¿Qué esperar?</h3>
                <p>En la terapia de cambio de conducta, se trabaja en identificar comportamientos no deseados y desarrollar estrategias para cambiarlos. Los terapeutas utilizan técnicas basadas en la evidencia para ayudarte a establecer metas y seguir un plan de acción. Puedes esperar un proceso gradual de cambio, con el apoyo necesario para superar obstáculos y adoptar comportamientos más saludables. </p>
          </div>
        </div>
      </div>
      </div>
  </div>
  
  )
}
