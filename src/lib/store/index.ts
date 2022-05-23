export const get = <A = any>(key: string): A | undefined => {
  const r = localStorage.getItem(key);

  if (r === null) {
    return undefined;
  }

  return JSON.parse(r);
};

export const set = <A = any>(key: string, value: A): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const remove = (key: string): void => localStorage.removeItem(key);
