import React from "../../../_snowpack/pkg/react.js";
import Icon from "../../../components/icon.js";
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
const List = ({
  data,
  onRemove
}) => {
  if (data.length === 0) {
    return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Nothing was found"));
  }
  return /* @__PURE__ */ React.createElement("ul", {
    className: "list-group list-group"
  }, data.map((d, i) => /* @__PURE__ */ React.createElement(ListItem, {
    key: i,
    title: d.title,
    right: /* @__PURE__ */ React.createElement("span", {
      onClick: () => onRemove(d.id),
      style: {cursor: "pointer"},
      className: "badge bg-danger rounded-pill"
    }, /* @__PURE__ */ React.createElement(Icon, {
      name: "trash"
    }))
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, d.subtitle))));
};
export default List;
