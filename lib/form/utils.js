export const enumToOptions = (keys) => Object.keys(keys).filter((x) => !isNaN(Number(x))).map((x) => ({id: Number(x), name: keys[Number(x)]}));
export const isA = (a, formErrors) => Object.keys(formErrors).length === 0;
export const defToShape = (def) => {
  const r = {};
  def.forEach((d) => {
    r[d.name] = {optional: d.optional};
  });
  return r;
};
