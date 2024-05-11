import MediaCard from './components/MediaCard';
import GoogleMap from './components/GoogleMap';
import { Body } from './components/Body';
import Formulario from './components/Formulario';

 
export const HomePage =  () => {
  return (
    <>
      <div style={{ background: 'white', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '32px', gap: '16px' }}>
        <MediaCard
          image={"./niño.jpg"}
          title={"Terapia Infantil"}
          description={"La terapia infantil o psicoterapia infantil es un tipo de intervención terapéutica que tiene como finalidad principal potenciar el bienestar emocional y social del niño."}
        />
        <MediaCard
          image={"./pareja.jpg"}
          title={"Terapia de Pareja"}
          description={"Una relación de pareja no siempre es fácil, hay que atravesar numerosas situaciones a nivel personal, a nivel de pareja y circunstancias de la vida que pueden afectar a la relación."}
        />
        <MediaCard
          image={"./conducta.jpg"}
          title={"Cambio de conducta"}
          description={"A través de un enfoque estructurado y estrategias específicas, aprenderás a identificar y superar obstáculos, desarrollando la capacidad de lograr cambios positivos y duraderos en tu vida."}
        />
      </div>
      <Body />
      <GoogleMap />
      <Formulario />
    </>
  );
}

