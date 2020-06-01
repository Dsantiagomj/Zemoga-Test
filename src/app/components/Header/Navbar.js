import React, { useState } from "react";
import { Link } from "@reach/router";

import styled from "styled-components";

import Icon from "../Icon";
import Drawer from "./Drawer";

import searchIcon from "../../img/search.svg";
import burguerIcon from "../../img/burger.svg";
import closeIcon from "../../img/white_close.svg";

const Navbar = styled.nav`
  align-items: center;
  display: flex;
  height: 3.75rem;
  justify-content: space-between;
  padding-top: 1.25rem;
  position: relative;
  width: 100%;
`;

const NavbarTitle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  width: 60%;
`;

const NavbarMenu = styled.ul`
  display: none;
  width: 40%;
  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
`;

const NavbarItem = styled.li`
  cursor: pointer;
  height: 2rem;
  width: auto;
`;
const NavbarResponsive = styled.div`
  display: flex;
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavbarComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Navbar>
      <NavbarTitle>Rule of Thumb.</NavbarTitle>
      <NavbarMenu>
        <Link to="/past-trials">
          <NavbarItem>Past Trials</NavbarItem>
        </Link>
        <Link to="/how-it-works">
          <NavbarItem>How it Works</NavbarItem>
        </Link>
        <Link to="/auth">
          <NavbarItem>Login / Sign Up</NavbarItem>
        </Link>
        <NavbarItem>
          <Icon src={searchIcon} alt="Search icon" height="2rem" width="2rem" />
        </NavbarItem>
      </NavbarMenu>
      <NavbarResponsive>
        <NavbarItem onClick={() => setOpenDrawer(!openDrawer)}>
          <Icon
            src={openDrawer ? closeIcon : burguerIcon}
            alt="menu-icon"
            height="2rem"
            width="2rem"
          />
        </NavbarItem>
      </NavbarResponsive>
      {openDrawer && <Drawer />}
    </Navbar>
  );
};

export default NavbarComponent;
