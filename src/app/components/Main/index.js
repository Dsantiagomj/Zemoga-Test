import React from "react";

import styled from "styled-components";

import Message from "./Message";
import Celebrities from "./Celebrities";
import AddCelebrity from "./AddCelebrity";

const Main = styled.main`
  margin: 0 auto;
  max-width: 65rem;
  padding: 1rem;
`;

const MainComponent = () => (
  <Main>
    <Message />
    <Celebrities />
    <AddCelebrity />
  </Main>
);

export default MainComponent;
