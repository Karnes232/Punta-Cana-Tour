import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ContactInfo from "./ContactInfo";
import TransferInfo from "./TransferInfo";
import HotelSelect from "./HotelSelect";

const Form = ({ data, formData, setFormData, hotels }) => {
  const image = getImage(data.gatsbyImage);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.id]: target.value,
    });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center">
      <div className="max-w-xs my-2 mx-2 rounded-lg overflow-hidden shadow-lg">
        <GatsbyImage image={image} alt={data.title} className="w-full" />
      </div>
      <form
        name="contact"
        method="POST"
        action={`/contact/thankyou/`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="contact"
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center my-5"
      >
        <ContactInfo formData={formData} handleChange={handleChange} />
        <TransferInfo formData={formData} handleChange={handleChange} />
        <HotelSelect
          formData={formData}
          setFormData={setFormData}
          hotels={hotels}
        />
      </form>
    </div>
  );
};

export default Form;
