import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  margin-top: 1rem;
  color: #08404c;
  padding: 0.75rem;
  text-decoration: none;
  border-radius: 15px;
  font-size: 1.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: #08404c;
    color: #f0f0f0;
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: 20px;
  }
`;

const CustomLink = () => {
  return <StyledLink to="blog">Διαβάστε ολόκληρο το άρθρο</StyledLink>;
};

export default CustomLink;
