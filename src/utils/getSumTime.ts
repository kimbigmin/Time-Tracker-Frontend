import sumHoursMinutes from "./sumTime";
import { EachTime } from "../type";

export const getSumTime = (
  entire: EachTime[],
  time: string,
  detailTime: any = ""
): number => {
  if (entire) {
    if (detailTime !== "") {
      return entire.reduce((acc: number, obj: EachTime) => {
        return acc + sumHoursMinutes(obj[time][detailTime]);
      }, 0);
    } else {
      return entire.reduce((acc: number, obj: EachTime) => {
        return acc + sumHoursMinutes(obj[time]);
      }, 0);
    }
  } else {
    return 0;
  }
};
