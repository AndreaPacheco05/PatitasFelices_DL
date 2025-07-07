import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Favoritos.css';
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import Card from "react-bootstrap/Card";
const Favoritos = () => {
    const { favoritos, eliminarFavorito } = useContext(FavoritosContext);
    useEffect(() => {
      console.log("Favoritos renderizado:", favoritos);
    }, [favoritos]);

    if (favoritos.length === 0) {
        return (
          <div className="cardContainer">
            <h2>No hay productos aún.</h2>
          </div>
        );
    }
    return (
      <div className="cardContainer">
        {favoritos.map((item) => (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.imagen} />
            <Card.Body>
              <Card.Title>{item.nombre}</Card.Title>
              <Card.Text>Precio: {item.precio}</Card.Text>
              <button
                onClick={() => eliminarFavorito(item.id)}
                className="boton-cards"
              >
                Eliminar
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
    

};

export default Favoritos;