import sumHoursMinutes from "./sumTime";
import { EachTime } from "../type";

export const getSumTime = (
  entire: EachTime[],
  time: string,
  detailTime: any = ""
): number => {
  if (detailTime !== "") {
    return entire.reduce((acc: number, obj: EachTime) => {
      return acc + sumHoursMinutes(obj[time][detailTime]);
    }, 0);
  } else {
    return entire.reduce((acc: number, obj: EachTime) => {
      return acc + sumHoursMinutes(obj[time]);
    }, 0);
  }
};
