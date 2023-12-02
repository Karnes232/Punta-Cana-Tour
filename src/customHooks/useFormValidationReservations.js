const useFormValidationReservations = (formData) => {
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.location !== "" &&
    formData.phone !== ""
  ) {
    if (
      formData.Tour1 !== "- undefined" &&
      formData.Date1 !== ""
      // && formData.PickUp1 !== ""
    ) {
      if (formData.Tour2 === "- undefined") {
        return false;
      }
      if (
        formData.Tour2 !== "- undefined" &&
        formData.Date2 !== ""
        // && formData.PickUp2 !== ""
      ) {
        if (formData.Tour3 === "- undefined") {
          return false;
        }
        if (
          formData.Tour3 !== "- undefined" &&
          formData.Date3 !== ""
          // && formData.PickUp3 !== ""
        ) {
          if (formData.Tour4 === "- undefined") {
            return false;
          }
          if (
            formData.Tour4 !== "- undefined" &&
            formData.Date4 !== ""
            // && formData.PickUp3 !== ""
          ) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    } else {
      return true;
    }
    return false;
  } else {
    return true;
  }
};

export default useFormValidationReservations;
