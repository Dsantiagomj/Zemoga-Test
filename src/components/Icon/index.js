import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Icon = styled.img`
  height: ${(props) => props.height};
  transform: ${(props) => (props.reverse ? "rotate(180deg)" : "0")};
  width: ${(props) => props.width};
`;

const IconComponent = ({ alt, src, height, width, reverse }) => (
  <Icon alt={alt} src={src} height={height} width={width} reverse={reverse} />
);

IconComponent.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  width: PropTypes.string.isRequired,
};

export default IconComponent;
