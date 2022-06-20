import React from "react";
import { useContext } from "react";

// import cartImg from "../../assets/Vector.png";
import bag from "../../assets/bag.png";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import CartIcon from "../../components/cart-icon/CartIcon";
import classes from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";


export default function Header() {

  const { isCartOpen } = useContext(CartContext)

  return (
    <div>
      <div>
        <nav className={classes.navbar}>
          <Navigation />

          <div className={classes.headerMenus}></div>

          <div className={classes.bagIcon}>
            <Link to="/">
              <img src={bag} alt="bag icon" />
            </Link>
          </div>

          <select className={classes.currency}>
            <option>$ USD</option>
            <option>€ EUR</option>
            <option>¥ JPY</option>
          </select>

          <div className={classes.cartImage}>
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}          
          
          
          </nav>
      </div>
      <Outlet />
    </div>
  );
}
