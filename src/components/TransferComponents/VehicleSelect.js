import React from "react";
import VehicleCard from "./VehicleCard";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const VehicleSelect = ({ formData, vehicles }) => {
  const liveId =
    "AQEgC9JKIvPEyauVBaX6Kxv1cQwaiylZ_Cbzu29ORf_ChBYZeM5FwGUSd4hCXGBMFBYAQLN2Vpez50lx";
  const sandBox =
    "AWKpOxlq063t4e3-YvGIHBWohFbzZ_o0Y1M2juHc6EaAr5iK_UfOAEKb_YxhdpRvC5uu_Sj444MyUzmZ";

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap max-w-6xl mx-auto justify-center lg:justify-between xl:gap-14 items-center">
      <PayPalScriptProvider
        options={{
          "client-id": sandBox,
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
