import React from 'react';

import * as T from './type';
import CardsHeadless from './cards';
import { toPath } from './utils';
import { TabNavigationProps } from '../tabs/type';

const CardsWithNav = ({
  Card,
  Navs,
  Col,
  Row,
  pathPrefix
}: T.CardsWithNavOuterProps) => {
  const Cards = CardsHeadless(Card, Col, Row);

  return <A,>({
    cards,
    data,
    setData
  }: T.CardsWithNavProps<A>): JSX.Element => {
    const arr: [string, T.Card<A>[]][] = Object.entries(cards);
    const tabsNav: TabNavigationProps[] = arr.map(([tabName, card], i) => {
      const Component = () => (
        <Cards cards={card} data={data} setData={setData} />
      );

      const label = tabName;
      // special in case the tab is in first position (idx == 0), set the path to '' so it is selected by default
      const path = i == 0 ? '' : toPath(tabName);

      return {
        label,
        path,
        Component
      };
    });

    return <Navs tabs={tabsNav} pathPrefix={pathPrefix} />;
  };
};

export default CardsWithNav;
