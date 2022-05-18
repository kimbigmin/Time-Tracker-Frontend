// 분을 시간, 분으로 변경
export const convertMinToTime = (min: number) => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;

  return `${hours}시간 ${minutes}분`;
};
