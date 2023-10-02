import React from "react";

const DateTime = ({ formData, handleChange }) => {
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
      <div className="relative z-0 mb-6 w-full lg:w-1/2 group">
        <input
          type="date"
          name="date"
          id="date"
          className="peer transferFormInput"
          placeholder=""
          // min={"2023-10-15"}
          required
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="date" className="transferFormLabel">
          Date 1
        </label>
      </div>
    </div>
  );
};

export default DateTime;
