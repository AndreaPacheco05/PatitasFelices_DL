import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";

const carruselImagenes = [
  {
    url: "https://images.pexels.com/photos/5731863/pexels-photo-5731863.jpeg",
    alt: "Descuentos en alimento",
  },
  {
    url: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg",
    alt: "Camas para tu mascota",
  },
  {
    url: "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg",
    alt: "Productos de higiene",
  },
];

const categorias = [
  {
    nombre: "Alimento",
    ruta: "/categoria/alimento",
    imagen:
      "https://images.pexels.com/photos/5731863/pexels-photo-5731863.jpeg",
  },
  {
    nombre: "Juguetes",
    ruta: "/categoria/juguetes",
    imagen:
      "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg",
  },
  {
    nombre: "Ropa",
    ruta: "/categoria/ropa",
    imagen:
      "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg",
  },
  {
    nombre: "Camas",
    ruta: "/categoria/camas",
    imagen:
      "https://images.pexels.com/photos/5731863/pexels-photo-5731863.jpeg",
  },
  {
    nombre: "Higiene",
    ruta: "/categoria/higiene",
    imagen:
      "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg",
  },
  {
    nombre: "Otros",
    ruta: "/categoria/otros",
    imagen:
      "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carruselImagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <main>
      <div className="titulo">
        <h1>Patitas Felices</h1>
      </div>

      <div className="carrusel-container">
        {carruselImagenes.map((imagen, i) => (
          <img
            key={i}
            src={imagen.url}
            alt={imagen.alt}
            className={`carrusel-imagen ${i === index ? "activa" : ""}`}
          />
        ))}
      </div>

      <section className="categorias-grid">
        {categorias.map((cat, i) => (
          <Link to={cat.ruta} className="categoria-card" key={i}>
            <img src={cat.imagen} alt={cat.nombre} />
            <span>{cat.nombre}</span>
          </Link>
        ))}
      </section>
      <section>
        <h2>Descuentos</h2>
      </section>
      <section>
        <h2>Artículos destacados</h2>
      </section>
      <section className="background-text" >
        <div className="centrar">
          <h2 >¿Que es Patitas Felices?</h2>
        </div>
        <p className="somos">
          En Patitas Felices creemos que las mascotas son parte de la familia.
          Por eso, creamos un espacio donde puedas encontrar todo lo que
          necesitan para vivir sanas, amadas y felices. Es un marketplace donde
          se encuentran productos, servicios y personas con un solo propósito:
          mejorar la vida de quienes caminan sobre cuatro patitas (y las de
          quienes los cuidan con amor).
        </p>
      </section>
    </main>
  );
};

export default Home;
