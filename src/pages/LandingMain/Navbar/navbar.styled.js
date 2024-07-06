import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 4.5rem;
  padding-right: 5%;
  padding-left: 5%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #d5d5d5;
  background-color: #fff;
  @media screen and (max-width: 767px) {
      height: 4rem;
  }
`;

export const MainNavbar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`

export const NavbarLogo = styled.a`
  padding-left: 0px;
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
  border-color: #022024;
  background-color: transparent;
  img {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    @media screen and (max-width: 767px) {
      width: 160px;
    }
  }
`

export const NavbarMenu = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .navbar-1-menu-button {
    cursor: pointer;
  }
  .navbar-1-menu-button .menu-icon-1 div:first-child {
    transform: ${(props) => (props.isOpened ? "translateY(8px) rotate(45deg)" : "")};
  }
  .navbar-1-menu-button .menu-icon-1 div:nth-child(2) {
    opacity: ${(props) => (props.isOpened ? "0" : "1")};
  }
  .navbar-1-menu-button .menu-icon-1 div:last-child {
    transform: ${(props) => (props.isOpened ? "translateY(-8px) rotate(-45deg)" : "")};
  }
  .menu-icon-1 div {
      transition: all .55s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    float: right;
    .button-user-form {
      background-color: white;
      color: rgb(0, 242, 234);
      border: 1px solid rgb(0, 242, 234);
      &:hover {
        color: white;
        background-color: rgb(0, 242, 234);
      }
    }
    .button-our-main {
      background-color: white;
      color: brown;
      border: 1px solid brown;
      &:hover {
        color: white;
        background-color: brown;
      }
    }
    span {
      background-color: brown;
      padding: 8px 15px;
      color: white;
      margin-left: 20px;
      cursor: pointer;
      &:hover {
        background-color: darkred;
        transition: background-color 200ms ease-in-out;
      }
    }
    a {
      padding: 0.5rem 1rem;
      transition: color 200ms cubic-bezier(.77, 0, .175, 1);
      font-weight: 500;
      position: relative;
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
      color: #222222;
      padding: 20px;
      text-align: left;
      margin-left: auto;
      margin-right: auto;
      border-color: #022024;
      background-color: transparent;
    }
  }
  @media screen and (max-width: 991px) {
    .w-nav-button {
      display: block;
    }

    .w-nav-menu {
        display: none;
    }
    .navbar-1-menu {
        overflow: auto;
        padding: 1rem 5% 2.5rem;
        border-bottom: 1px solid #000;
        background-color: #fff;
        background-clip: border-box;
        -webkit-text-fill-color: inherit;
    }
  }
  @media screen and (max-width: 991px) {
    .menu-icon-1 {
        display: flex;
        width: 48px;
        height: 48px;
        margin-right: -0.5rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .menu-icon-1-line-top {
        width: 24px;
        height: 2px;
        padding-right: 0px;
        padding-bottom: 0px;
        background-color: #022024;
    }
    .menu-icon-1-line-middle {
        display: flex;
        width: 24px;
        height: 2px;
        margin-top: 6px;
        margin-bottom: 6px;
        padding-right: 0px;
        padding-bottom: 0px;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        background-color: #022024;
    }
    .menu-icon-line-middle-inner {
        width: 4px;
        height: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
    }
    .menu-icon-1-line-bottom {
        width: 24px;
        height: 2px;
        padding-right: 0px;
        padding-bottom: 0px;
        background-color: #022024;
    }
  }
`

export const MobileNav = styled.div`
    overflow: hidden;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    nav {
      z-index: 9999 !important;
      transition: all .3s ease-in-out;
      height: ${(props) => (props.isOpened ? "130px" : "0")};
      overflow: hidden;
      border-bottom: ${(props) => (props.isOpened ? "1px solid #000" : "none")};
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      background-color: #fff;
      text-align: center;
      min-width: 200px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      span {
        font-size: 20px;
        padding: 4px;
      }
      .navbar-1-link {
        color: black;
        padding: 1.75rem 5% 0 ;
        font-size: 18px;
        font-weight: 500;
        display: block;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        text-decoration: none;
      }
    }
`
