import React from "../../_snowpack/pkg/react.js";
import FormWrapper from "../../lib/form/form-wrapper.js";
import FormUI from "./ui.js";
const shape = {firstName: {}, lastName: {optional: true}};
const Form = FormWrapper(FormUI, shape, void 0, () => alert("form sent successfully"));
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Form"), /* @__PURE__ */ React.createElement(Form, null));
