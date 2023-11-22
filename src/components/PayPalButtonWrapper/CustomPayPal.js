import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButtonWrapper from "../PayPalButtonWrapper/PayPalButtonWrapper";
import { paypalId } from "../../data/paypalId";

const CustomPayPal = ({ price, tourList, clientName, clientEmail }) => {
  const currency = "USD";
  return (
    <div className="flex justify-center md:w-80 xl:w-96">
      <PayPalScriptProvider
        options={{
          "client-id": paypalId,
          components: "buttons",
          currency: "USD",
        }}
      >
        <PayPalButtonWrapper
          currency={currency}
          showSpinner={false}
          amount={price}
          tourList={tourList}
          clientName={clientName}
          clientEmail={clientEmail}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default CustomPayPal;
