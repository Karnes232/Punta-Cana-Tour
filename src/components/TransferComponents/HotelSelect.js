import React from "react";
import Select from "react-select";
const HotelSelect = ({ formData, setFormData, hotels, pickup, dropoff }) => {
  let options = [
    {
      value: "1 - Punta Cana Airport",
      label: "Punta Cana Airport",
    },
  ];
  hotels?.map((zone) => {
    return zone.node.hotelName?.map((hotel) => {
      let option = {
        value: zone.node.zone + " - " + hotel,
        label: hotel,
      };
      return options.push(option);
    });
  });
  const hotelChange = (e) => {
    let selectedZone = e.value.split(" ");
    if (pickup) {
      setFormData({
        ...formData,
        pickUpLocation: e.label,
        pickUpZone: selectedZone[0],
      });
    }
    if (dropoff) {
      setFormData({
        ...formData,
        dropOffLocation: e.label,
        dropOffZone: selectedZone[0],
      });
    }
  };
  const style = {
    control: (base) => ({
      ...base,
      border: 1,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  return (
    <>
      <div className="relative mb-2 w-full group">
        <Select
          options={options}
          className="contactFormInput"
          classNamePrefix="select"
          isSearchable={true}
          name="hotelSelect"
          onChange={hotelChange}
          placeholder={pickup ? "Pick Up Location" : "Drop Off Location"}
          styles={style}
          required
        />
      </div>
    </>
  );
};

export default HotelSelect;
