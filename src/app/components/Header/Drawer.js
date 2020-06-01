import React from "react";
import { Link } from "@reach/router";

import styled from "styled-components";

import Icon from "../Icon";

import searchIcon from "../../img/search_black.svg";

const Drawer = styled.div`
  background-color: white;
  bottom: -24rem;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const DrawerList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const DrawerItem = styled.li`
  color: #3a3a3a;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

const DrawerComponent = () => (
  <Drawer>
    <DrawerList>
      <Link to="/past-trials">
        <DrawerItem>Past Trials</DrawerItem>
      </Link>
      <Link to="/how-it-works">
        <DrawerItem>How it Works</DrawerItem>
      </Link>
      <Link to="/auth">
        <DrawerItem>Login / Sign Up</DrawerItem>
      </Link>
      <DrawerItem>
        <Icon src={searchIcon} alt="Search icon" height="2rem" width="2rem" />
      </DrawerItem>
    </DrawerList>
  </Drawer>
);

export default DrawerComponent;
