import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import cardsData from "../pages/cardsData";
import "../assets/css/Tienda.css";
const Tienda = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(
      "https://patitasfelicesdlback-production.up.railway.app/api/cards/articulos"
    )
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));

  }, [])
  return (
    <main>
      <h2>TIENDA</h2>
      <div className="cardContainer">
        {productos.map((producto) => {
          return (
            <Cards
              key={producto.id}
              id={producto.id}
              nombre={producto.articulos}
              imagen={`https://patitasfelicesdlback-production.up.railway.app/uploads/${producto.img_url}`}
              precio={producto.precio}
              desc={producto.descripcion}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Tienda;
