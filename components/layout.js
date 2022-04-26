import React from "../_snowpack/pkg/react.js";
import LayoutHeadless from "../lib/layout/index.js";
import Card from "./card.js";
import Tabs from "./tabs.js";
const Header = ({title, description}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("p", null, description));
const Row = ({children}) => /* @__PURE__ */ React.createElement("div", {
  className: "row"
}, children);
const Col = ({children, width}) => /* @__PURE__ */ React.createElement("div", {
  className: "col-md-" + width
}, children);
const BackBtn = ({onClick}) => /* @__PURE__ */ React.createElement("div", {
  className: "float-right"
}, /* @__PURE__ */ React.createElement("button", {
  onClick,
  type: "button",
  className: " btn-sm btn btn-secondary"
}, "Back"));
export const Layout = LayoutHeadless(Card, Tabs, Header, Col, Row, BackBtn);
export default Layout;
