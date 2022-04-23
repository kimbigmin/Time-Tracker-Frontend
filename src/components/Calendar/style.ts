import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 2rem 1rem 1rem 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2rem;

  .move-Btn {
    cursor: pointer;
  }

  .yearAndMonth {
    font-size: 1.5rem;
  }

  .header {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }

  .days {
    display: grid;
    grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
    border-bottom: solid 2px #ececec;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    .day {
      text-align: center;
    }
  }

  .dates {
    display: grid;
    grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
    text-align: center;

    .date {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      cursor: pointer;
    }

    .doneDate {
      background-color: #5ea2e6;
      border-radius: 10%;
      margin-left: 5px;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      cursor: pointer;
    }

    .selected {
      background-color: #7e7d7da1;
      border-radius: 10%;
      margin-left: 5px;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      cursor: pointer;
    }
  }
`;
