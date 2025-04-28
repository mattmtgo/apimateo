function Filtro({ onFiltroChange }) {
    return (
      <div className="c-filtro">
        <input
          type="text"
          placeholder="Buscar consejo..."
          onChange={(e) => onFiltroChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Filtro;