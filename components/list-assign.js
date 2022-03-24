import React from "../_snowpack/pkg/react.js";
import {Checkbox} from "./form/inputs.js";
import ListAssign from "../lib/list-assign.js";
const Loader = ({isLoading}) => {
  if (isLoading !== true) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "is being updated"));
};
const ListWrapper = ({children}) => /* @__PURE__ */ React.createElement("ul", null, children);
const ListUnitUI = ({isChecked, label, isLoading, onChange}) => /* @__PURE__ */ React.createElement("li", {
  role: void 0
}, /* @__PURE__ */ React.createElement(Checkbox, {
  value: isChecked,
  onChange
}), " ", label, /* @__PURE__ */ React.createElement(Loader, {
  isLoading
}));
export default ListAssign(ListWrapper, ListUnitUI);
