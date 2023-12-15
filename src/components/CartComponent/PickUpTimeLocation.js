import React from "react";
import DatePickerComponent from "./DatePickerComponent";

const PickUpTimeLocation = ({
  pickupTimeList,
  formData,
  setFormData,
  index,
  validationAlert,
  setDateValidations,
}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  let dateAlert = false;
  if (validationAlert !== undefined) {
    dateAlert = validationAlert[`dateValidation${index + 1}`];
  }
  return (
    <div className="flex justify-around my-2">
      <div className="relative z-10 w-2/5 group">
        <DatePickerComponent
          formData={formData}
          setFormData={setFormData}
          index={index}
          dateAlert={dateAlert}
          setDateValidations={setDateValidations}
        />
      </div>
      <div className="relative z-0 w-2/5 group">
        <label
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          htmlFor="tourSelect"
        >
          Pick Up Time
        </label>
        <select
          name={`PickUp${index + 1}`}
          id="tourSelect"
          className="contactFormInput peer"
          onChange={handleChange}
        >
          {pickupTimeList?.map((time, index) => {
            return (
              <option key={index} value={time}>
                {time}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default PickUpTimeLocation;
