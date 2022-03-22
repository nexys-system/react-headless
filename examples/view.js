import React from "../_snowpack/pkg/react.js";
import ViewGeneric from "../lib/view.js";
import Card from "../components/card.js";
const Layout = ({children}) => /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(React.Fragment, null, children));
const Row = (p) => /* @__PURE__ */ React.createElement("li", null, p.label, ": ", p.value);
const View = ViewGeneric(Layout, Row);
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
