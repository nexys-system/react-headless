export const getClassName = (isSelected) => {
  const classNames = ["nav-link"];
  if (isSelected) {
    classNames.push("active");
  }
  return classNames.join(" ");
};
