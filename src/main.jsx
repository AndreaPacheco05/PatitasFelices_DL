import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UsuarioContext";
import FavoritosProvider from "./context/FavoritosContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritosProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </FavoritosProvider>
  </StrictMode>
);
