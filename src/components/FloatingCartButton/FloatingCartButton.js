import React, { useContext } from "react";
import { CartContext } from "../../context/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "gatsby";
const FloatingCartButton = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.length !== 0 ? (
        <Link to="/cart/" className="no-underline">
          <button className="fixed z-50 flex px-2 justify-between items-center bottom-24 right-6 xl:top-10 xl:right-10 rounded-full h-14 w-14 bg-primary-color text-secondary-color  font-bold">
            <AiOutlineShoppingCart size={25} />
            {cartItems.length}
          </button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default FloatingCartButton;
