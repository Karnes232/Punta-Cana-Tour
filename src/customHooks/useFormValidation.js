const useFormValidation = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.telephone !== "" &&
    formData.transferType !== "" &&
    formData.passengerCount !== "" &&
    formData.flightNumber !== "" &&
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
