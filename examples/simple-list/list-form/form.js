import React from "../../../_snowpack/pkg/react.js";
import * as Inputs from "../../../components/form/inputs.js";
import FormWrapper from "../../../lib/form/form-wrapper.js";
import Icon from "../../../components/icon.js";
const FormUI = ({
  form,
  setForm,
  loading,
  errors
}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Inputs.InputWrapper, {
    label: "Name",
    errors: errors["name"]
  }, /* @__PURE__ */ React.createElement(Inputs.Input, {
    value: form.name,
    onChange: (name) => setForm({...form, name}),
    disabled: loading,
    placeholder: "Name",
    errors: errors["name"]
  })), /* @__PURE__ */ React.createElement(Inputs.InputWrapper, {
    label: "Description",
    errors: errors["description"]
  }, /* @__PURE__ */ React.createElement(Inputs.Input, {
    value: form.description,
    onChange: (description) => setForm({...form, description}),
    disabled: loading,
    placeholder: "Description",
    errors: errors["description"]
  })), /* @__PURE__ */ React.createElement("button", {
    disabled: loading,
    className: "btn btn-outline-primary",
    type: "submit"
  }, /* @__PURE__ */ React.createElement(Icon, {
    name: "plus"
  }), " Add"));
};
const shape = {name: {}, description: {}};
const apiCall = async (a) => {
  console.log("calling API");
  return Promise.resolve(Math.random() * 100);
};
const Form = FormWrapper(FormUI, shape, apiCall);
export default Form;
