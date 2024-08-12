import React, { useEffect, useState } from "react";

const ReserveButton = ({ formData }) => {
  const [host, setHost] = useState("");
  useEffect(() => {
    setHost(window.location.origin);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    const redirectHref = `${host}/contact/thankyou/?name=${formData.name}`;
    const form = document.getElementById("carRental");
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
  };
  return (
    <>
      <form
        name="carRental"
        id="carRental"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <div className="hidden">
          <input type="hidden" name="form-name" value="carRental" />
          <input type="text" name="name" defaultValue={formData.name} />
          <input type="email" name="email" defaultValue={formData.email} />
          <input type="tel" name="phone" defaultValue={formData.phone} />
          <input
            type="date"
            name="start Date"
            defaultValue={formData.startDate}
          />
          <input type="date" name="end Date" defaultValue={formData.endDate} />
          <input type="text" name="car Type" defaultValue={formData.carType} />
        </div>
      </form>
      <button
        className="px-4 py-2 mt-4 disabled:opacity-60 bg-primary-color text-secondary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
        onClick={handleSubmit}
      >
        Reserve Now
      </button>
    </>
  );
};

export default ReserveButton;
