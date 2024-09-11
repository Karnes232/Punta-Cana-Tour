import React from "react";
import {
  MdPool,
  MdFitnessCenter,
  MdOutdoorGrill,
  MdBalcony,
  MdSolarPower,
  MdOutlineSecurity,
  MdSpa,
  MdLocalParking,
  MdLocalLaundryService,
  MdKitchen,
  MdAllInclusive,
} from "react-icons/md";
import { GiLockers } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { FaKitchenSet, FaWifi } from "react-icons/fa6";
import { SiSmartthings } from "react-icons/si";
const Amenities = ({ amenities }) => {
  console.log(amenities)
  return (
    <>
      {amenities && <h4 className="text-xl md:text-2xl tracking-wide my-2">Amenities</h4> }
 
      <div className="flex flex-col md:flex-row md:flex-wrap  max-w-6xl xl:max-w-6xl mx-auto">
        {amenities?.includes("All Inclusive") ? (
          <div className="flex items-center w-80 h-12">
            <MdAllInclusive className="mr-2" size={30} />
            All Inclusive
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Swimming Pool") ? (
          <div className="flex items-center w-80 h-12">
            <MdPool className="mr-2" size={30} />
            Swimming Pool
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Wi-Fi") ? (
          <div className="flex items-center w-80 h-12">
            <FaWifi className="mr-2" size={30} />
            Wi-Fi
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Fitness Center/Gym") ? (
          <div className="flex items-center w-80 h-12">
            <MdFitnessCenter className="mr-2" size={30} />
            Fitness Center/Gym
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Private Rooms") ? (
          <div className="flex items-center w-80 h-12">
            <IoBed className="mr-2" size={30} />
            Private Rooms
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Shared Kitchen") ? (
          <div className="flex items-center w-80 h-12">
            <MdKitchen className="mr-2" size={30} />
            Shared Kitchen
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Spa Services") ? (
          <div className="flex items-center w-80 h-12">
            <MdSpa className="mr-2" size={30} />
            Spa Services
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("BBQ/Picnic Area") ? (
          <div className="flex items-center w-80 h-12">
            <MdOutdoorGrill className="mr-2" size={30} />
            BBQ/Picnic Area
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Gated Community/Security") ? (
          <div className="flex items-center w-80 h-12">
            <MdOutlineSecurity className="mr-2" size={30} />
            Gated Community/Security
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Lockers") ? (
          <div className="flex items-center w-80 h-12">
            <GiLockers className="mr-2" size={30} />
            Lockers
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Parking") ? (
          <div className="flex items-center w-80 h-12">
            <MdLocalParking className="mr-2" size={30} />
            Parking
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Balcony/Patio") ? (
          <div className="flex items-center w-80 h-12">
            <MdBalcony className="mr-2" size={30} />
            Balcony/Patio
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Dishwasher") ? (
          <div className="flex items-center w-80 h-12">
            <FaKitchenSet className="mr-2" size={30} />
            Dishwasher
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Laundry") ? (
          <div className="flex items-center w-80 h-12">
            <MdLocalLaundryService className="mr-2" size={30} />
            Laundry
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Smart Home Features") ? (
          <div className="flex items-center w-80 h-12">
            <SiSmartthings className="mr-2" size={30} />
            Smart Home Features
          </div>
        ) : (
          <></>
        )}
        {amenities?.includes("Solar Panels") ? (
          <div className="flex items-center w-80 h-12">
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
