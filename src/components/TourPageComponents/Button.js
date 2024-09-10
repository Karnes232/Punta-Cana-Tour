import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
const Button = ({
  text,
  customClass,
  tour,
  notifyAddedToCart,
  notifyRemovedFromCart,
  notifyCartFull,
  sticky,
}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  function handleClick(e) {
    e.preventDefault();
    addToCart(tour);
    if (cartItems.length < 4) {
      notifyAddedToCart(tour);
    } else {
      notifyCartFull(tour);
    }
    // addVariantToCart(variantId, quantity)
  }

  return (
    <div
      className={`mb-2 ${
        sticky ? "fixed top-28 md:top-40 z-50 bg-white rounded" : ""
      }`}
    >
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
              const cartItem = cartItems.find(
                (item) => item.name === tour.name,
              );
              if (cartItem.quantity === 1) {
                notifyRemovedFromCart(tour);
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
