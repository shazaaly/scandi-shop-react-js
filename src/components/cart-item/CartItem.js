import React from 'react'

export default function CartItem({cartItem}) {
    const { title, price} = cartItem
  return (
    <div >
    <h3>{title}</h3>
    <span>{price}</span>
    
    
    </div>
  )
}
