import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PickUpTimeLocation from "./PickUpTimeLocation";
export default function Cart({
  selectedHotel,
  pickupTimes,
  formData,
  setFormData,
  validationAlert,
  cartElement,
  setDateValidations,
  setWeekDayValidations,
  weekDayValidationAlert,
}) {
  const [selectedWeekDay1, setSelectedWeekDay1] = useState("");
  const [selectedWeekDay2, setSelectedWeekDay2] = useState("");
  const [selectedWeekDay3, setSelectedWeekDay3] = useState("");
  const [selectedWeekDay4, setSelectedWeekDay4] = useState("");

  const selectedWeekDay = [
    selectedWeekDay1,
    selectedWeekDay2,
    selectedWeekDay3,
    selectedWeekDay4,
  ];

  const setSelectedWeekDay = [
    setSelectedWeekDay1,
    setSelectedWeekDay2,
    setSelectedWeekDay3,
    setSelectedWeekDay4,
  ];
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

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
  let cartTotalPrice = getCartTotal();
  return (
    <div className="flex-col flex items-center justify-center my-10">
      <ToastContainer />
      {emptyCart ? <></> : <h1 className="text-2xl font-bold mb-5">Cart</h1>}

      <div className="flex flex-col gap-4" ref={cartElement}>
        {cartItems.map((tour, index) => {
          const setWeekDateValidation = setWeekDayValidations[index];
          const isInArray = tour.daysAvailable.includes(selectedWeekDay[index]);
          setWeekDateValidation(isInArray);
          const image = getImage(tour.mainImage?.gatsbyImage);
          let pickupTimeList = [];
          pickupTimes.forEach((tourPickupTime) => {
            if (tourPickupTime.name === tour.name) {
              try {
                let times = JSON.parse(tourPickupTime?.pickupTimes);
                pickupTimeList = times[selectedHotel.trim()];
              } catch (error) {
                console.log(error);
              }
            }
          });

          return (
            <div key={tour.name}>
              <div className="flex justify-between mb-5 mt-2">
                <div className="flex gap-4">
                  <GatsbyImage
                    image={image}
                    alt={tour.name}
                    className="rounded-md w-24 h-24 md:w-32 md:h-32 object-cover"
                  />
                  <div className="flex flex-col md:justify-around lg:flex-row w-40 md:w-72 lg:w-[30rem] xl:w-[25rem]">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 mb-1 mx-4">
                      <h3 className="text-lg font-bold truncate lg:whitespace-normal">
                        {tour.name}
                      </h3>
                      <p className="text-gray-600 text-end flex items-center justify-end">
                        ${tour.price}
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
                          // console.log(e)
                          // const cartItem = cartItems.find(
                          //   (tour) => tour.name === tour.name,
                          // );
                          if (tour.quantity === 1) {
                            const setData = setDateValidations[index];
                            setData(false);
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
                  <div className="flex gap-8 mx-4 text-gray-600 w-12">
                    ${tour.price * tour.quantity}
                  </div>
                </div>
              </div>
              <PickUpTimeLocation
                pickupTimeList={pickupTimeList}
                formData={formData}
                setFormData={setFormData}
                index={index}
                validationAlert={validationAlert}
                setDateValidations={setDateValidations}
                setSelectedWeekDay={setSelectedWeekDay}
                weekDayValidationAlert={weekDayValidationAlert}
                daysAvailable={tour.daysAvailable}
              />
            </div>
          );
        })}
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center mt-5">
          <section className="my-5 max-w-xs mx-auto">
            <section className="space-x-12 flex justify-between mx-auto">
              <div className="text-lg font-bold">Total Cost:</div>
              <div className="text-lg w-20">
                ${parseFloat(cartTotalPrice).toFixed(2)}
              </div>
            </section>
            <section className="space-x-12 flex justify-between mx-auto my-1">
              <div className="text-lg font-bold">Deposit:</div>
              <div className="text-lg w-20">
                ${parseFloat(cartTotalPrice * 0.3).toFixed(2)}
              </div>
            </section>
            <section className="space-x-12 flex justify-between mx-auto">
              <div className="text-lg font-bold">Remaining Balance:</div>
              <div className="text-lg w-20">
                ${parseFloat(cartTotalPrice * 0.7).toFixed(2)}
              </div>
            </section>
          </section>

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
          <h3 className="text-lg font-bold">Your cart is empty</h3>
          <p className="text-sm text-center my-3">
            Looks like you haven’t found anything yet. We understand that
            sometimes it’s hard to choose — maybe this helps:
          </p>
          <Link to="/tours" className="font-medium text-lg text-primary-color">
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
