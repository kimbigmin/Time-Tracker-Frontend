import { getPercentage } from "./getPercentage";

export const getMainTimesPercent = (
  thisMainSumtimes: any,
  lastMainSumTimes: any
) => {
  return {
    improvePercent: getPercentage(
      thisMainSumtimes.sumImprove,
      lastMainSumTimes.sumImprove
    ),
    privatePercent: getPercentage(
      thisMainSumtimes.sumPrivate,
      lastMainSumTimes.sumPrivate
    ),
    worksPercent: getPercentage(
      thisMainSumtimes.sumWorks,
      lastMainSumTimes.sumWorks
    ),
    sleepPercent: getPercentage(
      thisMainSumtimes.sumSleep,
      lastMainSumTimes.sumSleep
    ),
  };
};

export const getDetailTimesPercent = (
  thisDetailSumtimes: any,
  lastDetailSumTimes: any
) => {
  return {
    studyPercent: getPercentage(
      thisDetailSumtimes.sumStudy,
      lastDetailSumTimes.sumStudy
    ),
    gamePercent: getPercentage(
      thisDetailSumtimes.sumGame,
      lastDetailSumTimes.sumGame
    ),
    readingPercent: getPercentage(
      thisDetailSumtimes.sumReading,
      lastDetailSumTimes.sumReading
    ),
    wakePercent: getPercentage(
      thisDetailSumtimes.sumWakeUp,
      lastDetailSumTimes.sumWakeUp
    ),
    nightPercent: getPercentage(
      thisDetailSumtimes.sumNight,
      lastDetailSumTimes.sumNight
    ),
  };
};
