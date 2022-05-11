import styled from "styled-components";

export const StyledInput = styled.div`
  $buttonColor: #1671cc;
  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .progress-bar {
    display: inline-block;
    position: relative;
    width: 80%;
    height: 2rem;
    background-color: #1671cc;
    margin-bottom: 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  .gauge {
    display: inline-block;
    width: ${(props: { time: number }): number => {
      const operation: string = ((props.time / 86400000) * 100).toFixed(3);
      return 100 - Number(operation);
    }}%;
    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: linear;
    height: 2rem;
    background-color: #d6d3d3;
  }

  .remaining-time {
    position: absolute;
    right: 10px;
    color: #ffffffeb;
    z-index: 2;
    font-weight: bolder;
    font-size: 1.3rem;
  }

  .fa-running {
    position: absolute;
    font-size: 2rem;
  }

  .time-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;
    background-color: rgba(255, 255, 255, 0.096);
    width: 80%;
    height: 11rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    h3 {
      font-size: 1rem;
    }

    .record-box {
      font-weight: bold;
    }

    .record {
      font-size: 2rem;
      color: rgb(59, 63, 171);
      font-weight: bold;
      margin-right: 5px;
      margin-left: 5px;
    }

    button {
      width: 14rem;
      background-color: #1671cc;
      color: white;
      border: 0;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

      &:hover {
        background-color: #082a4d;
        transition-duration: 0.5s;
      }
    }
  }
`;
