import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import DatePickerComponent from "../../CarRentalComponents/DatePickerComponent";

const ContactForm = ({ property, email, formName }) => {
  const [phoneAlert, setPhoneAlert] = useState(false);
  const [contacted, setContacted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    startDate: "",
    endDate: "",
    propertyName: property.title,
    propertyPrice: property.price,
  });
  return (
    <div className="">
      {contacted ? (
        <div className="h-[28rem] flex flex-col justify-center items-center text-slate-600 ">
          <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
            Thank you {formData.name}, our team will reach out to you shortly!
          </div>

          <div className="text-center text-sm xl:text-base mt-2 xl:mt-6">
            Please feel free to{" "}
            <a
              href={`mailto:${email}`}
              aria-label="Gmail"
              rel="noreferrer"
              className="underline"
            >
              contact us
            </a>{" "}
            with any questions or concerns.
          </div>
        </div>
      ) : (
        <form
          name={formName}
          method="POST"
          action={`/contact/thankyou/?name=${formData.name}`}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          id={formName}
          className="w-full px-5 flex flex-col justify-center items-center mx-auto my-5 lg:my-0"
        >
          <div className="relative z-0 w-full text-xl font-medium mb-5">
            Contact Us
          </div>
          <input type="hidden" name="form-name" value={formName} />
          <input
            type="hidden"
            name="propertyName"
            value={formData.propertyName}
          />
          <input
            type="hidden"
            name="propertyPrice"
            value={formData.propertyPrice}
          />
          <input type="hidden" name="startDate" value={formData.startDate} />
          <input type="hidden" name="endDate" value={formData.endDate} />
          <ContactInfo
            formData={formData}
            setFormData={setFormData}
            phoneAlert={phoneAlert}
          />

          <button
            type="submit"
            className="px-4 py-2 my-3 bg-primary-color text-secondary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
            onClick={() => {}}
          >
            Send a Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
