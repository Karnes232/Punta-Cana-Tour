import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
const FloatingCartButton = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.length !== 0 ? (
        <button className="fixed z-50 flex justify-center items-center bottom-6 right-6 rounded-full h-14 w-14 bg-[#FFB24C]">
          <AiOutlineShoppingCart size={30} color="#002447" />
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default FloatingCartButton;
