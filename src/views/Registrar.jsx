import React, { useState, useContext } from "react";
import "../assets/css/Registrar.css";
import { UserContext } from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

const Registrar = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(null);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [robot, setRobot] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !contraseña || !confirmarContraseña) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (contraseña.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (contraseña !== confirmarContraseña) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (!robot) {
      setError("Por favor confirma que no eres un robot.");
      return;
    }

    const success = await register(email, contraseña);
    if (success) {
      navigate("/profile");
    } else {
      setError("Error en el registro. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="registrar-container">
      <h3>REGISTRAR</h3>
      <div className="fullbox">
        <div className="mb-3 img-box">
          <label className="form-img">Foto de perfil</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
          />
        </div>
      
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo
              </label>
              <input
                type="email"
                id="email"
                className="form-reg"
                placeholder="usuario@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                className="form-reg"
                placeholder="Pedro Pascal"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                className="form-reg"
                placeholder="+56 9 12345678"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                className="form-reg"
                placeholder="Av. Siempre Viva 123"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contraseña" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="contraseña"
                className="form-reg"
                placeholder="***********"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmarContraseña" className="form-label">
                Repetir Contraseña
              </label>
              <input
                type="password"
                id="confirmarPassword"
                className="form-reg"
                placeholder="***********"
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
              />
            </div>

            <div className="not-bot">
              <input
                type="checkbox"
                id="robot"
                checked={robot}
                onChange={(e) => setRobot(e.target.checked)}
              />
              <label htmlFor="robot">No soy un robot</label>
            </div>

            {error && <div className="error">{error}</div>}

            <button type="submit" className="btn-reg">
              Registrarse
            </button>

            <p className="link">
              {" "}
              Si ya estás registrado, <a href="/login">ingresa aquí</a>
            </p>
          </form>
      </div>
    </div>
  );
};

export default Registrar;