import React from "../../_snowpack/pkg/react.js";
import List from "../../components/table/index.js";
const initialData = [
  {name: "Doe", firstName: "John"},
  {name: "Doe", firstName: "Jane"}
];
const Simple = () => {
  const [data, setData] = React.useState(initialData);
  const handleClick = () => {
    setData([]);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "List with outer filter"), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: handleClick
  }, "Click me"), /* @__PURE__ */ React.createElement(List, {
    config: {search: true},
    data,
    def: [
      {name: "name", label: "Name"},
      {name: "firstName", label: "First Name"}
    ]
  }));
};
export default Simple;
