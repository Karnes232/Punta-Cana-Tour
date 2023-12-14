import React, { useContext, useEffect, useMemo, useState } from "react";
import { TravelAgentCartContext } from "../../../context/travelAgentCart";
import CartComponent from "../CartComponents/CartComponent";
import ContactInfo from "./ContactInfo";
import MoreInfo from "../../CartComponent/MoreInfo";
import Button from "../../CartComponent/Button";
import HiddenInputs from "./HiddenInputs";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import TravelAgenetPayPal from "../../PayPalButtonWrapper/TravelAgenetPayPal";
const Form = ({ hotels, allTours }) => {
  const [user, setUser] = useState({});
  const { clearCart, cartItems } = useContext(TravelAgentCartContext);
  const [formData, setFormData] = useState({
    "form-name": "travelAgentCart",
    "Tour Rep": "",
    "Tour Rep Id": "",
    name: "",
    email: "",
    phone: "",
    hotelSelect: "",
    additional: "",
    Date1: "",
    PickUp1: "",
    Tour1: "",
    Pax1: "",
    Date2: "",
    PickUp2: "",
    Tour2: "",
    Pax2: "",
    Date3: "",
    PickUp3: "",
    Tour3: "",
    Pax3: "",
    Date4: "",
    PickUp4: "",
    Tour4: "",
    Pax4: "",
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
      "Tour Rep Id": user.id,
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

  const pickupTimes = useMemo(() => calculatePickUpTimes(allTours), [allTours]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
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
      <TravelAgenetPayPal formData={formData} allTours={allTours} />
    </form>
  );
};

const calculatePickUpTimes = (tours) => {
  let pickupList = [];
  tours.nodes.forEach((tour) => {
    let pickupObject = {
      name: tour.name,
      pickupTimes: tour.pickupTime?.internal?.content,
    };
    pickupList.push(pickupObject);
  });
  return pickupList;
};

export default Form;
