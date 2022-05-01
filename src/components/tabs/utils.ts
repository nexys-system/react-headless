export const getClassName = (isSelected: boolean) => {
  const classNames = ['nav-link'];

  if (isSelected) {
    classNames.push('active');
  }

  return classNames.join(' ');
};
