import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const CustomPost = styled(Link)`
  display: block;
  background-color: #e2dbcf;
  border-radius: 5px;
  margin-bottom: 2rem;
  padding: 1.5rem;
  box-shadow: 2.5px 2px 5px #bfbfbf;
  color: black;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.025);
    box-shadow: 2.5px 5px 10px #bfbfbf;
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

export default CustomPost;
