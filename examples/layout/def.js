import React from "../../_snowpack/pkg/react.js";
import links from "../../links.js";
const layout = {
  title: "My Layout",
  description: "A description here",
  backRedirect: "/",
  pathPrefix: links.layout.link + "/with-router",
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
export default layout;
