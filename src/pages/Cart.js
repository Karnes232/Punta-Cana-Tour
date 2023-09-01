import React from 'react'
import CartComponent from '../components/CartComponent/CartComponent'
import { CartProvider } from '../context/cart'

const Cart = () => {
  return (
    <CartProvider>
    <div>
        <CartComponent />
    </div></CartProvider>
  )
}

export default Cart