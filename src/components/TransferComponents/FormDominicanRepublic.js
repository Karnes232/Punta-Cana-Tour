import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ContactInfo from "./ContactInfo";
import TransferInfo from "./TransferInfo";
import DateTime from "./DateTime";
import CitySelect from "./CitySelect";

const FormDominicanRepublic = ({ data, formData, setFormData, cityList }) => {
  const image = getImage(data.gatsbyImage);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center xl:justify-center xl:space-x-24">
      <div className="max-w-xs lg:max-w-lg my-2 mx-2 rounded-lg overflow-hidden shadow-lg">
        <GatsbyImage image={image} alt={data.title} className="w-full" />
      </div>
      <form
        name="contact"
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
        <TransferInfo
          formData={formData}
          handleChange={handleChange}
          local={false}
        />
        <DateTime
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
        <CitySelect
          cityList={cityList}
          formData={formData}
          setFormData={setFormData}
          pickup={true}
        />
        <CitySelect
          cityList={cityList}
          formData={formData}
          setFormData={setFormData}
          dropoff={true}
        />
      </form>
    </div>
  );
};

export default FormDominicanRepublic;
