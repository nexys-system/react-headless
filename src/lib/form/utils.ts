export const enumToOptions = <A>(keys: {
  [s: number]: string;
}): { id: A; name: string }[] =>
  Object.keys(keys)
    .filter((x) => !isNaN(Number(x)))
    .map((x) => ({ id: Number(x) as any as A, name: keys[Number(x)] }));

export const getClassName = (errors?: string[]): string => {
  const isInvalid: boolean = !!errors;

  const classes = ["form-control"]; //

  if (isInvalid) {
    classes.push("is-invalid");
  }

  return classes.join(" ");
};

export const isA = <A>(
  a: Partial<A>,
  formErrors: { [k in keyof A]?: string[] }
): a is A => Object.keys(formErrors).length === 0;
