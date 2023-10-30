import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const SignIn = ({ image }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const travelAgentImage = getImage(image);

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const unableToLogIn = () =>
    toast.error(`Invalid login credentials`, {
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

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = `/travelagent/hidden`;
    } catch (error) {
      console.error(error);
      unableToLogIn();
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
          <div className="relative z-0 mb-6 w-full group">
            <input
              type={passwordType}
              name="passowrd"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              className="contactFormInput peer"
            />
            <div className="absolute right-2 top-4 text-gray-500 text-lg">
              <button tabIndex="-1" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </button>
            </div>
            <label htmlFor="email" className="contactFormLabel">
              Password
            </label>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="flex items-center justify-center no-underline md:text-2xl w-[9.15rem] md:w-[12.5rem] font-medium bg-primary-color text-secondary-color px-4 py-2 md:py-3 my-3 rounded-xl hover:opacity-70 uppercase"
              onClick={signIn}
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-end text-sky-700 font-medium text-sm">
            <Link to="/travelagent/forgotpassword">Forgot your password?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
