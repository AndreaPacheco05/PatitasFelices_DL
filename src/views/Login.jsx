import React, { useState, useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import '../assets/css/Login.css';

const Login = () => {
    const { login } = useContext(UsuarioContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [robot, setRobot] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
        setMessage('Todos los campos son obligatorios.');
        return;
    }
    if (password.length < 6) {
        setMessage('La contraseña debe tener al menos 6 caracteres.');
        return;
    }
    if (!robot) {
        setError('Por favor confirma que no eres un robot.');
        return;
    }

    try {
        const success = await login(email, password);
        if (success) {
        navigate('/profile');
        } else {
        setError('Credenciales incorrectas.');
        }
    } catch {
        setError('Error al iniciar sesión. Intenta de nuevo.');
    }
    };

    return (
    <div className="login-container">
        <h3>LOGIN</h3>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo</label>
            <input
                type="email"
                id="email"
                className="form-log"
                placeholder="usuario@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
                type="password"
                id="password"
                className="form-log"
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

        <button type="submit" className="btn">Iniciar sesión</button>

        <p className="link">
            Si no estás registrado, <a href="/register">ingrese aquí</a>
        </p>
        </form>
    </div>
);
};

export default Login;