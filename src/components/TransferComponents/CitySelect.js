import React from "react";
import CreatableSelect from "react-select/creatable";
const CitySelect = ({ cityList, formData, setFormData, pickup, dropoff }) => {
  let cityOptions = [];
  cityList?.map((city) => {
    let option = { value: city, label: city };
    return cityOptions.push(option);
  });
  const style = {
    control: (base) => ({
      ...base,
      border: 1,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  const cityChange = (e) => {
    if (pickup) {
      if (e === null) {
        setFormData({
          ...formData,
          pickUpLocation: "",
        });
      } else {
        setFormData({
          ...formData,
          pickUpLocation: e.label,
        });
      }
    }
    if (dropoff) {
      if (e === null) {
        setFormData({
          ...formData,
          dropOffLocation: "",
        });
      } else {
        setFormData({
          ...formData,
          dropOffLocation: e.label,
        });
      }
    }
  };
  return (
    <div className="relative mb-2 w-full group z-50">
      <CreatableSelect
        isClearable
        className="contactFormInput"
        classNamePrefix="select"
        name="citySelect"
        options={cityOptions}
        styles={style}
        required
        onChange={cityChange}
        placeholder={pickup ? "Pick Up Location" : "Drop Off Location"}
      />
    </div>
  );
};

export default CitySelect;
