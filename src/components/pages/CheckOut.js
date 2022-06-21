import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

export default function CheckOut() {

  const { cartItems, cartTotal } = useContext(CartContext);  return (
    <div >
      <div >
        {cartItems.map(cartItem => {
          return (
            <div key={cartItem.id} >
              <CheckoutItem cartItem={cartItem} />

            </div>
          )
        })}

      </div>
      <hr></hr>
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  )
}
