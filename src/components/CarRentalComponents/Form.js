import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ContactInfo from "../TransferComponents/ContactInfo";
import DatePickerComponent from "./DatePickerComponent";
import ReserveButton from "./ReserveButton";
import useCarRentalValidation from "../../customHooks/useCarRentalValidation";

const Form = ({ image, formData, setFormData }) => {
  const carImage = getImage(image.gatsbyImage);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  let disabled = useCarRentalValidation(formData);

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center xl:justify-center xl:space-x-24">
      <div className="max-w-xs lg:max-w-lg my-2 mx-2 rounded-lg overflow-hidden shadow-lg">
        <GatsbyImage image={carImage} alt={image.title} className="w-full" />
      </div>
      <div className="w-64 md:w-full max-w-md xl:max-w-lg flex flex-col justify-center">
        <ContactInfo
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
        <DatePickerComponent formData={formData} setFormData={setFormData} />
        <ReserveButton formData={formData} disabled={disabled} />
      </div>
    </div>
  );
};

export default Form;
