import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import * as T from "../tabs/type";
import { getRoutePath, isSelectedFromArray } from "./utils";

const Navigation =
  (
    Ul: ({ children }: T.UlProps) => JSX.Element,
    Li: (p: T.LiNavigation) => JSX.Element
  ) =>
  ({ tabs, allowsNested = true, pathPrefix = "" }: T.NavigationProps) => {
    const location = useLocation();
    const getPath = (path: string) => pathPrefix + path;

    // sorting tabs so that nesting tabs work
    const sortedTabs = [...tabs].sort(
      (a, b) => (b.path || "").length - (a.path || "").length
    );

    React.useEffect(() => {
      // path changed
      // console.log("s", location.pathname);
    }, [location]);

    // returns selected path
    const selectedPath = isSelectedFromArray(
      location.pathname,
      sortedTabs,
      pathPrefix
    );

    return (
      <>
        <Ul>
          {tabs.map(({ label, path = "" }, i) => {
            const pathComplete = getPath(path);

            return (
              <Li
                key={i}
                path={pathComplete}
                isSelected={path === selectedPath}
                label={label}
              />
            );
          })}
        </Ul>
        <Routes>
          {sortedTabs.map(({ path, Component }, i) => {
            const pathFinal = getRoutePath(path, allowsNested);

            return <Route key={i} path={pathFinal} element={<Component />} />;
          })}
        </Routes>
      </>
    );
  };

export default Navigation;
