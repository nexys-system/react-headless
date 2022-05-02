import React from "../../_snowpack/pkg/react.js";
import {delay} from "../../lib/utils.js";
import {ToggleFromDef} from "../../components/toggle.js";
import {FormUIType} from "../../lib/form/type.js";
const apiCall = async () => {
  await delay();
  return {id: 2};
};
const def = [
  {
    label: "First Name",
    name: "firstName",
    uiType: FormUIType.Text,
    optional: false
  },
  {
    label: "Last Name",
    name: "lastName",
    uiType: FormUIType.Text,
    optional: true
  }
];
const Toggle = ToggleFromDef(def, apiCall);
const data = {
  firstName: "John",
  lastName: "Doe"
};
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Toggle"), /* @__PURE__ */ React.createElement(Toggle, {
  data
}));
