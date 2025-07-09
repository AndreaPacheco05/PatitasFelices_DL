import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UsuarioContext";
import { Navbar, Categorias, Footer } from "./pages/index";
import { Home, Login, Registrar, Perfil, NotFound } from "./pages/index";
import {
  EditarInfo,
  Tienda,
  CrearPublicacion,
  Detalle,
  Favoritos,
} from "./pages/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { token } = useContext(UserContext);
  return (
    <div className="app-container">
      <Navbar />
      <Categorias />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/registrar"
          element={token ? <Navigate to="/" /> : <Registrar />}
        />
        <Route
          path="/perfil"
          element={token ? <Perfil /> : <Navigate to="/perfil" />}
        />
        <Route
          path="/editarInfo"
          element={token ? <EditarInfo /> : <Navigate to="/editarInfo" />}
        />
        <Route
          path="/tienda"
          element={!token ? <Tienda /> : <Navigate to="/" />}
        />
        <Route
          path="/crearPublicacion"
          element={!token ? <CrearPublicacion /> : <Navigate to="/crearPublicaion" />}
        />
        <Route
          path="/detalle/:id"
          element={!token ? <Detalle /> : <Navigate to="/detalle/:id" />}
        />
        <Route
          path="/favoritos"
          element={token ? <Favoritos /> : <Navigate to="/favoritos" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
