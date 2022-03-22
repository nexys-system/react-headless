import React from "./_snowpack/pkg/react.js";
import {Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import Public from "./public.js";
import Layout from "./layout/index.js";
import List from "./examples/list.js";
import LayoutComponent from "./examples/layout.js";
import View from "./examples/view.js";
const Routes = () => /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  path: "/list",
  component: List
}), /* @__PURE__ */ React.createElement(Route, {
  path: "/layout",
  component: LayoutComponent
}), /* @__PURE__ */ React.createElement(Route, {
  path: "/view",
  component: View
}), /* @__PURE__ */ React.createElement(Route, {
  component: Public
})));
export default Routes;
