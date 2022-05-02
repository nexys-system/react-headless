import React from "../../_snowpack/pkg/react.js";
const PreTabsWithContent = (Tabs) => ({tabs}) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const {Content} = tabs[tabIndex];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tabs, {
    tabs,
    setTabIndex,
    tabIndex
  }), /* @__PURE__ */ React.createElement(Content, null));
};
export default PreTabsWithContent;
