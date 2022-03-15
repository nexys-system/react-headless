import React from "../_snowpack/pkg/react.js";
import Layout from "../lib/layout/index.js";
const layout = {
  title: "my layout",
  description: "a description here",
  backRedirect: "/",
  cards: {
    tab1: [
      {title: "first", Component: () => /* @__PURE__ */ React.createElement("p", null, "Hello")},
      {title: "second", Component: ({data}) => /* @__PURE__ */ React.createElement("p", null, data.firstName)},
      {
        title: "third",
        Component: ({data, setData}) => {
          return /* @__PURE__ */ React.createElement("p", null, data.firstName, " here", " ", /* @__PURE__ */ React.createElement("button", {
            className: "btn btn-sm btn-primary",
            onClick: () => setData({firstName: "Michael"})
          }, "Change"));
        }
      }
    ],
    "Tab with space": [
      {title: "fourth", Component: () => /* @__PURE__ */ React.createElement("p", null, "Hello")},
      {
        title: "third",
        Component: ({data, setData}) => {
          return /* @__PURE__ */ React.createElement("p", null, data.firstName, " here2", " ", /* @__PURE__ */ React.createElement("button", {
            className: "btn btn-sm btn-primary",
            onClick: () => setData({firstName: "John"})
          }, "Change"));
        }
      }
    ]
  }
};
const L = Layout(layout);
export default () => {
  const data = {firstName: "Maria"};
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(L, {
    data
  }));
};
