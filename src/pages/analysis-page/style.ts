import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Box = styled.div`
  padding: 2rem;
  margin: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  /* text-align: left; */

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  h3 {
    margin: 0.5rem;
    color: rgba(31, 28, 28, 0.749);
  }

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const ChartBox = styled(Box)`
  width: 60%;
  margin-left: 5rem;
  position: relative;
  height: 36vw;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 1rem;
    height: 100vw;
    margin: auto;

    ul {
      margin: 0;
    }

    li {
      font-size: 0.6rem;
    }
  }
`;

export const Time = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

export const Percent = styled.span`
  color: ${(props: { data: number }) => {
    return props.data > 0 ? "red" : "#1671cc";
  }};
  margin-left: 1rem;
  font-size: 1.3rem;
`;

export const TimeDiff = styled.span`
  color: ${(props: { data: number }) => {
    return props.data > 0 ? "#1671cc" : "red";
  }};
  margin-left: 1rem;
  font-size: 1.3rem;
`;

export const TopBox = styled.div`
  background-color: white;
  position: sticky;
  z-index: 50;
  top: 0;
  padding: 2rem 0 2rem 4rem;
  border-bottom: 0.4px gray solid;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  .title {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
  .select-input {
    font-size: 1rem;
    text-align: center;
    border-radius: 5px;
    padding: 0.5rem;
    margin-right: 0.2rem;
  }

  label {
    margin-right: 0.5rem;
  }

  .search-btn {
    background-color: #1671cc;
    color: white;
    border: 0;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .week-page-toggle {
    margin-top: 1rem;

    p {
      display: inline-block;
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0 1rem;
      width: 15%;
      text-align: center;
    }

    button {
      display: inline-block;
      background-color: white;
      border: 0;
      font-size: 1rem;
      cursor: pointer;
    }

    button:hover {
      color: #1671cc;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .title {
      font-size: 1.3rem;
    }

    .select-input {
      font-size: 0.7rem;
    }

    .search-btn {
      font-size: 0.7rem;
    }

    .week-page-toggle {
      align-items: center;
      text-align: center;
      p {
        width: 80%;
      }
    }
  }
`;
