import { Link } from 'react-router-dom';
import './style.css';

function Menu() {
  return (
    <nav className="c-menu">
      <Link to="/" className="menu-link">Lista</Link>
      <Link to="/aleatorios" className="menu-link">Aleatorios</Link>
      <Link to="/favoritos" className="menu-link">Favoritos</Link>
      <Link to="/capturados" className="menu-link">Capturados</Link>
      <Link to="/usuarios" className="menu-link">Usuarios</Link>
      <Link to="/historial" className="menu-link">Historial</Link>
    </nav>
  );
}

export default Menu;