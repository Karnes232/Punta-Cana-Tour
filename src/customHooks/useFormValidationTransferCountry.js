const useFormValidationTransferCountry = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.phone !== undefined &&
    formData.transferType !== "" &&
    formData.passengerCount !== "" &&
    formData.pickUpLocation !== "" &&
    formData.dropOffLocation !== "" &&
    formData.time !== "" &&
    formData.date !== "" &&
    formData.pickUpLocation !== "" &&
    formData.dropOffLocation !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default useFormValidationTransferCountry;
