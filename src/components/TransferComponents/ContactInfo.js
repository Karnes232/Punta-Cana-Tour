import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const ContactInfo = ({ formData, handleChange, setFormData }) => {
  const handlePhoneChange = (e) => {
    setFormData({
      ...formData,
      phone: e,
    });
  };
  return (
    <>
      <div className="relative z-0 mb-2 w-full group">
        <input
          type="name"
          name="name"
          id="name"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="name" className="contactFormLabel">
          Full Name
        </label>
      </div>
      <div className="relative z-0 mb-2 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="email" className="contactFormLabel">
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-4 w-full group">
        <PhoneInput
          type="tel"
          name="phone"
          id="phone"
          className="contactFormInput peer"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handlePhoneChange}
          // onCountryChange={handleCountryChange}
        />
        {/* <input
          type="tel"
          name="telephone"
          id="telephone"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="telephone" className="contactFormLabel">
          Telephone
        </label> */}
      </div>
    </>
  );
};

export default ContactInfo;
