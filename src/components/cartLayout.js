import React from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "./FooterComponent/Footer";
import { CartProvider } from "../context/cart";

export default function CartLayout({
  children,
  logo,
  footerBackground,
  facebook,
  instagram,
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
          gImage={gImage}
        />
      </div>
    </CartProvider>
  );
}
