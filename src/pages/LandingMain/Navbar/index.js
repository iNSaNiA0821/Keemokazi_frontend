import React, { useState, useEffect } from "react";
import { isScreenWidth } from "../../../utils/getScreenWidth";
// import { HashLink } from "react-router-hash-link";
import Logo from "../../../assets/Logo.png";

// @import styles
import {
  NavbarContainer,
  MainNavbar,
  NavbarLogo,
  NavbarMenu,
  MobileNav,
} from "./navbar.styled";

const Navbar = (props) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(860));
    });
    setIsMobile(isScreenWidth(860));
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  const signup = () => {
    props.setLogin(false);
    props.setCancel(false);
    props.setPayCancel(true);
    props.setIsOpened(false);
  };
  const signin = () => {
    props.setLogin(true);
    props.setCancel(false);
    props.setPayCancel(true);
    props.setIsOpened(false);
  };
  const course = () => {
    props.setPayment(false);
    props.setPayCancel(false);
    props.setCancel(true);
    props.setIsOpened(false);
  };
  const subscription = () => {
    props.setPayment(true);
    props.setPayCancel(false);
    props.setCancel(true);
    props.setIsOpened(false);
  };

  return (
    <NavbarContainer id="Navbar">
      <>
        <MainNavbar>
          <NavbarLogo href="/">
            <img
              draggable="false"
              src={Logo}
              loading="lazy"
              width="181"
              alt=""
              className="logo"
            />
          </NavbarLogo>
          <NavbarMenu isMobile={isMobile} isOpened={props.isOpened}>
            <nav role="navigation" className="w-nav-menu">
              {!props.isLogout ? (
                <span onClick={course} className="button-our-main">
                  Course
                </span>
              ) : (
                <span onClick={signin} className="button-user-form">
                  Sign in
                </span>
              )}
              {!props.isLogout ? (
                <span onClick={subscription} className="button-our-main">
                  Subscription
                </span>
              ) : (
                <span onClick={signup} className="button-user-form">
                  Sign up
                </span>
              )}
              {!props.isLogout ? (
                <span onClick={props.doLogout}>Logout</span>
              ) : (
                ""
              )}
            </nav>
            <div
              className="navbar-1-menu-button w-nav-button"
              onClick={() => props.setIsOpened(!props.isOpened)}
            >
              <div className="menu-icon-1">
                <div className="menu-icon-1-line-top"></div>
                <div className="menu-icon-1-line-middle">
                  <div className="menu-icon-line-middle-inner"></div>
                </div>
                <div className="menu-icon-1-line-bottom"></div>
              </div>
            </div>
          </NavbarMenu>
        </MainNavbar>
        <MobileNav
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"
          isOpened={props.isOpened}
        >
          <nav
            role="navigation"
            className="navbar-1-menu w-nav-menu"
            data-nav-menu-open=""
          >
            {!props.isLogout ? (
              <span onClick={course} className="button-our-main">
                Course
              </span>
            ) : (
              <span onClick={signin} className="button-user-form">
                Sign in
              </span>
            )}
            {!props.isLogout ? (
              <span onClick={subscription} className="button-our-main">
                Subscription
              </span>
            ) : (
              <span onClick={signup} className="button-user-form">
                Sign up
              </span>
            )}
            {!props.isLogout ? (
              <span onClick={props.doLogout}>Logout</span>
            ) : (
              ""
            )}
          </nav>
        </MobileNav>
      </>
    </NavbarContainer>
  );
};

export default Navbar;
