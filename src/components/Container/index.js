import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ContainerComponent = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 75rem;
  padding: 0 1rem;
  width: 100%;
  @media (min-width: 992px) {
    padding: 0 3rem;
  }
`;

const Container = ({ children }) => (
  <ContainerComponent>{children}</ContainerComponent>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
