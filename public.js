import React from "./_snowpack/pkg/react.js";
import {ghUrl} from "./config.js";
import * as Code from "./components/code/index.js";
const badges = [
  [
    "https://badge.fury.io/js/%40nexys%2Fheadless.svg",
    "https://www.npmjs.com/package/@nexys/headless"
  ],
  [
    "https://img.shields.io/npm/v/@nexys/headless.svg",
    "https://www.npmjs.com/package/@nexys/headless"
  ],
  [
    "https://github.com/nexys-system/react-headless/actions/workflows/publish.yml/badge.svg",
    "https://github.com/nexys-system/react-headless/actions/workflows/publish.yml"
  ],
  [
    "https://github.com/nexys-system/react-headless/actions/workflows/deploy.yml/badge.svg",
    "https://github.com/nexys-system/react-headless/actions/workflows/deploy.yml"
  ]
];
export default () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "React Headless Components"), /* @__PURE__ */ React.createElement("h3", null, "Get Started"), /* @__PURE__ */ React.createElement(Code.Statement, {
  code: "yarn add @nexys/headless",
  copyToClipboard: true
}), /* @__PURE__ */ React.createElement("h3", null, "Resources"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: ghUrl
}, "Source"), " available under MIT license."), /* @__PURE__ */ React.createElement("ul", {
  className: "flex items-stretch "
}, badges.map((badge, i) => /* @__PURE__ */ React.createElement("li", {
  key: i,
  className: "p-1"
}, /* @__PURE__ */ React.createElement("img", {
  src: badge[0]
})))));
