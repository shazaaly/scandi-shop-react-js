import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'
import classes from '../../components/cart-icon/cartIcon.module.css'
import { CartContext } from '../../contexts/cart.context'

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen , totalQuantity } = useContext(CartContext)
  const cartToggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className={classes.cartIconContainer} onClick={cartToggle}>
      <div>

        <span>
        {totalQuantity}

        </span>

        <ShoppingIcon className={classes.cartIcon} />

      </div>




    </div>
  )
}
