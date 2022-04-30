import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid rgba(150, 150, 150, 0.235);
  h1 {
    font-size: 1.5rem;
  }

  span {
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;
