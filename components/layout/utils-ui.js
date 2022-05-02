import React from "../../_snowpack/pkg/react.js";
export const Header = ({title, description}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("p", null, description));
export const Row = ({children}) => /* @__PURE__ */ React.createElement("div", {
  className: "row"
}, children);
export const Col = ({children, width}) => /* @__PURE__ */ React.createElement("div", {
  className: "col-md-" + width
}, children);
export const BackBtn = ({onClick}) => /* @__PURE__ */ React.createElement("div", {
  className: "float-right"
}, /* @__PURE__ */ React.createElement("button", {
  onClick,
  type: "button",
  className: " btn-sm btn btn-secondary"
}, "Back"));
