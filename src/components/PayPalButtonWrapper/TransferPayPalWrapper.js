import React, { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import collectUserDataTransfer from "../../customHooks/collectUserDataTransfer";
import axios from "axios";

const TransferPayPalWrapper = ({
  currency,
  showSpinner,
  amount,
  formData,
  disabled,
  vehicle,
}) => {
  const style = { layout: "vertical", shape: "pill" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [host, setHost] = useState("");
  const paypalAmount = amount*3
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
        <input
          type="text"
          name="transferType"
          defaultValue={formData.transferType}
        />
        <input
          type="text"
          name="passengerCount"
          defaultValue={formData.passengerCount}
        />
        <input
          type="text"
          name="flightNumber"
          defaultValue={formData.flightNumber}
        />
        <input
          type="text"
          name="hotelSelect"
          defaultValue={formData.hotelSelect}
        />
        <input type="time" name="time" defaultValue={formData.time} />
        <input type="date" name="date" defaultValue={formData.date} />
        <input type="text" name="price" defaultValue={amount} />
        <input type="text" name="deposit" defaultValue={amount} />
        <input type="text" name="vehicle" defaultValue="" />
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
                    value: paypalAmount.toFixed(2),
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
            const formDataObj = {};
            newFormData.set("price", amount);
            newFormData.set("deposit", details.purchase_units[0].amount.value);
            newFormData.set("vehicle", vehicle.vehicleType);
            newFormData.forEach((value, key) => (formDataObj[key] = value));
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(newFormData).toString(),
            })
              .then(() => {
                console.log("Form successfully submitted");
                const firstName = details.payer.name.given_name;
                const lastName = details.payer.name.surname;
                const name = `${firstName} ${lastName}`;
                const redirectHref = `${host}/contact/thankyou/?name=${name}`;
                axios.post("/api/transfer", {
                  clientName: name,
                  deposit: details.purchase_units[0].amount.value,
                  formData: formDataObj,
                  vehicle: vehicle,
                });
                collectUserDataTransfer(details, formDataObj, redirectHref);
              })
              .catch((error) => alert(error));

            // window.location.href = `${host}/payment/thankyou/?firstname=${firstName}&lastname=${lastName}&deposit=${deposit}`;
          });
        }}
      />
    </>
  );
};

export default TransferPayPalWrapper;
