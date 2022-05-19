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
        <h3>자기계발: {convertMinToTime(sumTime)}</h3>
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

export default CategoryGauge;
