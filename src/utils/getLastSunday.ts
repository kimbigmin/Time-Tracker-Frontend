export const getLastSunday = (monday: number): number => {
  const ONE_DAY_MS = 86400000;

  return monday + ONE_DAY_MS * 6;
};
