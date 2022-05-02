import React from "../../_snowpack/pkg/react.js";
import CardsWithTabsHeadless from "./cards-w-tabs.js";
import CardsWithNavsHeadless from "./cards-w-nav.js";
import CardsHeadless from "./cards.js";
const BodyHeadless = ({Card, Col, Row, Tabs, Navs}) => ({
  cards,
  pathPrefix,
  data,
  setData
}) => {
  if (Array.isArray(cards)) {
    const Cards = CardsHeadless(Card, Col, Row);
    return /* @__PURE__ */ React.createElement(Cards, {
      cards,
      data,
      setData
    });
  }
  const CardsWithTabs = Navs ? CardsWithNavsHeadless({Card, Navs, Col, Row, pathPrefix}) : Tabs ? CardsWithTabsHeadless({Card, Tabs, Col, Row}) : null;
  if (CardsWithTabs === null) {
    throw Error("either nav or tab must be defined");
  }
  return /* @__PURE__ */ React.createElement(CardsWithTabs, {
    cards,
    data,
    setData
  });
};
export default BodyHeadless;
