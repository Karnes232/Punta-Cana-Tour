import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "gatsby";
import useFormValidation from "../../customHooks/useFormValidation";
import TransferPayPalWrapper from "../PayPalButtonWrapper/TransferPayPalWrapper";

const VehicleCard = ({ vehicle, formData }) => {
  const image = getImage(vehicle.vehiclePhoto.gatsbyImage);
  console.log(formData)
  let price = 1;
  if (formData.zone === "1") {
    price = vehicle.zone1Price;
  }
  if (formData.zone === "2") {
    price = vehicle.zone2Price;
  }
  if (formData.zone === "3") {
    price = vehicle.zone3Price;
  }
  if (formData.zone === "4") {
    price = vehicle.zone4Price;
  }

  if (formData.transferType === "Round") {
    price = price * 2;
  }
  let disabled = useFormValidation(formData);
  return (
    <div className="max-w-xs min-w-[20rem] xl:max-w-xs my-5 mx-2 rounded-lg overflow-hidden shadow-lg">
      <GatsbyImage
        image={image}
        alt=""
        className="w-full object-cover h-64 lg:h-60"
      />
      <div className="px-6 py-4">
        <div className="font-bold h-10 text-lg flex justify-between">
          <div className="truncate mr-3">{vehicle.vehicleType}</div>
          <div className="w-20 text-right">${price}</div>
        </div>
        <p className="text-gray-700 mb-2 text-sm">
          {vehicle.amountOfPassengers}
        </p>
        <p className="text-gray-700 text-xs">{vehicle.description}</p>
      </div>

      <div className="px-6 pb-2 flex items-end flex-wrap">
        {/* <Link
          to={`/transfers/payment/?name=${formData.name}&email=${formData.email}&telephone=${formData.telephone}&transferType=${formData.transferType}&passengerCount=${formData.passengerCount}&flightNumber=${formData.flightNumber}&hotel=${formData.hotelSelect}&time=${formData.time}&date=${formData.date}&price=${price}`}
        >
          <button
            disabled={disabled}
            className={`flex items-center justify-between no-underline w-28 font-medium bg-primary-color text-secondary-color px-4 py-2 md:py-3 my-3 rounded-xl hover:opacity-70 ${
              disabled ? "opacity-50" : "opacity-100"
            }`}
          >
            Select <RiArrowRightSLine className="ml-2" />
          </button>
        </Link> */}
        {price ? (
          <>
            {" "}
            <TransferPayPalWrapper
              currency="USD"
              showSpinner={false}
              amount={price}
              formData={formData}
              disabled={disabled}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default VehicleCard;