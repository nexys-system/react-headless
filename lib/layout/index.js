import React from "../../_snowpack/pkg/react.js";
import {Redirect} from "../../_snowpack/pkg/react-router-dom.js";
import BodyHeadless from "./body.js";
const Layout = ({
  Card,
  Tabs,
  Navs,
  Header,
  Col,
  Row,
  BackBtn = () => /* @__PURE__ */ React.createElement(React.Fragment, null)
}) => {
  return ({
    cards,
    title,
    description,
    backRedirect,
    pathPrefix = ""
  }) => ({data: dataIn}) => {
    const Body = BodyHeadless({Card, Col, Row, Tabs, Navs});
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
    }), /* @__PURE__ */ React.createElement(Body, {
      pathPrefix,
      cards,
      data,
      setData
    }), backRedirect && /* @__PURE__ */ React.createElement(BackBtn, {
      onClick: () => setRedirect(backRedirect)
    }));
  };
};
export default Layout;
