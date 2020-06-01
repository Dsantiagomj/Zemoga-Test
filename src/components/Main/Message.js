import React, { useState } from "react";

import styled from "styled-components";

import Icon from "../Icon";

import closeIcon from "../../img/close.svg";

const Wrapper = styled.div`
  align-items: center;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem 0 0;
  min-height: 8rem;
  padding: 1rem 2rem;
  position: relative;
  width: 100%;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const MessageTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
`;
const FocusTitle = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  min-width: 30%;
`;
const MessageText = styled.p`
  max-width: 80%;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
`;

const Message = () => {
  const [display, setDisplay] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(false);
  };
  if (display) {
    return (
      <Wrapper>
        <MessageTitle>
          Speak out. Be heard.
          <FocusTitle>Be counted</FocusTitle>
        </MessageTitle>
        <MessageText>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </MessageText>
        <Button onClick={handleClick}>
          <Icon
            src={closeIcon}
            alt="Close button"
            width="1.5rem"
            height="1.5rem"
          />
        </Button>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Message;
