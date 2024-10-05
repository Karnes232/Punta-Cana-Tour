import React from "react";
import { Description } from "@headlessui/react";
import GoogleSignIn from "../auth/GoogleSignIn";
const SubmitReview = ({ formData }) => {
  return (
    <>
      <Description className="font-bold text-center text-xl">
        Sign in to publish your review
      </Description>
      <GoogleSignIn formData={formData} />
    </>
  );
};

export default SubmitReview;
