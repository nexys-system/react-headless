import React from "../../_snowpack/pkg/react.js";
import * as Inputs from "../../components/form/inputs.js";
const FormUI = ({
  form,
  setForm,
  loading,
  errors
}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Inputs.InputWrapper, {
    errors: errors["firstName"]
  }, /* @__PURE__ */ React.createElement(Inputs.Input, {
    value: form.firstName,
    onChange: (firstName) => setForm({...form, firstName}),
    disabled: loading,
    placeholder: "First Name",
    errors: errors["firstName"]
  })), /* @__PURE__ */ React.createElement(Inputs.InputWrapper, {
    errors: errors["lastName"]
  }, /* @__PURE__ */ React.createElement(Inputs.Input, {
    value: form.lastName,
    onChange: (lastName) => setForm({...form, lastName}),
    disabled: loading,
    placeholder: "Last Name",
    errors: errors["lastName"]
  })), /* @__PURE__ */ React.createElement("button", {
    disabled: loading,
    type: "submit",
    className: "btn btn-primary"
  }, "Send"));
};
export default FormUI;
