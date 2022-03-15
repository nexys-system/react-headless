import React from "../_snowpack/pkg/react.js";
import TabsGeneric from "../lib/tabs.js";
const getClassName = (isSelected) => {
  const classNames = ["nav-link"];
  if (isSelected) {
    classNames.push("active");
  }
  return classNames.join(" ");
};
const Li = ({
  label,
  onClick,
  isSelected
}) => /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement("a", {
  className: getClassName(isSelected),
  onClick,
  style: {cursor: "pointer"}
}, label));
const Ul = ({children}) => /* @__PURE__ */ React.createElement("ul", {
  className: "nav nav-pills"
}, children);
const Tabs = TabsGeneric(Ul, Li);
export default Tabs;
