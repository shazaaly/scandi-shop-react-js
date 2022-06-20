import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  totalQuantity: 0,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { }
});



const updatedCartItems = (cartItems, productToAdd) => {
  /* check if existing in cart and if yes, return same items array but with updated quantity*/

  const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

  if (existingCartItem) {


    return cartItems.map(cartItem => cartItem.id === existingCartItem.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } : { ...cartItem }
    )


  } else {
    /* if new item was not in cart */
    return [...cartItems, { ...productToAdd, quantity: 1 }]
  }

}

export default function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuentity] = useState(0)

  
  useEffect(() => {

    let count = cartItems.reduce((accumilator, cartItem) => accumilator + cartItem.quantity, 0)

    setTotalQuentity(count)
  }, [cartItems])



  const addItemToCart = (productToAdd) => {

    setCartItems(updatedCartItems(cartItems, productToAdd))


  }

  const [isCartOpen, setIsCartOpen] = useState(false);


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalQuantity };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;

}
