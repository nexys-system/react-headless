import React from "../_snowpack/pkg/react.js";
import {Statement} from "../components/code/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Code"), /* @__PURE__ */ React.createElement("p", null, "Formatted code extract"), /* @__PURE__ */ React.createElement(Statement, {
    code: "yarn add @nexys/tailwind-react-ui"
  }), /* @__PURE__ */ React.createElement("p", null, "with copy"), /* @__PURE__ */ React.createElement(Statement, {
    code: "yarn add @nexys/tailwind-react-ui",
    copyToClipboard: true
  }), /* @__PURE__ */ React.createElement("br", null));
};
