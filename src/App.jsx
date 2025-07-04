import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Categorias from './views/Categorias';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './views/Home';
import CrearPublicacion from './views/CrearPublicacion';
import Detalle from './views/Detalle';
import Perfil from './views/Perfil';
import EditarInfo from './views/EditarInfo';
import Registrar from './views/Registrar';
import Tienda from './views/Tienda';
import IniciarSesion from './views/IniciarSesion';
import NotFound from './views/NotFound';
import { UserContext }  from './context/UsuarioContext';
import './assets/css/App.css';

const App = () => {

};

export default App;