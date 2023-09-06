import React from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "./FooterComponent/Footer";
import { CartProvider } from "../context/cart";
import FloatingCartButton from "./FloatingCartButton/FloatingCartButton";
export default function Layout({
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
      <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
        <Header logo={logo} color="white" />
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
    </CartProvider>
  );
}
