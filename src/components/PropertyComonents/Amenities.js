import React from "react";
import {
  MdPool,
  MdFitnessCenter,
  MdOutdoorGrill,
  MdBalcony,
  MdSolarPower,
  MdOutlineSecurity,
} from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import { SiSmartthings } from "react-icons/si";
const Amenities = ({ amenities }) => {
  return (
    <>
      <h4 className="text-xl md:text-2xl tracking-wide my-2">Amenities</h4>
      <div className="flex flex-col md:flex-row md:flex-wrap  max-w-6xl xl:max-w-6xl mx-auto">
        {amenities.includes("Swimming Pool") ? (
          <div class="flex items-center w-80 h-12">
            <MdPool className="mr-2" size={30} />
            Swimming Pool
          </div>
        ) : (
          <></>
        )}
        {amenities.includes("Fitness Center/Gym") ? (
          <div class="flex items-center w-80 h-12">
            <MdFitnessCenter className="mr-2" size={30} />
            Fitness Center/Gym
          </div>
        ) : (
          <></>
        )}
        {amenities.includes("BBQ/Picnic Area") ? (
          <div class="flex items-center w-80 h-12">
            <MdOutdoorGrill className="mr-2" size={30} />
            BBQ/Picnic Area
          </div>
        ) : (
          <></>
        )}
        {amenities.includes("Gated Community/Security") ? (
          <div class="flex items-center w-80 h-12">
            <MdOutlineSecurity className="mr-2" size={30} />
            Gated Community/Security
          </div>
        ) : (
          <></>
        )}
        {amenities.includes("Balcony/Patio") ? (
          <div class="flex items-center w-80 h-12">
            <MdBalcony className="mr-2" size={30} />
            Balcony/Patio
          </div>
        ) : (
          <></>
        )}
        {amenities.includes("Dishwasher") ? (
          <div class="flex items-center w-80 h-12">
            <FaKitchenSet className="mr-2" size={30} />
            Dishwasher
          </div>
        ) : (
          <></>
        )}
        {amenities.includes("Smart Home Features") ? (
          <div class="flex items-center w-80 h-12">
            <SiSmartthings className="mr-2" size={30} />
            Smart Home Features
          </div>
        ) : (
          <></>
        )}
        {amenities.includes("Solar Panels") ? (
          <div class="flex items-center w-80 h-12">
            <MdSolarPower className="mr-2" size={30} />
            Solar Panels
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Amenities;
