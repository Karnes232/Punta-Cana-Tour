import React from "react";
import DatePickerComponent from "./DatePickerComponent";
import HotelSelect from "../TransferComponents/HotelSelect";

const MoreInfo = ({ formData, setFormData, hotels }) => {
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <HotelSelect
        formData={formData}
        setFormData={setFormData}
        hotels={hotels}
      />
      {/* <div className="relative z-10 mb-6 w-full group">
        <DatePickerComponent formData={formData} setFormData={setFormData} />
      </div> */}
      <div className="relative z-0 mb-6 w-full group">
        <label
          htmlFor="additional"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Your Message
        </label>
        <textarea
          id="additional"
          name="additional"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-0 focus:border-black additionalInfo"
          placeholder="Leave a comment..."
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};

export default MoreInfo;
