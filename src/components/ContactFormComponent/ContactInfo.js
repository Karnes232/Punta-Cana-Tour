import React from "react";
import PhoneInput from "react-phone-number-input";
const ContactInfo = ({ name, setName }) => {
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="name"
          name="name"
          id="name"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name" className="contactFormLabel">
          Full Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          className="contactFormInput peer"
          placeholder=" "
          required
        />
        <label htmlFor="email" className="contactFormLabel">
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <PhoneInput
          type="tel"
          name="phone"
          id="phone"
          className={`contactFormInput peer `}
          placeholder="Enter phone number"
          // value={formData.phone}
          // onChange={handlePhoneChange}
          // onCountryChange={handleCountryChange}
        />
      </div>
      <div className="relative z-0 mb-6 w-full group"></div>
    </>
  );
};

export default ContactInfo;
