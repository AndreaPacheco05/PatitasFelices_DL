import React, { useContext, useEffect } from "react";
import { UserContext }  from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import '../assets/css/Perfil.css';

const Perfil = () => {
    const { profile, user } = useContext(UserContext);
    const navigate = useNavigate();
    
    if (!profile) {
        return <p>Cargando datos del usuario...</p>;
    }
  
    return (
      <div className="perfil-container">
        <h3>Hola, {profile.nombre}</h3>
        <div className="box-img-form">
          <div>
            <img
              src={`http://localhost:5000/uploads/${profile.imgperfil_url}`}
              alt="Foto de perfil"
              className="rounded-circle"
              width="120"
              height="120"
            />
          </div>
          <div>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {profile.telefono}
            </p>
            <p>
              <strong>Dirección:</strong> {profile.direccion}
            </p>
            <div>
              <p>¿Desea modificar su información?</p>
              <button
                onClick={() => navigate("/editarInfo")}
                className="modificar-btn"
              >
                Editar
              </button>
            </div>
          </div>
        </div>

        <div className="box-btn">
          <button
            onClick={() => navigate("/crearPublicacion")}
            className="publicacion-btn"
          >
            Realizar Publicación
          </button>
        </div>
      </div>
    );
};

export default Perfil;