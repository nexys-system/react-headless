import React from "../../_snowpack/pkg/react.js";
import * as Validation from "../../_snowpack/pkg/@nexys/validation.js";
import {isA} from "./utils.js";
const FormWrapper = (FormUI, shape, asyncCall, onSuccess) => ({
  data = {options: {}}
}) => {
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("a");
    const validation = Validation.Main.checkObject(form, shape);
    setErrors(validation);
    if (isA(form, validation)) {
      setLoading(true);
      const out = asyncCall && await asyncCall(form);
      setLoading(false);
      onSuccess && onSuccess(form, out);
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(FormUI, {
    loading,
    errors,
    form,
    setForm,
    options: data.options
  }));
};
export default FormWrapper;
