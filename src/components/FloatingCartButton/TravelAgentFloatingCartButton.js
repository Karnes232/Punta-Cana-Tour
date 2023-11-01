import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "gatsby";
import { TravelAgentCartContext } from "../../context/travelAgentCart";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
const TravelAgentFloatingCartButton = () => {
  const { cartItems } = useContext(TravelAgentCartContext);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);
  return (
    <>
      {loggedIn ? (
        <>
          {cartItems.length !== 0 ? (
            <Link to="/travelagent/cart/" className="no-underline">
              <button className="fixed z-50 flex px-2 justify-between items-center bottom-6 right-6 xl:top-10 xl:right-10 rounded-full h-14 w-14 bg-primary-color text-secondary-color  font-bold">
                <AiOutlineShoppingCart size={25} />
                {cartItems.length}
              </button>
            </Link>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TravelAgentFloatingCartButton;
