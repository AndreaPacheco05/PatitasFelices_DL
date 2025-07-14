import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UsuarioContext";

import "../assets/css/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  const { token, logout } = useContext(UserContext);


  const setActiveClass = ({ isActive }) => isActive ? "btn active" : "btn";
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-izq">
          <h1>Patitas Felices</h1>
          <NavLink to="/" className={setActiveClass}> Home </NavLink>
        </div>

        <div className="nav-der">
          {token ? (
            <>
              <NavLink to="/perfil" className={setActiveClass}>Perfil</NavLink>
              <button onClick={logout} className="btn">Cerrar sesión</button>
            </>
          ) : (
            
            <>
              <NavLink to="/login" className={setActiveClass}>Login</NavLink>
              <NavLink to="/registrar" className={setActiveClass}>Registrar</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
