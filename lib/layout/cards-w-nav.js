import React from "../../_snowpack/pkg/react.js";
import CardsHeadless from "./cards.js";
import {toPath} from "./utils.js";
const CardsWithNav = ({
  Card,
  Navs,
  Col,
  Row,
  pathPrefix
}) => {
  const Cards = CardsHeadless(Card, Col, Row);
  return ({
    cards,
    data,
    setData
  }) => {
    const arr = Object.entries(cards);
    const tabsNav = arr.map(([tabName, card], i) => {
      const Component = () => /* @__PURE__ */ React.createElement(Cards, {
        cards: card,
        data,
        setData
      });
      const label = tabName;
      const path = i == 0 ? "" : toPath(tabName);
      return {
        label,
        path,
        Component
      };
    });
    return /* @__PURE__ */ React.createElement(Navs, {
      tabs: tabsNav,
      pathPrefix
    });
  };
};
export default CardsWithNav;
