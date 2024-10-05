import React from "react";
import ReactStars from "react-stars";
const IndividualStarRating = ({ title, formTitle, formData, setFormData }) => {
  const ratingChanged = (newRating) => {
    setFormData({
      ...formData,
      [formTitle]: newRating,
    });
  };
  return (
    <>
      <div>{title}</div>
      <ReactStars
        count={5}
        value={formData[formTitle]}
        onChange={ratingChanged}
        size={30}
        color2={"#ffd700"}
        edit={true}
      />
    </>
  );
};

export default IndividualStarRating;
