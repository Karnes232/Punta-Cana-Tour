import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ContactInfo from "./ContactInfo";
import CitySelect from "./CitySelect";
import DatePickerComponent from "./DatePickerComponent";
import FlightReserveButton from "./FlightReserveButton";
import useCharterFlightValidation from "../../customHooks/useCharterFlightValidation";

const FormFlights = ({ image, formData, setFormData, cityList }) => {
  const airportImage = getImage(image.gatsbyImage);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  let disabled = useCharterFlightValidation(formData);

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center xl:justify-center xl:space-x-24">
      <div className="max-w-xs lg:max-w-lg xl:max-w-xl my-2 mx-2 rounded-lg overflow-hidden shadow-lg">
        <GatsbyImage
          image={airportImage}
          alt={image.title}
          className="w-full"
        />
      </div>
      <div className="w-80 md:w-full max-w-md lg:max-w-lg flex flex-col justify-center">
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
        <FlightReserveButton formData={formData} disabled={disabled} />
      </div>
    </div>
  );
};

export default FormFlights;
