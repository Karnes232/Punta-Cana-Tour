import React, { useContext } from 'react'
import { CartContext } from '../../context/cart';

const Button = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  return (
    <> <button
    type="submit"
    className="px-4 py-2 my-3 bg-[#FFB24C] text-[#002447] text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
    onClick={() => {
        clearCart()
    }}
  >
    Contact Us
  </button></>
  )
}

export default Button