import React, { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const TransferPayPalWrapper = ({
  currency,
  showSpinner,
  amount,
  formData,
  disabled,
}) => {
  const style = { layout: "vertical", shape: "pill" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [host, setHost] = useState("");
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

  return (
    <>
      <form id="paymentInfo" className="hidden">
        <input type="text" name="name" value={formData.name} />
        <input type="email" name="email" value={formData.email} />
        <input type="tel" name="telephone" value={formData.telephone} />
        <input type="text" name="transferType" value={formData.transferType} />
        <input
          type="text"
          name="passengerCount"
          value={formData.passengerCount}
        />
        <input type="text" name="flightNumber" value={formData.flightNumber} />
        <input type="text" name="hotelSelect" value={formData.hotelSelect} />
        <input type="time" name="time" value={formData.time} />
        <input type="date" name="date" value={formData.date} />
      </form>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        className="w-full"
        style={style}
        disabled={disabled}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
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
            const form = document.getElementById("paymentInfo");
            const newFormData = new FormData(form);
            console.log(newFormData);
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(newFormData).toString(),
            })
              .then(() => console.log("Form successfully submitted"))
              .catch((error) => alert(error));
            const firstName = details.payer.name.given_name;
            const lastName = details.payer.name.surname;
            const deposit = details.purchase_units[0].amount.value;
            // window.location.href = `${host}/`;
            // window.location.href = `${host}/payment/thankyou/?firstname=${firstName}&lastname=${lastName}&deposit=${deposit}`;
          });
        }}
      />
    </>
  );
};

export default TransferPayPalWrapper;
