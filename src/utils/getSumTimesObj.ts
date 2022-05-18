import { getSumTime } from "./getSumTime";
import { EachTime, SumTime } from "../type";

export const getMainSumTimes = (timeLists: EachTime[]): SumTime => {
  return {
    sumImprove: getSumTime(timeLists, "entireImprove"),
    sumPrivate: getSumTime(timeLists, "entirePrivate"),
    sumWorks: getSumTime(timeLists, "entireWorks"),
    sumSleep: getSumTime(timeLists, "entireSleep"),
  };
};

export const getDetailSumTimes = (timeLists: any): SumTime => {
  return {
    sumStudy: getSumTime(timeLists, "improve", "study"),
    sumGame: getSumTime(timeLists, "private", "game"),
    sumReading: getSumTime(timeLists, "improve", "reading"),
    sumWakeUp: getSumTime(timeLists, "sleeping", "wake"),
    sumNight: getSumTime(timeLists, "sleeping", "sleep"),
  };
};
