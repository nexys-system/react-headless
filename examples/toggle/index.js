import React from "../../_snowpack/pkg/react.js";
import FormWrapper from "../../lib/form/form-wrapper.js";
import {delay} from "../../lib/utils.js";
import FormUI from "../form/ui.js";
import PreToggle from "../../components/toggle.js";
const structure = [
  {label: "First Name", value: "firstName"},
  {label: "Last Name", value: "lastName"}
];
const apiCall = async () => {
  await delay();
  return {id: 2};
};
const shape = {firstName: {}, lastName: {optional: true}};
const Toggle = PreToggle(structure, FormWrapper(FormUI, shape, apiCall));
const data = {
  firstName: "John",
  lastName: "Doe"
};
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Toggle"), /* @__PURE__ */ React.createElement(Toggle, {
  data
}));
