import React from "react";
import VehicleCard from "./VehicleCard";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paypalId } from "../../data/paypalId";

const VehicleSelect = ({ formData, vehicles }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap max-w-6xl mx-auto justify-center lg:justify-between xl:gap-14 items-center">
      <PayPalScriptProvider
        options={{
          "client-id": paypalId,
          components: "buttons",
          currency: "USD",
        }}
      >
        {vehicles.map((vehicle, index) => {
          return (
            <VehicleCard
              key={index}
              vehicle={vehicle.node}
              formData={formData}
            />
          );
        })}
      </PayPalScriptProvider>
    </div>
  );
};

export default VehicleSelect;
