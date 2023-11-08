import React from "react";
import Logo from "../HeaderComponents/Logo";
import HamburgerMenu from "./HamburgerMenu";

function Header({ logo }) {
  return (
    // mb-[50vh] md:mb-[40vh] lg:mb-[50vh]
    <>
      <nav className="bg-white w-screen z-50 h-24 md:h-36 fixed top-0 shadow-md">
        <div className="flex items-center justify-between bg-transparent max-w-6xl mx-5 md:mx-10 lg:mx-8 xl:mx-auto">
          <Logo logo={logo} />
          {/* 
        <LinksRight color={color} /> */}
          <HamburgerMenu color="black" />
        </div>
      </nav>
      <div className="mb-[10vh] md:mb-36 xl:mb-48"></div>
    </>
  );
}

export default Header;
