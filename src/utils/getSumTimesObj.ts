import { getSumTime } from "./getSumTime";
import { EachTime, sumTime } from "../type";

export const getMainSumTimes = (timeLists: EachTime[]): sumTime => {
  return {
    sumImprove: getSumTime(timeLists, "entireImprove"),
    sumPrivate: getSumTime(timeLists, "entirePrivate"),
    sumWorks: getSumTime(timeLists, "entireWorks"),
    sumSleep: getSumTime(timeLists, "entireSleep"),
  };
};

export const getDetailSumTimes = (timeLists: any): sumTime => {
  return {
    sumStudy: getSumTime(timeLists, "improve", "study"),
    sumGame: getSumTime(timeLists, "private", "game"),
    sumReading: getSumTime(timeLists, "improve", "reading"),
    sumWakeUp: getSumTime(timeLists, "sleeping", "wake"),
    sumNight: getSumTime(timeLists, "sleeping", "sleep"),
  };
};
