import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ToastContainer, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const CreateUser = ({ image }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const travelAgentImage = getImage(image);



  const unableToSignUp = (reason) =>
    toast.error(`${reason}`, {
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
    if (password !== passwordConfirmation) {
      unableToSignUp(`Password doesn't match`);
      return
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: name,
        email: email,
        company: company,
        country: country,
        telephone: telephone
      });
      window.location.href = `/travelagent/hidden`;
    } catch (error) {
      console.error(error);
      unableToSignUp(`Email Already in Use`);
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
                type="text"
                name="company"
                placeholder=""
                onChange={(e) => setCompany(e.target.value)}
                className="contactFormInput peer"
                required
              />
              <label htmlFor="company" className="contactFormLabel">
                Company Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="country"
                placeholder=""
                onChange={(e) => setCountry(e.target.value)}
                className="contactFormInput peer"
                required
              />
              <label htmlFor="country" className="contactFormLabel">
                Country
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="telephone"
                placeholder=""
                onChange={(e) => setTelephone(e.target.value)}
                className="contactFormInput peer"
                required
              />
              <label htmlFor="telephone" className="contactFormLabel">
                Telephone
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
                name="password"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                className="contactFormInput peer"
                required
                minLength="8"
              />
              <label htmlFor="password" className="contactFormLabel">
                Password
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="passwordConfirmation"
                placeholder=""
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="contactFormInput peer"
                required
                minLength="8"
              />
              <label htmlFor="passwordConfirmation" className="contactFormLabel">
                Confirm Password
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
