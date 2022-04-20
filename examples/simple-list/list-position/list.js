import React from "../../../_snowpack/pkg/react.js";
import Icon from "../../../components/icon.js";
import ListItem from "../list-item.js";
const List = ({
  data,
  onMove
}) => {
  const l = data.length;
  if (l === 0) {
    return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Nothing was found"));
  }
  return /* @__PURE__ */ React.createElement("ul", {
    className: "list-group list-group"
  }, data.map((d, i) => /* @__PURE__ */ React.createElement(ListItem, {
    key: i,
    title: d.title,
    right: /* @__PURE__ */ React.createElement(React.Fragment, null, i > 0 && /* @__PURE__ */ React.createElement("span", {
      onClick: () => onMove(d.id, -1),
      style: {cursor: "pointer"},
      className: "badge bg-success rounded-pill"
    }, /* @__PURE__ */ React.createElement(Icon, {
      name: "arrow-up"
    })), " ", i < l - 1 && /* @__PURE__ */ React.createElement("span", {
      onClick: () => onMove(d.id, 1),
      style: {cursor: "pointer"},
      className: "badge bg-success rounded-pill"
    }, /* @__PURE__ */ React.createElement(Icon, {
      name: "arrow-down"
    })))
  })));
};
export default List;
