import React from "../../_snowpack/pkg/react.js";
const Cards = ({
  cards,
  data,
  setData
}) => /* @__PURE__ */ React.createElement("div", {
  className: "row"
}, cards.map(({width = 6, title, subtitle, Component}, i) => /* @__PURE__ */ React.createElement("div", {
  key: i,
  className: "col-md-" + width
}, /* @__PURE__ */ React.createElement("div", {
  className: "card"
}, /* @__PURE__ */ React.createElement("div", {
  className: "card-body"
}, title && /* @__PURE__ */ React.createElement("h5", {
  className: "card-title"
}, title), subtitle && /* @__PURE__ */ React.createElement("h6", {
  className: "card-subtitle mb-2 text-muted"
}, "Card subtitle"), /* @__PURE__ */ React.createElement(Component, {
  data,
  setData
}))))));
export default Cards;
