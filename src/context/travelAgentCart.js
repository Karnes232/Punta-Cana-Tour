import PropTypes from "prop-types";
import React, { createContext, useState, useEffect } from "react";

export const TravelAgentCartContext = createContext();

export const TravelAgentCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // if (typeof window !== 'undefined') {
  //   setCartItems(localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //   : [],)
  // }

  const addToCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name,
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name,
    );

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.name !== item.name));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("travelAgentCartItems");
    console.log(data);
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("travelAgentCartItems", JSON.stringify(cartItems));
  }, [cartItems]); // Include cartItems as a dependency here

  return (
    <TravelAgentCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </TravelAgentCartContext.Provider>
  );
};

TravelAgentCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
