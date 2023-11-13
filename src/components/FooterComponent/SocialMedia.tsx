import React from "react";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialMedia = ({ classes, facebook, instagram, email, whatsApp }) => {
  return (
    <div className="">
      <div
        className={`mx-8 flex justify-around py-4 md:mx-auto md:max-w-md ${classes}`}
      >
        {facebook && (
          <a
            href={facebook}
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer"
          >
            <FaFacebookF className="footerIcons" />
          </a>
        )}

        {instagram && (
          <a
            href={instagram}
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          >
            <FaInstagram className="footerIcons" />
          </a>
        )}

        {email && (
          <a href={`mailto:${email}`} aria-label="Gmail" rel="noreferrer">
            <GrMail className="footerIcons" />
          </a>
        )}
        {whatsApp && (
          <a
            href={`https://api.whatsapp.com/send?phone=${whatsApp}`}
            aria-label="whatsApp"
            rel="noreferrer"
          >
            <FaWhatsapp className="footerIcons" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
