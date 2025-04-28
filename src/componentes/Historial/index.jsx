import { useState, useEffect } from 'react';
import './style.css';

function Historial() {
  const [historial, setHistorial] = useState(
    JSON.parse(localStorage.getItem('historial')) || []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHistorial(JSON.parse(localStorage.getItem('historial')) || []);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="c-historial">
      <h1>Historial de Consejos</h1>
      {historial.length === 0 ? (
        <p>No has visto ningún consejo aún.</p>
      ) : (
        <ul>
          {historial.map((consejo, index) => (
            <li key={index}>
              <p>{consejo.advice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Historial;