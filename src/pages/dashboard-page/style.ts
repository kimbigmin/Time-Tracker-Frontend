import styled from "styled-components";

export const AnalysisBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 5rem;

  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

export const WeekBox = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  /* margin: 0; */
  padding: 3rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    box-shadow: #5ea2e6 0px 1px 2px 0px, #5ea2e6 0px 2px 6px 2px;
    transition-duration: 1s;
    transition-timing-function: 1s;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
