import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Favoritos.css';
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import Card from "react-bootstrap/Card";
const Favoritos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchFavoritos = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No autenticado");
          setLoading(false);
          return;
        }

        try {
          const res = await fetch("http://localhost:5000/api/cards/favoritos", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!res.ok) {
            throw new Error("Error al cargar favoritos");
          }

          const data = await res.json();
          setFavoritos(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchFavoritos();
    }, []);
  
  const eliminarFavorito = async (favoritoID) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:5000/api/cards/favoritos/${favoritoID}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Error al eliminar favorito");

      setFavoritos((prev) => prev.filter((fav) => fav.favorito_id !== favoritoID));
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el favorito");
    }
  };

    if (loading) return <p>Cargando favoritos...</p>;
    if (error) return <p>Error: {error}</p>;
    if (favoritos.length === 0) return <p>No tienes favoritos aún.</p>; 
    return (
      <div className="cardContainer">
        {favoritos.map((item) => (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`http://localhost:5000/uploads/${item.img_url}`}
            />
            <Card.Body>
              <Card.Title>{item.articulo}</Card.Title>
              <Card.Text>Precio: {item.precio}</Card.Text>
              <button
                onClick={() => eliminarFavorito(item.favorito_id)}
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