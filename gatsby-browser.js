import React from "react";
import "./src/styles/global.css";
import "./src/components/HeaderComponents/header.css";
import "./src/components/FooterComponent/footer.css";
import "./src/components/HeroComponent/HeroComponent.css";
import "./src/components/BackgroundCarousel/swiperCarousel.css";
import "./src/components/ContactFormComponent/contact.css";

import WrapRootElement from "./src/context/wrap-root-element";



export const wrapRootElement = ({ element }) => (
  <WrapRootElement>{element}</WrapRootElement>
)