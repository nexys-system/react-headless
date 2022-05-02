import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {getClassName} from "./utils.js";
export const Li = ({label, onClick, isSelected}) => /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement("a", {
  className: getClassName(isSelected),
  onClick,
  style: {cursor: "pointer"}
}, label));
export const LiNav = ({label, path, isSelected}) => /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement(Link, {
  to: path,
  className: getClassName(isSelected)
}, label));
export const Ul = ({children}) => /* @__PURE__ */ React.createElement("ul", {
  className: "nav nav-pills"
}, children);
