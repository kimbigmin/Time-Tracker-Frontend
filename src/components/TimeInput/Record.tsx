import * as React from "react";
import { Link } from "react-router-dom";

type RecordProps = {
  dataLength: number;
  today: string;
  day: string | undefined;
};

export const Record = ({ dataLength, today, day }: RecordProps) => {
  return (
    <>
      <div className="time-input">
        <h3>{today + day}</h3>
        <div className="record-box">
          기록한 일수 <span className="record">{dataLength}</span>일
        </div>

        <Link to="/main/input">
          <button>시간기록하기</button>
        </Link>
      </div>
    </>
  );
};
