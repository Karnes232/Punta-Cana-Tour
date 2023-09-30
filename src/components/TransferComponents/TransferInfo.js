import React from "react";

const TransferInfo = ({ formData, handleChange }) => {
  return (
    <>
      
      <div className="relative z-0 mb-2 xl:mb-0 w-full group">
        <input
          type="radio"
          name="transferType"
          id="Round"
          className=""
          placeholder=" "
          required
          value="Round"
          onChange={handleChange}
        />
        <label htmlFor="Round" className="ml-5 text-gray-500">
          Round Trip
        </label>
      </div>
      <div className="relative z-0 mb-2 xl:mb-0 w-full group">
        <input
          type="radio"
          name="transferType"
          id="Arrival"
          className=""
          placeholder=" "
          required
          value="Arrival"
          onChange={handleChange}
        />
        <label htmlFor="Arrival" className="ml-5 text-gray-500">
          One way - Arrival
        </label>
      </div>
      <div className="relative z-0 mb-4 w-full group">
        <input
          type="radio"
          name="transferType"
          id="Depature"
          className=""
          placeholder=" "
          required
          value="Depature"
          onChange={handleChange}
        />
        <label htmlFor="Depature" className="ml-5 text-gray-500">
          One way - Depature
        </label>
      </div>
      <div className="relative z-0 mb-2 w-full group">
        <input
          type="number"
          name="passengerCount"
          id="passengerCount"
          className="contactFormInput peer"
          placeholder=""
          min="0"
          max="100"
          required
          value={formData.passengerCount}
          onChange={handleChange}
        />
        <label htmlFor="passengerCount" className="contactFormLabel">
          Passengers
        </label>
      </div>
    </>
  );
};

export default TransferInfo;
