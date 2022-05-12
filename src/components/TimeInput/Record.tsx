import * as React from "react";
import { Link } from "react-router-dom";
import getDay from "../../utils/getDay";

export const Record = ({ dataNum, today, day }: any) => {
  return (
    <>
      <div className="time-input">
        <h3>{today + day}</h3>
        <div className="record-box">
          기록한 일수 <span className="record">{dataNum}</span>일
        </div>

        <Link to="/main/input">
          <button>시간기록하기</button>
        </Link>
      </div>
    </>
  );
};
