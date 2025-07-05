import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem("user"));
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [profile, setProfile] = useState(null);

  const login = async (email, password) => {
    let data;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      data = await response.json();
    } catch (err) {
      console.error("Hubo un error:", err);
      alert("Hubo un problema");
      return;
    }

    if (data?.error) {
      alert(data.error);
    } else {
      // alert("Authentication successful!");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.email);

      setToken(data.token);
      setUser(data.email);
    }
  };

  const register = async (email, password) => {
    let data;

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      data = await response.json();
    } catch (err) {
      console.error("Hubo un error:", err);
      alert("Hubo un problema");
      return;
    }

    if (data?.error) {
      alert(data.error);
    } else {
      //alert("Usuario creado!");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.email);
      setToken(data.token);
      setUser(data.email);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      console.error("Hubo un error:", err);
      alert("Hubo un problema");
      return;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        login,
        logout,
        register,
        profile,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
