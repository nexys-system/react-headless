import React from "../../_snowpack/pkg/react.js";
import Tabs from "../../components/tabs/index.js";
import TabsWithContent from "../../components/tabs/w-content.js";
import Nav from "./navigation.js";
import NestedNavigation from "./nested-navigation.js";
const tabs = [{label: "one"}, {label: "two"}];
export default () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Tabs"), /* @__PURE__ */ React.createElement("h2", null, "Simple Tabs"), /* @__PURE__ */ React.createElement(Tabs, {
    tabs,
    setTabIndex,
    tabIndex
  }), /* @__PURE__ */ React.createElement("h2", null, "Tabs With Content"), /* @__PURE__ */ React.createElement(TabsWithContent, {
    tabs: [
      {label: "one", Content: () => /* @__PURE__ */ React.createElement("p", null, "One")},
      {label: "two", Content: () => /* @__PURE__ */ React.createElement("p", null, "Two")}
    ]
  }), /* @__PURE__ */ React.createElement("h2", null, "Navigation"), /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement("h2", null, "Nested Navigation"), /* @__PURE__ */ React.createElement(NestedNavigation, null));
};
