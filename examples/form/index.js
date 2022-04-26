import React from "../../_snowpack/pkg/react.js";
import FormWrapper from "../../lib/form/form-wrapper.js";
import FormUI from "./ui.js";
import FormGenerated from "./generated.js";
import {apiCall, onSuccess, cartoonCharacters, shape} from "./utils.js";
const Form = FormWrapper(FormUI, shape, apiCall);
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Form"), /* @__PURE__ */ React.createElement("p", null, "Form demo. ", /* @__PURE__ */ React.createElement("small", null, "To simulate a form rejection insert one of the following first names:", " ", /* @__PURE__ */ React.createElement("code", null, JSON.stringify(cartoonCharacters)))), /* @__PURE__ */ React.createElement(Form, {
  onSuccess,
  onErrors: (errors) => ({errors})
}), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("h3", null, "Form Generated"), /* @__PURE__ */ React.createElement(FormGenerated, {
  onSuccess,
  onErrors: (errors) => ({errors})
}));
