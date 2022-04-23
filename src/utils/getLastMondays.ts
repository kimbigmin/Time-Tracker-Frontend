// 현재 날짜와 week(1,2,3...)주를 파라미터로 받는다.
export function getLastMondays(date: string, week: number): number {
  const DAY_MS = 86400000;
  const WEEK_MS = DAY_MS * week * 7;
  const msDate = new Date(date).getTime();

  const result =
    new Date(date).getDay() !== 0
      ? msDate + WEEK_MS - (new Date(date).getDay() - 1) * DAY_MS
      : msDate + WEEK_MS - 6 * DAY_MS;

  return result;
}
