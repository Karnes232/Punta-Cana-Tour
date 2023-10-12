import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ToastContainer, toast } from "react-toastify";

const CreateUser = ({ image }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const travelAgentImage = getImage(image);

  const unableToSignUp = () =>
    toast.error(`Email Already in Use`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      window.location.href = `/travelagent/hidden`;
    } catch (error) {
      console.error(error);
      unableToSignUp();
    }
  };
  return (
    <>
      {" "}
      <ToastContainer />{" "}
      <div className="w-[90vw] lg:max-w-lg rounded-lg overflow-hidden shadow-lg mx-auto">
        <GatsbyImage
          image={travelAgentImage}
          alt=""
          className="w-full object-cover h-60"
        />
        <div className="p-5">
          <form action="" onSubmit={signUp}>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="Name"
                name="name"
                placeholder=""
                onChange={(e) => setName(e.target.value)}
                className="contactFormInput peer"
                required
              />
              <label htmlFor="name" className="contactFormLabel">
                Full Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
                className="contactFormInput peer"
                required
              />
              <label htmlFor="email" className="contactFormLabel">
                Email
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="passowrd"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                className="contactFormInput peer"
                required
                minLength="8"
              />
              <label htmlFor="email" className="contactFormLabel">
                Password
              </label>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="flex items-center justify-center no-underline md:text-2xl w-[9.15rem] md:w-[12.5rem] font-medium bg-primary-color text-secondary-color px-4 py-2 md:py-3 my-3 rounded-xl hover:opacity-70 uppercase"
                //onClick={signUp}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
