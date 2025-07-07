import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import cardsData from "../pages/cardsData";
import "../assets/css/Tienda.css";
const Tienda = () => {
  return (
    <main>
      <h2>TIENDA</h2>
      <div className="cardContainer">
        {cardsData.map((card) => {
          return (
            <Cards
              key={card.id}
              id={card.id}
              nombre={card.nombre}
              imagen={card.imagen}
              precio={card.precio}
              desc={card.desc}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Tienda;
