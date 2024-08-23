const useCharterFlightValidation = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.phone !== undefined &&
    formData.date !== "" &&
    formData.pickUpLocation !== "" &&
    formData.dropOffLocation !== "" &&
    formData.vehicleType !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default useCharterFlightValidation;
