import React from 'react';
import { Redirect } from 'react-router-dom';

import * as T from './type';
import CardsWithTabsHeadless from './cards-w-tabs';
import { CardProps, ColProps, HeaderProps, RowProps } from '../card';
import { TabProps } from '../tabs';

const Layout = (
  Card: (p: CardProps) => JSX.Element,
  Tabs: (p: TabProps) => JSX.Element,
  Header: (p: HeaderProps) => JSX.Element,
  Col: (p: ColProps) => JSX.Element,
  Row: (p: RowProps) => JSX.Element,
  BackBtn: (p: T.ButtonProps) => JSX.Element
) => {
  const CardsWithTabs = CardsWithTabsHeadless(Card, Tabs, Col, Row);

  return <A,>({ cards, title, description, backRedirect }: T.Layout<A>) =>
    ({ data: dataIn }: { data: A }): JSX.Element => {
      const [redirect, setRedirect] = React.useState<string | undefined>();
      const [data, setData] = React.useState<A>(dataIn);

      if (redirect) {
        return <Redirect to={redirect} />;
      }

      return (
        <>
          <Header title={title} description={description} />

          <CardsWithTabs cards={cards} data={data} setData={setData} />

          {backRedirect && (
            <BackBtn onClick={() => setRedirect(backRedirect)} />
          )}
        </>
      );
    };
};

export default Layout;
