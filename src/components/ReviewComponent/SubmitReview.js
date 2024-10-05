import React from "react";
import { Description } from "@headlessui/react";
import GoogleSignIn from "../auth/GoogleSignIn";
import AppleSignin from "../auth/AppleSignin";
import FaceBookSignin from "../auth/FaceBookSignin";
const SubmitReview = ({ formData }) => {
  return (
    <div className="lg:max-w-3xl lg:mx-auto space-y-4">
      <Description className="font-bold text-center text-xl">
        Sign in to publish your review
      </Description>
      <GoogleSignIn formData={formData} />
      {/* <FaceBookSignin formData={formData} /> */}
      {/* <AppleSignin formData={formData}/> */}
    </div>
  );
};

export default SubmitReview;
