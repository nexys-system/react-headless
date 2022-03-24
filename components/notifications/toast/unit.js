import React from "../../../_snowpack/pkg/react.js";
const ToastUnit = ({
  idx,
  title,
  timestring,
  content,
  onDismiss
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "toast",
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: {opacity: 1}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "toast-header"
  }, /* @__PURE__ */ React.createElement("strong", {
    className: "mr-auto"
  }, title), /* @__PURE__ */ React.createElement("small", {
    className: "text-muted"
  }, timestring), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "ml-2 mb-1 close",
    "data-dismiss": "toast",
    "aria-label": "Close",
    onClick: () => onDismiss(idx)
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "×"))), /* @__PURE__ */ React.createElement("div", {
    className: "toast-body"
  }, content));
};
export default ToastUnit;
