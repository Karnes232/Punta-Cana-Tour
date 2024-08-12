import React from "react";
import IndividualCar from "./IndividualCar";

const CarSelect = ({ cars }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-start xl:justify-center xl:space-x-24">
      {cars.map((car, index) => {
        return  <IndividualCar car={car} key={index}/>
      })}
    
    </div>
  );
};

export default CarSelect;
