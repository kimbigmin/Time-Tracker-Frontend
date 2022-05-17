import { OneDay } from "../type";

export const getEntireTimes = (lists: OneDay[]) => {
  if (lists === undefined) {
    return;
  }
  return lists.map((item: OneDay) => item.entireTime);
};
