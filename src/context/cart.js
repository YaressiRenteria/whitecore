import { createContext, useContext } from "react";

// Estado del carrito compartido por toda la página
export const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);
