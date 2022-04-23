import { OneDate } from "../type";

export const getEntireTimes = (lists: any) => {
  return lists.map((item: OneDate) => item.entireTime);
};
