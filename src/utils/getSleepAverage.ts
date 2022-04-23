import { getAverageTime } from "./getAverageTime";

export const getSleepingAverage = (
  thisDetailSumTime: any,
  lastDetailSumTime: any,
  isThisWeek: boolean
) => {
  return {
    thisWakeUp: getAverageTime(thisDetailSumTime.sumWakeUp, isThisWeek),
    lastWakeUp: getAverageTime(lastDetailSumTime.sumWakeUp, isThisWeek),
    thisNight: getAverageTime(thisDetailSumTime.sumNight, isThisWeek),
    lastNight: getAverageTime(lastDetailSumTime.sumNight, isThisWeek),
  };
};
