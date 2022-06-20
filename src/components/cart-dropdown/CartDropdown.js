import React from "react";
import classes from "../cart-dropdown/cartDropDown.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/CartItem";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext)


  return (
    <div className={classes.cartDropdownContainer}>
      <div className={classes.cartItems}>

        <ul>
          { cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />))}


        </ul>


      </div>

      <button>Checkout</button>
    </div>
  );
}
