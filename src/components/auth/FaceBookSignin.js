import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { FaFacebook } from "react-icons/fa6";
const FaceBookSignin = ({ formData }) => {
  const [host, setHost] = useState("");
  const provider = new FacebookAuthProvider();

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
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <button
      className="flex justify-center items-center px-5 py-2 gap-4 border rounded-lg w-full"
      onClick={signIn}
    >
      <FaFacebook className="text-2xl" /> Sign in with Facebook
    </button>
  );
};

export default FaceBookSignin;
