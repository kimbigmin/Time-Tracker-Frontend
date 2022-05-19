import { useState } from "react";
import useInterval from "../../hooks/useInterval";
import msToTime from "../../utils/msToTime";

type TimeGaugeProps = {
  tomorrow: number;
};

function TimeGauge({ tomorrow }: TimeGaugeProps) {
  const [remainTime, setRemainTime] = useState<String>(
    msToTime(tomorrow - Date.now())
  );

  useInterval(() => {
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
}

export default TimeGauge;
