import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Icon from "../Icon";

import thumb from "../../img/like.svg";

const Card = styled.div`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat, no-repeat;
  background-position: 0 0, right;
  display: flex;
  min-height: 34.375rem;
  margin-bottom: 3rem;
  max-width: 30.75rem;
  position: relative;
  width: 100%;
`;

const VotingStatus = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.negativeStatus
      ? "rgba(255, 173, 29, 0.7);"
      : "rgba(28, 187, 180, 0.7)"};
  display: flex;
  height: 2rem;
  justify-content: center;
  left: 0;
  position: absolute;
  top: calc(34.375rem / 2);
  width: 2rem;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-top: auto;
  padding: 0 2.5rem;
  @media (min-width: 992px) {
    padding: 3.25rem 2.5rem 0;
  }
`;
const CardTitle = styled.h2`
  color: white;
  font-size: 2.8125rem;
  font-weight: 500;
  margin: 0;
`;

const CardPeriod = styled.p`
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  margin: 0;
`;
const CardCategory = styled.span`
  font-weight: 500;
`;

const CardText = styled.p`
  color: white;
  margin-bottom: 2.5rem;
  min-height: 2.375rem;
`;

const VoteSection = styled.div`
  align-items: center;
  display: flex;
`;

const LikeButton = styled.button`
  align-items: center;
  background-color: rgba(28, 187, 180, 0.7);
  border: ${(props) =>
    props.highlight === "positive" ? "solid 2px white" : "none"};
  display: flex;
  justify-content: center;
  height: 2rem;
  margin-right: 1rem;
  width: 2rem;
  &:focus {
    outline-color: white;
  }
`;
const DislikeButton = styled(LikeButton)`
  background-color: rgba(255, 173, 29, 0.7);
  border: ${(props) =>
    props.highlight === "negative" ? "solid 2px white" : "none"};
  &:focus {
    outline-color: white;
  }
`;
const CardButton = styled.button`
  background-color: transparent;
  border: solid 1px white;
  color: white;
  font-size: 1rem;
  padding: 0.75rem;
  width: 7.75rem;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

const ResultsSection = styled.div`
  bottom: 0;
  display: flex;
  height: 3.25rem;
  position: absolute;
  width: 100.1%;
`;
const PositiveResult = styled.div`
  align-items: center;
  background-color: rgba(28, 187, 180, 0.7);
  display: flex;
  justify-content: flex-start;
  padding: 0 0.5rem;
  width: ${(props) => props.votingWidth}%;
`;
const NegativeResult = styled(PositiveResult)`
  background-color: rgba(255, 173, 29, 0.7);
  justify-content: flex-end;
`;

const Percentage = styled.span`
  color: white;
  font-size: 1.875rem;
  font-weight: 300;
  margin: 0 0.5rem;
`;

const CardComponent = ({
  celebrity: {
    id,
    imageUrl,
    fullName,
    period,
    category,
    positiveVotes,
    negativeVotes,
  },
  handleVote,
}) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleActive = (e, buttonType) => {
    e.preventDefault();
    setActiveButton(buttonType);
  };

  const handleVoteAgain = (e) => {
    e.preventDefault();
    setHasVoted(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (activeButton) {
      setHasVoted(true);
      setActiveButton("");
      handleVote(id, activeButton);
    }
  };

  const votePercentage = (type) => {
    if (type === "positive") {
      return Math.round(
        (positiveVotes / (positiveVotes + negativeVotes)) * 100
      );
    }
    return Math.round((negativeVotes / (positiveVotes + negativeVotes)) * 100);
  };

  return (
    <Card background={imageUrl}>
      <VotingStatus negativeStatus={positiveVotes < negativeVotes}>
        <Icon
          src={thumb}
          alt={
            positiveVotes < negativeVotes
              ? "Popularity under 50%"
              : "Popularity over 50%"
          }
          height="1.125rem"
          width="1.125rem"
          reverse={positiveVotes < negativeVotes}
        />
      </VotingStatus>
      <CardContentWrapper>
        <CardTitle>{fullName}</CardTitle>
        <CardPeriod>
          {period} <CardCategory>in {category}</CardCategory>
        </CardPeriod>
        {hasVoted ? (
          <>
            <CardText>Thank you for voting</CardText>
            <CardButton onClick={handleVoteAgain}>Vote again</CardButton>
          </>
        ) : (
          <>
            <CardText>
              Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
              eu velit libero.
            </CardText>
            <VoteSection>
              <LikeButton
                onClick={(e) => handleActive(e, "positive")}
                highlight={activeButton}
              >
                <Icon
                  src={thumb}
                  alt="like button"
                  height="1.125rem"
                  width="1.125rem"
                />
              </LikeButton>
              <DislikeButton
                onClick={(e) => handleActive(e, "negative")}
                highlight={activeButton}
              >
                <Icon
                  src={thumb}
                  alt="dislike button"
                  height="1.125rem"
                  width="1.125rem"
                  reverse
                />
              </DislikeButton>
              <CardButton onClick={handleClick}>Vote now</CardButton>
            </VoteSection>
          </>
        )}
      </CardContentWrapper>
      <ResultsSection>
        <PositiveResult votingWidth={votePercentage("positive")}>
          <Icon
            src={thumb}
            alt="like button"
            height="1.875rem"
            width="1.875rem"
          />
          <Percentage>{votePercentage("positive")}%</Percentage>
        </PositiveResult>
        <NegativeResult votingWidth={votePercentage("negative")}>
          <Percentage>
            <Percentage>{votePercentage("negative")}%</Percentage>
          </Percentage>
          <Icon
            src={thumb}
            alt="dislike button"
            height="1.875rem"
            width="1.875rem"
            reverse
          />
        </NegativeResult>
      </ResultsSection>
    </Card>
  );
};

CardComponent.propTypes = {
  celebrity: PropTypes.object.isRequired,
  handleVote: PropTypes.func,
};
export default CardComponent;
