import React from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "./FooterComponent/Footer";
import { CartProvider } from "../context/cart";
import FloatingWhatsAppButton from "./FloatingCartButton/FloatingWhatsAppButton";

export default function CartLayout({
  children,
  logo,
  footerBackground,
  facebook,
  instagram,
  whatsApp,
  email,
  gImage,
}) {
  return (
    <CartProvider>
      <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color">
        <Header logo={logo} color="black" />
        {children}
        <Footer
          footerBackground={footerBackground}
          facebook={facebook}
          instagram={instagram}
          email={email}
          whatsApp={whatsApp}
          gImage={gImage}
        />
        <FloatingWhatsAppButton whatsApp={whatsApp} />
      </div>
    </CartProvider>
  );
}
