import { OneDay } from "../type";

export const getEntireTimes = (lists: OneDay[]) => {
  return lists.map((item: OneDay) => item.entireTime);
};
