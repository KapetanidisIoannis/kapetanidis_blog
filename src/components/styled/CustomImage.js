import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.025);
  }
`;

const YourComponent = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default YourComponent;
