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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "input-group mb-3"
  }, /* @__PURE__ */ React.createElement(Inputs.Input, {
    value: form.name,
    onChange: (name) => setForm({...form, name}),
    disabled: loading,
    placeholder: "Name",
    errors: errors["name"]
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: loading || form.name === "" || !form.name,
    className: "btn btn-outline-primary",
    type: "button",
    id: "button-addon1"
  }, /* @__PURE__ */ React.createElement(Icon, {
    name: "plus"
  }), " Add")));
};
const shape = {name: {}};
const apiCall = async (a) => Promise.resolve(Math.random() * 100);
const Form = FormWrapper(FormUI, shape, apiCall, {
  resetAfterSubmit: true
});
export default Form;
