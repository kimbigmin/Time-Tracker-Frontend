import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  h3 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  .month {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  li {
    font-size: 0.5rem;
    margin-right: 2rem;
    margin-top: 1rem;
  }
`;

export const ContributionBox = styled.ul`
  display: flex;
  width: 100%;
  height: 8rem;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  li {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    margin: 2px;

    border-radius: 1px;
    background-color: rgba(234, 237, 240, 1);
  }

  .done {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    margin: 2px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    background-color: #5ea2e6;
    border-radius: 1px;
  }
`;
