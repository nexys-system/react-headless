import React from "../_snowpack/pkg/react.js";
import ViewGeneric from "../lib/view.js";
import Card from "./card.js";
const Layout = ({children}) => /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(React.Fragment, null, children));
const Row = (p) => /* @__PURE__ */ React.createElement("li", null, p.label, ": ", p.value);
const View = ViewGeneric(Row, Layout);
export default View;
