import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";
import { FaApple } from "react-icons/fa6";
const AppleSignin = ({ formData }) => {
  const [host, setHost] = useState("");
  const provider = new OAuthProvider("apple.com");
  useEffect(() => {
    setHost(window.location.origin);
  }, []);
  const auth = getAuth();
  const signIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // Apple credential
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The credential that was used.
        const credential = OAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <button
      className="flex justify-center items-center px-5 py-2 gap-4 border rounded-lg w-full"
      onClick={signIn}
    >
      <FaApple className="text-2xl" /> Sign in with Apple
    </button>
  );
};

export default AppleSignin;
