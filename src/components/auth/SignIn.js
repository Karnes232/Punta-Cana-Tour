import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            window.location.href = `/`;
        } catch (error) {
            console.error(error)
        }
        
      };
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
  
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
  <button onClick={signIn}>Sign In</button>
</div>
  )
}

export default SignIn