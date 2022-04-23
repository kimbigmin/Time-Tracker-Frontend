export const getPercentage = (compare: any, standard: any) => {
  const result = Math.round(((compare - standard) / standard) * 100);
  return isNaN(result) || result === Infinity ? 0 : result;
};
