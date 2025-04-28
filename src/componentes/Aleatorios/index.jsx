import { useState, useEffect } from 'react';
import './style.css';

function Aleatorios() {
  const [consejo, setConsejo] = useState('');

  const obtenerConsejo = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setConsejo(data.slip.advice);

      
      let historial = JSON.parse(localStorage.getItem('historialConsejos')) || [];
      historial.push(data.slip.advice);
      localStorage.setItem('historialConsejos', JSON.stringify(historial));

    } catch (error) {
      console.error('Error obteniendo consejo:', error);
    }
  };

  const guardarFavorito = () => {
    let favoritos = JSON.parse(localStorage.getItem('favoritosConsejos')) || [];
    if (!favoritos.includes(consejo)) {
      favoritos.push(consejo);
      localStorage.setItem('favoritosConsejos', JSON.stringify(favoritos));
      alert('¡Consejo agregado a favoritos!');
    } else {
      alert('Este consejo ya está en favoritos.');
    }
  };

  useEffect(() => {
    obtenerConsejo();
  }, []);

  return (
    <section className="c-aleatorios">
      <h1>Consejo Aleatorio 🎲</h1>
      <p className="consejo-texto">{consejo}</p>
      <div className="botones">
        <button onClick={obtenerConsejo} className="btn-nuevo">Nuevo Consejo 🔄</button>
        <button onClick={guardarFavorito} className="btn-favorito">Agregar a Favoritos ⭐</button>
      </div>
    </section>
  );
}

export default Aleatorios;