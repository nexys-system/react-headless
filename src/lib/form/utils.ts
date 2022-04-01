export const enumToOptions = <A>(keys: {
  [s: number]: string;
}): { id: A; name: string }[] =>
  Object.keys(keys)
    .filter(x => !isNaN(Number(x)))
    .map(x => ({ id: Number(x) as any as A, name: keys[Number(x)] }));

export const isA = <A>(
  a: Partial<A>,
  formErrors: { [k in keyof A]?: string[] }
): a is A => Object.keys(formErrors).length === 0;
