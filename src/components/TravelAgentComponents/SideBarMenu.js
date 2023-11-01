import React, { useEffect, useState } from "react";
import {
  Sidebar,
  // menuClasses,
  Menu,
  MenuItem,
  // SubMenu,
} from "react-pro-sidebar";
import { Link } from "gatsby";
import SocialMedia from "../FooterComponent/SocialMedia";
import { auth, db } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const SideBarMenu = ({ toggled, setToggled }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const findUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
    const user = docSnap.data();
    if (user.isAdmin) {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        findUser(currentUser.uid);
        setLoggedIn(true);
      }
    });
  }, []);

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
            <div className="mt-7 mb-5 flex justify-center items-center font-yellowtail tracking-wide text-2xl">
              {user?.name}
            </div>
            <div className="mt-2 mb-10 flex justify-center items-center tracking-normal text-2xl">
              {user?.company}
            </div>
            <Menu className="ml-4 overflow-hidden">
              {auth.currentUser ? (
                <>
                  <MenuItem
                    component={
                      <Link to="/travelagent/" className="hamburger" />
                    }
                  >
                    <p className="hamburger">Home</p>
                  </MenuItem>
                  <MenuItem
                    component={
                      <Link to="/travelagent/tours" className="hamburger" />
                    }
                  >
                    <p className="hamburger">Tours</p>
                  </MenuItem>
                  <MenuItem
                    component={
                      <Link to="/travelagent/cart" className="hamburger" />
                    }
                  >
                    <p className="hamburger">Cart</p>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    component={
                      <Link to="/travelagent/signup" className="hamburger" />
                    }
                  >
                    <p className="hamburger">Register</p>
                  </MenuItem>
                </>
              )}

              {user.isAdmin ? (
                <>
                  <MenuItem
                    component={
                      <Link
                        to="/travelagent/touroperators"
                        className="hamburger"
                      />
                    }
                  >
                    <p className="hamburger">Tour Operators</p>
                  </MenuItem>
                </>
              ) : (
                <></>
              )}

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
