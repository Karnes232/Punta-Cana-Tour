import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaArrowCircleDown, FaArrowCircleUp, FaCheck } from "react-icons/fa";
import CharterPhotoCarousel from "./CharterPhotoCarousel";
const CharterFlightCard = ({ vehicle, formData, setFormData }) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = (e) => {
    setFormData({
      ...formData,
      vehicleType: vehicle.vehicleType,
    });
  };
  let borderStyle = "";
  if (formData.vehicleType === vehicle.vehicleType) {
    borderStyle = "border-solid border-blue-400 border";
  } else {
    borderStyle = "";
  }
  return (
    <div
      className={`max-w-xs min-w-[20rem] xl:max-w-xs my-5 mx-2 rounded-lg overflow-hidden shadow-lg ${borderStyle}`}
      onClick={handleClick}
    >
      <CharterPhotoCarousel
        mainImage={vehicle.vehiclePhoto}
        imageList={vehicle.airCraftPhotos}
      />
      <div className="px-6 pt-4">
        <div className="font-bold h-10 text-lg items-center flex justify-between">
          <div className="truncate mr-3">{vehicle.vehicleType}</div>
          <div className="flex items-center gap-x-2">
            <IoPersonSharp /> {vehicle.passengers}
          </div>
        </div>
        <p className="text-gray-700 text-xs h-24 line-clamp-[6]">
          {vehicle.description}
        </p>
      </div>
      <div
        className="flex justify-center items-center py-4 gap-x-3 border-t"
        onClick={() => setShowMore(!showMore)}
      >
        Vehicle Details{" "}
        {showMore ? (
          <FaArrowCircleUp className="text-blue-400" />
        ) : (
          <FaArrowCircleDown className="text-blue-400" />
        )}
      </div>
      {showMore ? (
        <>
          <div className="flex flex-col pb-5 px-2 gap-y-1 text-sm">
            {vehicle.planeHelicopterFeatures.map((feature, index) => {
              return (
                <div className="flex items-center gap-x-2" key={index}>
                  <FaCheck className="text-xs text-blue-400" />
                  <p key={index}>{feature}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CharterFlightCard;
