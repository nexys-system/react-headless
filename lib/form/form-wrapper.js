import React from "../../_snowpack/pkg/react.js";
import * as Validation from "../../_snowpack/pkg/@nexys/validation.js";
import {isA} from "./utils.js";
const FormWrapper = (FormUI, shape, asyncCall, onSuccess, onErrors) => ({
  data = {options: {}}
}) => {
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = Validation.Main.checkObject(form, shape);
    setErrors(validation);
    if (isA(form, validation)) {
      setLoading(true);
      try {
        const out = asyncCall && await asyncCall(form);
        setLoading(false);
        onSuccess && onSuccess(form, out);
      } catch (err) {
        if (onErrors) {
          const {errors: errors2} = onErrors(err, form);
          if (errors2) {
            setErrors(errors2);
            setLoading(false);
          }
        }
      }
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
