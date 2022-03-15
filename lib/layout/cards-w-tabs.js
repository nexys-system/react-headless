import React from "../../_snowpack/pkg/react.js";
import CardsHeadless from "./cards.js";
const CardsWithTabs = (Card, Tabs, Col, Row) => {
  const Cards = CardsHeadless(Card, Col, Row);
  return ({
    cards,
    data,
    setData
  }) => {
    if (Array.isArray(cards)) {
      return /* @__PURE__ */ React.createElement(Cards, {
        cards,
        data,
        setData
      });
    }
    const [tabIndex, setTabIndex] = React.useState(0);
    const arr = Object.entries(cards);
    const tabs = arr.map(([label]) => ({label}));
    const cardsTab = arr[tabIndex][1];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tabs, {
      tabs,
      tabIndex,
      setTabIndex
    }), /* @__PURE__ */ React.createElement(Cards, {
      cards: cardsTab,
      data,
      setData
    }));
  };
};
export default CardsWithTabs;
