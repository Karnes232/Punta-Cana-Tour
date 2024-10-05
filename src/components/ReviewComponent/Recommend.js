import React from "react";
import { Description } from "@headlessui/react";
import { IoThumbsUpOutline, IoThumbsDownOutline } from "react-icons/io5";
const Recommend = ({ formData, setFormData }) => {
  const handleRecommend = () => {
    setFormData({
      ...formData,
      recommend: true,
    });
  };
  const handleDontRecommend = () => {
    setFormData({
      ...formData,
      recommend: false,
    });
  };
  return (
    <>
      <Description className="text-center">
        Would you recommend this tour?
      </Description>
      <div className="flex justify-center items-center gap-5">
        <div
          className={`text-3xl border border-gray-500 p-2 rounded-lg hover:bg-primary-color transition-all ${
            formData.recommend ? "bg-primary-color" : ""
          }`}
          onClick={handleRecommend}
        >
          <IoThumbsUpOutline />
        </div>
        <div
          className={`text-3xl border border-gray-500 p-2 rounded-lg hover:bg-primary-color transition-all ${
            formData.recommend === false ? "bg-primary-color" : ""
          }`}
          onClick={handleDontRecommend}
        >
          <IoThumbsDownOutline />
        </div>
      </div>
    </>
  );
};

export default Recommend;
