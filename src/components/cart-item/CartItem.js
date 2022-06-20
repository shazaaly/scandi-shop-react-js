import React from 'react'
import classes from '../cart-item/cartItem.module.css'
export default function CartItem({cartItem}) {
    const { title, price, src,quantity } = cartItem
  return (
    <div >
    <h3>{title}</h3>
    <span>{price}</span>
    <span>
    <img className={classes.cartItemImg}  src = {src}  alt='cart-item'/>

    
    </span>
    <div>
    <span>{quantity} x {price}</span>

    
    </div>

    
    
    </div>
  )
}
