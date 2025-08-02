import React, { useState, useContext } from "react";
import { UserContext } from "../context/UsuarioContext";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/IniciarSesion.css";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [robot, setRobot] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // debug: console log to ensure handler runs
    // console.log("submit fired", { email, password, robot });

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (!robot) {
      setError("Por favor confirma que no eres un robot.");
      return;
    }

    try {
      setSubmitting(true);
      const success = await login(email, password);
      if (success) {
        navigate("/profile");
      } else {
        setError("Credenciales incorrectas.");
      }
    } catch (err) {
      setError("Error al iniciar sesión. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            type="email"
            id="email"
            className="form-log"
            placeholder="usuario@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="form-log"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={submitting}
            required
          />
        </div>

        <div className="not-bot">
          <input
            type="checkbox"
            id="robot"
            checked={robot}
            onChange={(e) => setRobot(e.target.checked)}
            disabled={submitting}
          />
          <label htmlFor="robot">No soy un robot</label>
        </div>

        {message && <div className="info">{message}</div>}
        {error && <div className="error">{error}</div>}

        <button type="submit" className="btn-log" disabled={submitting}>
          {submitting ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <p className="link">
          Si no estás registrado, <Link to="/registrar">ingresa aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
