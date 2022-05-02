import React from "../../_snowpack/pkg/react.js";
import {Switch, Route} from "../../_snowpack/pkg/react-router-dom.js";
const isSelected = (path, pathname) => pathname.includes(path);
const isSelectedFromArray = (pathname, paths, tabPrefix) => {
  const f = paths.filter((x) => isSelected(tabPrefix + (x.path || ""), pathname));
  if (f.length) {
    return f[0].path || "";
  }
  return "";
};
const Navigation = (Ul, Li) => ({tabs, pathPrefix = ""}) => {
  const getPath = (path) => pathPrefix + path;
  const {pathname} = window.location;
  const sortedTabs = [...tabs].sort((a, b) => (b.path || "").length - (a.path || "").length);
  const selectedPath = isSelectedFromArray(pathname, sortedTabs, pathPrefix);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Ul, null, tabs.map(({label, path = ""}, i) => {
    const pathComplete = getPath(path);
    return /* @__PURE__ */ React.createElement(Li, {
      key: i,
      path: pathComplete,
      isSelected: path === selectedPath,
      label
    });
  })), /* @__PURE__ */ React.createElement(Switch, null, sortedTabs.map(({path = "", Component}, i) => {
    const pathComplete = getPath(path);
    return /* @__PURE__ */ React.createElement(Route, {
      key: i,
      path: pathComplete,
      component: Component
    });
  })));
};
export default Navigation;
