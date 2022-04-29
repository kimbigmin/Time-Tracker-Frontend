import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import getDay from "../../utils/getDay";
import msToTime from "../../utils/msToTime";
import { StyledInput } from "./style";

function TimeInput({ dataNum }: any) {
  const today = new Date().toLocaleDateString();
  const day = getDay();
  const MS_ONE_DAY = 86400000;
  const tomorrow: number = new Date(today).getTime() + MS_ONE_DAY;
  const propsTime = tomorrow - Date.now();

  const [remainTime, setRemainTime] = useState<string | null>(null);

  setInterval(() => {
    setRemainTime(msToTime(tomorrow - Date.now()));
  }, 1000);

  return (
    <StyledInput time={propsTime}>
      <h2>오늘 하루 잔여 시간</h2>

      <span className="progress-bar">
        <span className="remaining-time">{remainTime}</span>
        <span className="gauge"></span>
        <i className="fas fa-running"></i>
      </span>

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
