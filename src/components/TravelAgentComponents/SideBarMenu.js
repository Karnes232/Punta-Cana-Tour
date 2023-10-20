import React from "react";
import {
  Sidebar,
  // menuClasses,
  Menu,
  MenuItem,
  // SubMenu,
} from "react-pro-sidebar";
import { Link } from "gatsby";
import SocialMedia from "../FooterComponent/SocialMedia";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
const SideBarMenu = ({ toggled, setToggled }) => {
  const logout = async () => {
    try {
      await signOut(auth);
      window.location.href = `/`;
    } catch (err) {
      console.error(err);
    }
  };
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
              {auth?.currentUser?.displayName}
            </div>
            <Menu className="ml-4 overflow-hidden">
              <MenuItem
                component={
                  <Link to="/travelagent/signup" className="hamburger" />
                }
              >
                <p className="hamburger">Register</p>
              </MenuItem>

              {auth.currentUser ? (
                <>
                  {" "}
                  <MenuItem
                    component={<button onClick={logout}>Logout</button>}
                  >
                    <p className="hamburger">Log Out</p>
                  </MenuItem>
                </>
              ) : (
                <></>
              )}
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
