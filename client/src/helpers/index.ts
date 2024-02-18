export const formatDate = () => {
  const dateString = new Date("2022/05/15".replace(/\//g, "-"));
  const date = new Date(dateString);
  const formattedDate = date.toISOString().slice(0, 10);
  return formattedDate;
};

export const getRandomRefNo = () => {
  const randomRefNo = (Math.random() + 1).toString(36).substring(7);
  return randomRefNo;
};

export const getRandomValueBetweenTwo = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from) + from);
};
