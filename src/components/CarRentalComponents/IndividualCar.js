import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { GiGearStickPattern, GiSuitcase } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { FaArrowCircleDown, FaArrowCircleUp, FaCheck } from "react-icons/fa";
const IndividualCar = ({ car, formData, setFormData }) => {
  const [showMore, setShowMore] = useState(false);
  const image = getImage(car.carImage.gatsbyImage);
  const handleClick = (e) => {
    setFormData({
      ...formData,
      carType: car.carType,
    });
  };
  let borderStyle = "";
  if (formData.carType === car.carType) {
    borderStyle = "border-solid border-blue-400 border";
  } else {
    borderStyle = "";
  }
  return (
    <div
      className={`max-w-sm min-w-[20rem] xl:max-w-xs my-5 mx-2 rounded-2xl overflow-hidden shadow-lg bg-gray-50 ${borderStyle}`}
      onClick={handleClick}
    >
      <div className="flex py-5 px-2 border-b">
        <div className="w-1/2 flex flex-col gap-y-1 ml-2">
          <div className="font-medium text-xl text-blue-400 h-14 line-clamp-2">{car.carType}</div>
          <div>
            <div className="font-light truncate">{car.carModel}</div>
            <div className="font-light text-xs">or Similar</div>
          </div>
          <div className="flex items-center gap-x-1 text-xs font-medium">
            <GiGearStickPattern /> {car.gearbox}
          </div>
          <div className="flex gap-x-4 items-center text-xs font-medium">
            <div className="flex items-center gap-x-1">
              <IoPersonSharp /> {car.passengers}
            </div>
            {car.luggage ? (
              <div className="flex gap-x-1">
                <GiSuitcase size={15}/> {car.luggage}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <GatsbyImage
            image={image}
            alt={car.carImage.title}
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-4 text-lg">
        from{" "}
        <span className="mx-1 text-2xl text-white bg-blue-400 p-2 rounded-lg">
          ${car.dailyRate}
        </span>{" "}
        Daily
      </div>
      <div className="flex justify-center items-center gap-x-3 pb-4 border-b">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Select
        </button>
      </div>
      <div
        className="flex justify-center items-center py-4 gap-x-3"
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
          <div className="flex flex-col pb-5 px-2 gap-y-1 text-sm border-b">
            {car.vehicleFeatures.map((feature, index) => {
              return (
                <div className="flex items-center gap-x-2" key={index}>
                  <FaCheck className="text-xs text-blue-400" />
                  <p key={index}>{feature}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col py-5 px-2 gap-y-1 text-xs">
            {car.liabilityStatement.liabilityStatement}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default IndividualCar;
