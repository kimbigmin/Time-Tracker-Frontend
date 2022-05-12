import * as React from "react";
import { Link } from "react-router-dom";
import getDay from "../../utils/getDay";
import { Gauge } from "./Gauge";
import { StyledInput } from "./style";

function TimeInput({ dataNum }: any) {
  const today = new Date().toLocaleDateString();
  const day = getDay();
  const MS_ONE_DAY = 86400000;
  const tomorrow: number = new Date(today).getTime() + MS_ONE_DAY;
  const propsTime = tomorrow - Date.now();

  return (
    <StyledInput time={propsTime}>
      <Gauge></Gauge>
      <div className="time-input">
        <h3>{today + day}</h3>
        <div className="record-box">
          기록한 일수 <span className="record">{dataNum}</span>일
        </div>

        <Link to="/main/input">
          <button>시간기록하기</button>
        </Link>
      </div>
    </StyledInput>
  );
}

export default TimeInput;
