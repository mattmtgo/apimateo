import { useState, useEffect } from 'react';
import './style.css';

function Aleatorios() {
  const [consejo, setConsejo] = useState(null);
  const [mensaje, setMensaje] = useState('');

  // Función para obtener un consejo aleatorio
  const obtenerConsejo = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setConsejo(data.slip); // Guarda el objeto completo, no solo el texto
    } catch (error) {
      console.error('Error al obtener consejo:', error);
      setMensaje('Error al cargar consejo. Intenta nuevamente.');
    }
  };

  // Función para agregar a favoritos
  const agregarAFavoritos = () => {
    if (!consejo) {
      setMensaje('No hay consejo para guardar.');
      return;
    }

    const favoritos = JSON.parse(localStorage.getItem('favoritosConsejos')) || [];

    const existe = favoritos.find((fav) => fav.id === consejo.id);

    if (!existe) {
      favoritos.push(consejo);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      setMensaje('¡Consejo guardado en favoritos! ⭐');
    } else {
      setMensaje('Este consejo ya está en tus favoritos 😉');
    }

    setTimeout(() => setMensaje(''), 3000);
  };

  useEffect(() => {
    obtenerConsejo();
  }, []);

  return (
    <div className="c-aleatorio">
      <h1>Consejo Aleatorio</h1>

      {consejo ? (
        <p className="consejo">"{consejo.advice}"</p>
      ) : (
        <p>Cargando consejo...</p>
      )}

      <div className="botones">
        <button onClick={obtenerConsejo} className="btn-recargar">
          Obtener otro consejo
        </button>
        <button onClick={agregarAFavoritos} className="btn-favorito">
          Agregar a Favoritos ⭐
        </button>
      </div>

      {mensaje && <div className="mensaje">{mensaje}</div>}
    </div>
  );
}

export default Aleatorios;