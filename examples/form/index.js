import React from "../../_snowpack/pkg/react.js";
import FormWrapper from "../../lib/form/form-wrapper.js";
import {delay} from "../utils.js";
import FormUI from "./ui.js";
const shape = {firstName: {}, lastName: {optional: true}};
const cartoonCharacters = ["mickey", "minnie", "donald", "popeye"];
const apiCall = async (data) => {
  await delay();
  if (cartoonCharacters.includes(data.firstName.toLowerCase())) {
    return Promise.reject({
      firstName: ["Cartoon character names are not allowed"]
    });
  }
  return {id: 2};
};
const onSuccess = (a, b) => alert("form sent successfully" + b.id + " " + JSON.stringify(a));
const Form = FormWrapper(FormUI, shape, apiCall, onSuccess, (errors) => ({errors}));
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Form"), /* @__PURE__ */ React.createElement("p", null, "Form demo.", " ", /* @__PURE__ */ React.createElement("small", null, "To simulate a form rejection insert one of the following first names:", " ", /* @__PURE__ */ React.createElement("code", null, JSON.stringify(cartoonCharacters)))), /* @__PURE__ */ React.createElement(Form, null));
