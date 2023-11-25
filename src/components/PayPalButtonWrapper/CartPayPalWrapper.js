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
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        className="w-full"
        style={style}
        disabled={false}
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
            dataFromForm.set("Date", formData.date);
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