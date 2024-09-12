import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import usePropertyFormValidation from "../../../customHooks/usePropertyFormValidation";

const ContactForm = ({ property, email, formName }) => {
  const [phoneAlert, setPhoneAlert] = useState(false);
  const [contacted, setContacted] = useState(false);
  const [missingFormInfo, setMissingFormInfo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyName: property.title,
    propertyPrice: property.price,
  });
  let disabled = usePropertyFormValidation(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      setMissingFormInfo(true);
    } else {
      const form = document.getElementById("PropertyForm");
      const newFormData = new FormData(form);
      const formDataObj = {};
      newFormData.forEach((value, key) => (formDataObj[key] = value));
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(newFormData).toString(),
      }).then(() => {
        setContacted(true);
      });
    }
  };

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
          onSubmit={handleSubmit}
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
          {missingFormInfo ? (
            <p className="text-xs lg:text-sm mt-2 text-center text-red-600">
              Form Required to be Filled
            </p>
          ) : (
            <></>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
