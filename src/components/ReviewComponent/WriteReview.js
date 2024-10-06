import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import Recommend from "./Recommend";
import RateTour from "./RateTour";
import ShareYourStory from "./ShareYourStory";
import SubmitReview from "./SubmitReview";
import ImageUploadComponent from "./ImageUploadComponent";
const WriteReview = ({ tour }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    tour: tour.name,
    tourUrl: tour.url,
    recommend: "",
    qualityOfService: 0,
    responsiveness: 0,
    professionalism: 0,
    value: 0,
    flexibility: 0,
    title: "",
    description: "",
    Images: [],
  });
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg px-6 py-2 bg-primary-color text-secondary-color font-medium"
      >
        Write a review
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen h-screen justify-center overflow-scroll bg-white">
          <DialogPanel className="w-screen h-fit space-y-4 p-12 pb-16">
            <div className="fixed top-5 right-5">
              <button
                className="p-2 text-2xl text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                <IoClose />
              </button>
            </div>
            <DialogTitle className="font-bold text-center text-xl">
              {tour.name}
            </DialogTitle>
            <Recommend formData={formData} setFormData={setFormData} />
            <RateTour formData={formData} setFormData={setFormData} />
            <ShareYourStory formData={formData} setFormData={setFormData} />
            <ImageUploadComponent
              formData={formData}
              setFormData={setFormData}
            />
            <SubmitReview formData={formData} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default WriteReview;
