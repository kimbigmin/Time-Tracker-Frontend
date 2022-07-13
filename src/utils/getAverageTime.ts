export const getAverageTime = ({
  time,
  dayNum,
}: {
  time: number;
  dayNum: number | 0;
}) => {
  const hour = Math.floor(time / dayNum / 60);
  const minutes = Math.floor((time / dayNum) % 60);

  return `${isNaN(hour) ? 0 : hour}시 ${isNaN(minutes) ? 0 : minutes}분`;
};
