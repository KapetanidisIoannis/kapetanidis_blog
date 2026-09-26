import styled from "styled-components";

const SectionTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  //   line-height: 1.05;
  letter-spacing: -0.5px;
  margin-bottom: ${(props) => props.marginBottom || "1rem"};
`;

export default SectionTitle;
