import React, { useContext, useEffect, useState } from "react";
import HiddenInputs from "./HiddenInputs";
import ContactInfo from "./ContactInfo";
import MoreInfo from "./MoreInfo";
import Button from "./Button";
import CartComponent from "./CartComponent";
import { CartContext } from "../../context/cart";
import collectUserData from "../../customHooks/collectUserData";
import CartPayPal from "../PayPalButtonWrapper/CartPayPal";
const Form = ({allTours}) => {
  const [name, setName] = useState("");
  const { clearCart, cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    "form-name": 'cart',
    name: "",
    email: "",
    phone: "",
    location: "",
    additional: "",
    Date: "",
    Tour1: "",
    Pax1: "",
    Tour2: "",
    Pax2: "",
    Tour3: "",
    Pax3: "",
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
    });
  }, [cartItems])
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const myForm = event.target;
    // const formData = new FormData(myForm);

    // const formDataObj = {};
    // formData.forEach((value, key) => (formDataObj[key] = value));
    // console.log(formDataObj);
    // await collectUserData(formData);
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => {
    //     clearCart();
    //     // if (typeof window !== "undefined") {
    //     //   window.location.href = `/contact/thankyou/?name=${name}`;
    //     // }
    //   })
    //   .catch((error) => alert(error));
  };

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

      <div className="flex flex-col xl:flex-row-reverse xl:mt-10 xl:gap-12">
        <CartComponent />
        <div className="xl:w-[25rem]">
          <ContactInfo name={name} setName={setName}  formData={formData}
        setFormData={setFormData} />
          <MoreInfo formData={formData}
        setFormData={setFormData}/>
        </div>
      </div>
      <HiddenInputs formData={formData}
        setFormData={setFormData}/>
      {/* <Button /> */}
      <CartPayPal formData={formData} allTours={allTours}/>
    </form>
  );
};

export default Form;
