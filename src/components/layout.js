import React from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "./FooterComponent/Footer";
import { CartProvider } from "../context/cart";
import FloatingCartButton from "./FloatingCartButton/FloatingCartButton";
import CookieConsent from "react-cookie-consent";
import FloatingWhatsAppButton from "./FloatingCartButton/FloatingWhatsAppButton";
export default function Layout({
  children,
  logo,
  footerBackground,
  facebook,
  instagram,
  whatsApp,
  email,
  gImage,
  color,
}) {
  return (
    <CartProvider>
      {/* <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color"> */}
      <div className="min-h-screen font-montserrat flex flex-col justify-between bg-primary-bg-color">
        <Header logo={logo} color={color} />
        {children}
        <FloatingCartButton />
        <FloatingWhatsAppButton whatsApp={whatsApp} />
        <Footer
          footerBackground={footerBackground}
          facebook={facebook}
          instagram={instagram}
          whatsApp={whatsApp}
          email={email}
          gImage={gImage}
        />

        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </CartProvider>
  );
}
