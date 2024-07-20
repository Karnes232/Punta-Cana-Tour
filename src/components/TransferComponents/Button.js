import React from "react";

const Button = ({ amount, formData, disabled, vehicle }) => {
  return (
    <>
      <form
        name="transferInfo"
        id="transferInfo"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="hidden">
          <input type="hidden" name="form-name" value="transferInfo" />
          <input type="text" name="name" defaultValue={formData.name} />
          <input type="email" name="email" defaultValue={formData.email} />
          <input
            type="tel"
            name="telephone"
            defaultValue={formData.telephone}
          />
          <input
            type="text"
            name="transferType"
            defaultValue={formData.transferType}
          />
          <input
            type="text"
            name="passengerCount"
            defaultValue={formData.passengerCount}
          />
          <input
            type="text"
            name="flightNumber"
            defaultValue={formData.flightNumber}
          />
          <input
            type="text"
            name="pickUpLocation"
            defaultValue={formData.pickUpLocation}
          />
          <input
            type="text"
            name="dropOffLocation"
            defaultValue={formData.dropOffLocation}
          />
          <input type="time" name="time" defaultValue={formData.time} />
          <input type="date" name="date" defaultValue={formData.date} />
          <input type="text" name="price" defaultValue={amount} />
          <input type="text" name="deposit" defaultValue={amount} />
          <input type="text" name="vehicle" defaultValue="" />
        </div>
        <button
          type="submit"
          disabled={disabled}
          className="px-4 py-2 my-3 disabled:opacity-60 bg-primary-color text-secondary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
        >
          Reserve Now
        </button>
      </form>
      {disabled ? (
        <p className="text-xs text-center text-red-600">
          Form Required to be Filled
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export default Button;
