import React from "react";

import styled from "styled-components";

import Icon from "../Icon";

import wikipediaLogo from "../../img/wikipedia.svg";
import thumb from "../../img/like.svg";

const Wrapper = styled.div`
  margin-top: 10rem;
  max-width: 32rem;
  position: relative;
`;
const Blur = styled.div`
  background: #3a3a3a35;
  backdrop-filter: blur(5px);
  -webkit-box-shadow: inset 0 0 0 1000px rgba(51, 51, 51, 0.2);
  box-shadow: inset 0 0 0 1000px rgba(51, 51, 51, 0.2);
  height: 100%;
  height: 28rem;
  position: absolute;
  top: 0;
  width: 100%;
`;
const Card = styled.div`
  background-color: #3a3a3a35;
  color: white;
  height: 28rem;
  padding: 1rem 1.5rem;
  position: relative;
  width: 100%;
`;
const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;
const FocusTitle = styled.span`
  display: block;
  font-size: 3rem;
  @media (min-width: 992px) {
    font-size: 3.75rem;
  }
`;
const CardText = styled.p`
  font-weight: 300;
  margin: 0;
  @media (min-width: 992px) {
    font-size: 1.375rem;
    padding-right: 2rem;
  }
`;
const CardLink = styled.p`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-weight: 300;
  text-decoration: underline;
`;
const CardQuestion = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 2.5rem;
`;

const CardFooter = styled.div`
  bottom: -1px;
  display: flex;
  justify-content: center;
  margin-left: -1.5rem;
  position: absolute;
  width: 100%;
`;

const PositiveVote = styled.div`
  align-items: center;
  background-color: rgba(28, 187, 180, 0.9);
  cursor: pointer;
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 50%;
  &:hover {
    background-color: rgba(28, 187, 180, 1);
  }
`;
const NegativeVote = styled(PositiveVote)`
  background-color: rgba(255, 173, 29, 0.9);
  &:hover {
    background-color: rgba(255, 173, 29, 1);
  }
`;

const CardComponent = () => (
  <Wrapper>
    <Blur />
    <Card>
      <CardTitle>
        What's your opinion on <FocusTitle>Pope Francis?</FocusTitle>
      </CardTitle>
      <CardText>
        He’s talking tough on clergy sexual abuse, but is he just another papal
        pervert protector? (thumbs down) or a true pedophile punishing pontiff?
        (thumbs up)
      </CardText>
      <CardLink>
        <Icon
          src={wikipediaLogo}
          alt="wikipedia logo"
          height="1.125rem"
          width="1.125rem"
        />
        More Information
      </CardLink>
      <CardQuestion>What's your verdict?</CardQuestion>
      <CardFooter>
        <PositiveVote>
          <Icon src={thumb} alt="thumb up" height="2rem" width="2rem" />
        </PositiveVote>
        <NegativeVote>
          <Icon
            src={thumb}
            alt="thumb down"
            height="2rem"
            width="2rem"
            reverse
          />
        </NegativeVote>
      </CardFooter>
    </Card>
  </Wrapper>
);

export default CardComponent;
