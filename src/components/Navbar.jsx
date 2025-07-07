import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UsuarioContext";
import "../assets/css/Navbar.css"

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Patitas Felices
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={setActiveClass} to="/">
                <button className="btn active" aria-current="page" href="#">
                  <i className="fa-solid fa-pizza-slice"></i> Home
                </button>
              </NavLink>
            </li>
            {!token ? (
              <>
                <li className="nav-item" key="login">
                  <NavLink className={setActiveClass} to="/login">
                    <button className="btn active" href="#">
                      <i className="fa-regular fa-address-card"></i> Login
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item" key="register">
                  <NavLink className={setActiveClass} to="/registrar">
                    <button className="btn active" href="#">
                      <i className="fa-regular fa-address-card"></i> Register
                    </button>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item" key="profile">
                  <NavLink className={setActiveClass} to="/Perfil">
                    <button className="btn active">
                      <i className="fa-regular fa-user"></i> Profile
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item" key="logout">
                  <button className="btn active" onClick={() => logout()}>
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/*import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const { token, logout } = useContext(UsuarioContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav>
      <div className="nav-izq">
        <img src="" alt="" />
        <Link
          className={`nav-link ${setActiveClass({ isActive: true })}`}
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="nav-der">
        {token ? (
          <>
            <NavLink
              className={`nav-link ${setActiveClass({ isActive: true })}`}
              to="/perfil"
            >
              {" "}
              Perfil{" "}
            </NavLink>
            <button onClick={logout} className="nav-link logout-button">
              {" "}
              Cerrar sesión{" "}
            </button>
          </>
        ) : (
          <>
            <NavLink
              className={`nav-link ${setActiveClass({ isActive: true })}`}
              to="/login"
            >
              {" "}
              Login{" "}
            </NavLink>
            <NavLink
              className={`nav-link ${setActiveClass({ isActive: true })}`}
              to="/registrar"
            >
              {" "}
              Registrar{" "}
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
*/
