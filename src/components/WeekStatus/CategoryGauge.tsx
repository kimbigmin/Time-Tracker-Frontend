import { Gauge } from "./style";
import { convertMinToTime } from "../../utils/convertMinToTime";

type CategoryGaugeProps = {
  percent: string;
  sumTime: number;
  type: string;
};

function CategoryGauge({ percent, sumTime, type }: CategoryGaugeProps) {
  return (
    <Gauge percent={percent} type={type}>
      <div className="top">
        <h3>
          {getLabel(type)}: {convertMinToTime(sumTime)}
        </h3>
        <p>지난주 기준</p>
      </div>
      <span className="progress-bar">
        <span className="remaining-time">
          {percent !== "NaN" ? percent : 0}%
        </span>
        <span className="gauge"></span>
      </span>
    </Gauge>
  );
}

const getLabel = (type: string) => {
  switch (type) {
    case "IMPROVE_TIME":
      return "자기계발";
    case "PRIVATE_TIME":
      return "개인시간";
    case "STUDY_TIME":
      return "공부시간";
    case "SLEEP_TIME":
      return "취침시간";
  }
};

export default CategoryGauge;
