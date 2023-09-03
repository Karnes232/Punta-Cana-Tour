import React, { useContext } from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "./FooterComponent/Footer";
import { CartContext, CartProvider } from "../context/cart";
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
  // const { cartItems } = useContext(CartContext);

  // if (cartItems.length !== 0) {
  //   console.log(cartItems)
  // }
  return (
    <CartProvider>
      <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
        <Header logo={logo} />
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
