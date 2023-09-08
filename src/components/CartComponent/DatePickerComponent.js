import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePickerComponent = () => {
  const [date, setDate] = useState(undefined);
  const [value, setValue] = useState({
    startDate: date,
    endDate: null,
  });
  useEffect(() => {
    setDate(new Date());
  }, []);

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
        minDate={date}
        value={value}
        onChange={handleValueChange}
        inputClassName="relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300  rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"
      />
    </>
  );
};

export default DatePickerComponent;
