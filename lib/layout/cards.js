import React from "../../_snowpack/pkg/react.js";
const CardsHeadless = (Card, Col, Row) => ({cards, data, setData}) => /* @__PURE__ */ React.createElement(Row, null, cards.map(({width = 6, title, subtitle, Component}, i) => /* @__PURE__ */ React.createElement(Col, {
  key: i,
  width
}, /* @__PURE__ */ React.createElement(Card, {
  title,
  subtitle
}, /* @__PURE__ */ React.createElement(Component, {
  data,
  setData
})))));
export default CardsHeadless;
