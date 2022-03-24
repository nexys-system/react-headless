import React from "./_snowpack/pkg/react.js";
import {Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import Public from "./public.js";
import Layout from "./layout/index.js";
import List from "./examples/list.js";
import LayoutComponent from "./examples/layout.js";
import View from "./examples/view.js";
import Card from "./examples/card.js";
import Form from "./examples/form/index.js";
import LoadDataAsync from "./examples/load-data.js";
import {links} from "./links.js";
const Routes = () => /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  path: links.list.link,
  component: List
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.layout.link,
  component: LayoutComponent
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.view.link,
  component: View
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.card.link,
  component: Card
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.form.link,
  component: Form
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.loadDataAsync.link,
  component: LoadDataAsync
}), /* @__PURE__ */ React.createElement(Route, {
  component: Public
})));
export default Routes;
