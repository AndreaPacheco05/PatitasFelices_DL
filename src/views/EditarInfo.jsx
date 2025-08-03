import React, { useState, useContext } from "react";
import { UserContext } from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import "../assets/css/EditarInfo.css";

const EditarInfo = () => {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    return <p>Cargando datos del usuario...</p>;
  }

  const [nombre, setNombre] = useState(user.nombre || "");
  const [email, setEmail] = useState(user.email || "");
  const [telefono, setTelefono] = useState(user.telefono || "");
  const [direccion, setDireccion] = useState(user.direccion || "");
  const [imagen, setImagen] = useState(null);
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("telefono", telefono);
    formData.append("direccion", direccion);
    if (password) formData.append("password", password);
    if (imagen) formData.append("img", imagen);

    try {
      const success = await updateUser(formData);
      if (success) {
        setMensaje("Cambios guardados correctamente.");
        navigate("/perfil");
      } else {
        setMensaje("Error al guardarr los cambios.");
      }
    } catch (err) {
      setMensaje("Error inesperado al actualizar.");
    }
  };

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  return (
    <div className="editar-container">
      <h3>EDITAR PERFIL</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="box-img-form">
          <div>
            <img
              src={imagen ? URL.createObjectURL(imagen) : user.imagen}
              alt="Foto de perfil"
              className="rounded-circle"
              width="120"
              height="120"
            />
            <input type="file" accept="image/*" onChange={handleImagenChange} />
          </div>

          <div>
            <div className="mb-3">
              <label>Nombre</label>
              <input
                type="text"
                className="form-reg"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-reg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Contraseña (opcional)</label>
              <input
                type="password"
                className="form-reg"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Teléfono</label>
              <input
                type="tel"
                className="form-reg"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Dirección</label>
              <input
                type="text"
                className="form-reg"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          </div>
        </div>

        {mensaje && <p>{mensaje}</p>}

        <div className="guardas-btn">
          <button type="submit" className="publicacion-btn">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarInfo;
