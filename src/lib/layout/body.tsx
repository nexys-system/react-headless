import React from 'react';

import * as T from './type';
import CardsWithTabsHeadless from './cards-w-tabs';
import CardsWithNavsHeadless from './cards-w-nav';

import CardsHeadless from './cards';

const BodyHeadless =
  <A,>({ Card, Col, Row, Tabs, Navs }: T.BodyOuterProps) =>
  ({
    cards,
    pathPrefix,
    data,
    setData
  }: {
    cards: T.Card<A>[] | T.CardsWithTab<A>;
    pathPrefix: string;
    data: A;
    setData: (a: A) => void;
  }): JSX.Element => {
    if (Array.isArray(cards)) {
      const Cards = CardsHeadless(Card, Col, Row);
      return <Cards cards={cards} data={data} setData={setData} />;
    }

    const CardsWithTabs = Navs
      ? CardsWithNavsHeadless({ Card, Navs, Col, Row, pathPrefix })
      : Tabs
      ? CardsWithTabsHeadless({ Card, Tabs, Col, Row })
      : null;

    if (CardsWithTabs === null) {
      throw Error('either nav or tab must be defined');
    }

    return <CardsWithTabs cards={cards} data={data} setData={setData} />;
  };

export default BodyHeadless;
