import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import { paypalId } from "../../data/paypalId";
import CartPayPalWrapper from "./CartPayPalWrapper";
import useFormValidationReservations from "../../customHooks/useFormValidationReservations";

const CartPayPal = ({ formData, allTours }) => {
  const currency = "USD";
  let tourList = [];
  let guestCount = [];
  if (formData.Tour1 !== "- undefined") {
    tourList.push(formData.Tour1.split("- ")[1]);
    guestCount.push(formData.Pax1.split("- ")[1]);
  }
  if (formData.Tour2 !== "- undefined") {
    tourList.push(formData.Tour2.split("- ")[1]);
    guestCount.push(formData.Pax2.split("- ")[1]);
  }
  if (formData.Tour3 !== "- undefined") {
    tourList.push(formData.Tour3.split("- ")[1]);
    guestCount.push(formData.Pax3.split("- ")[1]);
  }
  if (formData.Tour4 !== "- undefined") {
    tourList.push(formData.Tour4.split("- ")[1]);
    guestCount.push(formData.Pax4.split("- ")[1]);
  }
  let totalCost = 0;
  const newList = tourList.map((tour, index) => {
    let tourPrice = allTours.nodes.find(
      (tour) => tour.name === tourList[index],
    )?.price;

    totalCost += parseInt(tourPrice) * parseInt(guestCount[index]);

    return {
      tourName: tour,
      guestCount: guestCount[index],
      tour: allTours.nodes.find((tour) => tour.name === tourList[index]),
    };
  });
  const deposit = totalCost * 0.3;
  const balance = totalCost * 0.7;
  let disabled = useFormValidationReservations(formData);
  return (
    <div className="flex justify-center md:w-80 xl:w-96">
      <PayPalScriptProvider
        options={{
          "client-id": paypalId,
          components: "buttons",
          currency: "USD",
        }}
      >
        <CartPayPalWrapper
          currency={currency}
          showSpinner={false}
          totalCost={totalCost}
          deposit={deposit}
          balance={balance}
          tourList={newList}
          clientName={formData.name}
          clientEmail={formData.email}
          formData={formData}
          disabled={disabled}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default CartPayPal;
