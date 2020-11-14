export const calculateMinutes = (tenthsOfSecond) => {
  return Math.floor((tenthsOfSecond / 10) / 60);
};

export const calculateSecondsRemainder = (tenthsOfSecond) => {
  return String(((tenthsOfSecond / 10) % 60).toFixed(1)).padStart(4, '0');
};
