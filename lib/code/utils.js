export const truncateString = (s, max = 40) => {
  if (!s) {
    return "-";
  }
  const l = s.length;
  if (max === 0) {
    return "";
  }
  if (l > max) {
    return s.substring(0, max) + "...";
  }
  return s;
};
