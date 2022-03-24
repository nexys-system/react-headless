export const truncateString = (s?: string, max: number = 40) => {
  if (!s) {
    return '-';
  }

  const l = s.length;

  // if max == 0 returns an empty string
  if (max === 0) {
    return '';
  }

  if (l > max) {
    return s.substring(0, max) + '...';
  }

  return s;
};
