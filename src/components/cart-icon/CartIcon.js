import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'
import classes from '../../components/cart-icon/cartIcon.module.css'
import { CartContext } from '../../contexts/cart.context'

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen} = useContext(CartContext)
  const cartToggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className={classes.cartIconContainer} onClick={cartToggle}>

      <ShoppingIcon className={classes.cartIcon} />

      <span className={classes.itemCount}>3</span>


    </div>
  )
}
