const usePropertyFormValidation = (hotelFormData) => {
  if (
    hotelFormData.name !== "" &&
    hotelFormData.email !== "" &&
    hotelFormData.phone !== "" &&
    hotelFormData.phone !== undefined &&
    hotelFormData.propertyName !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default usePropertyFormValidation;
