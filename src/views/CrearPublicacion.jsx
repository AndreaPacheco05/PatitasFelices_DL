import React, { useState } from "react";
import "../assets/css/CrearPublicacion.css";

const CrearPublicacion = () => {
  const [imagen, setImagen] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("otros");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !descripcion || !precio || !imagen) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    console.log({
      titulo,
      descripcion,
      precio,
      categoria,
      imagen,
    });

    setMensaje("¡Publicación creada con éxito!");
    setTitulo("");
    setDescripcion("");
    setPrecio("");
    setCategoria("otros");
    setImagen(null);
  };

  return (
    <div className="publicacion-container">
      <h2>Crear Publicación</h2>
      <form onSubmit={handleSubmit} className="form-publicacion">
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ej: Zapatillas Nike"
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Escribe una descripción detallada..."
          ></textarea>
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Ej: 19990"
          />
        </div>

        <div className="form-group">
          <label>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="ropa">Ropa</option>
            <option value="tecnologia">Tecnología</option>
            <option value="hogar">Hogar</option>
            <option value="accesorios">Accesorios</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className="form-group">
          <label>Foto del producto</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
          />
        </div>

        {mensaje && <p className="mensaje">{mensaje}</p>}

        <button type="submit" className="btn-publicar">
          Publicar
        </button>
      </form>
    </div>
  );
};

export default CrearPublicacion;
