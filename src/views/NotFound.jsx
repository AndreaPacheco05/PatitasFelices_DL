import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Error 404 <br/> no deberías estar aquí</h1>
            <p>Ehh creo que te perdiste, pero no te preocupes haz click en el link y volverás al inicio</p>
            <Link to="/" className="home-link">Bye bye!</Link>
        </div>
    );
};

export default NotFound;