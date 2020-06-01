import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Container from "../Container";

import BackgroundImage from "../../img/francis.png";

const Header = styled.header`
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${BackgroundImage});
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 8rem, cover;
  background-position: 0 0, center;
  height: 50rem;
  position: relative;
  width: 100%;
`;
const HeaderComponent = () => (
  <Header>
    <Container>
      <Navbar />
      <Card />
    </Container>
    <Footer />
  </Header>
);

export default HeaderComponent;
