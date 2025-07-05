import React, { useState, useContext } from "react";
import '../assets/css/Registrar.css';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Registrar = () => {
    const { register } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [robot, setRobot] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, robot } = formData;
    
    if (!email || !password || !confirmPassword) {
        setError('Todos los campos son obligatorios.');
        return;
    }
    if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        return;
    }
    if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden.');
        return;
    }
    if (!robot) {
        setError('Por favor confirma que no eres un robot.');
        return;
    }
    
    const success = await register(email, password);
    if (success) {
        navigate('/profile');
    } else {
        setError('Error en el registro. Inténtalo de nuevo.');
    }
    };
    
    return (
    <div className="registrar-container">
        <h3>REGISTRAR</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo</label>
                <input 
                    type="email" 
                    id="email" 
                    className="form-reg" 
                    placeholder="usuario@gamil.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre Completo</label>
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
                <label htmlFor="telefono" className="form-label">Teléfono</label>
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
                <label htmlFor="direccion" className="form-label">Dirección</label>
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
                <label htmlFor="contraseña" className="form-label">Contraseña</label>
                <input
                    type="contraseña" 
                    id="contraseña" 
                    className="form-reg" 
                    placeholder="***********" 
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmarContraseña" className="form-label">Repetir Contraseña</label>
                <input
                    type="contraseña" 
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
                    onChange={setRobot(e.target.checked)}
                />
                <label htmlFor="robot">No soy un robot</label>
            </div>
    
        {error && <div className="error">{error}</div>}
    
        <button type="submit" className="btn">Registrarse</button>
    
        <p className="link"> Si ya estás registrado, <a href="/login">ingresa aquí</a></p>
        
        </form>
    </div>
    );
};
    

    

export default Registrar;