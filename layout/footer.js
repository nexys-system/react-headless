import React from "../_snowpack/pkg/react.js";
import {github, sha} from "../config.js";
export default () => /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
  href: github.sha
}, sha.slice(0, 15))))));
