import React, { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import collectUserDataPayPal from "../../customHooks/collectUserDataPayPal";
import axios from "axios";
const PayPalButtonWrapper = ({
  currency,
  showSpinner,
  amount,
  tourList,
  clientName,
  clientEmail,
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

  let redirectHref = `${host}/payment/thankyou/?name=${clientName}`;
  tourList.map((tour) => {
    redirectHref =
      redirectHref + `&tourSelect=${tour.tourName}&guests=${tour.guestCount}`;
  });
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        className="w-full"
        style={style}
        disabled={false}
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
            const deposit = details.purchase_units[0].amount.value;
            const depositString = `&deposit=${deposit}`;
            axios.post("/api/tour", {
              clientName: clientName,
              clientEmail: clientEmail,
              deposit: deposit,
            });
            collectUserDataPayPal(details, redirectHref, depositString);
            // window.location.href = redirectHref + depositString;
          });
        }}
      />
    </>
  );
};

export default PayPalButtonWrapper;
