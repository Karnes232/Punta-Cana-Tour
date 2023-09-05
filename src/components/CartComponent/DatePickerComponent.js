import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePickerComponent = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <input type="hidden" name="Date" value={value.startDate} />
      <Datepicker
        asSingle={true}
        useRange={false}
        placeholder={"Select Date"}
        minDate={new Date()}
        value={value}
        onChange={handleValueChange}
      />
    </>
  );
};

export default DatePickerComponent;
