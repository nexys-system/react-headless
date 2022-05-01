import React from 'react';

import { CardProps, ColProps, RowProps } from '../card';
import { TabProps } from '../tabs/type';

import CardsHeadless from './cards';
import * as T from './type';

const CardsWithTabs = (
  Card: (p: CardProps) => JSX.Element,
  Tabs: (p: TabProps) => JSX.Element,
  Col: (p: ColProps) => JSX.Element,
  Row: (p: RowProps) => JSX.Element
) => {
  const Cards = CardsHeadless(Card, Col, Row);

  return <A,>({
    cards,
    data,
    setData
  }: {
    cards: T.Card<A>[] | T.CardsWithTab<A>;
    data: A;
    setData: (a: A) => void;
  }): JSX.Element => {
    if (Array.isArray(cards)) {
      return <Cards cards={cards} data={data} setData={setData} />;
    }

    const [tabIndex, setTabIndex] = React.useState<number>(0);
    const arr: [string, T.Card<A>[]][] = Object.entries(cards);
    const tabs: { label: string }[] = arr.map(([label]) => ({ label }));
    const cardsTab = arr[tabIndex][1];

    return (
      <>
        <Tabs tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
        <Cards cards={cardsTab} data={data} setData={setData} />
      </>
    );
  };
};

export default CardsWithTabs;
