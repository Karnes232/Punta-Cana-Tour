import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paypalId } from "../../data/paypalId";
import CustomPaymentButton from "./CustomPaymentButton";

const CustomPaymentPayPal = ({ price }) => {
  const currency = "USD";
  return (
    <div className="flex justify-center">
      <PayPalScriptProvider
        options={{
          "client-id": paypalId,
          components: "buttons",
          currency: "USD",
        }}
      >
        <CustomPaymentButton
          currency={currency}
          showSpinner={false}
          amount={price}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default CustomPaymentPayPal;
