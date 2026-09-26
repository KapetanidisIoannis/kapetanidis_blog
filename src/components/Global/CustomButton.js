import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background-color: ${({ color }) =>
    color === "blue" ? "#21535e" : "#a58118"};
  color: #fff;
  font-size: 1.75rem;
  padding: 1.5rem 2rem;
  border-radius: 9px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  }

  ${({ clicked }) =>
    clicked &&
    css`
      transform: translateY(2px);
    `}

  &:active {
    transform: translateY(2px);
  }
`;

export default function CustomButton({ destination, color, text }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <StyledButton to={`${destination}`} onClick={handleClick} color={color}>
      {text}
    </StyledButton>
  );
}
