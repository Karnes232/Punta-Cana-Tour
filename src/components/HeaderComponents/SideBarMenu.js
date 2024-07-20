import React from "react";
import {
  Sidebar,
  // menuClasses,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Link } from "gatsby";
import SocialMedia from "../FooterComponent/SocialMedia";

const SideBarMenu = ({ toggled, setToggled }) => {
  return (
    <>
      <Sidebar
        backgroundColor="rgb(255, 255, 255, .9)"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        rtl
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="mt-7 mb-10 flex justify-center items-center font-yellowtail tracking-wide text-2xl">
              Punta Cana Tour Store
            </div>
            <Menu className="ml-4 overflow-hidden">
              <MenuItem component={<Link to="/" className="hamburger" />}>
                <p className="hamburger">Home</p>
              </MenuItem>
              <MenuItem component={<Link to="/tours" className="hamburger" />}>
                <p className="hamburger">Tours</p>
              </MenuItem>
              <SubMenu label="Transfers" className="hamburger">
                <MenuItem
                  component={
                    <Link to="/transfers/punta-cana" className="no-underline font-lato uppercase text-sm" />
                  }
                >
                  <p>Punta Cana</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="/transfers/dominican-republic" className="no-underline font-lato uppercase text-sm" />
                  }
                >
                  <p>Other Cities</p>
                </MenuItem>
              </SubMenu>
              <MenuItem component={<Link to="/about" className="hamburger" />}>
                <p className="hamburger">About</p>
              </MenuItem>
              <MenuItem
                component={<Link to="/contact" className="hamburger" />}
              >
                <p className="hamburger">Contact</p>
              </MenuItem>
            </Menu>
          </div>
          <footer className="hamburger mx-4">
            <SocialMedia classes="flex-row-reverse" />
          </footer>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBarMenu;
