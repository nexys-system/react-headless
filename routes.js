import React from "./_snowpack/pkg/react.js";
import {Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import Public from "./public.js";
import Layout from "./layout/index.js";
import List from "./examples/table/index.js";
import LayoutComponent from "./examples/layout/index.js";
import View from "./examples/view.js";
import Card from "./examples/card.js";
import Form from "./examples/form/index.js";
import LoadDataAsync from "./examples/load-data.js";
import Notifications from "./examples/notifications.js";
import Code from "./examples/code.js";
import ListAssign from "./examples/list-assign.js";
import Buttons from "./examples/buttons/index.js";
import Download from "./examples/downloads.js";
import SimpleList from "./examples/simple-list/index.js";
import Toggle from "./examples/toggle/index.js";
import Tabs from "./examples/tabs/index.js";
import FileUpload from "./examples/file-upload.js";
import Detail from "./examples/detail/index.js";
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
  path: links.notifications.link,
  component: Notifications
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.code.link,
  component: Code
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.listAssign.link,
  component: ListAssign
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.buttons.link,
  component: Buttons
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.download.link,
  component: Download
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.simpleList.link,
  component: SimpleList
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.toggle.link,
  component: Toggle
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.tabs.link,
  component: Tabs
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.fileUpload.link,
  component: FileUpload
}), /* @__PURE__ */ React.createElement(Route, {
  path: links.detail.link,
  component: Detail
}), /* @__PURE__ */ React.createElement(Route, {
  component: Public
})));
export default Routes;
