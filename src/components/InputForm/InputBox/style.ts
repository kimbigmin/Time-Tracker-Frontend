import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  grid-template-columns: 50% 50%;
  margin: 1rem;
  padding-top: 0;

  h3 {
    margin: 0 0 1rem 0.5rem;
  }

  .error {
    color: red;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 2rem;
    h3 {
      font-size: 1rem;
    }
  }
`;
