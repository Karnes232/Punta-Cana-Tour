import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

const LogOut = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(auth?.currentUser?.displayName);
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {name}
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default LogOut;
