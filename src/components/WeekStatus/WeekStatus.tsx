import * as React from "react";
import { WeekStatusBox, Gauge } from "./style";
import { convertMinToTime } from "../../utils/convertMinToTime";
import { sumTime } from "../../type";

type WeekSumData = {
  [key: string]: sumTime;
};

type WeekStatusProps = {
  data: WeekSumData;
};

function WeekStatus({ data }: WeekStatusProps) {
  const improvePercent = (
    (data.sumTimes.sumImprove / data.lastSumTimes.sumImprove) *
    100
  ).toFixed(1);

  const privatePercent = (
    (data.sumTimes.sumPrivate / data.lastSumTimes.sumPrivate) *
    100
  ).toFixed(1);

  const studyPercent = (
    (data.sumDetailTimes.sumStudy / data.lastSumDetailTimes.sumStudy) *
    100
  ).toFixed(1);

  const sleepPercent = (
    (data.sumTimes.sumSleep / data.lastSumTimes.sumSleep) *
    100
  ).toFixed(1);

  return (
    <WeekStatusBox>
      <h3>이번주 시간 상황</h3>
      <div className="content-box">
        <ul>
          <Gauge percent={improvePercent} type={"IMPROVE_TIME"}>
            <div className="top">
              <h3>자기계발: {convertMinToTime(data.sumTimes.sumImprove)}</h3>
              <p>지난주 기준</p>
            </div>
            <span className="progress-bar">
              <span className="remaining-time">{improvePercent}%</span>
              <span className="gauge"></span>
            </span>
          </Gauge>
          <Gauge percent={privatePercent} type={"PRIVATE_TIME"}>
            <div className="top">
              <h3>개인시간: {convertMinToTime(data.sumTimes.sumPrivate)}</h3>
              <p>지난주 기준</p>
            </div>
            <span className="progress-bar">
              <span className="remaining-time">{privatePercent}%</span>
              <span className="gauge"></span>
            </span>
          </Gauge>
          <Gauge percent={studyPercent} type={"STUDY_TIME"}>
            <div className="top">
              <h3>
                공부시간: {convertMinToTime(data.sumDetailTimes.sumStudy)}
              </h3>
              <p>지난주 기준</p>
            </div>
            <span className="progress-bar">
              <span className="remaining-time">{studyPercent}%</span>
              <span className="gauge"></span>
            </span>
          </Gauge>
          <Gauge percent={sleepPercent} type={"SLEEP_TIME"}>
            <div className="top">
              <h3>취침: {convertMinToTime(data.sumTimes.sumSleep)}</h3>
              <p>지난주 기준</p>
            </div>
            <span className="progress-bar">
              <span className="remaining-time">{sleepPercent}%</span>
              <span className="gauge"></span>
            </span>
          </Gauge>
        </ul>
      </div>
    </WeekStatusBox>
  );
}

export default WeekStatus;
