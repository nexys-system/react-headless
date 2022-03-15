export const enumToOptions = (keys) => Object.keys(keys).filter((x) => !isNaN(Number(x))).map((x) => ({id: Number(x), name: keys[Number(x)]}));
export const getClassName = (errors) => {
  const isInvalid = !!errors;
  const classes = ["form-control"];
  if (isInvalid) {
    classes.push("is-invalid");
  }
  return classes.join(" ");
};
export const isA = (a, formErrors) => Object.keys(formErrors).length === 0;
