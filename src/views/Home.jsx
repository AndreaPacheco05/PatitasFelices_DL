import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import { Star } from "lucide-react";

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

const productos = [
  {
    id: 1,
    nombre: "Collar Reflectante",
    precioOriginal: 8000,
    precioDescuento: 5990,
    imagen: "https://images.pexels.com/photos/5731863/pexels-photo-5731863.jpeg",
  },
  {
    id: 2,
    nombre: "Rascador de Gato",
    precioOriginal: 20000,
    precioDescuento: 14990,
    imagen: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg",
  },
  {
    id: 3,
    nombre: "Cama para Mascotas",
    precioOriginal: 25000,
    precioDescuento: 19990,
    imagen: "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg",
  },
];

const articulos = [
    {
      id: 1,
      nombre: "Arnés Ajustable Premium",
      imagen: "https://images.pexels.com/photos/5731863/pexels-photo-5731863.jpeg",
      precio: 14990,
      rating: 5,
    },
    {
      id: 2,
      nombre: "Juguete Interactivo",
      imagen: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg",
      precio: 6990,
      rating: 4,
    },
    {
      id: 3,
      nombre: "Plato Antideslizante",
      imagen: "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg",
      precio: 4990,
      rating: 4.5,
    },
  ];

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
        {articulos.map((item) => (
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
      <section className="somos">
        <div className="centrar">
          <h2>¿Que es Patitas Felices?</h2>
            <p className="somos">
              En Patitas Felices creemos que las mascotas son parte de la familia.
              Por eso, creamos un espacio donde puedas encontrar todo lo que
              necesitan para vivir sanas, amadas y felices. Es un marketplace donde
              se encuentran productos, servicios y personas con un solo propósito:
              mejorar la vida de quienes caminan sobre cuatro patitas (y las de
              quienes los cuidan con amor).
            </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
