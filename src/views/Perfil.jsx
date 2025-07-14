import React, { useContext } from "react";
import { UserContext }  from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import '../assets/css/Perfil.css';

const Perfil = () => {
    const { perfil, user } = useContext(UserContext);
    const navigate = useNavigate();

    if (!perfil) {
        return <p>Cargando daatos del usuario...</p>;
    }

    return (
    <div className="perfil-container">
    <h3>Hola, {user.nombre}</h3>
        <div className="box-img-form">
            <div>
                <img
                    src={user.imagen}
                    alt="Foto de perfil"
                    className="rounded-circle"
                    width="120"
                    height="120"
                />
            </div>
            <div> 
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Teléfonon:</strong> {user.telefono}</p>
                <p><strong>Dirección:</strong> {user.direccion}</p>
                <div>
                    <p>¿Desea modificar su información?</p>
                    <button onClick={() => navigate('/editarInfo')} className="modificar-btn">
                        Editar
                    </button>
                </div>
            </div>
        </div>  

        <div className="box-btn">
            <button onClick={() => navigate('/crearPublicacion')} className="publicacion-btn">
                Realizar Publicación
            </button>
        </div>
    </div>
    );
};

export default Perfil;