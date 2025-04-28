import { useState, useEffect } from 'react';
import './style.css';
import Filtro from '../Filtro';
import { useNavigate } from "react-router-dom";

function Lista() {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerDatos = async () => {
      const res = await fetch('https://api.adviceslip.com/advice');
      const json = await res.json();
      setData([json.slip]); // lo metemos en array
    };

    obtenerDatos();
  }, []);

  let resultados = data;

  if (busqueda.length >= 3) {
    resultados = data.filter(advice =>
      advice.advice.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar consejo"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />
      <Filtro onFiltroChange={() => {}} /> {/* Por ahora */}
      <section className="c-lista">
        {resultados.map((advice, index) => (
          <div
            className="c-lista-consejo"
            onClick={() => navigate(`/consejo/${advice.id}`)}
            key={index}
          >
            <p>{advice.advice}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Lista;