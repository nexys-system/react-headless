import React from "../_snowpack/pkg/react.js";
import ViewGeneric from "../lib/view.js";
import ToggleHeadless from "../lib/toggle/index.js";
import PreForm from "./form/generator.js";
const Row = (p) => /* @__PURE__ */ React.createElement("li", null, p.label, ": ", p.value);
const View = ViewGeneric(Row);
const LayoutView = ({setIsForm, children}) => /* @__PURE__ */ React.createElement(React.Fragment, null, children, /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-sm btn-secondary",
  onClick: () => setIsForm(true)
}, "edit"));
const LayoutForm = ({setIsForm, children}) => /* @__PURE__ */ React.createElement(React.Fragment, null, children, /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-sm btn-secondary",
  onClick: () => setIsForm(false)
}, "back"));
const PreToggle = (structure, Form) => ToggleHeadless(structure, Form, View, LayoutView, LayoutForm);
const toViewStructure = (def) => def.map((x) => ({
  label: x.label,
  value: x.render || x.name
}));
export const ToggleFromDef = (def, apiCall) => {
  const F = PreForm(def, apiCall);
  const structure = toViewStructure(def);
  return ToggleHeadless(structure, F, View, LayoutView, LayoutForm);
};
export default PreToggle;
