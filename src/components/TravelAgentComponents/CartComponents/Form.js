import React, { useContext, useState } from "react";
import { TravelAgentCartContext } from "../../../context/travelAgentCart";
import CartComponent from "../CartComponents/CartComponent";
import ContactInfo from "./ContactInfo";
import MoreInfo from "../../CartComponent/MoreInfo";
import Button from "../../CartComponent/Button";
import HiddenInputs from "./HiddenInputs";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
const Form = () => {
  const [user, setUser] = useState({});
  const findUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
  };
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        findUser(currentUser.uid);
      }
    });
  }, []);

  const { clearCart } = useContext(TravelAgentCartContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        clearCart();
        if (typeof window !== "undefined") {
          window.location.href = `/contact/thankyou/?name=${user.name}`;
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <form
      name="travelAgentCart"
      method="POST"
      action={`/contact/thankyou/?name=${user.name}}`}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="travelAgentCart"
      className="w-64 md:w-full max-w- xl:max-w-4xl flex flex-col justify-center items-center mx-auto my-5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="travelAgentCart" />
      <div className="flex flex-col xl:flex-row-reverse xl:mt-10 xl:gap-12">
        <CartComponent />
        <div className="xl:w-[25rem]">
          <ContactInfo />
          <MoreInfo />
        </div>
      </div>
      <HiddenInputs />
      <Button />
    </form>
  );
};

export default Form;
