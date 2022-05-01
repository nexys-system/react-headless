import React from 'react';

import { CardProps, ColProps, RowProps } from '../card';
import { NavigationProps, TabNavigationProps } from '../tabs/type';

import * as T from './type';
import CardsHeadless from './cards';
import { toPath } from './utils';

const CardsWithNav = (
  Card: (p: CardProps) => JSX.Element,
  Tabs: (p: NavigationProps) => JSX.Element,
  Col: (p: ColProps) => JSX.Element,
  Row: (p: RowProps) => JSX.Element
) => {
  const Cards = CardsHeadless(Card, Col, Row);

  return <A,>({
    cards,
    data,
    setData
  }: T.CardsWithNavProps<A>): JSX.Element => {
    const arr: [string, T.Card<A>[]][] = Object.entries(cards);
    const tabsNav: TabNavigationProps[] = arr.map(([tabName, card]) => {
      const Component = () => (
        <Cards cards={card} data={data} setData={setData} />
      );

      const label = tabName;
      const path = toPath(tabName);

      return {
        label,
        path,
        Component
      };
    });

    return <Tabs tabs={tabsNav} />;
  };
};

export default CardsWithNav;
