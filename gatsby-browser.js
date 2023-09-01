import * as React from "react"
import { CartProvider } from "./src/context/cart";
import "./src/styles/global.css";
import "./src/components/HeaderComponents/header.css";
import "./src/components/FooterComponent/footer.css";
import "./src/components/HeroComponent/HeroComponent.css";
import "./src/components/BackgroundCarousel/swiperCarousel.css";
import "./src/components/ContactFormComponent/contact.css";



export const wrapRootElement = ({ element }) => (
    <CartProvider>{element}</CartProvider>
  )
  
