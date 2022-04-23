import sumHoursMinutes from "./sumTime";

export const getSumTime = (
  entire: any,
  time: string,
  detailTime: string = ""
) => {
  if (detailTime !== "") {
    return entire.reduce((acc: any, obj: any) => {
      return acc + sumHoursMinutes(obj[time][detailTime]);
    }, 0);
  } else {
    return entire.reduce((acc: any, obj: any) => {
      return acc + sumHoursMinutes(obj[time]);
    }, 0);
  }
};
