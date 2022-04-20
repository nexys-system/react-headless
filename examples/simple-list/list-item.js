import React from "../../_snowpack/pkg/react.js";
const ListItem = ({
  title,
  children,
  right
}) => {
  return /* @__PURE__ */ React.createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ms-2 me-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fw-bold"
  }, title), children), right);
};
export default ListItem;
