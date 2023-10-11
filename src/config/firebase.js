import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcISq3KdE4WQV4FIftRTZtkrhjdZAJaDA",
  authDomain: "punta-cana-tour-store.firebaseapp.com",
  projectId: "punta-cana-tour-store",
  storageBucket: "punta-cana-tour-store.appspot.com",
  messagingSenderId: "212172790462",
  appId: "1:212172790462:web:921409421268d0b0ad5cef",
  measurementId: "G-KH0SYDZBVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
