import React from "react";

import Logo from "./Logo";
import LinksRight from "./LinksRight";
import HamburgerMenu from "./HamburgerMenu";

function Header({ logo, color }) {
  return (
    // mb-[50vh] md:mb-[40vh] lg:mb-[50vh]
    <nav className="bg-transparent w-screen z-50 h-[10vh] md:h-[15vh] lg:h-[20vh]">
      <div className="flex items-center justify-between bg-transparent max-w-6xl mx-5 md:mx-10 lg:mx-8 xl:mx-auto">
        <Logo logo={logo} />

        <LinksRight color={color}/>
        <HamburgerMenu color={color}/>
      </div>
    </nav>
  );
}

export default Header;
