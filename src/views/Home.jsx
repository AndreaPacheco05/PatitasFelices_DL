import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import { Star } from "lucide-react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("/publicacion.json")
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error al cargar datos:", error));
  }, []);

  useEffect(() => {
    if (!datos || !datos.carruselImagenes) return;

    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % datos.carruselImagenes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [datos]);

  if (!datos) {
    return <p>Cargando contenido...</p>;
  }

  return (
    <main>
      <div className="carrusel-container">
        {datos.carruselImagenes.map((imagen, i) => (
          <img
            key={i}
            src={imagen.url}
            alt={imagen.alt}
            className={`carrusel-imagen ${i === index ? "activa" : ""}`}
          />
        ))}
      </div>

      <section className="categorias-grid">
        {datos.categorias.map((cat, i) => (
          <Link to={cat.ruta} className="categoria-card" key={i}>
            <img src={cat.imagen} alt={cat.nombre} />
            <span>{cat.nombre}</span>
          </Link>
        ))}
      </section>

      <section className="descuentos">
        <h2>Productos con Descuento</h2>
        <div className="descuento-grid">
          {datos.productos.map((producto) => (
            <div key={producto.id} className="descuento-card">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p className="precio">
                <span className="tachado">${producto.precioOriginal}</span>{" "}
                <span className="oferta">${producto.precioDescuento}</span>
              </p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </section>
      <section className="destacados">
        <h2>⭐ Artículos Destacados</h2>
        <div className="destacados-grid">
          {datos.articulos.map((item) => (
            <div key={item.id} className="destacado-card">
              <img src={item.imagen} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p className="precio">${item.precio}</p>
              <div className="rating">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <Star key={i} size={16} fill="#fbc02d" color="#fbc02d" />
                ))}
                {item.rating % 1 !== 0 && (
                  <Star size={16} fill="#fbc02d80" color="#fbc02d80" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="que-es-patitas">
      <div className="contenedor">
        <div className="texto">
          <h2>¿Qué es Patitas Felices?</h2>
          <p>
            En <strong>Patitas Felices</strong> creemos que las mascotas son parte de la familia.
            Por eso, creamos un espacio donde puedas encontrar todo lo que
            necesitan para vivir sanas, amadas y felices.
          </p>
          <p>
            Es un <strong>marketplace</strong> donde se encuentran productos, servicios y personas
            con un solo propósito: <em>mejorar la vida de quienes caminan sobre
            cuatro patitas</em> (y la de quienes los cuidan con amor).
          </p>
        </div>
        <div className="imagen">
          <img
            src="https://images.ctfassets.net/denf86kkcx7r/VtcLewCOGyFrdQSaVabbt/8252b6b6a78639fe9f5910a0b2bf5226/referral_burst__3___1_.png?fm=webp&w=400"
            alt="Mascotas felices"
          />
        </div>
      </div>
    </section>
    </main>
  );
};

export default Home;
