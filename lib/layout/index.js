import React from "../../_snowpack/pkg/react.js";
import {Redirect} from "../../_snowpack/pkg/react-router-dom.js";
import CardsWithTabsHeadless from "./cards-w-tabs.js";
const Layout = (Card, Tabs, Header, Col, Row, BackBtn) => {
  const CardsWithTabs = CardsWithTabsHeadless(Card, Tabs, Col, Row);
  return ({cards, title, description, backRedirect}) => ({data: dataIn}) => {
    const [redirect, setRedirect] = React.useState();
    const [data, setData] = React.useState(dataIn);
    if (redirect) {
      return /* @__PURE__ */ React.createElement(Redirect, {
        to: redirect
      });
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
      title,
      description
    }), /* @__PURE__ */ React.createElement(CardsWithTabs, {
      cards,
      data,
      setData
    }), backRedirect && /* @__PURE__ */ React.createElement(BackBtn, {
      onClick: () => setRedirect(backRedirect)
    }));
  };
};
export default Layout;
