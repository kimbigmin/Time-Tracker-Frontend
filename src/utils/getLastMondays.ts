// 현재 날짜와 week(1,2,3...)주를 파라미터로 받는다.
import * as moment from "moment";

export function getLastMondays(date: string, week: number): string {
  const result =
    moment(date).day() !== 0
      ? moment(date)
          .subtract(week * 7 + (moment(date).day() - 1), "days")
          .format()
      : moment(date)
          .subtract(week * 7 + 6, "days")
          .format();
  return result;
}
