import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const ContactInfo = ({ name, setName, formData, setFormData, phoneAlert }) => {
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
  // const handleCountryChange = (e) => {
  //   console.log(e)
  // }

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
        {/* <input
          type="tel"
          name="phone"
          id="phone"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        /> */}
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
          // onCountryChange={handleCountryChange}
        />
        {/* <label htmlFor="phone" className="contactFormLabel">
          Phone
        </label> */}
      </div>
      {/* <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="roomNumber"
          id="roomNumber"
          className="contactFormInput peer"
          placeholder=" "
          onChange={handleChange}
        />
        <label htmlFor="roomNumber" className="contactFormLabel">
          Room Number
        </label>
      </div> */}
    </>
  );
};

export default ContactInfo;
