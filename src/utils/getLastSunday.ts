import * as moment from "moment";

export const getLastSunday = (monday: string): string => {
  return moment(monday).add(6, "days").format();
};
