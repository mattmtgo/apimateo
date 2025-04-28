import { useState } from 'react';
import './style.css';

function Favoritos() {
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem('favoritos')) || []
  );

  const eliminarFavorito = (id) => {
    const nuevosFavoritos = favoritos.filter((consejo) => consejo.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <div className="c-favoritos">
      <h1>Consejos Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No tienes consejos favoritos aún.</p>
      ) : (
        <ul>
          {favoritos.map((consejo) => (
            <li key={consejo.id}>
              <p>{consejo.advice}</p>
              <button onClick={() => eliminarFavorito(consejo.id)}>
                Eliminar de Favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;