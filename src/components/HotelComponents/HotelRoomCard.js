import React, { useState } from "react";
import PropertyCardCarousel from "../PropertyComonents/PropertyCardCarousel";
import { IoBed, IoPeople } from "react-icons/io5";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
const HotelRoomCard = ({ hotelRoom }) => {
  const [showMore, setShowMore] = useState(false);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <>
      <div className="max-w-sm min-w-[20rem] xl:max-w-xs my-5 rounded-lg overflow-hidden shadow-lg flex flex-col">
        <PropertyCardCarousel mainImage={[]} imageList={hotelRoom.images} />
        <div className="px-6 py-4 flex flex-col flex-grow">
          <div className="font-bold text-lg">
            <div className="truncate">{hotelRoom.roomName}</div>
          </div>
          <div className="flex flex-col mt-1 max-w-6xl xl:max-w-6xl mx-auto flex-grow justify-between">
            <div>
              <div className="flex items-center w-80 my-1 text-sm">
                <IoPeople className="mr-2" size={18} />
                Sleeps {hotelRoom.sleeps}
              </div>
              {hotelRoom?.bedType?.map((beds, index) => {
                return (
                  <div
                    className="flex items-center my-1 w-80 text-sm"
                    key={index}
                  >
                    <IoBed className="mr-2" size={18} />
                    {beds}
                  </div>
                );
              })}
              <div className="flex items-center w-80 mt-1 mb-2 font-medium text-base tracking-wider">
                {currencyFormatter.format(hotelRoom.price)}{" "}
                {hotelRoom.dormRoom ? <>per Person</> : <>per Room</>}
              </div>
            </div>
            <div
              className="flex items-center py-2 gap-x-3 border-t"
              onClick={() => setShowMore(!showMore)}
            >
              More details{" "}
              {showMore ? (
                <FaArrowCircleUp className="text-blue-400" />
              ) : (
                <FaArrowCircleDown className="text-blue-400" />
              )}
            </div>
            {showMore ? (
              <>
                <div className="flex flex-col gap-y-1 text-sm max-w-[17rem]">
                  {hotelRoom.description}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelRoomCard;
