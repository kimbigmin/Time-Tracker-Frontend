import * as moment from "moment";

export const getAverageTime = (wakeupTime: number, isThisWeek: boolean) => {
  const today = moment().day();
  const isSunday = today === 0;
  const day = !isThisWeek ? 7 : isSunday ? 6 : today - 1;
  const hour = Math.floor(wakeupTime / day / 60);
  const minutes = Math.floor((wakeupTime / day) % 60);

  return `${isNaN(hour) ? 0 : hour}시 ${isNaN(minutes) ? 0 : minutes}분`;
};
