const useCarRentalValidation = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.phone !== undefined &&
    formData.startDate !== "" &&
    formData.endDate !== "" &&
    formData.carType !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default useCarRentalValidation;
