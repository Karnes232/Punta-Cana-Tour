import React from "react";
import Copyright from "./Copyright";
import Sitemap from "./Sitemap";
import SocialMedia from "./SocialMedia";
import useWindowWidth from "../../customHooks/useWindowWidth";
import Signature from "./Signature";
const Footer = ({
  footerBackground,
  facebook,
  instagram,
  whatsApp,
  email,
  gImage,
}) => {
  const windowWidth = useWindowWidth();
  let image = gImage?.images.fallback.srcSet.split(",");
  const imageSrc = [];

  image?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    imageSrc.push(imageObject);
  });
  let FooterStyles = {};

  if (windowWidth < 1500) {
    FooterStyles = {
      backgroundImage: "url(" + imageSrc[1]?.imageSrc + ")",
    };
  } else {
    FooterStyles = {
      backgroundImage: "url(" + imageSrc[2]?.imageSrc + ")",
    };
  }
  return (
    <footer
      style={FooterStyles}
      className="bg-cover bg-left-bottom md:bg-bottom bg-no-repeat"
    >
      <div className="mx-5 mt-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
        <SocialMedia
          classes="border-b border-gray-500 md:border-none"
          facebook={facebook}
          instagram={instagram}
          email={email}
          whatsApp={whatsApp}
        />
        <Sitemap />
        <div className="flex flex-col justify-between md:flex-row">
          <Copyright />
        </div>
      </div>
      <Signature />
    </footer>
  );
};

export default Footer;
