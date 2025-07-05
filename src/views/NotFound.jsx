import React from "react";
import { useState } from "react";
import '../assets/css/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Error 404 <br/> no deberías estar aquí</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <p>Ehh creo que te perdiste, pero no te preocupes haz click en el link y volverás al inicio</p>
            <Link to="/" className="home-link">Bye bye!</Link>
        </div>
    );
};

export default NotFound;