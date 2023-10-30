import React from "react";

import Footer from "../FooterComponent/Footer";
import Header from "./Header";
import { TravelAgentCartProvider } from "../../context/travelAgentCart";
import TravelAgentFloatingCartButton from "../FloatingCartButton/TravelAgentFloatingCartButton";

export default function TravelAgentLayout({
  children,
  logo,
  footerBackground,
  facebook,
  instagram,
  email,
  gImage,
}) {
  return (
    <TravelAgentCartProvider>
      <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color">
        <Header logo={logo} />

        {children}
        <Footer
          footerBackground={footerBackground}
          facebook={facebook}
          instagram={instagram}
          email={email}
          gImage={gImage}
        />
        <TravelAgentFloatingCartButton />
      </div>
    </TravelAgentCartProvider>
  );
}
