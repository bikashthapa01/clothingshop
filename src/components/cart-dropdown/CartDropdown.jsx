import React from 'react'
import {Button} from "../Button/Button"
import "./CartDropdown.styles.scss"

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'></div>
        <Button>Go To Checkout</Button>
    </div>
  )
}
