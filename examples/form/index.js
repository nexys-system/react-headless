import React from "../../_snowpack/pkg/react.js";
import FormWrapper from "../../lib/form/form-wrapper.js";
import {delay} from "../utils.js";
import FormUI from "./ui.js";
const shape = {firstName: {}, lastName: {optional: true}};
const apiCall = async () => {
  await delay();
  return {id: 2};
};
const onSuccess = (a, b) => alert("form sent successfully" + b.id + " " + JSON.stringify(a));
const Form = FormWrapper(FormUI, shape, apiCall, onSuccess);
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Form"), /* @__PURE__ */ React.createElement(Form, null));
