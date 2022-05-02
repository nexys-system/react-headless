import React from "../../_snowpack/pkg/react.js";
import PreLayout from "../../components/layout/index.js";
import PreLayoutNoRouter from "../../components/layout/no-router.js";
import Navs from "../../components/tabs/nav.js";
import links from "../../links.js";
import def from "./def.js";
const Layout = PreLayout(def);
const LayoutNoRouter = PreLayoutNoRouter(def);
export default () => {
  const data = {firstName: "Maria"};
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Layout Showcase"), /* @__PURE__ */ React.createElement(Navs, {
    tabs: [
      {
        label: "With Router",
        path: "/with-router",
        Component: () => /* @__PURE__ */ React.createElement(Layout, {
          data
        })
      },
      {
        label: "No Router",
        path: "/no-router",
        Component: () => /* @__PURE__ */ React.createElement(LayoutNoRouter, {
          data
        })
      }
    ],
    pathPrefix: links.layout.link
  }));
};
