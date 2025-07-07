import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Categorias.css";

const categorias = [
  { nombre: "Ropa", ruta: "/categoria/ropa" },
  { nombre: "Tecnología", ruta: "/categoria/tecnologia" },
  { nombre: "Hogar", ruta: "/categoria/hogar" },
  { nombre: "Accesorios", ruta: "/categoria/accesorios" },
  { nombre: "Deportes", ruta: "/categoria/deportes" },
  { nombre: "Juguetes", ruta: "/categoria/juguetes" },
  { nombre: "Mascotas", ruta: "/categoria/mascotas" },
  { nombre: "Otros", ruta: "/categoria/otros" },
];

const NavbarCategorias = () => {
  return (
    <nav className="nav-categorias">
      <ul>
        {categorias.map((cat) => (
          <li key={cat.nombre}>
            <NavLink
              to={cat.ruta}
              className={({ isActive }) =>
                isActive ? "categoria-link active" : "categoria-link"
              }
            >
              {cat.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarCategorias;