import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import HiddenInputs from "./HiddenInputs";
import ContactInfo from "./ContactInfo";
import MoreInfo from "./MoreInfo";
import Button from "./Button";
import CartComponent from "./CartComponent";
import { CartContext } from "../../context/cart";
import collectUserData from "../../customHooks/collectUserData";
import CartPayPal from "../PayPalButtonWrapper/CartPayPal";
const Form = ({ allTours, hotels }) => {
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [phoneAlert, setPhoneAlert] = useState(false);
  const { clearCart, cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    "form-name": "cart",
    name: "",
    email: "",
    phone: "",
    country: "",
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
  const cartElement = useRef();
  const [dateValidation1, setDateValidation1] = useState(false);
  const [dateValidation2, setDateValidation2] = useState(false);
  const [dateValidation3, setDateValidation3] = useState(false);
  const [dateValidation4, setDateValidation4] = useState(false);

  const setScrollPosition = (element) => {
    const area = element.current.getBoundingClientRect();
    window.scrollTo({
      top: area.bottom,
      behavior: "smooth",
    });
  };

  let redirectHref = `${host}/contact/thankyou/?name=${formData.name}`;

  function getFormData(object) {
    const newFormData = new FormData();
    newFormData.append("PickUpTime1", formData.PickUp1);
    newFormData.append("PickUpTime2", formData.PickUp2);
    newFormData.append("PickUpTime3", formData.PickUp3);
    newFormData.append("PickUpTime4", formData.PickUp4);
    Object.keys(object).forEach((key) => newFormData.append(key, object[key]));
    return newFormData;
  }

  useEffect(() => {
    setHost(window.location.origin);
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
    });
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      dateValidation1 === false &&
      dateValidation2 === false &&
      dateValidation3 === false &&
      dateValidation4 === false &&
      formData.phone !== "" &&
      formData.phone !== undefined
    ) {
      const dataFromForm = getFormData(formData);
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(dataFromForm).toString(),
      }).then(() => {
        console.log("Form successfully submitted");
        collectUserData(dataFromForm, clearCart, redirectHref);
      });
    }
    if (
      dateValidation1 === true ||
      dateValidation2 === true ||
      dateValidation3 === true ||
      dateValidation4 === true
    ) {
      setScrollPosition(cartElement);
    }
    if (formData.phone === "" || formData.phone === undefined) {
      setPhoneAlert(true);
    }
  };

  const pickupTimes = useMemo(() => calculatePickUpTimes(allTours), [allTours]);

  const validationAlert = {
    dateValidation1,
    dateValidation2,
    dateValidation3,
    dateValidation4,
  };
  const setDateValidations = [
    setDateValidation1,
    setDateValidation2,
    setDateValidation3,
    setDateValidation4,
  ];
  return (
    <form
      name="cart"
      method="POST"
      action={`/contact/thankyou/?name=${name}`}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="cart"
      className="w-64 md:w-full max-w- xl:max-w-4xl flex flex-col justify-center items-center mx-auto my-5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="cart" />

      <div className="flex flex-col-reverse xl:flex-row-reverse xl:mt-10 xl:gap-12">
        <CartComponent
          selectedHotel={formData.hotelSelect}
          pickupTimes={pickupTimes}
          formData={formData}
          setFormData={setFormData}
          validationAlert={validationAlert}
          cartElement={cartElement}
          setDateValidations={setDateValidations}
        />
        <div className="xl:w-[25rem] flex flex-col mt-5 xl:mt-24">
          <ContactInfo
            name={name}
            setName={setName}
            formData={formData}
            setFormData={setFormData}
            phoneAlert={phoneAlert}
          />
          <MoreInfo
            formData={formData}
            setFormData={setFormData}
            hotels={hotels}
            pickupTimes={pickupTimes}
          />
        </div>
      </div>
      <HiddenInputs formData={formData} setFormData={setFormData} />
      <Button />
      {/* <CartPayPal formData={formData} allTours={allTours} /> */}
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
