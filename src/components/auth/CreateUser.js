import React, { useState } from "react";
import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, { displayName: name });
            window.location.href = `/`;
        } catch (error) {
            console.error(error)
        }
        
      };
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
        <input
        type="Name"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}>Sign Up</button>

    </div>
  )
}

export default CreateUser