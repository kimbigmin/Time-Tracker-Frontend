import * as React from "react";
import { useState } from "react";
import msToTime from "../../utils/msToTime";

export const Gauge = ({ tomorrow }: any) => {
  const [remainTime, setRemainTime] = useState<string | null>(null);

  setInterval(() => {
    setRemainTime(msToTime(tomorrow - Date.now()));
  }, 1000);

  return (
    <>
      <h2>오늘 하루 잔여 시간</h2>
      <span className="progress-bar">
        <span className="remaining-time">{remainTime}</span>
        <span className="gauge"></span>
        <i className="fas fa-running"></i>
      </span>
    </>
  );
};
