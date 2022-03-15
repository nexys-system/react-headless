import React from "./_snowpack/pkg/react.js";
import {Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import Public from "./public.js";
import Layout from "./layout/index.js";
import L3 from "./components/layout.js";
const Routes = () => /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  path: "/layout",
  component: L3
}), /* @__PURE__ */ React.createElement(Route, {
  component: Public
})));
export default Routes;
