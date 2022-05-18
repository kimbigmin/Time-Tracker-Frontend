export const getPercentage = (compare: number, standard: number): number => {
  const result = Math.round(((compare - standard) / standard) * 100);
  return isNaN(result) || result === Infinity ? 0 : result;
};
