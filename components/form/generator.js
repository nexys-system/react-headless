import React from "../../_snowpack/pkg/react.js";
import FormGenerated from "../../lib/form/generator/form.js";
import * as UI from "./inputs.js";
const p = {
  InputWrapper: UI.InputWrapper,
  InputGeneric: UI.InputGeneric,
  Button: () => /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Send")
};
export default FormGenerated(p);
