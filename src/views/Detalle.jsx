import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../assets/css/Detalle.css';
import cardsData from "../pages/cardsData";
const Detalle = () => {
    const { id } = useParams();
    const producto = cardsData.find((item) => item.id === parseInt(id));

    if (!producto) {
        <h2>Producto no encontrado</h2>
    }

    return (
        <main>
            <div className="main-container">
            <div className="detallesContainer">
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt="" />
            <p>Descripción: {producto.desc}</p>
            <p>Precio: {producto.precio}</p>
            </div>
            </div>
        </main>
    )
};

export default Detalle;