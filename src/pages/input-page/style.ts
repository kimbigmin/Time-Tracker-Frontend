import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;
