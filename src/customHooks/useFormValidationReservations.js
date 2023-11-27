const useFormValidationReservations = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.location !== "" &&
    formData.phone !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default useFormValidationReservations;
