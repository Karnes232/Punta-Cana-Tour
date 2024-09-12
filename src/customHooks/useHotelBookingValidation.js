const useHotelBookingValidation = (hotelFormData) => {
  if (
    hotelFormData.name !== "" &&
    hotelFormData.email !== "" &&
    hotelFormData.phone !== "" &&
    hotelFormData.phone !== undefined &&
    hotelFormData.startDate !== "" &&
    hotelFormData.endDate !== "" &&
    hotelFormData.hotelRoom !== ""
  ) {
    return false;
  } else {
    return true;
  }
};

export default useHotelBookingValidation;
