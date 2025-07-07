import React, { useState } from "react";
import "../assets/css/CrearPublicacion.css";

const categorias = [
  "Alimento",
  "Juguetes",
  "Ropa",
  "Camas",
  "Higiene",
  "Otros",
];

const CrearPublicacion = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState(categorias[0]);
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descripcion || !precio) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }
    setError("");
    // Aquí iría el envío a backend
    alert("Publicación creada con éxito!");
    // Reset form
    setTitulo("");
    setDescripcion("");
    setCategoria(categorias[0]);
    setPrecio("");
    setImagen(null);
    setPreview(null);
  };

  return (
    <div className="crear-publicacion-container">
      <h2>Crear Nueva Publicación</h2>
      <form className="crear-publicacion-form" onSubmit={handleSubmit}>
        <label>
          Título <span className="obligatorio">*</span>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ej: Collar Reflectante para perros"
          />
        </label>

        <label>
          Descripción <span className="obligatorio">*</span>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Describe el producto..."
            rows={4}
          />
        </label>

        <label>
          Categoría
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Precio (CLP) <span className="obligatorio">*</span>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Ej: 15000"
            min="0"
          />
        </label>

        <label className="input-imagen-label">
          Imagen
          <input type="file" accept="image/*" onChange={handleImagenChange} />
        </label>

        {preview && (
          <div className="preview-imagen">
            <img src={preview} alt="Preview" />
          </div>
        )}

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-crear">
          Crear Publicación
        </button>
      </form>
    </div>
  );
};

export default CrearPublicacion;