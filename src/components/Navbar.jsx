import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UsuarioContext";
import "../assets/css/Navbar.css"

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-izq">
          <h1>Patitas Felices</h1>
          <NavLink className={setActiveClass} to="/">
            <button className="btn">
              Home
            </button>
          </NavLink>
        </div>

        <div className="nav-der">
          {!token ? (
            <>
              <NavLink className={setActiveClass} to="/login">
                <button className="btn">
                  Login
                </button>
              </NavLink>
              <NavLink className={setActiveClass} to="/registrar">
                <button className="btn">
                  Registrar
                </button>
              </NavLink>
<<<<<<< HEAD
            </>
          ) : (
            <>
=======
>>>>>>> 2ec9591 (Versión 0.1.5 (css))
              <NavLink className={setActiveClass} to="/perfil">
                <button className="btn">
                  Perfil
                </button>
              </NavLink>
<<<<<<< HEAD
=======
            </>
          ) : (
            <>
              
>>>>>>> 2ec9591 (Versión 0.1.5 (css))
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;