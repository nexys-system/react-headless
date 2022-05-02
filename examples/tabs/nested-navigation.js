import React from "../../_snowpack/pkg/react.js";
import Nav from "../../components/tabs/nav.js";
import links from "../../links.js";
const tabsInside = [
  {
    label: "Default nested",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "Default")
  },
  {
    label: "One One",
    path: "/one",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "One One ", /* @__PURE__ */ React.createElement("code", null, window.location.pathname))
  },
  {
    label: "One Two",
    path: "/two",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "One Two ", window.location.pathname)
  }
];
const {link: tabUrlPrefix} = links.tabs;
const tabs = [
  {
    label: "Default",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "Default")
  },
  {
    label: "One",
    path: "/one",
    Component: () => /* @__PURE__ */ React.createElement(Nav, {
      tabs: tabsInside,
      pathPrefix: tabUrlPrefix + "/one"
    })
  },
  {
    label: "Two",
    path: "/two",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "Two ", window.location.pathname)
  }
];
export default () => /* @__PURE__ */ React.createElement(Nav, {
  tabs,
  pathPrefix: tabUrlPrefix
});
