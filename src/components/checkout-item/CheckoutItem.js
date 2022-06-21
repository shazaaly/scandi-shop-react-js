import React from 'react'
import classes from '../checkout-item/checkoutItem.module.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

export default function CheckoutItem({ cartItem }) {

    const { addItemToCart, removeFromCart, clearFromCart } = useContext(CartContext)
    const clearItemHandler = () => clearFromCart(cartItem)

    const { title, price, src, quantity } = cartItem
    return (
        <div>
            <span className='title'>Name : {title}</span>
            <span className='price'> Price : {price}</span>
            <span>
                <img className={classes.image} src={src} alt={`${title}`} />

            </span>

            <div onClick={() => addItemToCart(cartItem)}> &#10095; Increment</div>
            <div>{quantity}</div>
            <span onClick={() => { removeFromCart(cartItem) }}>&#10094; Decrement</span>

            <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
            <br />


        </div>
    )
}
