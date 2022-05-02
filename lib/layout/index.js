import React from "../../_snowpack/pkg/react.js";
import {Redirect} from "../../_snowpack/pkg/react-router-dom.js";
import CardsWithTabsHeadless from "./cards-w-tabs.js";
import CardsWithNavsHeadless from "./cards-w-nav.js";
const Layout = ({
  Card,
  Tabs,
  Navs,
  Header,
  Col,
  Row,
  BackBtn
}) => {
  return ({
    cards,
    title,
    description,
    backRedirect,
    pathPrefix = ""
  }) => ({data: dataIn}) => {
    const CardsWithTabs = Navs ? CardsWithNavsHeadless({Card, Navs, Col, Row, pathPrefix}) : Tabs ? CardsWithTabsHeadless({Card, Tabs, Col, Row}) : null;
    if (CardsWithTabs === null) {
      throw Error("either nav or tab must be defined");
    }
    const [redirect, setRedirect] = React.useState();
    const [data, setData] = React.useState(dataIn);
    if (redirect) {
      return /* @__PURE__ */ React.createElement(Redirect, {
        to: redirect
      });
    }
    if (Array.isArray(cards)) {
      throw Error("not supported yet");
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
