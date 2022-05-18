import * as T from "../../lib/tabs/type";

const isSelected = (path: string, pathname: string) => pathname.includes(path);

export const isSelectedFromArray = (
  pathname: string,
  paths: T.TabNavigationProps[],
  tabPrefix: string
): string => {
  // console.log({ paths, pathname, tabPrefix });
  const f = paths.filter((x) =>
    isSelected(tabPrefix + (x.path || ""), pathname)
  );

  if (f.length) {
    return f[0].path || "";
  }

  return "";
};
