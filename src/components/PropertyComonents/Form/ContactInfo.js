import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const ContactInfo = ({ formData, setFormData }) => {
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handlePhoneChange = (e) => {
    setFormData({
      ...formData,
      phone: e,
    });
  };
  let phoneAlert = false;
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          className={`contactFormInput peer ${
            phoneAlert ? "!bg-red-200 placeholder-white" : ""
          }`}
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-0 focus:border-black additionalInfo"
          placeholder="Leave a comment..."
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};

export default ContactInfo;
