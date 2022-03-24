import React from "../_snowpack/pkg/react.js";
import View from "../components/view.js";
const data = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com"
};
const structure = [
  {label: "First Name", value: "firstName"},
  {label: "Last Name", value: "lastName"},
  {
    label: "Email",
    value: (x) => /* @__PURE__ */ React.createElement("a", {
      href: "mailto:" + x.email
    }, /* @__PURE__ */ React.createElement("code", null, x.email))
  }
];
export default () => /* @__PURE__ */ React.createElement(View, {
  data,
  structure
});
