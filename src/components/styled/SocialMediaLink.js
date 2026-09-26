import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SocialMediaLink = styled(Link)`
  display: inline-block;
  background-color: #90a9ae;
  padding: 0.75rem 0.75rem 0.5rem 0.75rem;
  border-radius: 30px;
  color: black;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
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

const SocialLink = ({ to, children }) => {
  return <SocialMediaLink to={to}>{children}</SocialMediaLink>;
};

export default SocialLink;
