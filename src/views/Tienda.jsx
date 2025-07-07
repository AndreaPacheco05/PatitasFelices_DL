import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Tienda.css';
import Cards from "../components/Cards";
import cardsData from "../pages/cardsData"
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
                        />)
                        ;
                })}
            </div>
      </main>
  )
};

export default Tienda;