import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
const Button = ({ text, customClass, tour }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  function handleClick(e) {
    e.preventDefault();
    addToCart(tour);
    // addVariantToCart(variantId, quantity)
  }
  console.log(cartItems);
  console.log(tour);
  return (
    <div className="mb-2">
      {!cartItems.find((item) => item.name === tour.name) ? (
        <button
          type="submit"
          onClick={handleClick}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${customClass}`}
        >
          {text}
        </button>
      ) : (
        <div className="flex gap-4">
          <button
            type="submit"
            onClick={handleClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${customClass}`}
          >
            +
          </button>{" "}
          <p className="text-gray-600 flex justify-center items-center">
            {cartItems.find((item) => item.name === tour.name).quantity}
          </p>
          <button
            type="submit"
            onClick={() => {
                        const cartItem = cartItems.find((item) => item.name === tour.name);
                        if (cartItem.quantity === 1) {
                          //handleRemoveFromCart(product);
                          removeFromCart(tour);
                        } else {
                          removeFromCart(tour);
                        }
                      }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${customClass}`}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
