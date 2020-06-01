import React from "react";

import styled from "styled-components";

import Container from "../Container";
import Icon from "../Icon";

import facebookIcon from "../../img/facebook.svg";
import twitterIcon from "../../img/twitter.svg";

const Footer = styled.footer`
  align-items: center;
  border-top: 1px dashed #979797;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 2rem;
  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;

const FooterList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  width: 100%;
  @media (min-width: 992px) {
    justify-content: space-between;
    width: ${(props) => (props.icons ? "20%" : "30%")};
  }
`;
const FooterItem = styled.li`
  cursor: ${(props) => (props.text ? "auto" : "pointer")};
  font-size: 0.75rem;
  margin: 0;
  padding: 0 0.5rem;
`;

const FooterComponent = () => (
  <Container>
    <Footer>
      <FooterList>
        <FooterItem>Terms and Conditions</FooterItem>
        <FooterItem>Privacy Policy</FooterItem>
        <FooterItem>Contact Us</FooterItem>
      </FooterList>
      <FooterList icons>
        <FooterItem text>Follow Us</FooterItem>
        <FooterItem>
          <Icon
            src={facebookIcon}
            height="1.5rem"
            width="1.5rem"
            alt="Facebook"
          />
        </FooterItem>
        <FooterItem>
          <Icon
            src={twitterIcon}
            height="1.5rem"
            width="1.5rem"
            alt="Twitter"
          />
        </FooterItem>
      </FooterList>
    </Footer>
  </Container>
);

export default FooterComponent;
