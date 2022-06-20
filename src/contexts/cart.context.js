import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext( {
    isCartOpen : false,
    setIsCartOpen:()=>{}
});

export default function CartProvider({children}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
