import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import ReactStars from "react-stars";
import ProgressBars from "./ProgressBars";
const IndividualReviewPopup = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-600 font-semibold text-left"
      >
        Read more...
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-3xl rounded-xl bg-white lg:p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <div className="fixed top-5 right-5">
                <button
                  className="p-2 text-2xl text-gray-500"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose />
                </button>
              </div>

              <div className="rounded-lg p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  {review.photoUrl ? (
                    <img
                      src={review.photoUrl}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl text-gray-600">
                        {review.name}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    {/*   <p className="text-gray-500 text-sm">Sent on {review.date}</p> */}
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <ReactStars
                    count={5}
                    value={review.overAllRating}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                  />
                  <span className="ml-2 font-semibold">
                    {review.overAllRating.toFixed(1)}
                  </span>
                </div>
                <ProgressBars
                  qualityOfServiceAvg={review.qualityOfService}
                  responsivenessAvg={review.responsiveness}
                  professionalismAvg={review.professionalism}
                  valueAvg={review.value}
                  flexibilityAvg={review.flexibility}
                  small
                />
                <DialogTitle className="font-medium text-left text-xl mt-5">
                  {review.title}
                </DialogTitle>
                <Description className="text-left">
                  {review.description}
                </Description>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default IndividualReviewPopup;
