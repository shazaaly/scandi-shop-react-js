import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../cart-dropdown/cartDropDown.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/CartItem";




export default function CartDropdown() {
  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()

  const goToCheckoutPage = () => {
    navigate('checkout')
   

  }


  return (
    <div className={classes.cartDropdownContainer}>
      <div className={classes.cartItems}>

        <ul>
          <li> {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />))}
          </li>

        </ul>


      </div>
      <button onClick={goToCheckoutPage}>Checkout</button>
      
      


    </div>
  );
}
