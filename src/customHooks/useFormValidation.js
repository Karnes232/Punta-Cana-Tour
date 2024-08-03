const useFormValidation = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.phone !== undefined &&
    formData.transferType !== "" &&
    formData.passengerCount !== "" &&
    // formData.flightNumber !== "" &&
    formData.pickUpLocation !== "" &&
    formData.dropOffLocation !== "" &&
    formData.time !== "" &&
    formData.date !== "" &&
    formData.pickUpZone !== "" &&
    formData.dropOffZone !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default useFormValidation;
