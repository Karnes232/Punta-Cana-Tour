import React from "react";
import Copyright from "./Copyright";
import Sitemap from "./Sitemap";
import SocialMedia from "./SocialMedia";
import { graphql, useStaticQuery } from "gatsby";
const Footer = ({ footerBackground }) => {
  const FooterStyles = {
    backgroundImage: "url(" + footerBackground + ")",
  };

  return (
    <footer
      style={FooterStyles}
      className="h-48 bg-cover bg-left md:bg-bottom bg-no-repeat"
    >
      {/* <div className="mx-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
        <SocialMedia classes="border-b border-gray-500 md:border-none" />
        <Sitemap />
        <div className="flex flex-col justify-between md:flex-row">
          <Copyright />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
