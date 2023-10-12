import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = ({ image }) => {
  const [email, setEmail] = useState("");
  const travelAgentImage = getImage(image);

  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      // window.location.href = `/travelagent/hidden`;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-[90vw] lg:max-w-lg rounded-lg overflow-hidden shadow-lg mx-auto">
      <GatsbyImage
        image={travelAgentImage}
        alt=""
        className="w-full object-cover h-60"
      />
      <div className="p-5">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
            className="contactFormInput peer"
          />
          <label htmlFor="email" className="contactFormLabel">
            Email
          </label>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="flex items-center justify-center no-underline md:text-2xl w-[9.15rem] md:w-[12.5rem] font-medium bg-primary-color text-secondary-color px-4 py-2 md:py-3 my-3 rounded-xl hover:opacity-70 uppercase"
            onClick={resetPassword}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
