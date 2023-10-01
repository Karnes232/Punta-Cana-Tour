import React, { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const TransferPayPalWrapper = ({ currency, showSpinner, amount, formData, disabled }) => {
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
  console.log(formData)
  console.log(amount)
  return (
    <>
      
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
            const firstName = details.payer.name.given_name;
            const lastName = details.payer.name.surname;
            const deposit = details.purchase_units[0].amount.value;
            window.location.href = `${host}/payment/thankyou/?firstname=${firstName}&lastname=${lastName}&deposit=${deposit}`;
          });
        }}
      />
    </>
  );
};

export default TransferPayPalWrapper;
