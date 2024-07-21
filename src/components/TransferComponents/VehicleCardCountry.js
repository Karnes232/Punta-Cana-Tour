import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ButtonCountry from "./ButtonCountry";
import useFormValidationTransferCountry from "../../customHooks/useFormValidationTransferCountry";
const VehicleCardCountry = ({ vehicle, formData }) => {
  const image = getImage(vehicle.vehiclePhoto.gatsbyImage);
  let disabled = useFormValidationTransferCountry(formData);

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
          {/* <div className="w-20 text-right">
            {price > 1 ? <> ${price} </> : <></>}
          </div> */}
        </div>
        <p className="text-gray-700 mb-2 text-sm">
          {vehicle.amountOfPassengers}
        </p>
        <p className="text-gray-700 text-xs">{vehicle.description}</p>
      </div>
      <div className="px-6 pb-2 flex items-end flex-wrap justify-center">
        <ButtonCountry
          formData={formData}
          disabled={disabled}
          vehicle={vehicle}
        />
      </div>
    </div>
  );
};

export default VehicleCardCountry;
