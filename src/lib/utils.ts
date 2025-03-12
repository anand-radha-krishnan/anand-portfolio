export const calculateExperience = () => {
  const today = new Date();
  const start = new Date("2018-05-01");

  const yearsDiff = today.getFullYear() - start.getFullYear();
  const monthsDiff = today.getMonth() - start.getMonth();
  const daysDiff = today.getDate() - start.getDate();
  const finalValue = (yearsDiff + monthsDiff / 12 + daysDiff / 365).toFixed(1);

  return Number(finalValue);
};
