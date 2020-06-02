import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [candidates, setCandidates] = useState([]);
  const [fetchedData, setFetcedhData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/candidates"
        );

        // organize candidates
        const candidates = [];
        response.data.data.map((candidate) => {
          switch (candidate.name) {
            case "Kanye West":
              return candidates.splice(0, 0, candidate);
            case "Mark Zuckerberg":
              return candidates.splice(1, 0, candidate);
            case "Cristina Fernández de Kirchner":
              return candidates.splice(2, 0, candidate);
            case "Malala Yousafzai":
              return candidates.splice(3, 0, candidate);
          }
        });

        setCandidates(candidates);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    setFetcedhData(true);
  }, [fetchedData]);

  const handleVote = async (id, typeOfVote, positiveVotes, votes) => {
    const payload = {
      votes: votes + 1,
      positiveVotes:
        typeOfVote === "positive" ? positiveVotes + 1 : positiveVotes + 0,
    };
    try {
      await axios.put(`http://localhost:3000/api/candidates/${id}`, payload);
      setFetcedhData(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <Title>Votes</Title>
      <CardWrapper>
        {Boolean(candidates.length) &&
          candidates.map((candidate) => (
            <Card
              celebrity={candidate}
              key={candidate._id}
              handleVote={handleVote}
            />
          ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Celebrities;
