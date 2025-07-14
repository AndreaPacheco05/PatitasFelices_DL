import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [profile, setProfile] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setToken(data.token);
        setUser(data.user);
        return true;
      } else {
        alert(data.error || "Error al iniciar sesión.");
        return false;
      }
    } catch (err) {
      console.error("Error en login:", err);
      alert("Hubo un problema.");
      return false;
    }
  };

  const register = async (email, password, nombre, direccion, telefono, imgperfil_url = null) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          nombre,
          direccion,
          telefono,
          imgperfil_url,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setToken(data.token);
        setUser(data.user);
        return true;
      } else {
        alert(data.error || "Error en el registro.");
        return false;
      }
    } catch (err) {
      console.error("Error en register:", err);
      alert("Hubo un problema.");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setProfile(null);
  };

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/perfil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setProfile(data);
        return data;
      } else {
        alert(data.error || "No se pudo cargar el perfil.");
      }
    } catch (err) {
      console.error("Error al obtener perfil:", err);
      alert("Hubo un problema.");
    }
  };

  const updateUser = async (formData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/usuarios/${profile?.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        return true;
      } else {
        alert(data.error || "Error al actualizar.");
        return false;
      }
    } catch (err) {
      console.error("Error al actualizar usuario:", err);
      return false;
    }
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        profile,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
