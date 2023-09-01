import React from "react";
import { useContext, useEffect, useState } from 'react'
import { CartContext } from "../../context/cart"; 
const Button = ({ text, customClass, tour }) => {
  const { cartItems, addToCart } = useContext(CartContext)
  function handleClick(e) {
    e.preventDefault()
    addToCart(tour)
    // addVariantToCart(variantId, quantity)
  }
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${customClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
