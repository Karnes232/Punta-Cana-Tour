import PropTypes from "prop-types";
import React, { useContext } from "react";
import { TravelAgentCartContext } from "../../../context/travelAgentCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PickUpTimeLocation from "../../CartComponent/PickUpTimeLocation";
export default function Cart({
  selectedHotel,
  pickupTimes,
  formData,
  setFormData,
}) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(TravelAgentCartContext);

  const emptyCart = cartItems.length === 0;
  const notifyRemovedFromCart = (tour) =>
    toast.error(`${tour.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (tour) => {
    removeFromCart(tour);
    notifyRemovedFromCart(tour);
  };
  const totalPrice = getCartTotal() * 0.85;
  const deposit = getCartTotal() * 0.15;
  const balance = getCartTotal() * 0.7;
  return (
    <div className="flex-col flex items-center justify-center my-10">
      <ToastContainer />
      {emptyCart ? <></> : <h1 className="text-2xl font-bold mb-5">Cart</h1>}

      <div className="flex flex-col gap-4">
        {cartItems.map((tour, index) => {
          const image = getImage(tour.mainImage?.gatsbyImage);
          let pickupTimeList = [];
          pickupTimes.forEach((tourPickupTime) => {
            if (tourPickupTime.name === tour.name) {
              try {
                let times = JSON.parse(tourPickupTime?.pickupTimes);
                pickupTimeList = times[selectedHotel.trim()];
              } catch (error) {
                let times = undefined;
              }
            }
          });

          const agentPrice = tour.price * 0.85;
          const tourTotalPrice = agentPrice * tour.quantity;
          return (
            <div key={tour.name}>
              <div className="flex justify-between mt-2 mb-5" key={tour.name}>
                <div className="flex gap-4">
                  <GatsbyImage
                    image={image}
                    alt={tour.name}
                    className="rounded-md w-24 h-24 md:w-32 md:h-32 object-cover"
                  />
                  <div className="flex flex-col md:justify-around lg:flex-row w-40 md:w-72 lg:w-[30rem] xl:w-[25rem]">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 mb-1 mx-4">
                      <h1 className="text-lg font-bold truncate lg:whitespace-normal">
                        {tour.name}
                      </h1>
                      <p className="text-gray-600 text-end flex items-center justify-end">
                        ${agentPrice.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex gap-4 justify-center items-center">
                      <button
                        className="px-4 py-2 bg-secondary-color text-primary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(tour);
                        }}
                      >
                        +
                      </button>
                      <p className="w-5 text-center">{tour.quantity}</p>
                      <button
                        className="px-4 py-2 bg-secondary-color text-primary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
                        onClick={(e) => {
                          e.preventDefault();
                          const cartItem = cartItems.find(
                            (tour) => tour.name === tour.name,
                          );
                          if (cartItem.quantity === 1) {
                            handleRemoveFromCart(tour);
                          } else {
                            removeFromCart(tour);
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-8 mx-4 text-gray-600 w-12">
                    ${tourTotalPrice.toFixed(2)}
                  </div>
                </div>
              </div>
              <PickUpTimeLocation
                pickupTimeList={pickupTimeList}
                formData={formData}
                setFormData={setFormData}
                index={index}
              />
            </div>
          );
        })}
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center mt-5">
          <h1 className="text-lg font-bold mb-1">
            Total: ${totalPrice.toFixed(2)}
          </h1>
          <h1 className="text-lg font-bold mb-1">
            Deposit: ${deposit.toFixed(2)}
          </h1>
          <h1 className="text-lg font-bold mb-3">
            Balance: ${balance.toFixed(2)}
          </h1>

          <button
            className="px-4 py-2 bg-secondary-color text-primary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
            onClick={(e) => {
              e.preventDefault();
              clearCart();
              notifyCartCleared();
            }}
          >
            Clear cart
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center max-w-sm">
          <h1 className="text-lg font-bold">Your cart is empty</h1>
          <p className="text-sm text-center my-3">
            Looks like you haven’t found anything yet. We understand that
            sometimes it’s hard to choose — maybe this helps:
          </p>
          <Link
            to="/travelagent/tours"
            className="font-medium text-lg text-primary-color"
          >
            View Our Tours
          </Link>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
