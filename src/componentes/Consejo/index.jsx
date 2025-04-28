import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
import './style.css';

function Consejo() {
  const { id } = useParams();
  const [consejo, setConsejo] = useState(null);

  useEffect(() => {
    const obtenerConsejo = async () => {
      const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const json = await res.json();
      setConsejo(json.slip);
    };

    obtenerConsejo();
  }, [id]);

  if (!consejo) return <p>Cargando consejo...</p>;

  return (
    <div className="c-consejo">
      <h1>Consejo #{consejo.id}</h1>
      <p>{consejo.advice}</p>
    </div>
  );
}

export default Consejo;