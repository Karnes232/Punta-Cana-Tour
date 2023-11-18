import React from "react";
import DatePickerComponent from "./DatePickerComponent";

const DateTime = ({ formData, handleChange, setFormData }) => {
  //set minDate to a future date
  const futureDays = 2;
  const date = new Date();
  date.setDate(date.getDate() + futureDays);
  // const minDate = date.toLocaleDateString("en-ca");

  return (
    <div className="flex flex-col mt-6 lg:flex-row lg:gap-10 lg:justify-between w-full">
      <div className="relative z-0 mb-6 w-full lg:w-1/2 group">
        <input
          type="time"
          name="time"
          id="time"
          className="peer transferFormInput"
          placeholder=""
          required
          value={formData.time}
          onChange={handleChange}
        />
        <label htmlFor="time" className="transferFormLabel">
          Pick Up Time
        </label>
      </div>
      <div className="relative z-10 mb-6 w-full lg:w-1/2 group">
        {/* <input
          type="date"
          name="date"
          id="date"
          className="peer transferFormInput"
          placeholder=""
          min={minDate}
          required
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="date" className="transferFormLabel">
          Date
        </label> */}
        <DatePickerComponent
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default DateTime;
