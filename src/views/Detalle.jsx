import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../assets/css/Detalle.css';
const Detalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null)
  const [error, setError] = useState("")
  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/cards/articulos/${id}`
        );
        if (!res.ok) {
          throw new Error("Producto no encontrado");
        }
        const data = await res.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      }
    };

    obtenerProducto();
  }, [id]);

  if (error) return <h2>{error}</h2>;
  if (!producto) return <h2>Cargando producto...</h2>;
    return (
      <main className="producto-detalles">
        <div className="producto-imagen">
          <img
            src={`http://localhost:5000/uploads/${producto.img_url}`}
            alt={producto.articulos}
          />
        </div>
        <div className="producto-info">
          <h1 className="producto-nombre">{producto.articulos}</h1>
          <p className="producto-desc">{producto.descripcion}</p>
          <p>Ofrecido por: {producto.nombre_usuario}</p>
          <p className="producto-precio">${producto.precio}</p>
          <Link to={`/chat/`}>
            <button className="boton-compra">Contactarme</button>
          </Link>
        </div>
      </main>
    );
};

export default Detalle;