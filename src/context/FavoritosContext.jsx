import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext()

const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState(() => {
        const favs = localStorage.getItem("favoritos")
        return favs ? JSON.parse(favs) : [];
    })

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos])

    const agregarFavorito = (producto) => {
        setFavoritos((prev) => {
            const yaExiste = prev.some((p) => p.id === producto.id);
            if (yaExiste) return prev;
            return[...prev, producto]
        })
    }

    const eliminarFavorito = (id) => {
        setFavoritos((prev) => prev.filter((p) => p.id !== id))
    }
    return (
        <FavoritosContext.Provider value={{ favoritos, agregarFavorito, eliminarFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosProvider
