import React from "react";
import { useState } from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
      <footer>
          <div className="container">    
      <div className="footer-izq">
        <a href="">Servicio al cliente</a>
        <a href="">Derecho de retracto</a>
        <a href="">Politíca de privacidad</a>
        <a href="">Términos y condiciones</a>
      </div>
      <div className="footer-center">
        <a href="">Derechos reservados</a>
      </div>
      <div className="footer-der">
        <img src="" alt="" />
        <a href="">www.patitasfelices.com</a>
      </div>
          </div>
    </footer>
  );
};

export default Footer;
