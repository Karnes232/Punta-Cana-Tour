import React from "react";
import Select from "react-select";
const HotelSelect = ({ formData, setFormData, hotels, pickupTimes }) => {
  let tour1 = formData?.Tour1?.split("- ")[1];
  let tour2 = formData?.Tour2?.split("- ")[1];
  let tour3 = formData?.Tour3?.split("- ")[1];
  let tour4 = formData?.Tour4?.split("- ")[1];
  let tour1PickupTimes = {};
  let tour2PickupTimes = {};
  let tour3PickupTimes = {};
  let tour4PickupTimes = {};
  pickupTimes?.forEach((tourPickupTime) => {
    if (tourPickupTime.name === tour1) {
      if (typeof tourPickupTime?.pickupTimes !== "undefined") {
        tour1PickupTimes = JSON.parse(tourPickupTime?.pickupTimes);
      }
    }
    if (tourPickupTime.name === tour2) {
      if (typeof tourPickupTime?.pickupTimes !== "undefined") {
        tour2PickupTimes = JSON.parse(tourPickupTime?.pickupTimes);
      }
    }
    if (tourPickupTime.name === tour3) {
      if (typeof tourPickupTime?.pickupTimes !== "undefined") {
        tour3PickupTimes = JSON.parse(tourPickupTime?.pickupTimes);
      }
    }
    if (tourPickupTime.name === tour4) {
      if (typeof tourPickupTime?.pickupTimes !== "undefined") {
        tour4PickupTimes = JSON.parse(tourPickupTime?.pickupTimes);
      }
    }
  });

  let options = [];
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
    let tour1PickUp = "";
    let tour2PickUp = "";
    let tour3PickUp = "";
    let tour4PickUp = "";
    if (
      Object.keys(tour1PickupTimes).length !== 0 &&
      typeof tour1PickupTimes[e.label] !== "undefined"
    ) {
      tour1PickUp = tour1PickupTimes[e.label][0];
    }
    if (
      Object.keys(tour2PickupTimes).length !== 0 &&
      typeof tour2PickupTimes[e.label] !== "undefined"
    ) {
      tour2PickUp = tour2PickupTimes[e.label][0];
    }
    if (
      Object.keys(tour3PickupTimes).length !== 0 &&
      typeof tour3PickupTimes[e.label] !== "undefined"
    ) {
      tour3PickUp = tour3PickupTimes[e.label][0];
    }
    if (
      Object.keys(tour4PickupTimes).length !== 0 &&
      typeof tour4PickupTimes[e.label] !== "undefined"
    ) {
      tour4PickUp = tour4PickupTimes[e.label][0];
    }
    setFormData({
      ...formData,
      PickUp1: tour1PickUp,
      PickUp2: tour2PickUp,
      PickUp3: tour3PickUp,
      PickUp4: tour4PickUp,
      hotelSelect: e.label,
      zone: selectedZone[0],
    });
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
          placeholder="Hotel"
          styles={style}
          required
        />
      </div>
    </>
  );
};

export default HotelSelect;
