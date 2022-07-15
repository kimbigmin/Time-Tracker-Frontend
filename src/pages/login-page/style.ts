import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  img {
    width: 40%;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    width: 70%;

    img {
      width: 100%;
    }
  }
`;

export const Button = styled.a`
  padding: 1rem;
  font-size: 1rem;
  /* font-weight: bold; */
  background-color: black;
  color: white;
  width: 40%;
  border-radius: 5px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color: #282c34;
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
