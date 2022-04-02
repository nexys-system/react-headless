import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import {menus} from "../links.js";
import {title} from "../config.js";
const style = {
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  boxShadow: "0 .25rem .75rem rgba(0, 0, 0, .05)"
};
export default () => /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
  style,
  className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
}, /* @__PURE__ */ React.createElement("h5", {
  className: "my-0 mr-md-auto font-weight-normal"
}, /* @__PURE__ */ React.createElement(Link, {
  className: "nav-link",
  to: "/"
}, title)), /* @__PURE__ */ React.createElement("ul", {
  className: "nav justify-content-end"
}, menus.map((menu, i) => /* @__PURE__ */ React.createElement("li", {
  className: "nav-item",
  key: i
}, /* @__PURE__ */ React.createElement(Link, {
  className: "nav-link",
  key: i,
  to: menu.link
}, menu.name))))));
