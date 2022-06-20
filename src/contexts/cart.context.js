import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { }
});

const updatedCartItems = (cartItems, productToAdd) => {
  /* check if existing in cart and if yes, return same items array but with updated quantity*/


  const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

  if (existingCartItem) {
    cartItems.map(cartItem => cartItem.id === existingCartItem.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } : { ...cartItem }
    )


  } else {
    /* if new item was not in cart */
    return [...cartItems, { ...productToAdd, quantity: 1 }]
  }

}

export default function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    
    setCartItems(updatedCartItems(cartItems, productToAdd))


  }

  const [isCartOpen, setIsCartOpen] = useState(false);


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;

}
