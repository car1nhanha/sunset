export const convertData = (string) => {
  const regex = /\d+/g;
  return string.match(regex);
};
