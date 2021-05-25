import React from "./_snowpack/pkg/react.js";
import List from "./list/index.js";
import {ghUrl} from "./config.js";
const Default = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(List, {
  data: [{name: "Doe", firstName: "John"}],
  def: [
    {name: "name", label: "Name"},
    {name: "firstName", label: "First Name"}
  ]
}), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: ghUrl
}, "Source"), " available under MIT license."));
export default Default;
