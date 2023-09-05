import React from "react";
import DatePickerComponent from "./DatePickerComponent";

const MoreInfo = () => {
  return (
    <>
    <div className="relative z-0 mb-6 w-full group">
        <input
          type="location"
          name="location"
          id="location"
          className="contactFormInput peer"
          placeholder=" "

        />
        <label htmlFor="location" className="contactFormLabel">
          Pick Up Location
        </label>
      </div>
      <div className="relative z-10 mb-6 w-full group">
          <DatePickerComponent />
        </div>
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
        ></textarea>
      </div>
    </>
  );
};

export default MoreInfo;