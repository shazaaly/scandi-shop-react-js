import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  totalQuantity: 0,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  clearFromCart:()=>{},
  removeItemFromCart: () => { },
  cartTotal: 0,
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
const remove = (cartItems, productToRemove) => {
  //find item to remove
  const existingItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)
  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)


  } else {
    return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } :
      [...cartItems]


    )
  }

}

const clear = (cartItems, productToRemove) =>  
     cartItems.filter(cartItem => cartItem.id !== productToRemove.id)




export default function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuentity] = useState(0)
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    
    
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    
    setCartTotal(newCartTotal);
  }, [cartItems]);


  useEffect(() => {

    let count = cartItems.reduce((accumilator, cartItem) => accumilator + cartItem.quantity, 0)

    setTotalQuentity(count)
  }, [cartItems])






  const addItemToCart = (productToAdd) => {

    setCartItems(updatedCartItems(cartItems, productToAdd))


  }
  const clearFromCart = (productToRemove) => {
    setCartItems(clear(cartItems, productToRemove))

  }

  const removeFromCart = (productToRemove) => {
    setCartItems(remove(cartItems, productToRemove))

  }

  const [isCartOpen, setIsCartOpen] = useState(false);


  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeFromCart, clearFromCart, cartItems, totalQuantity, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;

}
