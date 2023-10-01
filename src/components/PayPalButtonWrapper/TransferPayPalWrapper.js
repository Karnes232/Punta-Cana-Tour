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
      <form
        name="transferInfo"
        id="transferInfo"
        className="hidden"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="transferInfo" />
        <input type="text" name="name" defaultValue={formData.name} />
        <input type="email" name="email" defaultValue={formData.email} />
        <input type="tel" name="telephone" defaultValue={formData.telephone} />
        <input type="text" name="transferType" defaultValue={formData.transferType} />
        <input
          type="text"
          name="passengerCount"
          defaultValue={formData.passengerCount}
        />
        <input type="text" name="flightNumber" defaultValue={formData.flightNumber} />
        <input type="text" name="hotelSelect" defaultValue={formData.hotelSelect} />
        <input type="time" name="time" defaultValue={formData.time} />
        <input type="date" name="date" defaultValue={formData.date} />
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
            const form = document.getElementById("transferInfo");
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
