import React from "../_snowpack/pkg/react.js";
import LoadDataAsync from "../components/load-data-async.js";
import View from "../components/view.js";
import {delay} from "./utils.js";
const data = {firstName: "John", lastName: "Doe"};
const getData = async () => {
  await delay();
  return data;
};
const UI = ({data: data2}) => /* @__PURE__ */ React.createElement(View, {
  data: data2,
  structure: [
    {label: "First Name", value: "firstName"},
    {label: "Last Name", value: "lastName"}
  ]
});
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Load Data async"), /* @__PURE__ */ React.createElement(LoadDataAsync, {
    getData,
    Component: UI
  }));
};