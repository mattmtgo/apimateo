import { NavLink } from 'react-router-dom';
import './style.css';

function Menu() {
  return (
    <nav className="c-menu">
      <NavLink to="/" end className={({ isActive }) => isActive ? "activo" : ""}>Lista</NavLink>
      <NavLink to="/aleatorios" className={({ isActive }) => isActive ? "activo" : ""}>Aleatorios</NavLink>
      <NavLink to="/capturados" className={({ isActive }) => isActive ? "activo" : ""}>Capturados</NavLink>
      <NavLink to="/favoritos" className={({ isActive }) => isActive ? "activo" : ""}>Favoritos</NavLink>
      <NavLink to="/historial" className={({ isActive }) => isActive ? "activo" : ""}>Historial</NavLink>
      <NavLink to="/usuarios" className={({ isActive }) => isActive ? "activo" : ""}>Usuarios</NavLink>
    </nav>
  );
}

export default Menu;