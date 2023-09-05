import React, { useContext, useState } from 'react'
import HiddenInputs from './HiddenInputs'
import ContactInfo from './ContactInfo'
import MoreInfo from './MoreInfo'
import Button from './Button'
import CartComponent from './CartComponent'
import { CartContext } from '../../context/cart'
const Form = () => {
    const [name, setName] = useState("");
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  return (
    <form
    name="cart"
    method="POST"
    action={`/contact/thankyou/?name=${name}`}
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    id="cart"
    className="w-64 md:w-full max-w- xl:max-w-4xl flex flex-col justify-center items-center mx-auto my-5"
    onSubmit={() => {
        clearCart()
    }}
  >
    <input type="hidden" name="form-name" value="cart" />
    <HiddenInputs />
    <div className="flex flex-col xl:flex-row-reverse xl:mt-10 xl:gap-12">
    <CartComponent />
    <div className="xl:w-[25rem]">
    <ContactInfo name={name} setName={setName}/>
    <MoreInfo /></div>
 
      </div>
     <Button/>
  </form>
  )
}

export default Form