import React from "react";
import VehicleCard from "./VehicleCard";

const VehicleSelect = ({ formData, vehicles }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap max-w-6xl mx-auto justify-center lg:justify-between xl:gap-14 items-center">
      {vehicles.map((vehicle, index) => {
        return (
          <VehicleCard key={index} vehicle={vehicle.node} formData={formData} />
        );
      })}
    </div>
  );
};

export default VehicleSelect;
