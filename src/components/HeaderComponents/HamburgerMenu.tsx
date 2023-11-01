import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import loadable from "@loadable/component";
const SideBarMenu = loadable(() => import("./SideBarMenu"));

const HamburgerMenu = ({ color }) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <>
      <div className="flex lg:hidden">
        <SideBarMenu toggled={toggled} setToggled={setToggled} />
        <main className="flex p-3">
          <div>
            <button
              aria-label="Menu"
              className={`sb-button border border-${color} ${
                color === "black" ? "opacity-100" : "opacity-80"
              } rounded`}
              onClick={() => setToggled(!toggled)}
            >
              <Bars3Icon
                className={`h-7 md:h-9 text-${color} ${
                  color === "black" ? "opacity-100" : "opacity-80"
                }`}
              />
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default HamburgerMenu;
