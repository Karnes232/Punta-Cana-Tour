import React, { useState } from "react"
import ContactInfo from "./ContactInfo"
import MoreInfo from "./MoreInfo"

const ContactForm = () => {
  const [name, setName] = useState("")
  return (
    <>
      <form
        name="contact"
        method="POST"
        action={`/contact/thankyou/?name=${name}`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="contact"
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <ContactInfo name={name} setName={setName} />
        {/* <EventInfo />
        <GuestCount /> */}
        <MoreInfo />
        <button
          type="submit"
          className="w-32 lg:w-36 text-xs bg-black hover:opacity-75 text-white py-4 px-3 lg:py-5 lg:px-4 rounded-sm uppercase font-bold"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default ContactForm
