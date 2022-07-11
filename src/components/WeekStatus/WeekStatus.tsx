import { WeekStatusBox } from "./style";
import { SumTime } from "../../type";
import CategoryGauge from "./CategoryGauge";

type WeekSumData = {
  [key: string]: SumTime;
};

type WeekStatusProps = {
  data: WeekSumData;
};

function WeekStatus({ data }: WeekStatusProps) {
  console.log(data);
  const percents = {
    improvePercent: getPercent(
      data.sumTimes.sumImprove,
      data.lastSumTimes.sumImprove
    ),
    privatePercent: getPercent(
      data.sumTimes.sumPrivate,
      data.lastSumTimes.sumPrivate
    ),
    studyPercent: getPercent(
      data.sumDetailTimes.sumStudy,
      data.lastSumDetailTimes.sumStudy
    ),
    sleepPercent: getPercent(
      data.sumTimes.sumSleep,
      data.lastSumTimes.sumSleep
    ),
  };

  return (
    <>
      <div>
        <WeekStatusBox>
          <h3>이번주 시간 상황</h3>
          <div className="content-box">
            <ul>
              <CategoryGauge
                percent={percents.improvePercent}
                sumTime={data.sumTimes.sumImprove}
                type="IMPROVE_TIME"
              />
              <CategoryGauge
                percent={percents.privatePercent}
                sumTime={data.sumTimes.sumPrivate}
                type="PRIVATE_TIME"
              />
              <CategoryGauge
                percent={percents.studyPercent}
                sumTime={data.sumDetailTimes.sumStudy}
                type="STUDY_TIME"
              />
              <CategoryGauge
                percent={percents.sleepPercent}
                sumTime={data.sumTimes.sumSleep}
                type="SLEEP_TIME"
              />
            </ul>
          </div>
        </WeekStatusBox>
      </div>
    </>
  );
}

const getPercent = (current: number, last: number): string => {
  console.log(last);
  console.log(current);
  return last === 0 ? "100" : ((current / last) * 100).toFixed(1);
};

export default WeekStatus;
