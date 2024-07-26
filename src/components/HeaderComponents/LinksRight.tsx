import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "gatsby";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const LinksRight = ({ color }) => {
  return (
    <div className="hidden lg:flex lg:w-[28rem] xl:w-[35rem] lg:justify-between">
      <Link to="/" className="no-underline">
        <button className={`navLinks text-${color}`}>Home</button>
      </Link>
      <Link to="/tours" className="no-underline">
        <button className={`navLinks text-${color}`}>Tours</button>
      </Link>
      <>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className={`navLinks text-${color}`} onMouseEnter={({target})=> target.click()}>
              Transfers
              <ChevronDownIcon
                aria-hidden="true"
                className="ml-1 h-5 w-5 navLinks text-${color}"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-2 mt-2">
              <MenuItem>
                <Link
                  to="/transfers/punta-cana"
                  className={`font-lato uppercase text-${color} no-underline mx-3 data-[focus]:bg-blue-100`}
                >
                  Punta Cana
                </Link>
              </MenuItem>
            </div>
            <div className="py-2">
              <MenuItem>
                <Link
                  to="/transfers/dominican-republic"
                  className={`font-lato uppercase text-${color} no-underline mx-3 data-[focus]:bg-blue-100`}
                >
                  Other Cities
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </>
      <Link to="/about" className="no-underline">
        <button className={`navLinks text-${color}`}>About</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className={`navLinks text-${color}`}>Contact</button>
      </Link>
    </div>
  );
};

export default LinksRight;
