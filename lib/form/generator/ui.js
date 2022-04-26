import React from "../../../_snowpack/pkg/react.js";
const FormUIGenerator = ({InputGeneric, InputWrapper, Button}) => (def) => ({form, setForm, loading, errors}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, def.map((item) => {
    const Input = InputGeneric(item.uiType);
    return /* @__PURE__ */ React.createElement(InputWrapper, {
      errors: errors[item.name]
    }, /* @__PURE__ */ React.createElement(Input, {
      value: form[item.name],
      onChange: (val) => setForm({...form, [item.name]: val}),
      disabled: loading,
      placeholder: item.label,
      errors: errors[item.name]
    }));
  }), /* @__PURE__ */ React.createElement(Button, null));
};
export default FormUIGenerator;
