import React from "react";
import Header from "../components/HeaderComponents/Header";
import Footer from "./FooterComponent/Footer";

export default function Layout({ children, logo, footerBackground }) {
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
      <Header logo={logo} />
      {children}
      <Footer footerBackground={footerBackground} />
    </div>
  );
}
