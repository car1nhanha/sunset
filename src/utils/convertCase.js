export const convertCase = (str, type) => {
  if (type === "lower") {
    return str.toLowerCase();
  } else if (type === "upper") {
    return str.toUpperCase();
  } else if (type === "title") {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  } else if (type === "proper") {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};
