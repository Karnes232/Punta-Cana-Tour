import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ContactInfo from "./ContactInfo";
import CitySelect from "./CitySelect";
import DatePickerComponent from "./DatePickerComponent";

const FormFlights = ({ image, formData, setFormData, cityList }) => {
  const airportImage = getImage(image.gatsbyImage);
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
      <div className="max-w-xs lg:max-w-lg xl:max-w-xl my-2 mx-2 rounded-lg overflow-hidden shadow-lg">
        <GatsbyImage
          image={airportImage}
          alt={image.title}
          className="w-full"
        />
      </div>
      <form
        name="flightContact"
        method="POST"
        action={`/contact/thankyou/`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="flightContact"
        className="w-64 md:w-full max-w-md xl:max-w-lg flex flex-col justify-center items-center my-5"
        onSubmit={handleSubmit}
      >
        <ContactInfo
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
        <DatePickerComponent
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
      </form>
    </div>
  );
};

export default FormFlights;
