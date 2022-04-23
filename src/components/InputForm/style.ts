import styled from "styled-components";

export const SaveButton = styled.button`
  background-color: #1671cc;
  border: 0;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #0b3b6c;
  }
`;

export const UpdateButton = styled.button`
  background-color: #36424f;
  border: 0;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #030e1a;
  }
`;

export const Container = styled.div`
  width: 40%;
  margin: 2rem 1rem 1rem 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2rem;

  h2 {
    color: #1671cc;
    margin-bottom: 1rem;
  }
`;

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
`;
