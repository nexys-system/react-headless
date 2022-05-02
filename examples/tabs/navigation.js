import React from "../../_snowpack/pkg/react.js";
import Nav from "../../components/tabs/nav.js";
import links from "../../links.js";
const tabs = [
  {
    label: "One",
    path: "/simple/one",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "One ", /* @__PURE__ */ React.createElement("code", null, "path: ", window.location.pathname))
  },
  {
    label: "Two",
    path: "/simple/two",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "Two ", /* @__PURE__ */ React.createElement("code", null, "path: ", window.location.pathname))
  }
];
const {link: tabUrlPrefix} = links.tabs;
export default () => /* @__PURE__ */ React.createElement(Nav, {
  tabs,
  pathPrefix: tabUrlPrefix
});
