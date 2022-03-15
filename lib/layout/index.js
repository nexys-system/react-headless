import React from "../../_snowpack/pkg/react.js";
import {Redirect} from "../../_snowpack/pkg/react-router-dom.js";
import CardsWithTabs from "./cards-w-tabs.js";
const Layout = ({cards, title, description, backRedirect}) => ({data: dataIn}) => {
  const [redirect, setRedirect] = React.useState();
  const [data, setData] = React.useState(dataIn);
  if (redirect) {
    return /* @__PURE__ */ React.createElement(Redirect, {
      to: redirect
    });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("p", null, description), /* @__PURE__ */ React.createElement(CardsWithTabs, {
    cards,
    data,
    setData
  }), backRedirect && /* @__PURE__ */ React.createElement("div", {
    className: "float-right"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setRedirect(backRedirect),
    type: "button",
    className: " btn-sm btn btn-secondary"
  }, "Back")));
};
export default Layout;
