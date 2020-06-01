import React from "react";

import styled from "styled-components";

import backgroundImage from "../../img/people.png";

const Wrapper = styled.div`
  align-items: center;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(${backgroundImage});
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 6rem;
  padding: 1rem;
  @media (min-width: 992px) {
    flex-direction: row;
    height: 6rem;
  }
`;

const Message = styled.p`
  color: black;
  font-size: 2rem;
  font-weight: 300;
`;
const Button = styled.button`
  background-color: transparent;
  border: solid 3px black;
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  width: 12rem;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

const AddCelebrity = () => (
  <Wrapper>
    <Message>Is there anyone else you would want us to add?</Message>
    <Button>Submit a Name</Button>
  </Wrapper>
);
export default AddCelebrity;
