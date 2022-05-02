import React from "../../_snowpack/pkg/react.js";
const TabsGeneric = (Ul, Li) => ({tabs, tabIndex = 0, setTabIndex}) => /* @__PURE__ */ React.createElement(Ul, null, tabs.map((tab, i) => /* @__PURE__ */ React.createElement(Li, {
  key: i,
  label: tab.label,
  isSelected: i === tabIndex,
  onClick: () => setTabIndex(i)
})));
export default TabsGeneric;
