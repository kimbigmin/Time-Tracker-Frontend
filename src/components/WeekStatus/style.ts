import styled from "styled-components";

export const WeekStatusBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-top: 5rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  .content-box {
    display: flex;
    position: relative;
    padding: 3rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;

export const Gauge = styled.li<any>`
  .progress-bar {
    display: inline-block;
    position: relative;
    width: 23rem;
    height: 2rem;
    background-color: #d6d3d3;
    margin-bottom: 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 10px;
  }
  .gauge {
    position: absolute;
    border-radius: 10px;
    width: ${(props: any) => {
      return props.percent > 100 ? 100 : props.percent;
    }}%;
    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: linear;
    height: 2rem;
    background-color: ${(props) => {
      switch (props.type) {
        case "IMPROVE_TIME":
          return "rgba(251, 184, 1, 0.8)";
        case "PRIVATE_TIME":
          return "rgba(241, 66, 43, 0.8)";
        case "SLEEP_TIME":
          return "rgba(107, 29, 195, 0.8)";
        case "WORK_TIME":
          return " rgba(74, 200, 190, 0.8)";
        case "STUDY_TIME":
          return "rgba(228, 130, 2, 1)";
        case "READING_TIME":
          return "rgba(49, 37, 2, 0.8)";
      }
    }};
  }

  .remaining-time {
    position: absolute;
    right: 10px;
    color: rgba(0, 0, 0, 0.7);
    z-index: 2;
    font-weight: bolder;
    font-size: 1.2rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.5rem;
      font-weight: bold;
    }
  }
`;
