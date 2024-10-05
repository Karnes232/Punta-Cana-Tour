import React, { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase";
import { FcGoogle } from "react-icons/fc";
import reviewDataFirebase from "../../customHooks/reviewDataFirebase";
const GoogleSignIn = ({ formData }) => {
  const [host, setHost] = useState("");
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    setHost(window.location.origin);
  }, []);

  const signIn = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const userPhoto = result.user.photoURL;
          const userName = result.user.displayName;
          const userEmail = result.user.email;
          let redirectHref = `${host}/contact/thankyou/?name=${userName}`;
          console.log(userPhoto);
          console.log(userName);
          console.log(userEmail);
          console.log(formData);
          reviewDataFirebase(
            formData,
            userEmail,
            userName,
            userPhoto,
            redirectHref,
          );
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // // The signed-in user info.
          // const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.customData.email;
          // // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="flex justify-center items-center px-5 py-2 gap-4 border rounded-lg w-full"
      onClick={signIn}
    >
      <FcGoogle className="text-2xl" /> Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
