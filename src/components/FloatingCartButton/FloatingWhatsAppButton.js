import React from "react";

import { FaWhatsapp } from "react-icons/fa";
const FloatingWhatsAppButton = ({ whatsApp }) => {
  return (
    <>
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsApp}`}
        aria-label="whatsApp"
        rel="noreferrer"
      >
        <button className="fixed z-50 flex px-2 justify-center items-center bottom-6 right-6 xl:right-10 rounded-full h-14 w-14 bg-[#25D366] text-white font-bold">
          <FaWhatsapp size={32} />
        </button>
      </a>
    </>
  );
};

export default FloatingWhatsAppButton;
