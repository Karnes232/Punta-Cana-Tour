import React, { useEffect, useState } from "react";

const FlightReserveButton = ({ formData, disabled }) => {
  const [host, setHost] = useState("");
  const [missingFormInfo, setMissingFormInfo] = useState(false);
  useEffect(() => {
    setHost(window.location.origin);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      setMissingFormInfo(true);
    } else {
      const redirectHref = `${host}/contact/thankyou/?name=${formData.name}`;
      const form = document.getElementById("charterFlights");
      const newFormData = new FormData(form);
      const formDataObj = {};
      newFormData.forEach((value, key) => (formDataObj[key] = value));
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(newFormData).toString(),
      }).then(() => {
        window.location.href = redirectHref;
      });
    }
  };

  return (
    <>
      <form
        name="charterFlights"
        id="charterFlights"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <div className="hidden">
          <input type="hidden" name="form-name" value="charterFlights" />
          <input type="text" name="name" defaultValue={formData.name} />
          <input type="email" name="email" defaultValue={formData.email} />
          <input type="tel" name="phone" defaultValue={formData.phone} />
          <input type="date" name="Date" defaultValue={formData.date} />
          <input
            type="text"
            name="pickup Location"
            defaultValue={formData.pickUpLocation}
          />
          <input
            type="text"
            name="dropoff Location"
            defaultValue={formData.dropOffLocation}
          />
          <input
            type="text"
            name="Airplane or Helicopter Type"
            defaultValue={formData.vehicleType}
          />
        </div>
      </form>
      <button
        className="px-4 py-2 mt-4 disabled:opacity-60 bg-primary-color text-secondary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
        onClick={handleSubmit}
      >
        Inquire Now
      </button>
      {missingFormInfo ? (
        <p className="text-xs lg:text-sm mt-2 text-center text-red-600">
          Form Required to be Filled & Vehicle Selected
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export default FlightReserveButton;
