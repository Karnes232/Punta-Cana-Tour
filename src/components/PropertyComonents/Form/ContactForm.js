import React, { useState } from "react";
import ContactInfo from "./ContactInfo";

const ContactForm = ({ property }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyName: property.title,
    propertyPrice: property.price,
  });
  console.log(property);
  return (
    <div className="lg:w-4/12">
      <form
        name="PropertyForm"
        method="POST"
        action={`/`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="PropertyForm"
        className="w-full px-5 flex flex-col justify-center items-center mx-auto my-5 lg:my-0"
      >
        <div className="relative z-0 w-full text-lg font-medium">
          Contact Us
        </div>
        <input type="hidden" name="form-name" value="PropertyForm" />
        <ContactInfo formData={formData} setFormData={setFormData} />
        <button
          type="submit"
          className="px-4 py-2 my-3 bg-primary-color text-secondary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
          onClick={() => {}}
        >
          Send a Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
