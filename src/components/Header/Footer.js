import React from "react";

import styled from "styled-components";

const Footer = styled.div`
  background-color: #eaeaea45;
  bottom: 0;
  display: inline-flex;
  height: 3rem;
  left: 0;
  position: absolute;
  width: 100%;
`;

const LeftSection = styled.div`
  align-items: center;
  background-color: #3a3a3a45;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  position: relative;
  width: 55%;
  &:after {
    border-top: 5px solid transparent;
    border-left: 5px solid #3a3a3a45;
    border-bottom: 5px solid transparent;
    content: "";
    height: 0;
    left: 100%;
    position: absolute;
    top: 40%;
    width: 0;
    z-index: 1;
  }
`;
const RightSection = styled.div`
  align-items: center;
  color: #464646;
  display: flex;
  font-size: 2rem;
  font-weight: 300;
  justify-content: flex-start;
  margin-left: 1rem;
  width: 100%;
`;
const FocusText = styled.span`
  font-weight: 500;
  margin-right: 0.5rem;
`;

const FooterComponent = () => (
  <Footer>
    <LeftSection>CLOSING IN</LeftSection>
    <RightSection>
      <FocusText>22</FocusText>days
    </RightSection>
  </Footer>
);

export default FooterComponent;
