import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ContactInfo from "../TransferComponents/ContactInfo";
import DatePickerComponent from "./DatePickerComponent";

const Form = ({ image, handleSubmit, formData, setFormData }) => {
  const carImage = getImage(image.gatsbyImage);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center xl:justify-center xl:space-x-24">
      <div className="max-w-xs lg:max-w-lg my-2 mx-2 rounded-lg overflow-hidden shadow-lg">
        <GatsbyImage image={carImage} alt={image.title} className="w-full" />
      </div>
      <form
        name="carrental"
        method="POST"
        action={`/contact/thankyou/`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="contact"
        className="w-64 md:w-full max-w-md xl:max-w-lg flex flex-col justify-center items-center my-5"
        onSubmit={handleSubmit}
      >
        <ContactInfo
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
        <DatePickerComponent formData={formData} setFormData={setFormData} />
      </form>
    </div>
  );
};

export default Form;
