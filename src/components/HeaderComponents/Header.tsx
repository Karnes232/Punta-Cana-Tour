import React from "react";

import Logo from "./Logo";
import LinksRight from "./LinksRight";
import HamburgerMenu from "./HamburgerMenu";

function Header({ logo, color, compact = false }) {
  return (
    // mb-[50vh] md:mb-[40vh] lg:mb-[50vh]
    <>
      <nav
        className={
          compact
            ? "home-navigation bg-white w-full z-50 h-24 fixed top-0 border-b border-slate-200"
            : "bg-white w-screen z-50 h-24 md:h-36 fixed top-0 shadow-md"
        }
      >
        <div className="h-full flex items-center justify-between bg-transparent max-w-6xl mx-5 md:mx-10 lg:mx-8 xl:mx-auto">
          <Logo logo={logo} url="/" />

          <LinksRight color={color} />
          <HamburgerMenu color={color} />
        </div>
      </nav>
      <div
        className={compact ? "h-24 shrink-0" : "mb-[10vh] md:mb-36 xl:mb-48"}
      ></div>
    </>
  );
}

export default Header;
