import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Card from "../Card";

import { getStorage, setStorage } from "../../services/Storage";
import defaultData from "../../services/userData.json";

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;

const Celebrities = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const celebrities = getStorage();
    if (celebrities) {
      return setData(JSON.parse(celebrities));
    } else {
      setStorage(JSON.stringify(defaultData));
      setData(defaultData);
    }
  }, []);

  const handleVote = (id, typeOfVote) => {
    if (typeOfVote === "positive") {
      const newData = data.celebrities.map((celebrity) =>
        celebrity.id === id
          ? { ...celebrity, positiveVotes: celebrity.positiveVotes + 1 }
          : celebrity
      );
      setStorage(JSON.stringify({ celebrities: [...newData] }));
    } else if (typeOfVote === "negative") {
      const newData = data.celebrities.map((celebrity) =>
        celebrity.id === id
          ? { ...celebrity, negativeVotes: celebrity.negativeVotes + 1 }
          : celebrity
      );
      setStorage(JSON.stringify({ celebrities: [...newData] }));
    }
    const updatedData = getStorage();
    setData(JSON.parse(updatedData));
  };

  return (
    <Wrapper>
      <Title>Votes</Title>
      <CardWrapper>
        {data &&
          data.celebrities.map((celebrity) => (
            <Card
              celebrity={celebrity}
              key={celebrity.id}
              handleVote={handleVote}
            />
          ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Celebrities;
