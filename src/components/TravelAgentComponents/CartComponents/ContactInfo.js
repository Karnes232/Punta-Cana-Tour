import React from "react";

const ContactInfo = ({ formData, setFormData }) => {
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
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
          Client's Name
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
          Client's Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="tel"
          name="phone"
          id="phone"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="phone" className="contactFormLabel">
          Client's Phone
        </label>
      </div>
    </>
  );
};

export default ContactInfo;
