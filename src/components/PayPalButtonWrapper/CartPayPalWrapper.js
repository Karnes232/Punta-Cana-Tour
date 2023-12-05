import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useContext, useEffect, useState } from "react";
import collectUserDataPayPal from "../../customHooks/collectUserDataPayPal";
import axios from "axios";
import { CartContext } from "../../context/cart";
const CartPayPalWrapper = ({
  currency,
  showSpinner,
  totalCost,
  deposit,
  balance,
  tourList,
  clientName,
  clientEmail,
  formData,
  disabled,
}) => {
  const style = { layout: "vertical", shape: "pill" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [host, setHost] = useState("");
  const { clearCart, cartItems } = useContext(CartContext);
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    setHost(window.location.origin);
  }, [currency, showSpinner]);
  let redirectHref = `${host}/payment/thankyou/?name=${clientName}&totalPrice=${totalCost}`;

  function getFormData(object) {
    const newFormData = new FormData();
    newFormData.append("PickUpTime1", formData.PickUp1);
    newFormData.append("PickUpTime2", formData.PickUp2);
    newFormData.append("PickUpTime3", formData.PickUp3);
    newFormData.append("PickUpTime4", formData.PickUp4);
    Object.keys(object).forEach((key) => newFormData.append(key, object[key]));
    return newFormData;
  }
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        className="w-full"
        style={style}
        disabled={disabled}
        forceReRender={[deposit, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: deposit.toFixed(2),
                  },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING",
              },
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            const deposit = details.purchase_units[0].amount.value;
            const depositString = `&deposit=${deposit}`;

            const dataFromForm = getFormData(formData);

            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(dataFromForm).toString(),
            })
              .then(() => {
                console.log("Form successfully submitted");
                axios.post("/api/tour", {
                  clientName: clientName,
                  clientEmail: clientEmail,
                  deposit: deposit,
                  totalPrice: totalCost,
                  tourList: tourList,
                  formData: formData,
                });
                collectUserDataPayPal(
                  details,
                  redirectHref,
                  depositString,
                  totalCost,
                  formData,
                  clearCart,
                );
              })
              .catch((error) => alert(error));

            // window.location.href = redirectHref + depositString;
          });
        }}
      />
    </>
  );
};

export default CartPayPalWrapper;
