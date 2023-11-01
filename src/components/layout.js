import React from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "./FooterComponent/Footer";
import { CartProvider } from "../context/cart";
import FloatingCartButton from "./FloatingCartButton/FloatingCartButton";
import CookieConsent from "react-cookie-consent";
export default function Layout({
  children,
  logo,
  footerBackground,
  facebook,
  instagram,
  email,
  gImage,
  color,
}) {
  return (
    <CartProvider>
      <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color">
        <Header logo={logo} color={color} />
        {children}
        <Footer
          footerBackground={footerBackground}
          facebook={facebook}
          instagram={instagram}
          email={email}
          gImage={gImage}
        />
        <FloatingCartButton />
      </div>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </CartProvider>
  );
}
