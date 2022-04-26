import React from "../../_snowpack/pkg/react.js";
import FormUIGenerate from "../../lib/form/ui-generator.js";
import * as UI from "../../components/form/inputs.js";
import {FormUIType} from "../../lib/form/type.js";
const def = [
  {name: "firstName", uiType: FormUIType.Text, optional: false},
  {name: "lastName", uiType: FormUIType.Text, optional: true}
];
const FormUIGenerated = FormUIGenerate(UI.InputWrapper, UI.InputGeneric, () => /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-primary",
  type: "submit"
}, "Send"))(def);
export default FormUIGenerated;
