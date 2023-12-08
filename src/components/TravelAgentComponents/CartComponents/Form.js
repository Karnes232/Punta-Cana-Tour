import React, { useContext, useEffect, useState } from "react";
import { TravelAgentCartContext } from "../../../context/travelAgentCart";
import CartComponent from "../CartComponents/CartComponent";
import ContactInfo from "./ContactInfo";
import MoreInfo from "../../CartComponent/MoreInfo";
import Button from "../../CartComponent/Button";
import HiddenInputs from "./HiddenInputs";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
const Form = ({ hotels, allTours }) => {
  const [user, setUser] = useState({});
  const { clearCart, cartItems } = useContext(TravelAgentCartContext);
  const [formData, setFormData] = useState({
    "form-name": "travelAgentCart",
    "Tour Rep": "",
    name: "",
    email: "",
    phone: "",
    hotelSelect: "",
    additional: "",
  });
  useEffect(() => {
    setFormData({
      ...formData,
      Tour1: `- ` + cartItems[0]?.name,
      Pax1: `- ` + cartItems[0]?.quantity,
      Tour2: `- ` + cartItems[1]?.name,
      Pax2: `- ` + cartItems[1]?.quantity,
      Tour3: `- ` + cartItems[2]?.name,
      Pax3: `- ` + cartItems[2]?.quantity,
      Tour4: `- ` + cartItems[3]?.name,
      Pax4: `- ` + cartItems[3]?.quantity,
      "Tour Rep": user.name,
    });
  }, [cartItems, user]);

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

  let pickupTimes = [];
  allTours.nodes.forEach((tour) => {
    let pickupObject = {
      name: tour.name,
      pickupTimes: tour.pickupTime?.internal?.content,
    };
    pickupTimes.push(pickupObject);
  });

  function getFormData(object) {
    const newFormData = new FormData();
    newFormData.append("PickUpTime1", formData.PickUp1);
    newFormData.append("PickUpTime2", formData.PickUp2);
    newFormData.append("PickUpTime3", formData.PickUp3);
    newFormData.append("PickUpTime4", formData.PickUp4);
    Object.keys(object).forEach((key) => newFormData.append(key, object[key]));
    return newFormData;
  }
  const data = getFormData(formData);
  console.log(new URLSearchParams(data).toString());

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataFromForm = getFormData(formData);
    // const myForm = event.target;
    // const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(dataFromForm).toString(),
    })
      .then(() => {
        clearCart();
        if (typeof window !== "undefined") {
          window.location.href = `https://puntacanatourstore.com/travelagent/contact/thankyou/?name=${user.name}`;
        }
      })
      .catch((error) => alert(error));
  };
  console.log(formData);
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
      <div className="flex flex-col-reverse xl:flex-row-reverse xl:mt-10 xl:gap-12">
        <CartComponent
          selectedHotel={formData.hotelSelect}
          pickupTimes={pickupTimes}
          formData={formData}
          setFormData={setFormData}
        />
        <div className="xl:w-[25rem] flex flex-col mt-5 xl:mt-24">
          <ContactInfo formData={formData} setFormData={setFormData} />
          <MoreInfo
            hotels={hotels}
            formData={formData}
            setFormData={setFormData}
            pickupTimes={pickupTimes}
          />
        </div>
      </div>
      <HiddenInputs formData={formData} setFormData={setFormData} />
      <Button />
    </form>
  );
};

export default Form;
