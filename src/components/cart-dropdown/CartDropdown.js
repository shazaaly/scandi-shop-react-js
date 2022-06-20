import React from "react";
import  classes  from "../cart-dropdown/cartDropDown.module.css";

export default function CartDropdown() {
  return (
    <div className={classes.cartDropdownContainer}>
      <div className={classes.cartItems}>
      
      
      </div>

      <button>Checkout</button>
    </div>
  );
}
