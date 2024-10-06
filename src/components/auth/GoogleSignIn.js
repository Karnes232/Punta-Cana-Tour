import React, { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, storage } from "../../config/firebase";
import { FcGoogle } from "react-icons/fc";
import reviewDataFirebase from "../../customHooks/reviewDataFirebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
const GoogleSignIn = ({ formData }) => {
  const [uploading, setUploading] = useState(false);
  const [host, setHost] = useState("");
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    setHost(window.location.origin);
  }, []);

  const uploadToFirebase = async (result) => {
    if (formData.Images.length === 0) return;
    setUploading(true);
    let imageArray = [];
    try {
      for await (const image of formData.Images) {
        const id = uuidv4();
        const fileName = `${image.name} - ${id}`;
        const storageRef = ref(storage, fileName);
        await uploadBytes(storageRef, image).then(async (snapshot) => {
          console.log("Uploaded a blob or file!");
          await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
            await imageArray.push(downloadURL);
          });
        });
      }
      const userPhoto = result.user.photoURL;
      const userName = result.user.displayName;
      const userEmail = result.user.email;
      let redirectHref = `${host}/contact/thankyou/?name=${userName}`;
      await reviewDataFirebase(
        formData,
        userEmail,
        userName,
        userPhoto,
        redirectHref,
        imageArray,
      );
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider)
        .then(async (result) => {
          await uploadToFirebase(result);

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
