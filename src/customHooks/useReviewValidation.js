const useReviewValidation = (formData) => {
  if (
    formData.recommend !== "" &&
    formData.title !== "" &&
    formData.description !== "" &&
    formData.flexibility > 0 &&
    formData.professionalism > 0 &&
    formData.qualityOfService > 0 &&
    formData.responsiveness > 0 &&
    formData.value > 0
  ) {
    return true;
  } else {
    return false;
  }
};

export default useReviewValidation;
