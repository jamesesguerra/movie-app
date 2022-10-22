export const minsToHrsAndMins = (n) => {
  const hours = n / 60;
  const rHours = Math.floor(hours);
  const mins = (hours - rHours) * 60;
  const rMins = Math.round(mins);
  return `${rHours}hr ${rMins}mins`;
};