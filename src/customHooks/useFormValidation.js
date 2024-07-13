const useFormValidation = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.telephone !== "" &&
    formData.transferType !== "" &&
    formData.passengerCount !== "" &&
    formData.flightNumber !== "" &&
    formData.hotelSelect !== "" &&
    formData.time !== "" &&
    formData.date !== "" &&
    formData.zone !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default useFormValidation;
