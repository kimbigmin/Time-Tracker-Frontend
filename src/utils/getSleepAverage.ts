import { getAverageTime } from "./getAverageTime";
import { SumTime } from "../type";

export const getSleepingAverage = (
  thisDetailSumTime: SumTime,
  lastDetailSumTime: SumTime,
  isThisWeek: boolean
) => {
  return {
    thisWakeUp: getAverageTime(thisDetailSumTime.sumWakeUp, isThisWeek),
    lastWakeUp: getAverageTime(lastDetailSumTime.sumWakeUp, isThisWeek),
    thisNight: getAverageTime(thisDetailSumTime.sumNight, isThisWeek),
    lastNight: getAverageTime(lastDetailSumTime.sumNight, isThisWeek),
  };
};
