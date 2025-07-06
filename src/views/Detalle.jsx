import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../assets/css/Detalle.css';
import cardsData from "../pages/cardsData";
const Detalle = () => {
    const { id } = useParams();
    const producto = cardsData.find((item) => item.id === parseInt(id));

    if (!producto) {
        <h2>Producto no encontrado</h2>
    }

    return (
 
        <main class="producto-detalles">
          <div class="producto-imagen">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div class="producto-info">
                <h1 class="producto-nombre">{producto.nombre}</h1>
            <p class="producto-desc">
              {producto.desc}
            </p>
                <p class="producto-precio">${producto.precio}</p>
                <Link to={`/chat/`}>
                <button class="boton-compra">Comprar ahora</button>
                </Link>
          </div>
        </main>
    );
};

export default Detalle;