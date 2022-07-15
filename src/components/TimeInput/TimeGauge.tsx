import { useState } from "react";
import useInterval from "../../hooks/useInterval";
import TimeTool from "../../utils/TimeTool";
import * as moment from "moment";

type TimeGaugeProps = {
  tomorrow: moment.Moment;
};

function TimeGauge({ tomorrow }: TimeGaugeProps) {
  const [remainTime, setRemainTime] = useState<String>(
    TimeTool.msToTime(tomorrow)
  );

  useInterval(() => {
    setRemainTime(TimeTool.msToTime(tomorrow));
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
