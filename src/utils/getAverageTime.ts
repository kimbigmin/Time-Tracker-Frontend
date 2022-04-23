export const getAverageTime = (wakeupTime: any, isThisWeek: boolean) => {
  const today = new Date().getDay();
  const isSunday = today === 0;
  const day = !isThisWeek ? 7 : isSunday ? 6 : today - 1;
  const hour = Math.floor(wakeupTime / day / 60);
  const minutes = wakeupTime % 60;

  return `${isNaN(hour) ? 0 : hour}시 ${isNaN(minutes) ? 0 : minutes}분`;
};
