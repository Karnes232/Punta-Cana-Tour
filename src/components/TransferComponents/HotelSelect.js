import React from "react";
import Select from "react-select";
const HotelSelect = ({ formData, setFormData, hotels }) => {
  console.log(formData);
  let options = [];
  hotels.map((zone) => {
    return zone.node.hotelName.map((hotel) => {
      let option = {
        value: zone.node.zone,
        label: hotel,
      };
      options.push(option);
    });
  });
  const hotelChange = (e) => {

    setFormData({
        ...formData,
        hotelSelect: e.label,
        zone: e.value
      });
  };
  const style = {
    control: base => ({
      ...base,
      border: 1,
      // This line disable the blue border
      boxShadow: 'none'
    })
  }
  return (
    <>
      <div className="relative z-0 mb-2 w-full group">
        <Select
          options={options}
          className="contactFormInput"
          classNamePrefix="select"
          isSearchable={true}
          name="hotelSelect"
          onChange={hotelChange}
          placeholder='Hotel'
         styles={style}
        />
      </div>
    </>
  );
};

export default HotelSelect;
