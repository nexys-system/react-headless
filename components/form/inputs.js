import React from "../../_snowpack/pkg/react.js";
export const getClassName = (errors) => {
  const isInvalid = !!errors;
  const classes = ["form-control"];
  if (isInvalid) {
    classes.push("is-invalid");
  }
  return classes.join(" ");
};
export const InputWrapper = ({
  label,
  children,
  errors
}) => /* @__PURE__ */ React.createElement("div", {
  className: "mb-3"
}, /* @__PURE__ */ React.createElement("label", {
  className: "form-label"
}, label), children, errors && /* @__PURE__ */ React.createElement("div", {
  id: "validationServer03Feedback",
  className: "invalid-feedback"
}, errors[0]));
export const Input = ({
  onChange,
  errors,
  disabled,
  value,
  placeholder
}) => /* @__PURE__ */ React.createElement("input", {
  className: getClassName(errors),
  type: "text",
  value: value || "",
  onChange: (v) => onChange(v.target.value),
  disabled,
  placeholder
});
export const Textarea = ({
  onChange,
  errors,
  disabled,
  value
}) => /* @__PURE__ */ React.createElement("textarea", {
  className: getClassName(errors),
  value,
  onChange: (v) => onChange(v.target.value),
  disabled
});
export const SelectEnum = ({
  onChange,
  options,
  value,
  errors,
  disabled
}) => /* @__PURE__ */ React.createElement("select", {
  className: getClassName(errors),
  onChange: (v) => onChange(Number(v.target.value)),
  disabled
}, /* @__PURE__ */ React.createElement("option", null), options.map(({id, name}) => /* @__PURE__ */ React.createElement("option", {
  selected: value === id,
  value: id
}, name)));
export const Checkbox = ({value, onChange}) => /* @__PURE__ */ React.createElement("input", {
  checked: value,
  type: "checkbox",
  onChange: (v) => onChange(Boolean(v.target.value))
});
