import React from "../_snowpack/pkg/react.js";
import List from "../components/list/index.js";
const data = [
  {name: "Doe", firstName: "John"},
  {name: "Doe", firstName: "Jane"}
];
export default () => /* @__PURE__ */ React.createElement(List, {
  config: {search: true},
  data,
  def: [
    {name: "name", label: "Name"},
    {name: "firstName", label: "First Name"}
  ]
});
