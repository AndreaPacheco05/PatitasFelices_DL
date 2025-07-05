import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";
import "../assets/css/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    const { token, logout } = useContext(UsuarioContext);

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <nav>
            <div className="nav-izq">
                <img src="" alt="" />
                <Link className={`nav-link ${setActiveClass({ isActive: true })}`} to="/">Home</Link>
            </div>
            <div className="nav-der">
                {token ? (
                <>
                    <NavLink className={`nav-link ${setActiveClass({ isActive: true })}`} to="/perfil"> Perfil </NavLink>
                    <button onClick={logout} className="nav-link logout-button"> Cerrar sesión </button>
                </>
            ) : (
                <>
                    <NavLink className={`nav-link ${setActiveClass({ isActive: true })}`}  to="/login"> Login </NavLink>
                    <NavLink className={`nav-link ${setActiveClass({ isActive: true })}`}  to="/registrar"> Registrar </NavLink>
                </>
            )}
            </div>
        </nav>
    );
}

export default Navbar;
